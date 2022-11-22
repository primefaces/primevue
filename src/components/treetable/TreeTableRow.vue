<template>
    <tr
        ref="currentNode"
        :class="containerClass"
        @click="onClick"
        @keydown="onKeyDown"
        @touchend="onTouchEnd"
        :style="node.style"
        :tabindex="tabindex"
        role="row"
        :aria-expanded="expanded"
        :aria-level="level + 1"
        :aria-setsize="ariaSetSize"
        :aria-posinset="ariaPosInset"
        :aria-label="ariaLabel"
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
                @node-toggle="$emit('node-toggle', $event)"
                @checkbox-toggle="toggleCheckbox"
            ></TTBodyCell>
        </template>
    </tr>
    <template v-if="expanded && node.children && node.children.length">
        <TreeTableRow
            v-for="childNode of node.children"
            :key="childNode.key"
            :columns="columns"
            :node="childNode"
            :parentNode="node"
            :level="level + 1"
            :tabindex="-1"
            :expandedKeys="expandedKeys"
            :selectionMode="selectionMode"
            :selectionKeys="selectionKeys"
            :indentation="indentation"
            @node-toggle="$emit('node-toggle', $event)"
            @node-click="$emit('node-click', $event)"
            @checkbox-change="onCheckboxChange"
            :ariaPosInset="node.children.indexOf(childNode) + 1"
            :ariaSetSize="node.children.length"
        />
    </template>
</template>

<script>
import { DomHandler, ObjectUtils } from 'primevue/utils';
import BodyCell from './BodyCell.vue';

export default {
    name: 'TreeTableRow',
    emits: ['node-click', 'node-toggle', 'checkbox-change', 'nodeClick', 'nodeToggle', 'checkboxChange'],
    props: {
        node: {
            type: null,
            default: null
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
            default: 0
        },
        ariaSetSize: {
            type: Number,
            default: null
        },
        ariaPosInset: {
            type: Number,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    nodeTouched: false,

    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        toggle() {
            this.$emit('node-toggle', this.node);
        },
        onClick(event) {
            if (DomHandler.isClickable(event.target) || DomHandler.hasClass(event.target, 'p-treetable-toggler') || DomHandler.hasClass(event.target.parentElement, 'p-treetable-toggler')) {
                return;
            }

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
                case 'Space':
                    this.onEnterKey(event, item);
                    break;

                default:
                    break;
            }
        },
        onArrowDownKey(event) {
            const nextElementSibling = event.currentTarget.nextElementSibling;

            nextElementSibling && DomHandler.focus(nextElementSibling);

            event.preventDefault();
        },
        onArrowUpKey(event) {
            const previousElementSibling = event.currentTarget.previousElementSibling;

            previousElementSibling && DomHandler.focus(previousElementSibling);

            event.preventDefault();
        },
        onArrowRightKey(event) {
            const ishiddenIcon = event.currentTarget.querySelector('button').style.visibility === 'hidden';
            const togglerElement = this.$refs.currentNode.querySelector('.p-treetable-toggler');

            if (ishiddenIcon) {
                return false;
            }

            if (!this.expanded) {
                togglerElement.click();
            }

            this.$nextTick(() => {
                this.onArrowDownKey(event);
            });

            event.preventDefault();
        },
        onArrowLeftKey(event) {
            const ishiddenIcon = event.currentTarget?.querySelector('button').style.visibility === 'hidden';
            const togglerElement = this.$refs.currentNode.querySelector('.p-treetable-toggler');

            if (this.level === 0 && !this.expanded) {
                return false;
            }

            if (this.expanded && !ishiddenIcon) {
                togglerElement.click();

                return false;
            }

            const target = this.findBeforeClickableNode(event.currentTarget);

            DomHandler.focus(target);
        },
        onHomeKey(event) {
            const findFirstElement = event.currentTarget.parentElement.querySelectorAll(`.p-treetable-node-${this.level}`)[0];

            DomHandler.focus(findFirstElement);

            event.preventDefault();
        },
        onEndKey(event) {
            const nodes = event.currentTarget.parentElement.querySelectorAll(`.p-treetable-node-${this.level}`);

            const findFirstElement = nodes[nodes.length - 1];

            DomHandler.focus(findFirstElement);

            event.preventDefault();
        },
        onEnterKey(event) {
            event.preventDefault();

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
            if (check) selectionKeys[node.key] = { checked: true, partialChecked: false };
            else delete selectionKeys[node.key];

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
                if (_selectionKeys[child.key] && _selectionKeys[child.key].checked) checkedChildCount++;
                else if (_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked) childPartialSelected = true;
            }

            if (check && checkedChildCount === this.node.children.length) {
                _selectionKeys[this.node.key] = { checked: true, partialChecked: false };
            } else {
                if (!check) {
                    delete _selectionKeys[this.node.key];
                }

                if (childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== this.node.children.length)) _selectionKeys[this.node.key] = { checked: false, partialChecked: true };
                else _selectionKeys[this.node.key] = { checked: false, partialChecked: false };
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
                if (_selectionKeys[child.key] && _selectionKeys[child.key].checked) checkedChildCount++;
                else if (_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked) childPartialSelected = true;
            }

            if (check && checkedChildCount === this.node.children.length) {
                _selectionKeys[this.node.key] = { checked: true, partialChecked: false };
            } else {
                if (!check) {
                    delete _selectionKeys[this.node.key];
                }

                if (childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== this.node.children.length)) _selectionKeys[this.node.key] = { checked: false, partialChecked: true };
                else _selectionKeys[this.node.key] = { checked: false, partialChecked: false };
            }

            this.$emit('checkbox-change', {
                node: event.node,
                check: event.check,
                selectionKeys: _selectionKeys
            });
        }
    },
    computed: {
        containerClass() {
            return [
                this.node.styleClass,
                `p-treetable-node-${this.level}`,
                {
                    'p-highlight': this.selected
                }
            ];
        },
        hasChildren() {
            return this.node.children && this.node.children.length > 0;
        },
        expanded() {
            return this.expandedKeys && this.expandedKeys[this.node.key] === true;
        },
        leaf() {
            return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
        },
        selected() {
            return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.node.key] === true : false;
        },
        childLevel() {
            return this.level + 1;
        },
        checked() {
            return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked : false;
        },
        partialChecked() {
            return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked : false;
        }
    },
    components: {
        TTBodyCell: BodyCell
    }
};
</script>
