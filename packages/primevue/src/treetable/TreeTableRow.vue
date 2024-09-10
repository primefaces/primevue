<template>
    <tr
        ref="node"
        :class="containerClass"
        :style="node.style"
        :tabindex="tabindex"
        role="row"
        :aria-expanded="node.children && node.children.length ? expanded : undefined"
        :aria-level="level + 1"
        :aria-setsize="ariaSetSize"
        :aria-posinset="ariaPosInset"
        :aria-selected="getAriaSelected"
        :aria-checked="checked || undefined"
        @click="onClick"
        @keydown="onKeyDown"
        @touchend="onTouchEnd"
        v-bind="ptm('row', ptmOptions)"
        :data-p-selected="selected"
    >
        <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
            <TTBodyCell
                v-if="!columnProp(col, 'hidden')"
                :column="col"
                :node="node"
                :level="level"
                :leaf="leaf"
                :indentation="indentation"
                :expanded="expanded"
                :selectionMode="selectionMode"
                :checked="checked"
                :partialChecked="partialChecked"
                :templates="templates"
                @node-toggle="$emit('node-toggle', $event)"
                @checkbox-toggle="toggleCheckbox"
                :index="i"
                :loadingMode="loadingMode"
                :unstyled="unstyled"
                :pt="pt"
            ></TTBodyCell>
        </template>
    </tr>
    <template v-if="expanded && node.children && node.children.length">
        <TreeTableRow
            v-for="childNode of node.children"
            :key="nodeKey(childNode)"
            :dataKey="dataKey"
            :columns="columns"
            :node="childNode"
            :parentNode="node"
            :level="level + 1"
            :expandedKeys="expandedKeys"
            :selectionMode="selectionMode"
            :selectionKeys="selectionKeys"
            :indentation="indentation"
            :ariaPosInset="node.children.indexOf(childNode) + 1"
            :ariaSetSize="node.children.length"
            :templates="templates"
            @node-toggle="$emit('node-toggle', $event)"
            @node-click="$emit('node-click', $event)"
            @checkbox-change="onCheckboxChange"
            :unstyled="unstyled"
            :pt="pt"
        />
    </template>
</template>

<script>
import { find, findSingle, focus, getAttribute, isClickable } from '@primeuix/utils/dom';
import { resolveFieldData } from '@primeuix/utils/object';
import BaseComponent from '@primevue/core/basecomponent';
import { getVNodeProp } from '@primevue/core/utils';
import BodyCell from './BodyCell.vue';

