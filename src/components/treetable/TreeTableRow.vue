<template>
    <tr :class="containerClass" @click="onClick" @keydown="onKeyDown" @touchend="onTouchEnd" :style="node.style" tabindex="0">
        <template v-for="(col,i) of columns" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i">
            <TTBodyCell v-if="!columnProp(col, 'hidden')" :column="col" :node="node"
                :level="level" :leaf="leaf" :indentation="indentation" :expanded="expanded" :selectionMode="selectionMode"
                :checked="checked" :partialChecked="partialChecked"
                @node-toggle="$emit('node-toggle', $event)" @checkbox-toggle="toggleCheckbox"></TTBodyCell>
        </template>
    </tr>
    <template v-if="expanded && node.children && node.children.length">
        <TreeTableRow v-for="childNode of node.children" :key="childNode.key" :columns="columns" :node="childNode" :parentNode="node"  :level="level + 1"
                        :expandedKeys="expandedKeys" :selectionMode="selectionMode" :selectionKeys="selectionKeys" :indentation="indentation"
                        @node-toggle="$emit('node-toggle', $event)" @node-click="$emit('node-click', $event)" @checkbox-change="onCheckboxChange" />
    </template>
</template>

<script>
import {DomHandler, ObjectUtils} from 'primevue/utils';
import BodyCell from './BodyCell.vue';

export default {
    name: 'TreeTableRow',
    emits: ['node-click', 'node-toggle', 'checkbox-change','nodeClick', 'nodeToggle', 'checkboxChange'],
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
            if (DomHandler.isClickable(event.target) ||
                DomHandler.hasClass(event.target, 'p-treetable-toggler') || DomHandler.hasClass(event.target.parentElement, 'p-treetable-toggler')) {
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
        onKeyDown(event) {
            if (event.target === this.$el) {
                const rowElement = this.$el;

                switch (event.which) {
                    //down arrow
                    case 40: {
                        const nextRow = rowElement.nextElementSibling;
                        if (nextRow) {
                            nextRow.focus();
                        }

                        event.preventDefault();
                        break;
                    }

                    //up arrow
                    case 38: {
                        const previousRow = rowElement.previousElementSibling;
                        if (previousRow) {
                            previousRow.focus();
                        }

                        event.preventDefault();
                        break;
                    }

                    //right-left arrows
                    case 37:
                    case 39: {
                        if (!this.leaf) {
                            this.$emit('node-toggle', this.node);
                            event.preventDefault();
                        }
                        break;
                    }

                    //enter
                    case 13: {
                        this.onClick(event);
                        event.preventDefault();
                        break;
                    }

                    default:
                        //no op
                    break;
                }
            }
        },
        toggleCheckbox() {
            let _selectionKeys = this.selectionKeys ? {...this.selectionKeys} : {};
            const _check = !this.checked;

            this.propagateDown(this.node, _check, _selectionKeys);

            this.$emit('checkbox-change', {
                node: this.node,
                check: _check,
                selectionKeys: _selectionKeys
            });
        },
        propagateDown(node, check, selectionKeys) {
            if (check)
                selectionKeys[node.key] = {checked: true, partialChecked: false};
            else
                delete selectionKeys[node.key];

            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.propagateDown(child, check, selectionKeys);
                }
            }
        },
        propagateUp(event) {
            let check = event.check;
            let _selectionKeys = {...event.selectionKeys};
            let checkedChildCount = 0;
            let childPartialSelected = false;

            for(let child of this.node.children) {
                if(_selectionKeys[child.key] && _selectionKeys[child.key].checked)
                    checkedChildCount++;
                else if(_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked)
                    childPartialSelected = true;
            }

            if(check && checkedChildCount === this.node.children.length) {
                _selectionKeys[this.node.key] = {checked: true, partialChecked: false};
            }
            else {
                if (!check) {
                    delete _selectionKeys[this.node.key];
                }

                if(childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== this.node.children.length))
                    _selectionKeys[this.node.key] = {checked: false, partialChecked: true};
                else
                    _selectionKeys[this.node.key] = {checked: false, partialChecked: false};
            }

            this.$emit('checkbox-change', {
                node: event.node,
                check: event.check,
                selectionKeys: _selectionKeys
            });
        },
        onCheckboxChange(event) {
            let check = event.check;
            let _selectionKeys = {...event.selectionKeys};
            let checkedChildCount = 0;
            let childPartialSelected = false;

            for(let child of this.node.children) {
                if(_selectionKeys[child.key] && _selectionKeys[child.key].checked)
                    checkedChildCount++;
                else if(_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked)
                    childPartialSelected = true;
            }

            if(check && checkedChildCount === this.node.children.length) {
                _selectionKeys[this.node.key] = {checked: true, partialChecked: false};
            }
            else {
                if (!check) {
                    delete _selectionKeys[this.node.key];
                }

                if(childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== this.node.children.length))
                    _selectionKeys[this.node.key] = {checked: false, partialChecked: true};
                else
                    _selectionKeys[this.node.key] = {checked: false, partialChecked: false};
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
            return [this.node.styleClass, {
                'p-highlight': this.selected
            }]
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
            return (this.selectionMode && this.selectionKeys) ? this.selectionKeys[this.node.key] === true : false;
        },
        childLevel() {
            return this.level + 1;
        },
        checked() {
            return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked: false;
        },
        partialChecked() {
            return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked: false;
        }
    },
    components: {
        'TTBodyCell': BodyCell
    }
}
</script>
