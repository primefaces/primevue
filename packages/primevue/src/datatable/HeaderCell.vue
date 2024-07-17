<template>
    <th
        :style="containerStyle"
        :class="containerClass"
        :tabindex="columnProp('sortable') ? '0' : null"
        role="columnheader"
        :colspan="columnProp('colspan')"
        :rowspan="columnProp('rowspan')"
        :aria-sort="ariaSort"
        @click="onClick"
        @keydown="onKeyDown"
        @mousedown="onMouseDown"
        @dragstart="onDragStart"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
        @drop="onDrop"
        v-bind="{ ...getColumnPT('root'), ...getColumnPT('headerCell') }"
        :data-p-sortable-column="columnProp('sortable')"
        :data-p-resizable-column="resizableColumns"
        :data-p-sorted="isColumnSorted()"
        :data-p-filter-column="filterColumn"
        :data-p-frozen-column="columnProp('frozen')"
        :data-p-reorderable-column="reorderableColumns"
    >
        <span v-if="resizableColumns && !columnProp('frozen')" :class="cx('columnResizer')" @mousedown="onResizeStart" v-bind="getColumnPT('columnResizer')"></span>
        <div :class="cx('columnHeaderContent')" v-bind="getColumnPT('columnHeaderContent')">
            <component v-if="column.children && column.children.header" :is="column.children.header" :column="column" />
            <span v-if="columnProp('header')" :class="cx('columnTitle')" v-bind="getColumnPT('columnTitle')">{{ columnProp('header') }}</span>
            <span v-if="columnProp('sortable')" v-bind="getColumnPT('sort')">
                <component :is="(column.children && column.children.sorticon) || sortableColumnIcon" :sorted="sortState.sorted" :sortOrder="sortState.sortOrder" :class="cx('sortIcon')" v-bind="getColumnPT('sorticon')" />
            </span>
            <Badge v-if="isMultiSorted()" :class="cx('pcSortBadge')" :pt="getColumnPT('pcSortBadge')" :value="getBadgeValue()" size="small" />
            <DTHeaderCheckbox
                v-if="columnProp('selectionMode') === 'multiple' && filterDisplay !== 'row'"
                :checked="allRowsSelected"
                @change="onHeaderCheckboxChange"
                :disabled="empty"
                :headerCheckboxIconTemplate="column.children && column.children.headercheckboxicon"
                :column="column"
                :unstyled="unstyled"
                :pt="pt"
            />
            <DTColumnFilter
                v-if="filterDisplay === 'menu' && column.children && column.children.filter"
                :field="columnProp('filterField') || columnProp('field')"
                :type="columnProp('dataType')"
                display="menu"
                :showMenu="columnProp('showFilterMenu')"
                :filterElement="column.children && column.children.filter"
                :filterHeaderTemplate="column.children && column.children.filterheader"
                :filterFooterTemplate="column.children && column.children.filterfooter"
                :filterClearTemplate="column.children && column.children.filterclear"
                :filterApplyTemplate="column.children && column.children.filterapply"
                :filterIconTemplate="column.children && column.children.filtericon"
                :filterAddIconTemplate="column.children && column.children.filteraddicon"
                :filterRemoveIconTemplate="column.children && column.children.filterremoveicon"
                :filterClearIconTemplate="column.children && column.children.filterclearicon"
                :filters="filters"
                :filtersStore="filtersStore"
                :filterInputProps="filterInputProps"
                :filterButtonProps="filterButtonProps"
                @filter-change="$emit('filter-change', $event)"
                @filter-apply="$emit('filter-apply')"
                :filterMenuStyle="columnProp('filterMenuStyle')"
                :filterMenuClass="columnProp('filterMenuClass')"
                :showOperator="columnProp('showFilterOperator')"
                :showClearButton="columnProp('showClearButton')"
                :showApplyButton="columnProp('showApplyButton')"
                :showMatchModes="columnProp('showFilterMatchModes')"
                :showAddButton="columnProp('showAddButton')"
                :matchModeOptions="columnProp('filterMatchModeOptions')"
                :maxConstraints="columnProp('maxConstraints')"
                @operator-change="$emit('operator-change', $event)"
                @matchmode-change="$emit('matchmode-change', $event)"
                @constraint-add="$emit('constraint-add', $event)"
                @constraint-remove="$emit('constraint-remove', $event)"
                @apply-click="$emit('apply-click', $event)"
                :column="column"
                :unstyled="unstyled"
                :pt="pt"
            />
        </div>
    </th>
