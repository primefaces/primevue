<template>
    <div :class="containerClass">
        <template v-if="loading">
            <div class="p-tree-loading-mask p-component-overlay"></div>
            <div class="p-tree-loading-content">
                <i :class="loadingIconClass" />
            </div>
        </template>
        <div class="p-tree-filter-container" v-if="filter">
            <input type="text" autocomplete="off" class="p-tree-filter p-inputtext p-component" :placeholder="filterPlaceholder"
                @keydown="onFilterKeydown" v-model="filterValue" />
                <span class="p-tree-filter-icon pi pi-search"></span>
        </div>
        <ul class="p-tree-container" role="tree">
            <TreeNode v-for="node of valueToRender" :key="node.key" :node="node" :templates="$scopedSlots"
                :expandedKeys="d_expandedKeys" @node-toggle="onNodeToggle" @node-click="onNodeClick"
                :selectionMode="selectionMode" :selectionKeys="selectionKeys" @checkbox-change="onCheckboxChange"></TreeNode>
        </ul>
    </div>
</template>

<script>
import TreeNode from './TreeNode';
import ObjectUtils from '../utils/ObjectUtils';

export default {
    props: {
        value: {
            type: null,
            default: null
        },
        expandedKeys: {
            type: null,
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        metaKeySelection: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: 'pi pi-spinner'
        },
        filter: {
            type: Boolean,
            default: false
        },
        filterBy: {
            type: String,
            default: 'label'
        },
        filterMode: {
            type: String,
            default: 'lenient'
        },
        filterPlaceholder: {
            type: String,
            default: null
        },
        filterLocale: {
            type: String,
            default: undefined
        }
    },
    data() {
        return {
            d_expandedKeys: this.expandedKeys || {},
            filterValue: null
        }
    },
    watch: {
        expandedKeys(newValue) {
            this.d_expandedKeys = newValue;
        }
    },
    methods: {
        onNodeToggle(node) {
            const key = node.key;

            if (this.d_expandedKeys[key]) {
                delete this.d_expandedKeys[key];
                this.$emit('node-collapse', node);
            }
            else {
                this.d_expandedKeys[key] = true;
                this.$emit('node-expand', node);
            }

            this.d_expandedKeys = {...this.d_expandedKeys};
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

            if (event.check)
                this.$emit('node-select', event.node);
            else
                this.$emit('node-unselect', event.node);
        },
        handleSelectionWithMetaKey(event) {
            const originalEvent = event.originalEvent;
            const node = event.node;
            const metaKey = (originalEvent.metaKey||originalEvent.ctrlKey);
            const selected = this.isNodeSelected(node);
            let _selectionKeys;

            if (selected && metaKey) {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                }
                else {
                    _selectionKeys = {...this.selectionKeys};
                    delete _selectionKeys[node.key];
                }

                this.$emit('node-unselect', node);
            }
            else {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                }
                else if (this.isMultipleSelectionMode()) {
                    _selectionKeys = !metaKey ? {} : (this.selectionKeys ? {...this.selectionKeys} : {});
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
                }
                else {
                    _selectionKeys = {};
                    _selectionKeys[node.key] = true;
                    this.$emit('node-select', node);
                }
            }
            else {
                if (selected) {
                    _selectionKeys = {...this.selectionKeys};
                    delete _selectionKeys[node.key];

                    this.$emit('node-unselect', node);
                }
                else {
                    _selectionKeys = this.selectionKeys ? {...this.selectionKeys} : {};
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
            return (this.selectionMode && this.selectionKeys) ? this.selectionKeys[node.key] === true : false;
        },
        isChecked(node) {
            return this.selectionKeys ? this.selectionKeys[node.key] && this.selectionKeys[node.key].checked: false;
        },
        isNodeLeaf(node) {
            return node.leaf === false ? false : !(node.children && node.children.length);
        },
        onFilterKeydown(event) {
            if (event.which === 13) {
                event.preventDefault();
            }
        },
        findFilteredNodes(node, paramsWithoutNode) {
            if (node) {
                let matched = false;
                if (node.children) {
                    let childNodes = [...node.children];
                    node.children = [];
                    for (let childNode of childNodes) {
                        let copyChildNode = {...childNode};
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
        isFilterMatched(node, {searchFields, filterText, strict}) {
            let matched = false;
            for(let field of searchFields) {
                let fieldValue = String(ObjectUtils.resolveFieldData(node, field)).toLocaleLowerCase(this.filterLocale);
                if(fieldValue.indexOf(filterText) > -1) {
                    matched = true;
                }
            }

            if (!matched || (strict && !this.isNodeLeaf(node))) {
                matched = this.findFilteredNodes(node, {searchFields, filterText, strict}) || matched;
            }

            return matched;
        }
    },
    computed: {
        containerClass() {
            return ['p-tree p-component', {
                'p-tree-selectable': this.selectionMode != null,
                'p-tree-loading': this.loading
            }];
        },
        loadingIconClass() {
            return ['p-tree-loading-icon pi-spin', this.loadingIcon];
        },
        filteredValue() {
            let filteredNodes = [];
            const searchFields = this.filterBy.split(',');
            const filterText = this.filterValue.trim().toLocaleLowerCase(this.filterLocale);
            const strict = this.filterMode === 'strict';

            for (let node of this.value) {
                let _node = {...node};
                let paramsWithoutNode = {searchFields, filterText, strict};

                if ((strict && (this.findFilteredNodes(_node, paramsWithoutNode) || this.isFilterMatched(_node, paramsWithoutNode))) ||
                    (!strict && (this.isFilterMatched(_node, paramsWithoutNode) || this.findFilteredNodes(_node, paramsWithoutNode)))) {
                    filteredNodes.push(_node);
                }
            }

            return filteredNodes;
        },
        valueToRender() {
            if (this.filterValue && this.filterValue.trim().length > 0)
                return this.filteredValue;
            else
                return this.value;
        }
    },
    components: {
        'TreeNode': TreeNode
    }
}
</script>

<style>
.p-tree {
    width: 24em;
}

.p-tree .p-treenode-selectable.p-treenode-content {
    cursor: pointer;
}

.p-tree .p-tree-container {
    height: 100%;
    margin: 0;
    overflow: auto;
    padding: .25em;
    white-space: nowrap;
}

.p-tree .p-treenode-children {
    margin: 0;
    padding: 0 0 0 1em;
}

.p-tree .p-treenode {
    background-attachment: scroll;
    background-color: transparent;
    background-image: none;
    background-position: 0 0;
    background-repeat: repeat-y;
    list-style: none outside none;
    margin: 0;
    padding: .125em 0 0 0;
}

.p-tree .p-treenode-droppoint {
    height: 4px;
    list-style-type: none;
}

.p-tree .p-treenode-droppoint-active {
    border: 0 none;
}

.p-tree .p-tree-toggler {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
}

.p-tree .p-tree-toggler .p-tree-toggler-icon {
    vertical-align: middle;
}

.p-tree .p-treenode-icon {
    display: inline-block;
    vertical-align: middle;
}

.p-tree .p-treenode-label {
    display: inline-block;
    padding: 0 .25em;
    vertical-align: middle;
    user-select: none;
}

.p-tree .p-treenode.p-treenode-leaf > .p-treenode-content > .p-tree-toggler {
    visibility: hidden;
}

.p-tree .p-checkbox-box {
    cursor: pointer;
}

.p-tree .p-checkbox {
    display: inline-block;
    vertical-align: middle;
}

.p-tree .p-checkbox .p-checkbox-icon {
    margin-left: 1px;
}

.p-tree .p-tree-filter {
    width: 100%;
    box-sizing: border-box;
    padding-right: 1.5em;
}

.p-tree .p-tree-filter-container {
    position: relative;
    margin: 0;
    padding: 0.4em;
    display: inline-block;
    width: 100%;
}

.p-tree .p-tree-filter-container .p-tree-filter-icon {
    position: absolute;
    top: .8em;
    right: 1em;
}

/** Fluid **/
.p-fluid .p-tree {
    width: 100%;
}

/** Loading **/
.p-tree.p-tree-loading {
    position: relative;
    min-height: 4em;
}

.p-tree .p-tree-loading-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
    opacity: 0.1;
    z-index: 1;
}

.p-tree .p-tree-loading-content {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    margin-top: -1em;
    margin-left: -1em;
}

.p-tree .p-tree-loading-content .p-tree-loading-icon {
    font-size: 2em;
}
</style>
