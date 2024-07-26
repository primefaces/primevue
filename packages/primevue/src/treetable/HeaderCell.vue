<template>
    <th
        :class="containerClass"
        :style="[containerStyle]"
        @click="onClick"
        @keydown="onKeyDown"
        :tabindex="columnProp('sortable') ? '0' : null"
        :aria-sort="ariaSort"
        role="columnheader"
        v-bind="{ ...getColumnPT('root'), ...getColumnPT('headerCell') }"
        :data-p-sortable-column="columnProp('sortable')"
        :data-p-resizable-column="resizableColumns"
        :data-p-sorted="isColumnSorted()"
        :data-p-frozen-column="columnProp('frozen')"
    >
        <span v-if="resizableColumns && !columnProp('frozen')" :class="cx('columnResizer')" @mousedown="onResizeStart" v-bind="getColumnPT('columnResizer')"></span>
        <div :class="cx('columnHeaderContent')" v-bind="getColumnPT('columnHeaderContent')">
            <component v-if="column.children && column.children.header" :is="column.children.header" :column="column" />
            <span v-if="columnProp('header')" :class="cx('columnTitle')" v-bind="getColumnPT('columnTitle')">{{ columnProp('header') }}</span>
            <span v-if="columnProp('sortable')" v-bind="getColumnPT('sort')">
                <component :is="(column.children && column.children.sorticon) || sortableColumnIcon" :sorted="sortState.sorted" :sortOrder="sortState.sortOrder" :class="cx('sortIcon')" v-bind="getColumnPT('sortIcon')" />
            </span>
            <Badge v-if="isMultiSorted()" :class="cx('pcSortBadge')" v-bind="getColumnPT('pcSortBadge')" :value="getMultiSortMetaIndex() + 1" size="small" />
        </div>
    </th>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import { getNextElementSibling, getPreviousElementSibling, getOuterWidth, getAttribute, getIndex } from '@primeuix/utils/dom';
import { getVNodeProp } from '@primevue/core/utils';
import SortAltIcon from '@primevue/icons/sortalt';
import SortAmountDownIcon from '@primevue/icons/sortamountdown';
import SortAmountUpAltIcon from '@primevue/icons/sortamountupalt';
import Badge from 'primevue/badge';
import { mergeProps } from 'vue';

export default {
    name: 'HeaderCell',
    hostName: 'TreeTable',
    extends: BaseComponent,
    emits: ['column-click', 'column-resizestart'],
    props: {
        column: {
            type: Object,
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        multiSortMeta: {
            type: Array,
            default: null
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        index: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            styleObject: {}
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
        columnProp(prop) {
            return getVNodeProp(this.column, prop);
        },
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index: this.index,
                    sorted: this.isColumnSorted(),
                    frozen: this.$parentInstance.scrollable && this.columnProp('frozen'),
                    resizable: this.resizableColumns,
                    scrollable: this.$parentInstance.scrollable,
                    showGridlines: this.$parentInstance.showGridlines,
                    size: this.$parentInstance?.size
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo:
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');

                if (align === 'right') {
                    let right = 0;
                    let next = getNextElementSibling(this.$el, '[data-p-frozen-column="true"]');

                    if (next) {
                        right = getOuterWidth(next) + parseFloat(next.style.right || 0);
                    }

                    this.styleObject.right = right + 'px';
                } else {
                    let left = 0;
                    let prev = getPreviousElementSibling(this.$el, '[data-p-frozen-column="true"]');

                    if (prev) {
                        left = getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                    }

                    this.styleObject.left = left + 'px';
                }

                let filterRow = this.$el.parentElement.nextElementSibling;

                if (filterRow) {
                    let index = getIndex(this.$el);

                    filterRow.children[index].style.left = this.styleObject.left;
                    filterRow.children[index].style.right = this.styleObject.right;
                }
            }
        },
        onClick(event) {
            this.$emit('column-click', { originalEvent: event, column: this.column });
        },
        onKeyDown(event) {
            if ((event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') && event.currentTarget.nodeName === 'TH' && getAttribute(event.currentTarget, 'data-p-sortable-column')) {
                this.$emit('column-click', { originalEvent: event, column: this.column });

                event.preventDefault();
            }
        },
        onResizeStart(event) {
            this.$emit('column-resizestart', event);
        },
        getMultiSortMetaIndex() {
            let index = -1;

            for (let i = 0; i < this.multiSortMeta.length; i++) {
                let meta = this.multiSortMeta[i];

                if (meta.field === this.columnProp('field') || meta.field === this.columnProp('sortField')) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        isMultiSorted() {
            return this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1;
        },
        isColumnSorted() {
            return this.sortMode === 'single' ? this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField')) : this.isMultiSorted();
        }
    },
    computed: {
        containerClass() {
            return [this.columnProp('headerClass'), this.columnProp('class'), this.cx('headerCell')];
        },
        containerStyle() {
            let headerStyle = this.columnProp('headerStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, headerStyle, this.styleObject] : [columnStyle, headerStyle];
        },
        sortState() {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted = this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'));
                sortOrder = sorted ? this.sortOrder : 0;
            } else if (this.sortMode === 'multiple') {
                let metaIndex = this.getMultiSortMetaIndex();

                if (metaIndex > -1) {
                    sorted = true;
                    sortOrder = this.multiSortMeta[metaIndex].order;
                }
            }

            return {
                sorted,
                sortOrder
            };
        },
        sortableColumnIcon() {
            const { sorted, sortOrder } = this.sortState;

            if (!sorted) return SortAltIcon;
            else if (sorted && sortOrder > 0) return SortAmountUpAltIcon;
            else if (sorted && sortOrder < 0) return SortAmountDownIcon;

            return null;
        },
        ariaSort() {
            if (this.columnProp('sortable')) {
                const { sorted, sortOrder } = this.sortState;

                if (sorted && sortOrder < 0) return 'descending';
                else if (sorted && sortOrder > 0) return 'ascending';
                else return 'none';
            } else {
                return null;
            }
        }
    },
    components: {
        Badge,
        SortAltIcon: SortAltIcon,
        SortAmountUpAltIcon: SortAmountUpAltIcon,
        SortAmountDownIcon: SortAmountDownIcon
    }
};
</script>