</template>

<script>
import { getAttribute, getIndex, getNextElementSibling, getOuterWidth, getPreviousElementSibling } from '@primeuix/utils/dom';
import BaseComponent from '@primevue/core/basecomponent';
import { getVNodeProp } from '@primevue/core/utils';
import SortAltIcon from '@primevue/icons/sortalt';
import SortAmountDownIcon from '@primevue/icons/sortamountdown';
import SortAmountUpAltIcon from '@primevue/icons/sortamountupalt';
import Badge from 'primevue/badge';
import { mergeProps } from 'vue';
import ColumnFilter from './ColumnFilter.vue';
import HeaderCheckbox from './HeaderCheckbox.vue';

export default {
    name: 'HeaderCell',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: [
        'column-click',
        'column-mousedown',
        'column-dragstart',
        'column-dragover',
        'column-dragleave',
        'column-drop',
        'column-resizestart',
        'checkbox-change',
        'filter-change',
        'filter-apply',
        'operator-change',
        'matchmode-change',
        'constraint-add',
        'constraint-remove',
        'filter-clear',
        'apply-click'
    ],
    props: {
        column: {
            type: Object,
            default: null
        },
        index: {
            type: Number,
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        groupRowsBy: {
            type: [Array, String, Function],
            default: null
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        groupRowSortField: {
            type: [String, Function],
            default: null
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
        allRowsSelected: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        filterDisplay: {
            type: String,
            default: null
        },
        filters: {
            type: Object,
            default: null
        },
        filtersStore: {
            type: Object,
            default: null
        },
        filterColumn: {
            type: Boolean,
            default: false
        },
        reorderableColumns: {
            type: Boolean,
            default: false
        },
        filterInputProps: {
            type: null,
            default: null
        },
        filterButtonProps: {
            type: null,
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
                    sortable: this.columnProp('sortable') === '' || this.columnProp('sortable'),
                    sorted: this.isColumnSorted(),
                    resizable: this.resizableColumns,
                    size: this.$parentInstance?.$parentInstance?.size,
                    showGridlines: this.$parentInstance?.$parentInstance?.showGridlines || false
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo:
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
        onMouseDown(event) {
            this.$emit('column-mousedown', { originalEvent: event, column: this.column });
        },
        onDragStart(event) {
            this.$emit('column-dragstart', { originalEvent: event, column: this.column });
        },
        onDragOver(event) {
            this.$emit('column-dragover', { originalEvent: event, column: this.column });
        },
        onDragLeave(event) {
            this.$emit('column-dragleave', { originalEvent: event, column: this.column });
        },
        onDrop(event) {
            this.$emit('column-drop', { originalEvent: event, column: this.column });
        },
        onResizeStart(event) {
            this.$emit('column-resizestart', event);
        },
        getMultiSortMetaIndex() {
            return this.multiSortMeta.findIndex((meta) => meta.field === this.columnProp('field') || meta.field === this.columnProp('sortField'));
        },
        getBadgeValue() {
            let index = this.getMultiSortMetaIndex();

            return this.groupRowsBy && this.groupRowsBy === this.groupRowSortField && index > -1 ? index : index + 1;
        },
        isMultiSorted() {
            return this.sortMode === 'multiple' && this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1;
        },
        isColumnSorted() {
            return this.sortMode === 'single' ? this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField')) : this.isMultiSorted();
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

                    if (filterRow.children[index]) {
                        filterRow.children[index].style.left = this.styleObject.left;
                        filterRow.children[index].style.right = this.styleObject.right;
                    }
                }
            }
        },
        onHeaderCheckboxChange(event) {
            this.$emit('checkbox-change', event);
        }
    },
    computed: {
        containerClass() {
            return [this.cx('headerCell'), this.filterColumn ? this.columnProp('filterHeaderClass') : this.columnProp('headerClass'), this.columnProp('class')];
        },
        containerStyle() {
            let headerStyle = this.filterColumn ? this.columnProp('filterHeaderStyle') : this.columnProp('headerStyle');
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
        DTHeaderCheckbox: HeaderCheckbox,
        DTColumnFilter: ColumnFilter,
        SortAltIcon: SortAltIcon,
        SortAmountUpAltIcon: SortAmountUpAltIcon,
        SortAmountDownIcon: SortAmountDownIcon
    }
};
</script>
