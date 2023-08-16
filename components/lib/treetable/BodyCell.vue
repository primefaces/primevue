<template>
    <td :style="containerStyle" :class="containerClass" role="cell" v-bind="{ ...getColumnPT('root'), ...getColumnPT('bodyCell') }">
        <button v-if="columnProp('expander')" v-ripple type="button" :class="cx('rowToggler')" @click="toggle" :style="togglerStyle" tabindex="-1" v-bind="getColumnPT('rowToggler')">
            <component v-if="templates['togglericon']" :is="templates['togglericon']" :node="node" :expanded="expanded" :class="cx('rowTogglerIcon')" />
            <component v-else-if="expanded" :is="node.expandedIcon ? 'span' : 'ChevronDownIcon'" :class="cx('rowTogglerIcon')" v-bind="getColumnPT('rowTogglerIcon')" />
            <component v-else :is="node.collapsedIcon ? 'span' : 'ChevronRightIcon'" :class="cx('rowTogglerIcon')" v-bind="getColumnPT('rowTogglerIcon')" />
        </button>
        <div v-if="checkboxSelectionMode && columnProp('expander')" :class="cx('checkboxWrapper')" @click="toggleCheckbox" v-bind="getColumnCheckboxPT('checkboxWrapper')">
            <div class="p-hidden-accessible" v-bind="getColumnPT('hiddenInputWrapper')" :data-p-hidden-accessible="true">
                <input type="checkbox" @focus="onCheckboxFocus" @blur="onCheckboxBlur" tabindex="-1" v-bind="getColumnPT('hiddenInput')" />
            </div>
            <div ref="checkboxEl" :class="cx('checkbox')" v-bind="getColumnCheckboxPT('checkbox')">
                <component v-if="templates['checkboxicon']" :is="templates['checkboxicon']" :checked="checked" :partialChecked="partialChecked" :class="cx('checkboxicon')" />
                <component v-else :is="checked ? 'CheckIcon' : partialChecked ? 'MinusIcon' : null" :class="cx('checkboxicon')" v-bind="getColumnCheckboxPT('checkboxIcon')" />
            </div>
        </div>
        <component v-if="column.children && column.children.body" :is="column.children.body" :node="node" :column="column" />
        <template v-else>
            <span v-bind="getColumnPT('bodyCellContent')">{{ resolveFieldData(node.data, columnProp('field')) }}</span>
        </template>
    </td>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import CheckIcon from 'primevue/icons/check';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronRightIcon from 'primevue/icons/chevronright';
import MinusIcon from 'primevue/icons/minus';
import Ripple from 'primevue/ripple';
import { DomHandler, ObjectUtils } from 'primevue/utils';
import { mergeProps } from 'vue';

export default {
    name: 'BodyCell',
    hostName: 'TreeTable',
    extends: BaseComponent,
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
        },
        index: {
            type: Number,
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
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index: this.index,
                    focused: this.checkboxFocused,
                    selectable: this.$parentInstance.rowHover || this.$parentInstance.rowSelectionMode,
                    selected: this.$parent.selected,
                    frozen: this.columnProp('frozen'),
                    scrollable: this.$parentInstance.scrollable,
                    scrollDirection: this.$parentInstance.scrollDirection,
                    showGridlines: this.$parentInstance.showGridlines,
                    size: this.$parentInstance?.size
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo
        },
        getColumnCheckboxPT(key) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    checked: this.checked,
                    focused: this.checkboxFocused,
                    partialChecked: this.partialChecked
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
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
            return [this.columnProp('bodyClass'), this.columnProp('class'), this.cx('bodyCell')];
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
