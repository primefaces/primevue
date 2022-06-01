<template>
    <th :style="containerStyle" :class="containerClass" :tabindex="columnProp('sortable') ? '0' : null" role="cell"
        @click="onClick" @keydown="onKeyDown" @mousedown="onMouseDown"
        @dragstart="onDragStart" @dragover="onDragOver" @dragleave="onDragLeave" @drop="onDrop"
        :colspan="columnProp('colspan')" :rowspan="columnProp('rowspan')" :aria-sort="ariaSort">
        <span class="p-column-resizer" @mousedown="onResizeStart" v-if="resizableColumns && !columnProp('frozen')"></span>
        <div class="p-column-header-content">
            <component :is="column.children.header" :column="column" v-if="column.children && column.children.header"/>
            <span class="p-column-title" v-if="columnProp('header')">{{columnProp('header')}}</span>
            <span v-if="columnProp('sortable')" :class="sortableColumnIcon"></span>
            <span v-if="isMultiSorted()" class="p-sortable-column-badge">{{getBadgeValue()}}</span>
            <DTHeaderCheckbox :checked="allRowsSelected" @change="onHeaderCheckboxChange" :disabled="empty" v-if="columnProp('selectionMode') ==='multiple' && filterDisplay !== 'row'" />
            <DTColumnFilter v-if="filterDisplay === 'menu' && column.children && column.children.filter" :field="columnProp('filterField')||columnProp('field')" :type="columnProp('dataType')" display="menu"
            :showMenu="columnProp('showFilterMenu')" :filterElement="column.children && column.children.filter"
            :filterHeaderTemplate="column.children && column.children.filterheader" :filterFooterTemplate="column.children && column.children.filterfooter"
            :filterClearTemplate="column.children && column.children.filterclear" :filterApplyTemplate="column.children && column.children.filterapply"
            :filters="filters" :filtersStore="filtersStore" @filter-change="$emit('filter-change', $event)" @filter-apply="$emit('filter-apply')" :filterMenuStyle="columnProp('filterMenuStyle')" :filterMenuClass="columnProp('filterMenuClass')"
            :showOperator="columnProp('showFilterOperator')" :showClearButton="columnProp('showClearButton')" :showApplyButton="columnProp('showApplyButton')"
            :showMatchModes="columnProp('showFilterMatchModes')" :showAddButton="columnProp('showAddButton')" :matchModeOptions="columnProp('filterMatchModeOptions')" :maxConstraints="columnProp('maxConstraints')"
            @operator-change="$emit('operator-change',$event)" @matchmode-change="$emit('matchmode-change', $event)" @constraint-add="$emit('constraint-add', $event)" @constraint-remove="$emit('constraint-remove', $event)" @apply-click="$emit('apply-click',$event)"/>
        </div>
    </th>
</template>

<script>
import {DomHandler,ObjectUtils} from 'primevue/utils';
import HeaderCheckbox from './HeaderCheckbox.vue';
import ColumnFilter from './ColumnFilter.vue';

export default {
    name: 'HeaderCell',
    emits: ['column-click', 'column-mousedown', 'column-dragstart', 'column-dragover', 'column-dragleave', 'column-drop',
            'column-resizestart', 'checkbox-change', 'filter-change', 'filter-apply',
            'operator-change', 'matchmode-change', 'constraint-add', 'constraint-remove', 'filter-clear', 'apply-click'],
    props: {
        column: {
            type: Object,
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        groupRowsBy: {
            type: [Array,String],
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
        }
    },
    data() {
        return {
            styleObject: {}
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
        columnProp(prop) {
            return ObjectUtils.getVNodeProp(this.column, prop);
        },
        onClick(event) {
            this.$emit('column-click', {originalEvent: event, column: this.column});
        },
        onKeyDown(event) {
            if (event.which === 13 && event.currentTarget.nodeName === 'TH' && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
                this.$emit('column-click', {originalEvent: event, column: this.column});
            }
        },
        onMouseDown(event) {
            this.$emit('column-mousedown', {originalEvent: event, column: this.column});
        },
        onDragStart(event) {
            this.$emit('column-dragstart', event);
        },
        onDragOver(event) {
            this.$emit('column-dragover', event);
        },
        onDragLeave(event) {
            this.$emit('column-dragleave', event);
        },
        onDrop(event) {
            this.$emit('column-drop', event);
        },
        onResizeStart(event) {
            this.$emit('column-resizestart', event);
        },
        getMultiSortMetaIndex() {
            return this.multiSortMeta.findIndex(meta => (meta.field === this.columnProp('field') || meta.field === this.columnProp('sortField')));
        },
        getBadgeValue() {
            let index = this.getMultiSortMetaIndex();

            return (this.groupRowsBy && this.groupRowsBy === this.groupRowSortField) && index > -1 ? index : index + 1;
        },
        isMultiSorted() {
            return this.sortMode === 'multiple' && this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1
        },
        isColumnSorted() {
            return this.sortMode === 'single' ? (this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'))) : this.isMultiSorted();
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
                }
                else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;
                    if (prev) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                    }
                    this.styleObject.left = left + 'px';
                }

                let filterRow = this.$el.parentElement.nextElementSibling;
                if (filterRow) {
                    let index = DomHandler.index(this.$el);
                    filterRow.children[index].style.left = this.styleObject.left;
                    filterRow.children[index].style.right = this.styleObject.right;
                }
            }
        },
        onHeaderCheckboxChange(event) {
            this.$emit('checkbox-change', event);
        }
    },
    computed: {
        containerClass() {
            return [this.filterColumn ? this.columnProp('filterHeaderClass') : this.columnProp('headerClass'), this.columnProp('class'), {
                    'p-sortable-column': this.columnProp('sortable'),
                    'p-resizable-column': this.resizableColumns,
                    'p-highlight': this.isColumnSorted(),
                    'p-filter-column': this.filterColumn,
                    'p-frozen-column': this.columnProp('frozen')
            }];
        },
        containerStyle() {
            let headerStyle = this.filterColumn ? this.columnProp('filterHeaderStyle'): this.columnProp('headerStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, headerStyle, this.styleObject]: [columnStyle, headerStyle];
        },
        sortableColumnIcon() {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted = this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'));
                sortOrder = sorted ? this.sortOrder: 0;
            }
            else if (this.sortMode === 'multiple') {
                let metaIndex = this.getMultiSortMetaIndex();
                if (metaIndex > -1) {
                    sorted = true;
                    sortOrder = this.multiSortMeta[metaIndex].order;
                }
            }

            return [
                'p-sortable-column-icon pi pi-fw', {
                    'pi-sort-alt': !sorted,
                    'pi-sort-amount-up-alt': sorted && sortOrder > 0,
                    'pi-sort-amount-down': sorted && sortOrder < 0
                }
            ];
        },
        ariaSort() {
            if (this.columnProp('sortable')) {
                const sortIcon = this.sortableColumnIcon;
                if (sortIcon[1]['pi-sort-amount-down'])
                    return 'descending';
                else if (sortIcon[1]['pi-sort-amount-up-alt'])
                    return 'ascending';
                else
                    return 'none';
            }
            else {
                return null;
            }
        }
    },
    components: {
        'DTHeaderCheckbox': HeaderCheckbox,
        'DTColumnFilter': ColumnFilter
    }
}
</script>
