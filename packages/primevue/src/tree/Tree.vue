<template>
    <div :class="cx('root')" @dragover="onDragOver" @dragenter="onDragEnter" @dragleave="onDragLeave" @drop="onDrop" :data-p="containerDataP" v-bind="ptmi('root')">
        <transition name="p-overlay-mask">
            <div v-if="loading && loadingMode === 'mask'" :class="cx('mask')" v-bind="ptm('mask')">
                <slot name="loadingicon" :class="cx('loadingIcon')">
                    <i v-if="loadingIcon" :class="[cx('loadingIcon'), 'pi-spin', loadingIcon]" v-bind="ptm('loadingIcon')" />
                    <SpinnerIcon v-else spin :class="cx('loadingIcon')" v-bind="ptm('loadingIcon')" />
                </slot>
            </div>
        </transition>
        <IconField v-if="filter" :unstyled="unstyled" :pt="{ ...ptm('pcFilter'), ...ptm('pcFilterContainer') }" :class="cx('pcFilterContainer')">
            <InputText v-model="filterValue" autocomplete="off" :class="cx('pcFilterInput')" :placeholder="filterPlaceholder" :unstyled="unstyled" @keyup="onFilterKeyup" :pt="ptm('pcFilterInput')" />
            <InputIcon :unstyled="unstyled" :pt="ptm('pcFilterIconContainer')">
                <!--TODO: searchicon deprecated since v4.0-->
                <slot :name="$slots.filtericon ? 'filtericon' : 'searchicon'" :class="cx('filterIcon')">
                    <SearchIcon :class="cx('filterIcon')" v-bind="ptm('filterIcon')" />
                </slot>
            </InputIcon>
        </IconField>
        <div :class="cx('wrapper')" :style="{ maxHeight: scrollHeight }" :data-p="wrapperDataP" v-bind="ptm('wrapper')">
            <slot name="header" :value="value" :expandedKeys="expandedKeys" :selectionKeys="selectionKeys" />
            <ul v-if="!empty" :class="cx('rootChildren')" role="tree" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" v-bind="ptm('rootChildren')">
                <TreeNode
                    v-for="(node, index) of valueToRender"
                    :key="node.key"
                    :node="node"
                    :rootNodes="valueToRender"
                    :templates="$slots"
                    :level="level + 1"
                    :index="index"
                    :expandedKeys="d_expandedKeys"
                    @node-toggle="onNodeToggle"
                    @node-click="onNodeClick"
                    :selectionMode="selectionMode"
                    :selectionKeys="selectionKeys"
                    @checkbox-change="onCheckboxChange"
                    :loadingMode="loadingMode"
                    :draggableNodes="draggableNodes"
                    :droppableNodes="droppableNodes"
                    :draggableScope="draggableScope"
                    :validateDrop="validateDrop"
                    @node-drop="onNodeDrop"
                    @node-dragenter="onNodeDragEnter"
                    @node-dragleave="onNodeDragLeave"
                    @value-change="onValueChanged"
                    :unstyled="unstyled"
                    :pt="pt"
                ></TreeNode>
            </ul>
            <div v-else-if="empty && !$pcTreeSelect" :class="cx('emptyMessage')" v-bind="ptm('emptyMessage')">
                <slot name="empty">
                    {{ emptyMessageText }}
                </slot>
            </div>
            <slot name="footer" :value="value" :expandedKeys="expandedKeys" :selectionKeys="selectionKeys" />
        </div>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import { isFunction, resolveFieldData } from '@primeuix/utils/object';
import SearchIcon from '@primevue/icons/search';
import SpinnerIcon from '@primevue/icons/spinner';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import BaseTree from './BaseTree.vue';
import { useTreeDragDropService } from './TreeDragDropService';
import TreeNode from './TreeNode.vue';

