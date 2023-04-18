<template>
    <td :style="containerStyle" :class="containerClass" role="cell">
        <button v-if="columnProp('expander')" v-ripple type="button" class="p-treetable-toggler p-link" @click="toggle" :style="togglerStyle" tabindex="-1">
            <component v-if="templates['togglericon']" :is="templates['togglericon']" :node="node" :expanded="expanded" class="p-tree-toggler-icon" />
            <component v-else-if="expanded" :is="node.expandedIcon ? 'span' : 'ChevronDownIcon'" class="p-tree-toggler-icon" />
            <component v-else :is="node.collapsedIcon ? 'span' : 'ChevronRightIcon'" class="p-tree-toggler-icon" />
        </button>
        <div v-if="checkboxSelectionMode && columnProp('expander')" :class="['p-checkbox p-treetable-checkbox p-component', { 'p-checkbox-focused': checkboxFocused }]" @click="toggleCheckbox">
            <div class="p-hidden-accessible">
                <input type="checkbox" @focus="onCheckboxFocus" @blur="onCheckboxBlur" tabindex="-1" />
            </div>
            <div ref="checkboxEl" :class="checkboxClass">
                <component v-if="templates['checkboxicon']" :is="templates['checkboxicon']" :checked="checked" :partialChecked="partialChecked" class="p-checkbox-icon" />
                <component v-else :is="checked ? 'CheckIcon' : partialChecked ? 'MinusIcon' : null" class="p-checkbox-icon" />
            </div>
        </div>
        <component v-if="column.children && column.children.body" :is="column.children.body" :node="node" :column="column" />
        <template v-else>
            <span>{{ resolveFieldData(node.data, columnProp('field')) }}</span>
        </template>
    </td>
</template>

<script>
import CheckIcon from 'primevue/icons/check';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronRightIcon from 'primevue/icons/chevronright';
import MinusIcon from 'primevue/icons/minus';
import Ripple from 'primevue/ripple';
import { DomHandler, ObjectUtils } from 'primevue/utils';

export default {
    name: 'BodyCell',
    emits: ['node-toggle', 'checkbox-toggle'],
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
        },
        templates: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            styleObject: {},
            checkboxFocused: false
        };
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
                        right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                    }

                    this.styleObject.right = right + 'px';
                } else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;

                    if (prev) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
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
            return [
                this.columnProp('bodyClass'),
                this.columnProp('class'),
                {
                    'p-frozen-column': this.columnProp('frozen')
                }
            ];
        },
        containerStyle() {
            let bodyStyle = this.columnProp('bodyStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
        },
        togglerStyle() {
            return {
                marginLeft: this.level * this.indentation + 'rem',
                visibility: this.leaf ? 'hidden' : 'visible'
            };
        },
        checkboxSelectionMode() {
            return this.selectionMode === 'checkbox';
        },
        checkboxClass() {
            return ['p-checkbox-box', { 'p-highlight': this.checked, 'p-focus': this.checkboxFocused, 'p-indeterminate': this.partialChecked }];
        }
    },
    components: {
        ChevronRightIcon: ChevronRightIcon,
        ChevronDownIcon: ChevronDownIcon,
        CheckIcon: CheckIcon,
        MinusIcon: MinusIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
