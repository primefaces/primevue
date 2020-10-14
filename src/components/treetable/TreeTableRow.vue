<template>
    <tr :class="containerClass" @click="onClick" @keydown="onKeyDown" @touchend="onTouchEnd" :style="node.style" tabindex="0">
        <td v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.bodyStyle" :class="col.bodyClass">
            <button type="button" class="p-treetable-toggler p-link" @click="toggle" v-if="col.expander" :style="togglerStyle" tabindex="-1" v-ripple>
                <i :class="togglerIcon"></i>
            </button>
            <div class="p-checkbox p-treetable-checkbox p-component" @click="toggleCheckbox" v-if="checkboxSelectionMode && col.expander" role="checkbox" :aria-checked="checked">
                <div class="p-hidden-accessible">
                    <input type="checkbox" @focus="onCheckboxFocus" @blur="onCheckboxBlur" />
                </div>
                <div ref="checkboxEl" :class="checkboxClass">
                    <span :class="checkboxIcon"></span>
                </div>
            </div>
            <TTColumnSlot :node="node" :column="col" type="body" v-if="col.$scopedSlots.body" />
            <template v-else><span>{{resolveFieldData(node.data, col.field)}}</span></template>
        </td>
    </tr>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import TreeTableColumnSlot from './TreeTableColumnSlot';
import Ripple from '../ripple/Ripple';

export default {
    name: 'sub-ttnode',
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
    data() {
        return {
            checkboxFocused: false
        }
    },
    nodeTouched: false,
    methods: {
        resolveFieldData(rowData, field) {
            return ObjectUtils.resolveFieldData(rowData, field);
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
        onCheckboxFocus() {
           this.checkboxFocused = true;
        },
        onCheckboxBlur() {
            this.checkboxFocused = false;
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
        togglerIcon() {
            return ['p-treetable-toggler-icon pi', {'pi-chevron-right': !this.expanded, 'pi-chevron-down': this.expanded}];
        },
        togglerStyle() {
            return {
                marginLeft: this.level * this.indentation + 'rem',
                visibility: this.leaf ? 'hidden' : 'visible'
            };
        },
        childLevel() {
            return this.level + 1;
        },
        checkboxSelectionMode() {
            return this.selectionMode === 'checkbox';
        },
        checkboxClass() {
            return ['p-checkbox-box', {'p-highlight': this.checked, 'p-focus': this.checkboxFocused, 'p-indeterminate': this.partialChecked}];
        },
        checkboxIcon() {
            return ['p-checkbox-icon', {'pi pi-check': this.checked, 'pi pi-minus': this.partialChecked}];
        },
        checked() {
            return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked: false;
        },
        partialChecked() {
            return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked: false;
        }
    },
    components: {
        'TTColumnSlot': TreeTableColumnSlot
    },
    directives: {
        'ripple': Ripple
    }
}
</script>