export default {
    name: 'Tree',
    extends: BaseTree,
    inheritAttrs: false,
    emits: ['node-expand', 'node-collapse', 'update:expandedKeys', 'update:selectionKeys', 'node-select', 'node-unselect', 'filter', 'node-drop', 'node-dragenter', 'node-dragleave', 'update:value', 'drag-enter', 'drag-leave'],
    data() {
        return {
            d_expandedKeys: this.expandedKeys || {},
            filterValue: null,
            dragNode: null,
            dragNodeSubNodes: null,
            dragNodeIndex: null,
            dragNodeScope: null,
            dragHover: null
        };
    },
    inject: {
        $pcTreeSelect: { default: null }
    },
    dragDropService: null,
    dragStartCleanup: null,
    dragStopCleanup: null,
    watch: {
        expandedKeys(newValue) {
            this.d_expandedKeys = newValue;
        }
    },
    mounted() {
        if (this.droppableNodes) {
            this.dragDropService = useTreeDragDropService();

            this.dragStartCleanup = this.dragDropService.onDragStart((event) => {
                this.dragNode = event.node;
                this.dragNodeSubNodes = event.subNodes;
                this.dragNodeIndex = event.index;
                this.dragNodeScope = event.scope;
            });

            this.dragStopCleanup = this.dragDropService.onDragStop(() => {
                this.dragNode = null;
                this.dragNodeSubNodes = null;
                this.dragNodeIndex = null;
                this.dragNodeScope = null;
                this.dragHover = false;
            });
        }
    },
    beforeUnmount() {
        if (this.dragStartCleanup) {
            this.dragStartCleanup();
        }

        if (this.dragStopCleanup) {
            this.dragStopCleanup();
        }
    },
    methods: {
        onNodeToggle(node) {
            const key = node.key;

            if (this.d_expandedKeys[key]) {
                delete this.d_expandedKeys[key];
                this.$emit('node-collapse', node);
            } else {
                this.d_expandedKeys[key] = true;
                this.$emit('node-expand', node);
            }

            this.d_expandedKeys = { ...this.d_expandedKeys };
            this.$emit('update:expandedKeys', this.d_expandedKeys);
        },
        onNodeClick(event) {
            if (this.selectionMode != null && event.node.selectable !== false) {
                const metaSelection = event.nodeTouched ? false : this.metaKeySelection;
                const _selectionKeys = metaSelection ? this.handleSelectionWithMetaKey(event) : this.handleSelectionWithoutMetaKey(event);

                this.$emit('update:selectionKeys', _selectionKeys);
            }
        },
        onCheckboxChange(event) {
            this.$emit('update:selectionKeys', event.selectionKeys);

            if (event.check) this.$emit('node-select', event.node);
            else this.$emit('node-unselect', event.node);
        },
        handleSelectionWithMetaKey(event) {
            const originalEvent = event.originalEvent;
            const node = event.node;
            const metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            const selected = this.isNodeSelected(node);
            let _selectionKeys;

            if (selected && metaKey) {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                } else {
                    _selectionKeys = { ...this.selectionKeys };
                    delete _selectionKeys[node.key];
                }

                this.$emit('node-unselect', node);
            } else {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                } else if (this.isMultipleSelectionMode()) {
                    _selectionKeys = !metaKey ? {} : this.selectionKeys ? { ...this.selectionKeys } : {};
                }

                _selectionKeys[node.key] = true;
                this.$emit('node-select', node);
            }

            return _selectionKeys;
        },
        handleSelectionWithoutMetaKey(event) {
            const node = event.node;
            const selected = this.isNodeSelected(node);
            let _selectionKeys;

            if (this.isSingleSelectionMode()) {
                if (selected) {
                    _selectionKeys = {};
                    this.$emit('node-unselect', node);
                } else {
                    _selectionKeys = {};
                    _selectionKeys[node.key] = true;
                    this.$emit('node-select', node);
                }
            } else {
                if (selected) {
                    _selectionKeys = { ...this.selectionKeys };
                    delete _selectionKeys[node.key];

                    this.$emit('node-unselect', node);
                } else {
                    _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {};
                    _selectionKeys[node.key] = true;

                    this.$emit('node-select', node);
                }
            }

            return _selectionKeys;
        },
        isSingleSelectionMode() {
            return this.selectionMode === 'single';
        },
        isMultipleSelectionMode() {
            return this.selectionMode === 'multiple';
        },
        isNodeSelected(node) {
            return this.selectionMode && this.selectionKeys ? this.selectionKeys[node.key] === true : false;
        },
        isChecked(node) {
            return this.selectionKeys ? this.selectionKeys[node.key] && this.selectionKeys[node.key].checked : false;
        },
        isNodeLeaf(node) {
            return node.leaf === false ? false : !(node.children && node.children.length);
        },
        onFilterKeyup(event) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                event.preventDefault();
            }

            this.$emit('filter', { originalEvent: event, value: event.target.value });
        },
        findFilteredNodes(node, paramsWithoutNode) {
            if (node) {
                let matched = false;

                if (node.children) {
                    let childNodes = [...node.children];

                    node.children = [];

                    for (let childNode of childNodes) {
                        let copyChildNode = { ...childNode };

                        if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                            matched = true;
                            node.children.push(copyChildNode);
                        }
                    }
                }

                if (matched) {
                    return true;
                }
            }
        },
        isFilterMatched(node, { searchFields, filterText, strict }) {
            let matched = false;

            for (let field of searchFields) {
                let fieldValue = String(resolveFieldData(node, field)).toLocaleLowerCase(this.filterLocale);

                if (fieldValue.indexOf(filterText) > -1) {
                    matched = true;
                }
            }

            if (!matched || (strict && !this.isNodeLeaf(node))) {
                matched = this.findFilteredNodes(node, { searchFields, filterText, strict }) || matched;
            }

            return matched;
        },
        onNodeDrop(event) {
            this.$emit('node-drop', event);
        },
        onNodeDragEnter(event) {
            this.$emit('node-dragenter', event);
        },
        onNodeDragLeave(event) {
            this.$emit('node-dragleave', event);
        },
        onValueChanged(event) {
            this.dragNodeSubNodes.splice(this.dragNodeIndex, 1);
            this.$emit('update:value', event.nodes);
        },
        allowDrop(dragNode, dropNode, dragNodeScope) {
            if (!dragNode) {
                //prevent random html elements to be dragged
                return false;
            } else if (this.isValidDragScope(dragNodeScope)) {
                let allow = true;

                if (dropNode) {
                    if (dragNode === dropNode) {
                        allow = false;
                    } else {
                        let parent = dropNode.parent;

                        while (parent != null) {
                            if (parent === dragNode) {
                                allow = false;

                                break;
                            }

                            parent = parent.parent;
                        }
                    }
                }

                return allow;
            } else {
                return false;
            }
        },
        allowNodeDrop(dropNode) {
            return this.allowDrop(this.dragNode, dropNode, this.dragNodeScope);
        },
        hasCommonScope(dragScope, dropScope) {
            if (dragScope === null && dropScope === null) {
                return true;
            } else if (dragScope === null || dropScope === null) {
                return false;
            }

            if (typeof dropScope === 'string') {
                if (typeof dragScope === 'string') {
                    return dragScope === dropScope;
                } else if (Array.isArray(dragScope)) {
                    return dragScope.indexOf(dropScope) !== -1;
                }
            } else if (Array.isArray(dropScope)) {
                if (typeof dragScope === 'string') {
                    return dropScope.indexOf(dragScope) !== -1;
                } else if (Array.isArray(dragScope)) {
                    for (let ds of dragScope) {
                        if (dropScope.indexOf(ds) !== -1) {
                            return true;
                        }
                    }
                    return false;
                }
            }

            return false;
        },
        isValidDragScope(dragScope) {
            if (this.droppableScope === null) {
                return true;
            }

            return this.hasCommonScope(dragScope, this.droppableScope);
        },
        isSameTreeScope(dragScope) {
            return this.hasCommonScope(dragScope, this.draggableScope);
        },
        onDragOver(event) {
            if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
                event.dataTransfer.dropEffect = 'copy';
            } else {
                event.dataTransfer.dropEffect = 'none';
            }

            event.preventDefault();
        },
        onDragEnter(event) {
            if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
                this.dragHover = true;

                this.$emit('drag-enter', {
                    originalEvent: event,
                    value: this.value,
                    dragNode: this.dragNode,
                    dragNodeScope: this.dragNodeScope
                });
            }
        },
        onDragLeave(event) {
            if (this.droppableNodes) {
                let rect = event.currentTarget.getBoundingClientRect();

                if (event.x >= parseInt(rect.right) || event.x <= parseInt(rect.left) || event.y >= parseInt(rect.bottom) || event.y <= parseInt(rect.top)) {
                    this.dragHover = false;
                }

                this.$emit('drag-leave', {
                    originalEvent: event,
                    value: this.value,
                    dragNode: this.dragNode,
                    dragNodeScope: this.dragNodeScope
                });
            }
        },
        processTreeDrop(dragNode, dragNodeIndex) {
            this.dragNodeSubNodes.splice(dragNodeIndex, 1);
            const newValue = [...(this.value || []), dragNode];
            this.$emit('update:value', newValue);

            this.dragDropService.stopDrag({
                node: dragNode
            });
        },
        onDrop(event) {
            if (this.droppableNodes) {
                event.preventDefault();
                let dragNode = this.dragNode;

                if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
                    let dragNodeIndex = this.dragNodeIndex;

                    if (this.isSameTreeScope(this.dragNodeScope)) {
                        this.dragDropService.stopDrag({
                            node: dragNode
                        });

                        return;
                    }

                    if (this.validateDrop) {
                        this.$emit('node-drop', {
                            originalEvent: event,
                            value: this.value,
                            dragNode: dragNode,
                            dropNode: null,
                            index: dragNodeIndex,
                            accept: () => {
                                this.processTreeDrop(dragNode, dragNodeIndex);
                            }
                        });
                    } else {
                        this.$emit('node-drop', {
                            originalEvent: event,
                            value: this.value,
                            dragNode: dragNode,
                            dropNode: null,
                            index: dragNodeIndex
                        });

                        this.processTreeDrop(dragNode, dragNodeIndex);
                    }
                }
            }
        }
    },
    computed: {
        filteredValue() {
            let filteredNodes = [];
            const searchFields = isFunction(this.filterBy) ? [this.filterBy] : this.filterBy.split(',');
            const filterText = this.filterValue.trim().toLocaleLowerCase(this.filterLocale);
            const strict = this.filterMode === 'strict';

            for (let node of this.value) {
                let _node = { ...node };
                let paramsWithoutNode = { searchFields, filterText, strict };

                if (
                    (strict && (this.findFilteredNodes(_node, paramsWithoutNode) || this.isFilterMatched(_node, paramsWithoutNode))) ||
                    (!strict && (this.isFilterMatched(_node, paramsWithoutNode) || this.findFilteredNodes(_node, paramsWithoutNode)))
                ) {
                    filteredNodes.push(_node);
                }
            }

            return filteredNodes;
        },
        valueToRender() {
            if (this.filterValue && this.filterValue.trim().length > 0) return this.filteredValue;
            else return this.value;
        },
        empty() {
            return !this.valueToRender || this.valueToRender.length === 0;
        },
        emptyMessageText() {
            return this.$primevue.config?.locale?.emptyMessage || '';
        },
        containerDataP() {
            return cn({
                loading: this.loading,
                scrollable: this.scrollHeight === 'flex'
            });
        },
        wrapperDataP() {
            return cn({
                scrollable: this.scrollHeight === 'flex'
            });
        }
    },
    components: {
        TreeNode,
        InputText,
        InputIcon,
        IconField,
        SearchIcon,
        SpinnerIcon
    }
};
</script>