export default {
    name: 'TreeTableRow',
    hostName: 'TreeTable',
    extends: BaseComponent,
    emits: ['node-click', 'node-toggle', 'checkbox-change', 'nodeClick', 'nodeToggle', 'checkboxChange'],
    props: {
        node: {
            type: null,
            default: null
        },
        dataKey: {
            type: [String, Function],
            default: 'key'
        },
        parentNode: {
            type: null,
            default: null
        },
        columns: {
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
        level: {
            type: Number,
            default: 0
        },
        indentation: {
            type: Number,
            default: 1
        },
        tabindex: {
            type: Number,
            default: -1
        },
        ariaSetSize: {
            type: Number,
            default: null
        },
        ariaPosInset: {
            type: Number,
            default: null
        },
        loadingMode: {
            type: String,
            default: 'mask'
        },
        templates: {
            type: Object,
            default: null
        }
    },
    nodeTouched: false,
    methods: {
        columnProp(col, prop) {
            return getVNodeProp(col, prop);
        },
        toggle() {
            this.$emit('node-toggle', this.node);
        },
        onClick(event) {
            if (isClickable(event.target) || getAttribute(event.target, 'data-pc-section') === 'nodetogglebutton' || getAttribute(event.target, 'data-pc-section') === 'rowtoggleicon' || event.target.tagName === 'path') {
                return;
            }

            this.setTabIndexForSelectionMode(event, this.nodeTouched);

            this.$emit('node-click', {
                originalEvent: event,
                nodeTouched: this.nodeTouched,
                node: this.node
            });
            this.nodeTouched = false;
        },
        onTouchEnd() {
            this.nodeTouched = true;
        },
        nodeKey(node) {
            return resolveFieldData(node, this.dataKey);
        },
        onKeyDown(event, item) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onArrowUpKey(event);
                    break;

                case 'ArrowLeft':
                    this.onArrowLeftKey(event);
                    break;

                case 'ArrowRight':
                    this.onArrowRightKey(event);
                    break;

                case 'Home':
                    this.onHomeKey(event);
                    break;

                case 'End':
                    this.onEndKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    if (!isClickable(event.target)) {
                        this.onEnterKey(event, item);
                    }

                    break;

                case 'Tab':
                    this.onTabKey(event);
                    break;

                default:
                    break;
            }
        },
        onArrowDownKey(event) {
            const nextElementSibling = event.currentTarget.nextElementSibling;

            nextElementSibling && this.focusRowChange(event.currentTarget, nextElementSibling);

            event.preventDefault();
        },
        onArrowUpKey(event) {
            const previousElementSibling = event.currentTarget.previousElementSibling;

            previousElementSibling && this.focusRowChange(event.currentTarget, previousElementSibling);

            event.preventDefault();
        },
        onArrowRightKey(event) {
            const ishiddenIcon = findSingle(event.currentTarget, 'button').style.visibility === 'hidden';
            const togglerElement = findSingle(this.$refs.node, '[data-pc-section="nodetogglebutton"]');

            if (ishiddenIcon) return;

            !this.expanded && togglerElement.click();

            this.$nextTick(() => {
                this.onArrowDownKey(event);
            });

            event.preventDefault();
        },
        onArrowLeftKey(event) {
            if (this.level === 0 && !this.expanded) {
                return;
            }

            const currentTarget = event.currentTarget;
            const ishiddenIcon = findSingle(currentTarget, 'button').style.visibility === 'hidden';
            const togglerElement = findSingle(currentTarget, '[data-pc-section="nodetogglebutton"]');

            if (this.expanded && !ishiddenIcon) {
                togglerElement.click();

                return;
            }

            const target = this.findBeforeClickableNode(currentTarget);

            target && this.focusRowChange(currentTarget, target);
        },
        onHomeKey(event) {
            const findFirstElement = findSingle(event.currentTarget.parentElement, `tr[aria-level="${this.level + 1}"]`);

            findFirstElement && focus(findFirstElement);

            event.preventDefault();
        },
        onEndKey(event) {
            const nodes = find(event.currentTarget.parentElement, `tr[aria-level="${this.level + 1}"]`);
            const findFirstElement = nodes[nodes.length - 1];

            focus(findFirstElement);

            event.preventDefault();
        },
        onEnterKey(event) {
            event.preventDefault();
            this.setTabIndexForSelectionMode(event, this.nodeTouched);

            if (this.selectionMode === 'checkbox') {
                this.toggleCheckbox();

                return;
            }

            this.$emit('node-click', {
                originalEvent: event,
                nodeTouched: this.nodeTouched,
                node: this.node
            });

            this.nodeTouched = false;
        },
        onTabKey() {
            const rows = [...find(this.$refs.node.parentElement, 'tr')];
            const hasSelectedRow = rows.some((row) => getAttribute(row, 'data-p-selected') || row.getAttribute('aria-checked') === 'true');

            rows.forEach((row) => {
                row.tabIndex = -1;
            });

            if (hasSelectedRow) {
                const selectedNodes = rows.filter((node) => getAttribute(node, 'data-p-selected') || node.getAttribute('aria-checked') === 'true');

                selectedNodes[0].tabIndex = 0;

                return;
            }

            rows[0].tabIndex = 0;
        },
        focusRowChange(firstFocusableRow, currentFocusedRow) {
            firstFocusableRow.tabIndex = '-1';
            currentFocusedRow.tabIndex = '0';
            focus(currentFocusedRow);
        },
        findBeforeClickableNode(node) {
            const prevNode = node.previousElementSibling;

            if (prevNode) {
                const prevNodeButton = prevNode.querySelector('button');

                if (prevNodeButton && prevNodeButton.style.visibility !== 'hidden') {
                    return prevNode;
                }

                return this.findBeforeClickableNode(prevNode);
            }

            return null;
        },
        toggleCheckbox() {
            let _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {};
            const _check = !this.checked;

            this.propagateDown(this.node, _check, _selectionKeys);

            this.$emit('checkbox-change', {
                node: this.node,
                check: _check,
                selectionKeys: _selectionKeys
            });
        },
        propagateDown(node, check, selectionKeys) {
            if (check) selectionKeys[this.nodeKey(node)] = { checked: true, partialChecked: false };
            else delete selectionKeys[this.nodeKey(node)];

            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.propagateDown(child, check, selectionKeys);
                }
            }
        },
        propagateUp(event) {
            let check = event.check;
            let _selectionKeys = { ...event.selectionKeys };
            let checkedChildCount = 0;
            let childPartialSelected = false;

            for (let child of this.node.children) {
                if (_selectionKeys[this.nodeKey(child)] && _selectionKeys[this.nodeKey(child)].checked) checkedChildCount++;
                else if (_selectionKeys[this.nodeKey(child)] && _selectionKeys[this.nodeKey(child)].partialChecked) childPartialSelected = true;
            }

            if (check && checkedChildCount === this.node.children.length) {
                _selectionKeys[this.nodeKey(this.node)] = { checked: true, partialChecked: false };
            } else {
                if (!check) {
                    delete _selectionKeys[this.nodeKey(this.node)];
                }

                if (childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== this.node.children.length)) _selectionKeys[this.nodeKey(this.node)] = { checked: false, partialChecked: true };
                else _selectionKeys[this.nodeKey(this.node)] = { checked: false, partialChecked: false };
            }

            this.$emit('checkbox-change', {
                node: event.node,
                check: event.check,
                selectionKeys: _selectionKeys
            });
        },
        onCheckboxChange(event) {
            let check = event.check;
            let _selectionKeys = { ...event.selectionKeys };
            let checkedChildCount = 0;
            let childPartialSelected = false;

            for (let child of this.node.children) {
                if (_selectionKeys[this.nodeKey(child)] && _selectionKeys[this.nodeKey(child)].checked) checkedChildCount++;
                else if (_selectionKeys[this.nodeKey(child)] && _selectionKeys[this.nodeKey(child)].partialChecked) childPartialSelected = true;
            }

            if (check && checkedChildCount === this.node.children.length) {
                _selectionKeys[this.nodeKey(this.node)] = { checked: true, partialChecked: false };
            } else {
                if (!check) {
                    delete _selectionKeys[this.nodeKey(this.node)];
                }

                if (childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== this.node.children.length)) _selectionKeys[this.nodeKey(this.node)] = { checked: false, partialChecked: true };
                else _selectionKeys[this.nodeKey(this.node)] = { checked: false, partialChecked: false };
            }

            this.$emit('checkbox-change', {
                node: event.node,
                check: event.check,
                selectionKeys: _selectionKeys
            });
        },
        setTabIndexForSelectionMode(event, nodeTouched) {
            if (this.selectionMode !== null) {
                const elements = [...find(this.$refs.node.parentElement, 'tr')];

                event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;

                if (elements.every((element) => element.tabIndex === -1)) {
                    elements[0].tabIndex = 0;
                }
            }
        }
    },
    computed: {
        containerClass() {
            return [this.node.styleClass, this.cx('row')];
        },
        expanded() {
            return this.expandedKeys && this.expandedKeys[this.nodeKey(this.node)] === true;
        },
        leaf() {
            return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
        },
        selected() {
            return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(this.node)] === true : false;
        },
        checked() {
            return this.selectionKeys ? this.selectionKeys[this.nodeKey(this.node)] && this.selectionKeys[this.nodeKey(this.node)].checked : false;
        },
        partialChecked() {
            return this.selectionKeys ? this.selectionKeys[this.nodeKey(this.node)] && this.selectionKeys[this.nodeKey(this.node)].partialChecked : false;
        },
        getAriaSelected() {
            return this.selectionMode === 'single' || this.selectionMode === 'multiple' ? this.selected : null;
        },
        ptmOptions() {
            return {
                context: {
                    selectable: this.$parentInstance.rowHover || this.$parentInstance.rowSelectionMode,
                    selected: this.selected,
                    scrollable: this.$parentInstance.scrollable
                }
            };
        }
    },
    components: {
        TTBodyCell: BodyCell
    }
};
</script>
