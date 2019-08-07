<template>
    <tr :class="containerClass" @click="onClick" @keydown="onKeyDown" @touchend="onTouchEnd" :style="node.style">
        <td v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.bodyStyle" :class="col.bodyClass">
            <span class="p-treetable-toggler p-unselectable-text" @click="toggle" v-if="col.expander" :style="togglerStyle">
                <i :class="togglerIcon"></i>
            </span>
            <TTColumnSlot :data="node" :column="col" type="body" v-if="col.$scopedSlots.body" />
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
            if (DomHandler.hasClass(event.target, 'p-treetable-toggler') || DomHandler.hasClass(event.target, 'p-treetable-toggler-icon')) {
                return;
            }

            if (this.isCheckboxSelectionMode()) {
                this.toggleCheckbox();
            }
            else {
                this.$emit('node-click', {
                    originalEvent: event,
                    nodeTouched: this.nodeTouched,
                    node: this.node
                });
            }

            this.nodeTouched = false;
        },
        isCheckboxSelectionMode() {
            return this.selectionMode === 'checkbox';
        },
        toggleCheckbox() {
            
        },
        onTouchEnd() {
            this.nodeTouched = true;
        },
        onKeyDown(event) {
            //todo
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
        }
    },
    components: {
        'TTColumnSlot': TreeTableColumnSlot
    }
}
</script>