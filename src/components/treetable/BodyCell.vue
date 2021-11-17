<template>
   <td :style="containerStyle" :class="containerClass">
        <button type="button" class="p-treetable-toggler p-link" @click="toggle" v-if="columnProp('expander')" :style="togglerStyle" tabindex="-1" v-ripple>
            <i :class="togglerIcon"></i>
        </button>
        <div class="p-checkbox p-treetable-checkbox p-component" @click="toggleCheckbox" v-if="checkboxSelectionMode && columnProp('expander')" role="checkbox" :aria-checked="checked">
            <div class="p-hidden-accessible">
                <input type="checkbox" @focus="onCheckboxFocus" @blur="onCheckboxBlur" />
            </div>
            <div ref="checkboxEl" :class="checkboxClass">
                <span :class="checkboxIcon"></span>
            </div>
        </div>
        <component :is="column.children.body" :node="node" :column="column" v-if="column.children && column.children.body" />
        <template v-else><span>{{resolveFieldData(node.data, columnProp('field'))}}</span></template>
    </td>
</template>

<script>
import {DomHandler,ObjectUtils} from 'primevue/utils';
import Ripple from 'primevue/ripple'

export default {
    name: 'BodyCell',
    emits: ['node-toggle','checkbox-toggle'],
    props: {
        node: {
            type: Object,
            default: null
        },
        column: {
            type: Object,
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
        leaf: {
            type: Boolean,
            default: false
        },
        expanded: {
            type: Boolean,
            default: false
        },
        selectionMode: {
            type: String,
            default: null
        },
        checked: {
            type: Boolean,
            default: false
        },
        partialChecked: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            styleObject: {},
            checkboxFocused: false
        }
    },
    mounted() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    updated() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    methods: {
        toggle() {
            this.$emit('node-toggle', this.node);
        },
        columnProp(prop) {
            return ObjectUtils.getVNodeProp(this.column, prop);
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');
                if (align === 'right') {
                    let right = 0;
                    let next = this.$el.nextElementSibling;
                    if (next) {
                        right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right);
                    }
                    this.styleObject.right = right + 'px';
                }
                else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;
                    if (prev) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left);
                    }
                    this.styleObject.left = left + 'px';
                }
            }
        },
        resolveFieldData(rowData, field) {
            return ObjectUtils.resolveFieldData(rowData, field);
        },
        toggleCheckbox() {
            this.$emit('checkbox-toggle');
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
            return [this.columnProp('bodyClass'), this.columnProp('class'), {
                'p-frozen-column': this.columnProp('frozen')
            }];
        },
        containerStyle() {
            let bodyStyle = this.columnProp('bodyStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject]: [columnStyle, bodyStyle];
        },
        togglerStyle() {
            return {
                marginLeft: this.level * this.indentation + 'rem',
                visibility: this.leaf ? 'hidden' : 'visible'
            };
        },
        togglerIcon() {
            return ['p-treetable-toggler-icon pi', {'pi-chevron-right': !this.expanded, 'pi-chevron-down': this.expanded}];
        },
        checkboxSelectionMode() {
            return this.selectionMode === 'checkbox';
        },
        checkboxClass() {
            return ['p-checkbox-box', {'p-highlight': this.checked, 'p-focus': this.checkboxFocused, 'p-indeterminate': this.partialChecked}];
        },
        checkboxIcon() {
            return ['p-checkbox-icon', {'pi pi-check': this.checked, 'pi pi-minus': this.partialChecked}];
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
