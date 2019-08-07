<template>
    <tr :class="containerClass" @click="onClick" @keydown="onKeyDown" @touchend="onTouchEnd" :style="node.style">
        <td v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.bodyStyle" :class="col.bodyClass">
            <span class="p-treetable-toggler p-unselectable-text" @click="toggle" v-if="col.expander" :style="togglerStyle">
                <i :class="togglerIcon"></i>
            </span>
            <div class="p-checkbox p-treetable-checkbox p-component" @click="toggleCheckbox" v-if="checkboxSelectionMode">
                <div class="p-hidden-accessible">
                    <input type="checkbox" />
                </div>
                <div :class="checkboxClass">
                    <span :class="checkboxIcon"></span>
                </div>
            </div>
            <TTColumnSlot :node="node" :column="col" type="body" v-if="col.$scopedSlots.body" />
            <template v-else>{{resolveFieldData(node.data, col.field)}}</template>
        </td>
    </tr>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import TreeTableColumnSlot from './TreeTableColumnSlot';

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
            let targetNode = event.target.nodeName;
            if (targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode === 'A' || DomHandler.hasClass(event.target, 'p-clickable')
                || DomHandler.hasClass(event.target, 'p-treetable-toggler') || DomHandler.hasClass(event.target.parentElement, 'p-treetable-toggler')) {
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
            //todo
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
            return ['p-treetable-toggler-icon pi pi-fw', {'pi-chevron-right': !this.expanded, 'pi-chevron-down': this.expanded}];
        },
        togglerStyle() {
            return {
                marginLeft: this.level * 16 + 'px', 
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
            return ['p-checkbox-box', {'p-highlight': this.checked}];
        },
        checkboxIcon() {
            return ['p-checkbox-icon p-c', {'pi pi-check': this.checked, 'pi pi-minus': this.partialChecked}];
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
    }
}
</script>