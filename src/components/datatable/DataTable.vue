<template>
    <div :class="containerClass">
        <slot></slot>
        <div class="p-datatable-loading" v-if="loading">
            <div class="p-datatable-loading-overlay p-component-overlay"></div>
            <div class="p-datatable-loading-content">
                <i :class="loadingIconClass"></i>
            </div>
        </div>
        <div class="p-datatable-wrapper">
            <div class="p-datatable-header" v-if="$scopedSlots.header">
                <slot name="header"></slot>
            </div>
            <DTPaginator v-if="paginatorTop" :rows="d_rows" :first="d_first" :totalRecords="totalRecordsLength" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
					:currentPageReportTemplate="currentPageReportTemplate" class="p-paginator-top" @page="onPage($event)" :alwaysShow="alwaysShowPaginator">
                <template #left v-if="$scopedSlots.paginatorLeft">
                    <slot name="paginatorLeft"></slot>
                </template>
                <template #right v-if="$scopedSlots.paginatorRight">
                    <slot name="paginatorRight"></slot>
                </template>
            </DTPaginator>
            <table ref="table">
                <thead class="p-datatable-thead">
                    <tr v-if="!headerColumnGroup">
                        <th v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" :class="getColumnHeaderClass(col)"
                            @click="onColumnHeaderClick($event, col)" @mousedown="onColumnHeaderMouseDown($event, col)"
                            @dragstart="onColumnHeaderDragStart($event)" @dragover="onColumnHeaderDragOver($event)" @dragleave="onColumnHeaderDragLeave($event)" @drop="onColumnHeaderDrop($event)"
                            :colspan="col.colspan" :rowspan="col.rowspan">
                            <span class="p-column-resizer p-clickable" @mousedown="onColumnResizeStart" v-if="resizableColumns"></span>
                            <ColumnSlot :column="col" type="header" v-if="col.$scopedSlots.header" />
                            <span class="p-column-title" v-if="col.header">{{col.header}}</span>
                            <span v-if="col.sortable" :class="getSortableColumnIcon(col)"></span>
                            <ColumnSlot :column="col" type="filter" v-if="col.$scopedSlots.filter" />
                            <DTHeaderCheckbox :checked="allRowsSelected" @change="toggleRowsWithCheckbox" :disabled="empty" v-if="col.selectionMode ==='multiple'" />
                        </th>
                    </tr>
                    <template v-else>
                        <tr v-for="(row,i) of headerColumnGroup.rows" :key="i">
                            <th v-for="(col,i) of row.columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" :class="getColumnHeaderClass(col)"
                            @dragstart="onColumnHeaderDragStart($event)" @dragover="onColumnHeaderDragOver($event)" @dragleave="onColumnHeaderDragLeave($event)" @drop="onColumnHeaderDrop($event)"
                                :colspan="col.colspan" :rowspan="col.rowspan">
                                <ColumnSlot :column="col" type="header" v-if="col.$scopedSlots.header" />
                                <span class="p-column-title" v-if="col.header">{{col.header}}</span>
                                <span v-if="col.sortable" :class="getSortableColumnIcon(col)"></span>
                                <ColumnSlot :column="col" type="filter" v-if="col.$scopedSlots.filter" />
                                <DTHeaderCheckbox :checked="allRowsSelected" @change="toggleRowsWithCheckbox" :disabled="empty" v-if="col.selectionMode ==='multiple'" />
                            </th>
                        </tr>
                    </template>
                </thead>
                <tbody class="p-datatable-tbody">
                    <template v-if="!empty">
                        <template v-for="(rowData, index) of dataToRender">
                            <tr class="p-rowgroup-header" v-if="rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(dataToRender, rowData, index)" :key="getRowKey(rowData, index)">
                                <td :colspan="columns.length">
                                    <slot name="groupheader" :data="rowData"></slot>
                                </td>
                            </tr>
                            <tr :class="getRowClass(rowData)" :key="getRowKey(rowData, index)"
                                @click="onRowClick($event, rowData, index)" @touchend="onRowTouchEnd($event)" @keydown="onRowKeyDown($event, rowData, index)" :tabindex="selectionMode ? '0' : null"
                                @mousedown="onRowMouseDown($event)" @dragstart="onRowDragStart($event, index)" @dragover="onRowDragOver($event,index)" @dragleave="onRowDragLeave($event)" @dragend="onRowDragEnd($event)" @drop="onRowDrop($event)">
                                <DTBodyCell v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :rowData="rowData" :column="col" :selected="isSelected(rowData)"
                                    :rowTogglerIcon="col.expander ? rowTogglerIcon(rowData): null" @row-toggle="toggleRow" 
                                    @radio-change="toggleRowWithRadio" @checkbox-change="toggleRowWithCheckbox" />
                            </tr>
                            <tr class="p-datatable-row-expansion" v-if="expandedRows && isRowExpanded(rowData)" :key="getRowKey(rowData, index) + '_expansion'">
                                <td :colspan="columns.length">
                                    <slot name="expansion" :data="rowData" :index="index">
                                    </slot>
                                </td>
                            </tr>
                        </template>
                    </template>
                    <tr v-else class="p-datatable-emptymessage">
                        <td :colspan="columns.length">
                            <slot name="empty"></slot>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="p-datatable-tfoot" v-if="hasFooter">
                    <tr v-if="!footerColumnGroup">>
                        <td v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.footerStyle" :class="col.footerClass"
                            :colspan="col.colspan" :rowspan="col.rowspan">
                            <ColumnSlot :column="col" type="footer" v-if="col.$scopedSlots.footer" />
                            {{col.footer}}
                        </td>
                    </tr>
                     <template v-else>
                        <tr v-for="(row,i) of footerColumnGroup.rows" :key="i">
                            <td v-for="(col,i) of row.columns" :key="col.columnKey||col.field||i" :style="col.footerStyle" :class="col.footerClass"
                                :colspan="col.colspan" :rowspan="col.rowspan">
                                <ColumnSlot :column="col" type="footer" v-if="col.$scopedSlots.footer" />
                                {{col.footer}}
                            </td>
                        </tr>
                    </template>
                </tfoot>
            </table>
            <DTPaginator v-if="paginatorBottom" :rows="d_rows" :first="d_first" :totalRecords="totalRecordsLength" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
					:currentPageReportTemplate="currentPageReportTemplate" class="p-paginator-bottom" @page="onPage($event)" :alwaysShow="alwaysShowPaginator">
                <template #left v-if="$scopedSlots.paginatorLeft">
                    <slot name="paginatorLeft"></slot>
                </template>
                <template #right v-if="$scopedSlots.paginatorRight">
                    <slot name="paginatorRight"></slot>
                </template>
            </DTPaginator>
            <div class="p-datatable-footer" v-if="$scopedSlots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
        <div ref="resizeHelper" class="p-column-resizer-helper p-highlight" style="display: none"></div>
        <span ref="reorderIndicatorUp" class="pi pi-arrow-down p-datatable-reorder-indicator-up" style="position: absolute; display: none" v-if="reorderableColumns" />
        <span ref="reorderIndicatorDown" class="pi pi-arrow-up p-datatable-reorder-indicator-down" style="position: absolute; display: none" v-if="reorderableColumns" />
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/FilterUtils';
import DomHandler from '../utils/DomHandler';
import Paginator from '../paginator/Paginator';
import RowRadioButton from './RowRadioButton';
import RowCheckbox from './RowCheckbox.vue';
import HeaderCheckbox from './HeaderCheckbox.vue';
import ColumnSlot from './ColumnSlot.vue';
import BodyCell from './BodyCell.vue';

export default {
    props: {
        value: {
            type: Array,
            default: null
        },
        dataKey: {
            type: String,
            default: null
        },
        rows: {
            type: Number,
            default: 0
        },
        first: {
            type: Number,
            default: 0
        },
        totalRecords: {
            type: Number,
            default: 0
        },
        paginator: {
            type: Boolean,
            default: false
        },
        paginatorPosition: {
            type: String,
            default: 'bottom'
        },
        alwaysShowPaginator: {
            type: Boolean,
            default: true
        },
        paginatorTemplate: {
            type: String,
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        },
        pageLinkSize: {
            type: Number,
            default: 5
        },
        rowsPerPageOptions: {
            type: Array,
            default: null
        },
        currentPageReportTemplate: {
            type: String,
            default: '({currentPage} of {totalPages})'
        },
        lazy: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: 'pi pi-spinner'
        },
        sortField: {
            type: String,
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        defaultSortOrder: {
            type: Number,
            default: 1
        },
        multiSortMeta: {
            type: Array,
            default: null
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        filters: {
            type: Object,
            default: null
        },
        selection: {
            type: [Array,Object],
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        compareSelectionBy: {
            type: String,
            default: 'deepEquals'
        },
        metaKeySelection: {
            type: Boolean,
            default: true
        },
        rowHover: {
            type: Boolean,
            default: false
        },
        csvSeparator: {
            type: String,
            default: ','
        },
        exportFilename: {
            type: String,
            default: 'download'
        },
        autoLayout: {
            type: Boolean,
            default: false
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        columnResizeMode: {
            type: String,
            default: 'fit'
        },
        reorderableColumns: {
            type: Boolean,
            default: false
        },
        expandedRows: {
            type: Array,
            default: null
        },
        expandedRowIcon: {
            type: String,
            default: 'pi-chevron-down'
        },
        collapsedRowIcon: {
            type: String,
            default: 'pi-chevron-right'
        },
        rowGroupMode: {
            type: String,
            default: null
        },
        groupRowsBy: {
            type: [Array,String],
            default: null
        }
    },
    data() {
        return {
            allChildren: null,
            d_first: this.first,
            d_rows: this.rows,
            d_sortField: this.sortField,
            d_sortOrder: this.sortOrder,
            d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : [],
            d_selectionKeys: null,
            d_expandedRowKeys: null,
            columnOrder: null
        };
    },
    rowTouched: false,
    anchorRowIndex: null,
    rangeRowIndex: null,
    documentColumnResizeListener: null,
    documentColumnResizeEndListener: null,
    lastResizeHelperX: null,
    resizeColumnElement: null,
    columnResizing: false,
    colReorderIconWidth: null,
    colReorderIconHeight: null,
    draggedColumn: null,
    draggedRowIndex: null,
    droppedRowIndex: null,
    rowDragging: null,
    watch: {
        first(newValue) {
            this.d_first = newValue;
        },
        rows(newValue) {
            this.d_rows = newValue;
        },
        sortField(newValue) {
            this.d_sortField = newValue;
        },
        sortOrder(newValue) {
            this.d_sortOrder = newValue;
        },
        multiSortMeta(newValue) {
            this.d_multiSortMeta = newValue;
        },
        selection(newValue) {
            if (this.dataKey) {
                this.updateSelectionKeys(newValue);
            }
        },
        expandedRows(newValue) {
            if (this.dataKey) {
                this.updateExpandedRowKeys(newValue);
            }
        }
    },
    mounted() {
        this.allChildren = this.$children;

        if (this.reorderableColumns) {
            let columnOrder = [];
            for (let child of this.allChildren) {
                if (child.$options._propKeys.indexOf('columnKey') !== -1) {
                    columnOrder.push(child.columnKey||child.field);
                }
            }
            this.columnOrder = columnOrder;
        }
    },
    beforeDestroy() {
        this.unbindColumnResizeEvents();
    },
    methods: {
        resolveFieldData(rowData, field) {
            return ObjectUtils.resolveFieldData(rowData, field);
        },
        onPage(event) {
            this.d_first = event.first;
            this.d_rows = event.rows;

            this.$emit('update:first', this.d_first);
            this.$emit('update:rows', this.d_rows);
            this.$emit('page', event);
        },
        onColumnHeaderClick(event, column) {
            if (column.sortable) {
                this.resetPage();
                const targetNode = event.target;
                const columnField = column.field || column.sortField;

                if (DomHandler.hasClass(targetNode, 'p-sortable-column') || DomHandler.hasClass(targetNode, 'p-column-title')
                    || DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
                    DomHandler.clearSelection();

                    this.d_sortOrder = (this.d_sortField === columnField) ? this.d_sortOrder * -1 : this.defaultSortOrder;
                    this.d_sortField = columnField;

                    if(this.sortMode === 'multiple') {
                        let metaKey = event.metaKey || event.ctrlKey;
                        if (!metaKey) {
                            this.d_multiSortMeta = [];
                        }

                        this.addSortMeta({field: this.d_sortField, order: this.d_sortOrder});
                    }

                    this.$emit('update:sortField', this.d_sortField);
                    this.$emit('update:sortOrder', this.d_sortOrder);
                    this.$emit('update:multiSortMeta', this.d_multiSortMeta);

                    this.$emit('sort', {
                        originalEvent: event,
                        sortField: this.d_sortField,
                        sortOrder: this.d_sortOrder,
                        multiSortMeta: this.d_multiSortMeta
                    });
                }
            }
        },
        sortSingle(value) {
            let data = [...value];

            data.sort((data1, data2) => {
                let value1 = ObjectUtils.resolveFieldData(data1, this.d_sortField);
                let value2 = ObjectUtils.resolveFieldData(data2, this.d_sortField);
                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return (this.d_sortOrder * result);
            });

            return data;
        },
        sortMultiple(value) {
            let data = [...value];

            data.sort((data1, data2) => {
                return this.multisortField(data1, data2, 0);
            });

            return data;
        },
        multisortField(data1, data2, index) {
            const value1 = ObjectUtils.resolveFieldData(data1, this.d_multiSortMeta[index].field);
            const value2 = ObjectUtils.resolveFieldData(data2, this.d_multiSortMeta[index].field);
            let result = null;

            if (typeof value1 === 'string' || value1 instanceof String) {
                if (value1.localeCompare && (value1 !== value2)) {
                    return (this.d_multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
                }
            }
            else {
                result = (value1 < value2) ? -1 : 1;
            }

            if (value1 === value2)  {
                return (this.d_multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, index + 1)) : 0;
            }

            return (this.d_multiSortMeta[index].order * result);
        },
        getMultiSortMetaIndex(column) {
            let index = -1;

            for (let i = 0; i < this.d_multiSortMeta.length; i++) {
                let meta = this.d_multiSortMeta[i];
                if (meta.field === (column.field || column.sortField)) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        getColumnHeaderClass(column) {
            const sorted = this.sortMode === 'single' ? (this.d_sortField === (column.field || column.sortField)) : this.getMultiSortMetaIndex(column) > -1;

            return [column.headerClass,
                    {'p-sortable-column': column.sortable},
                    {'p-resizable-column': this.resizableColumns},
                    {'p-highlight': sorted}
            ];
        },
        getSortableColumnIcon(column) {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted =  this.d_sortField === (column.field || column.sortField);
                sortOrder = sorted ? this.d_sortOrder: 0;
            }
            else if (this.sortMode === 'multiple') {
                let metaIndex = this.getMultiSortMetaIndex(column);
                if (metaIndex > -1) {
                    sorted = true;
                    sortOrder = this.d_multiSortMeta[metaIndex].order;
                }
            }

            return [
                'p-sortable-column-icon pi pi-fw',
                {'pi-sort': !sorted},
                {'pi-sort-up': sorted && sortOrder > 0},
                {'pi-sort-down': sorted && sortOrder < 0},
            ];
        },
        addSortMeta(meta) {
            let index = -1;
            for (let i = 0; i < this.d_multiSortMeta.length; i++) {
                if (this.d_multiSortMeta[i].field === meta.field) {
                    index = i;
                    break;
                }
            }

            if(index >= 0)
                this.d_multiSortMeta[index] = meta;
            else
                this.d_multiSortMeta.push(meta);

            this.d_multiSortMeta = [...this.d_multiSortMeta];
        },
        filter(data) {
            let filteredValue = [];

            for(let i = 0; i < data.length; i++) {
                let localMatch = true;
                let globalMatch = false;

                for(let j = 0; j < this.columns.length; j++) {
                    let col = this.columns[j];
                    let columnField = col.field;

                    //local
                    if (this.filters.hasOwnProperty(columnField)) {
                        let filterValue = this.filters[columnField];
                        let dataFieldValue = ObjectUtils.resolveFieldData(data[i], columnField);
                        let filterConstraint = FilterUtils[col.filterMatchMode];

                        if (!filterConstraint(dataFieldValue, filterValue)) {
                            localMatch = false;
                        }

                        if (!localMatch) {
                            break;
                        }
                    }

                    if (!col.excludeGlobalFilter && this.hasGlobalFilter && !globalMatch) {
                        globalMatch = FilterUtils.contains(ObjectUtils.resolveFieldData(data[i], columnField), this.filters['global']);
                    }
                }

                let matches = localMatch;
                if(this.hasGlobalFilter) {
                    matches = localMatch && globalMatch;
                }

                if(matches) {
                    filteredValue.push(data[i]);
                }
            }

            if (filteredValue.length === data.length) {
                filteredValue = data;
            }

            this.$emit('filter', {
                filters: this.filters,
                filteredValue: filteredValue
            });

            return filteredValue;
        },
        onRowClick(event, rowData, rowIndex) {
            if (this.selectionMode) {
                let target = event.target;
                let targetNode = target.nodeName;
                let parentNode = target.parentElement && target.parentElement.nodeName;

                if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' ||
                    parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' ||
                    (DomHandler.hasClass(target, 'p-clickable'))) {
                    return;
                }

                if (this.isMultipleSelectionMode() && event.shiftKey && this.anchorRowIndex != null) {
                    DomHandler.clearSelection();
                    this.rangeRowIndex = rowIndex;
                    this.selectRange(event);
                }
                else {
                    const selected = this.isSelected(rowData);
                    const metaSelection = this.rowTouched ? false : this.metaKeySelection;
                    this.anchorRowIndex = rowIndex;
                    this.rangeRowIndex = rowIndex;

                    if (metaSelection) {
                        let metaKey = event.metaKey || event.ctrlKey;

                        if (selected && metaKey) {
                            if(this.isSingleSelectionMode()) {
                                this.$emit('update:selection', null);
                            }
                            else {
                                const selectionIndex = this.findIndexInSelection(rowData);
                                const _selection = this.selection.filter((val,i) => i != selectionIndex);
                                this.$emit('update:selection', _selection);
                            }

                            this.$emit('row-unselect', {originalEvent: event, data: rowData, type: 'row'});
                        }
                        else {
                            if(this.isSingleSelectionMode()) {
                                this.$emit('update:selection', rowData);
                            }
                            else if (this.isMultipleSelectionMode()) {
                                let _selection = metaKey ? (this.selection || []) : [];
                                _selection = [..._selection, rowData];
                                this.$emit('update:selection', _selection);
                            }

                            this.$emit('row-select', {originalEvent: event, data: rowData, type: 'row'});
                        }
                    }
                    else {
                        if (this.selectionMode === 'single') {
                            if (selected) {
                                this.$emit('update:selection', null);
                                this.$emit('row-unselect', {originalEvent: event, data: rowData, type: 'row'});
                            }
                            else {
                                this.$emit('update:selection', rowData);
                                this.$emit('row-select', {originalEvent: event, data: rowData, type: 'row'});
                            }
                        }
                        else if (this.selectionMode === 'multiple') {
                            if (selected) {
                                const selectionIndex = this.findIndexInSelection(rowData);
                                const _selection = this.selection.filter((val, i) => i != selectionIndex);
                                this.$emit('update:selection', _selection);
                                this.$emit('row-unselect', {originalEvent: event, data: rowData, type: 'row'});
                            }
                            else {
                                const _selection = this.selection ? [...this.selection, rowData] : [rowData];
                                this.$emit('update:selection', _selection);
                                this.$emit('row-select', {originalEvent: event, data: rowData, type: 'row'});
                            }
                        }
                    }
                }
            }

            this.rowTouched = false;
        },
        onRowTouchEnd() {
            this.rowTouched = true;
        },
        onRowKeyDown(event, rowData, rowIndex) {
            if (this.selectionMode) {
                const row = event.target;

                switch (event.which) {
                    //down arrow
                    case 40:
                        var nextRow = this.findNextSelectableRow(row);
                        if (nextRow) {
                            nextRow.focus();
                        }

                        event.preventDefault();
                    break;

                    //up arrow
                    case 38:
                        var prevRow = this.findPrevSelectableRow(row);
                        if (prevRow) {
                            prevRow.focus();
                        }

                        event.preventDefault();
                    break;

                    //enter
                    case 13:
                        this.onRowClick(event, rowData, rowIndex);
                    break;

                    default:
                        //no op
                    break;
                }
            }
        },
        findNextSelectableRow(row) {
            let nextRow = row.nextElementSibling;
            if (nextRow) {
                if (DomHandler.hasClass(nextRow, 'p-datatable-row'))
                    return nextRow;
                else
                    return this.findNextSelectableRow(nextRow);
            }
            else {
                return null;
            }
        },
        findPrevSelectableRow(row) {
            let prevRow = row.previousElementSibling;
            if (prevRow) {
                if (DomHandler.hasClass(prevRow, 'p-datatable-row'))
                    return prevRow;
                else
                    return this.findPrevSelectableRow(prevRow);
            }
            else {
                return null;
            }
        },
        toggleRowWithRadio(event) {
            const rowData = event.data;

            if (this.isSelected(rowData)) {
                this.$emit('update:selection', null);
                this.$emit('row-unselect', {originalEvent: event, data: rowData, type: 'radiobutton'});
            }
            else {
                this.$emit('update:selection', rowData);
                this.$emit('row-select', {originalEvent: event, data: rowData, type: 'radiobutton'});
            }
        },
        toggleRowWithCheckbox(event) {
            const rowData = event.data;

            if (this.isSelected(rowData)) {
                const selectionIndex = this.findIndexInSelection(rowData);
                const _selection = this.selection.filter((val, i) => i != selectionIndex);
                this.$emit('update:selection', _selection);
                this.$emit('row-unselect', {originalEvent: event, data: rowData, type: 'checkbox'});
            }
            else {
                let _selection = this.selection ? [...this.selection] : [];
                _selection = [..._selection, rowData];
                this.$emit('update:selection', _selection);
                this.$emit('row-select', {originalEvent: event, data: rowData, type: 'checkbox'});
            }
        },
        toggleRowsWithCheckbox(event) {
            const processedData = this.processedData;
            const checked = this.allRowsSelected;
            const _selection = checked ? [] : (processedData ? [...processedData] : [...this.value]);
            this.$emit('update:selection', _selection);

            if (checked)
                this.$emit('row-unselect-all', {originalEvent: event});
            else
                this.$emit('row-select-all', {originalEvent: event, data: _selection});
        },
        isSingleSelectionMode() {
            return this.selectionMode === 'single';
        },
        isMultipleSelectionMode() {
            return this.selectionMode === 'multiple';
        },
        isSelected(rowData) {
            if (rowData && this.selection) {
                if (this.dataKey) {
                    return this.d_selectionKeys ? this.d_selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                }
                else {
                    if (this.selection instanceof Array)
                        return this.findIndexInSelection(rowData) > -1;
                    else
                        return this.equals(rowData, this.selection);
                }
            }

            return false;
        },
        findIndexInSelection(rowData) {
            return this.findIndex(rowData, this.selection);
        },
        findIndex(rowData, collection) {
            let index = -1;
            if (collection && collection.length) {
                for (let i = 0; i < collection.length; i++) {
                    if (this.equals(rowData, collection[i])) {
                        index = i;
                        break;
                    }
                }
            }

            return index;
        },
        updateSelectionKeys(selection) {
            this.d_selectionKeys = {};
            if (Array.isArray(selection)) {
                for (let data of selection) {
                    this.d_selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.d_selectionKeys[String(ObjectUtils.resolveFieldData(selection, this.dataKey))] = 1;
            }
        },
        updateExpandedRowKeys(expandedRows) {
            if (expandedRows && expandedRows.length) {
                this.d_expandedRowKeys = {};
                for (let data of expandedRows) {
                    this.d_expandedRowKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.d_expandedRowKeys = null;
            }
        },
        equals(data1, data2) {
            return this.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.dataKey);
        },
        isRowExpanded(rowData) {
            if (rowData && this.expandedRows) {
                if (this.dataKey)
                    return this.d_expandedRowKeys ? this.d_expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                else
                    return this.findIndex(rowData, this.expandedRows) > -1;
            }

            return false;
        },
        getRowKey(rowData, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(rowData, this.dataKey): index;
        },
        getRowClass(rowData) {
            if (this.selection) {
                return ['p-datatable-row', {
                    'p-highlight': this.isSelected(rowData)
                }];
            }
            else {
                return 'p-datatable-row';
            }
        },
        selectRange(event) {
            let rangeStart, rangeEnd;

            if (this.rangeRowIndex > this.anchorRowIndex) {
                rangeStart = this.anchorRowIndex;
                rangeEnd = this.rangeRowIndex;
            }
            else if(this.rangeRowIndex < this.anchorRowIndex) {
                rangeStart = this.rangeRowIndex;
                rangeEnd = this.anchorRowIndex;
            }
            else {
                rangeStart = this.rangeRowIndex;
                rangeEnd = this.rangeRowIndex;
            }

            if (this.lazy && this.paginator) {
                rangeStart -= this.first;
                rangeEnd -= this.first;
            }

            const value = this.processedData;
            let _selection = [];
            for(let i = rangeStart; i <= rangeEnd; i++) {
                let rangeRowData = value[i];
                _selection.push(rangeRowData);
                this.$emit('row-select', {originalEvent: event, data: rangeRowData, type: 'row'});
            }

            this.$emit('update:selection', _selection);
        },
        exportCSV(options) {
            let data = this.processedData;
            let csv = '\ufeff';

            if (options && options.selectionOnly) {
                data = this.selection || [];
            }

            //headers
            for (let i = 0; i < this.columns.length; i++) {
                let column = this.columns[i];
                if (column.exportable !== false && column.field) {
                    csv += '"' + (column.header || column.field) + '"';

                    if (i < (this.columns.length - 1)) {
                        csv += this.csvSeparator;
                    }
                }
            }

            //body
            data.forEach(record => {
                csv += '\n';
                for (let i = 0; i < this.columns.length; i++) {
                    let column = this.columns[i];
                    if (column.exportable !== false && column.field) {
                        let cellData = ObjectUtils.resolveFieldData(record, column.field);

                        if (cellData != null) {
                            if (this.exportFunction) {
                                cellData = this.exportFunction({
                                    data: cellData,
                                    field: column.field
                                });
                            }
                            else
                                cellData = String(cellData).replace(/"/g, '""');
                        }
                        else
                            cellData = '';


                        csv += '"' + cellData + '"';

                        if (i < (this.columns.length - 1)) {
                            csv += this.csvSeparator;
                        }
                    }
                }
            });

            let blob = new Blob([csv], {
                type: 'text/csv;charset=utf-8;'
            });

            if (window.navigator.msSaveOrOpenBlob) {
                navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
            }
            else {
                let link = document.createElement("a");
                link.style.display = 'none';
                document.body.appendChild(link);
                if (link.download !== undefined) {
                    link.setAttribute('href', URL.createObjectURL(blob));
                    link.setAttribute('download', this.exportFilename + '.csv');
                    link.click();
                }
                else {
                    csv = 'data:text/csv;charset=utf-8,' + csv;
                    window.open(encodeURI(csv));
                }
                document.body.removeChild(link);
            }
        },
        resetPage() {
            this.d_first = 0;
            this.$emit('update:first', this.d_first);
        },
        onColumnResizeStart(event) {
            let containerLeft = DomHandler.getOffset(this.$el).left;
            this.resizeColumnElement = event.target.parentElement;
            this.columnResizing = true;
            this.lastResizeHelperX = (event.pageX - containerLeft + this.$el.scrollLeft);

            this.bindColumnResizeEvents();
        },
        onColumnResize(event) {
            let containerLeft = DomHandler.getOffset(this.$el).left;
            DomHandler.addClass(this.$el, 'p-unselectable-text');
            this.$refs.resizeHelper.style.height = this.$el.offsetHeight + 'px';
            this.$refs.resizeHelper.style.top = 0 + 'px';
            this.$refs.resizeHelper.style.left = (event.pageX - containerLeft + this.$el.scrollLeft) + 'px';

            this.$refs.resizeHelper.style.display = 'block';
        },
        onColumnResizeEnd() {
            let delta = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX;
            let columnWidth = this.resizeColumnElement.offsetWidth;
            let newColumnWidth = columnWidth + delta;
            let minWidth = this.resizeColumnElement.style.minWidth||15;

            if(columnWidth + delta > parseInt(minWidth, 10)) {
                if(this.columnResizeMode === 'fit') {
                    let nextColumn = this.resizeColumnElement.nextElementSibling;
                    let nextColumnWidth = nextColumn.offsetWidth - delta;

                    if(newColumnWidth > 15 && nextColumnWidth > 15) {
                        this.resizeColumnElement.style.width = newColumnWidth + 'px';
                        if(nextColumn) {
                            nextColumn.style.width = nextColumnWidth + 'px';
                        }
                    }
                }
                else if(this.columnResizeMode === 'expand') {
                    this.$refs.table.style.width = this.$refs.table.offsetWidth + delta + 'px';
                    this.resizeColumnElement.style.width = newColumnWidth + 'px';
                }

                this.$emit('column-resize-end', {
                    element: this.resizeColumnElement,
                    delta: delta
                });
            }

            this.$refs.resizeHelper.style.display = 'none';
            this.resizeColumn = null;
            DomHandler.removeClass(this.$el, 'p-unselectable-text');

            this.unbindColumnResizeEvents();
        },
        bindColumnResizeEvents() {
            if (!this.documentColumnResizeListener) {
                this.documentColumnResizeListener = document.addEventListener('mousemove', () => {
                    if(this.columnResizing) {
                        this.onColumnResize(event);
                    }
                });
            }

            if (!this.documentColumnResizeEndListener) {
                this.documentColumnResizeEndListener = document.addEventListener('mouseup', () => {
                    if(this.columnResizing) {
                        this.columnResizing = false;
                        this.onColumnResizeEnd();
                    }
                });
            }

        },
        unbindColumnResizeEvents() {
            if (this.documentColumnResizeListener) {
                document.removeEventListener('document', this.documentColumnResizeListener);
                this.documentColumnResizeListener = null;
            }

            if (this.documentColumnResizeEndListener) {
                document.removeEventListener('document', this.documentColumnResizeEndListener);
                 this.documentColumnResizeEndListener = null;
            }
        },
        onColumnHeaderMouseDown(event, col) {
            if (this.reorderableColumns && col.reorderableColumn) {
                if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.hasClass(event.target, 'p-column-resizer'))
                    event.currentTarget.draggable = false;
                else
                    event.currentTarget.draggable = true;
            }
        },
        onColumnHeaderDragStart(event) {
            if(this.columnResizing) {
                event.preventDefault();
                return;
            }

            this.colReorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.$refs.reorderIndicatorUp);
            this.colReorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.$refs.reorderIndicatorUp);

            this.draggedColumn = this.findParentHeader(event.target);
            event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
        },
        onColumnHeaderDragOver(event) {
            let dropHeader = this.findParentHeader(event.target);
            if(this.reorderableColumns && this.draggedColumn && dropHeader) {
                event.preventDefault();
                let containerOffset = DomHandler.getOffset(this.$el);
                let dropHeaderOffset = DomHandler.getOffset(dropHeader);

                if (this.draggedColumn !== dropHeader) {
                    let targetLeft =  dropHeaderOffset.left - containerOffset.left;
                    let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;

                    this.$refs.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + 'px';
                    this.$refs.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

                    if(event.pageX > columnCenter) {
                        this.$refs.reorderIndicatorUp.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2)) + 'px';
                        this.$refs.reorderIndicatorDown.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2))+ 'px';
                        this.dropPosition = 1;
                    }
                    else {
                        this.$refs.reorderIndicatorUp.style.left = (targetLeft - Math.ceil(this.colReorderIconWidth / 2)) + 'px';
                        this.$refs.reorderIndicatorDown.style.left = (targetLeft - Math.ceil(this.colReorderIconWidth / 2))+ 'px';
                        this.dropPosition = -1;
                    }

                    this.$refs.reorderIndicatorUp.style.display = 'block';
                    this.$refs.reorderIndicatorDown.style.display = 'block';
                }
            }
        },
        onColumnHeaderDragLeave(event) {
            if(this.reorderableColumns && this.draggedColumn) {
                event.preventDefault();
                this.$refs.reorderIndicatorUp.style.display = 'none';
                this.$refs.reorderIndicatorDown.style.display = 'none';
            }
        },
        onColumnHeaderDrop(event) {
            event.preventDefault();
            if (this.draggedColumn) {
                let dragIndex = DomHandler.index(this.draggedColumn);
                let dropIndex = DomHandler.index(this.findParentHeader(event.target));
                let allowDrop = (dragIndex !== dropIndex);
                if (allowDrop && ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dragIndex - dropIndex === 1 && this.dropPosition === 1))) {
                    allowDrop = false;
                }

                if (allowDrop) {
                    ObjectUtils.reorderArray(this.columnOrder, dragIndex, dropIndex);

                    this.$emit('column-reorder', {
                        originalEvent: event,
                        dragIndex: dragIndex,
                        dropIndex: dropIndex
                    });
                }

                this.$refs.reorderIndicatorUp.style.display = 'none';
                this.$refs.reorderIndicatorDown.style.display = 'none';
                this.draggedColumn.draggable = false;
                this.draggedColumn = null;
                this.dropPosition = null;
            }
        },
        findParentHeader(element) {
            if(element.nodeName === 'TH') {
                return element;
            }
            else {
                let parent = element.parentElement;
                while(parent.nodeName !== 'TH') {
                    parent = parent.parentElement;
                    if (!parent) break;
                }
                return parent;
            }
        },
        findColumnByKey(columns, key) {
            if(columns && columns.length) {
                for(let i = 0; i < columns.length; i++) {
                    let child = columns[i];
                    if(child.columnKey === key || child.field === key) {
                        return child;
                    }
                }
            }

            return null;
        },
        onRowMouseDown(event) {
            if (DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle'))
                event.currentTarget.draggable = true;
            else
                event.currentTarget.draggable = false;
        },
        onRowDragStart(event, index) {
            this.rowDragging = true;
            this.draggedRowIndex = index;
            event.dataTransfer.setData('text', 'b');    // For firefox
        },
        onRowDragOver(event, index) {
            if (this.rowDragging && this.draggedRowIndex !== index) {
                let rowElement = event.currentTarget;
                let rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop();
                let pageY = event.pageY;
                let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
                let prevRowElement = rowElement.previousElementSibling;

                if (pageY < rowMidY) {
                    DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');

                    this.droppedRowIndex = index;
                    if (prevRowElement)
                        DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    else
                        DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
                }
                else {
                    if (prevRowElement)
                        DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    else
                        DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');

                    this.droppedRowIndex = index + 1;
                    DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
                }

                event.preventDefault();
            }
        },
        onRowDragLeave(event) {
            let rowElement = event.currentTarget;
            let prevRowElement = rowElement.previousElementSibling;
            if (prevRowElement) {
                DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
            }

            DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
            DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
        },
        onRowDragEnd(event) {
            this.rowDragging = false;
            this.draggedRowIndex = null;
            this.droppedRowIndex = null;
            event.currentTarget.draggable = false;
        },
        onRowDrop(event) {
            if (this.droppedRowIndex != null) {
                let dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
                let processedData = [...this.processedData];
                ObjectUtils.reorderArray(processedData, this.draggedRowIndex, dropIndex);

                this.$emit('row-reorder', {
                    originalEvent: event,
                    dragIndex: this.draggedRowIndex,
                    dropIndex: dropIndex,
                    value: processedData
                });
            }

            //cleanup
            this.onRowDragLeave(event);
            this.onRowDragEnd(event);
            event.preventDefault();
        },
        toggleRow(event) {
            let rowData = event.data;
            let expanded;
            let expandedRowIndex;
            let _expandedRows = this.expandedRows ? [...this.expandedRows] : [];

            if (this.dataKey) {
                expanded = this.d_expandedRowKeys ? this.d_expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
            }
            else {
                expandedRowIndex = this.findIndex(rowData, this.expandedRows);
                expanded = expandedRowIndex > -1;
            }

            if (expanded) {
                if (expandedRowIndex == null) {
                    expandedRowIndex = this.findIndex(rowData, this.expandedRows);
                }
                _expandedRows.splice(expandedRowIndex, 1);
                this.$emit('update:expandedRows', _expandedRows);
                this.$emit('row-collapse', event);
            }
            else {
                _expandedRows.push(rowData);
                this.$emit('update:expandedRows', _expandedRows);
                this.$emit('row-expand', event);
            }
        },
        rowTogglerIcon(rowData) {
            const icon = this.isRowExpanded(rowData) ? this.expandedRowIcon : this.collapsedRowIcon;
            return ['p-row-toggler-icon pi pi-fw p-clickable', icon];
        },
        shouldRenderRowGroupHeader(value, rowData, i) {
            if (i === 0) {
                return true;
            }
            else {
                let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
                let previousRowFieldData = ObjectUtils.resolveFieldData(value[i - 1], this.groupRowsBy);

                return currentRowFieldData !== previousRowFieldData;
            }
        }
    },
    computed: {
        containerClass() {
            return [
                'p-datatable p-component', {
                    'p-datatable-hoverable-rows': (this.rowHover || this.selectionMode),
                    'p-datatable-auto-layout': this.autoLayout,
                    'p-datatable-resizable': this.resizableColumns,
                    'p-datatable-resizable-fit': this.resizableColumns && this.columnResizeMode === 'fit'
                }
            ];
        },
        columns() {
            let columns = [];

            if (this.allChildren) {
                columns = this.allChildren.filter(child => child.$options._propKeys.indexOf('columnKey') !== -1);

                if (this.reorderableColumns && this.columnOrder) {
                    let orderedColumns = [];
                    for (let columnKey of this.columnOrder) {
                        let column = this.findColumnByKey(columns, columnKey);
                        if (column) {
                            orderedColumns.push(column);
                        }
                    }

                    return [...orderedColumns, ...columns.filter((item) => {
                        return orderedColumns.indexOf(item) < 0;
                    })];
                }
            }
            return columns;
        },
        headerColumnGroup() {
            if (this.allChildren) {
                for (let child of this.allChildren) {
                    if (child.$vnode.tag.indexOf('columngroup') !== -1 && child.type === 'header') {
                        return child;
                    }
                }
            }

            return null;
        },
        footerColumnGroup() {
            if (this.allChildren) {
                for (let child of this.allChildren) {
                    if (child.$vnode.tag.indexOf('columngroup') !== -1 && child.type === 'footer') {
                        return child;
                    }
                }
            }

            return null;
        },
        processedData() {
            if (this.lazy) {
                return this.value;
            }
            else {
                if (this.value && this.value.length) {
                    let data = this.value;

                    if (this.sorted) {
                        if(this.sortMode === 'single')
                            data = this.sortSingle(data);
                        else if(this.sortMode === 'multiple')
                            data = this.sortMultiple(data);
                    }

                    if (this.hasFilters) {
                        data = this.filter(data);
                    }

                    return data;
                }
                else {
                    return null;
                }
            }
        },
        dataToRender() {
            const data = this.processedData;

            if (this.paginator) {
                const first = this.lazy ? 0 : this.d_first;
                return data.slice(first, first + this.d_rows);
            }
            else {
                return data;
            }
        },
        totalRecordsLength() {
            if (this.lazy) {
                return this.totalRecords;
            }
            else {
                const data = this.processedData;
                return data ? data.length : 0;
            }
        },
        empty() {
            const data = this.processedData;
            return (!data || data.length === 0);
        },
        paginatorTop() {
            return this.paginator && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both');
        },
        paginatorBottom() {
            return this.paginator && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both');
        },
        sorted() {
            return this.d_sortField || (this.d_multiSortMeta && this.d_multiSortMeta.length > 0);
        },
        hasFooter() {
            let hasFooter = false;

            if (this.footerColumnGroup) {
                hasFooter = true;
            }
            else {
                for (let col of this.columns) {
                    if (col.footer || col.$scopedSlots.footer) {
                        hasFooter = true;
                        break;
                    }
                }
            }

            return hasFooter;
        },
        hasFilters() {
            return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
        },
        hasGlobalFilter() {
            return this.filters && this.filters.hasOwnProperty('global');
        },
        loadingIconClass() {
            return ['p-datatable-loading-icon pi-spin', this.loadingIcon];
        },
        allRowsSelected() {
            const val = this.processedData;
            return (val && val.length > 0 && this.selection && this.selection.length > 0 && this.selection.length === val.length);
        }
    },
    components: {
        'ColumnSlot': ColumnSlot,
        'DTPaginator': Paginator,
        'DTRadioButton': RowRadioButton,
        'DTCheckbox': RowCheckbox,
        'DTHeaderCheckbox': HeaderCheckbox,
        'DTBodyCell': BodyCell
    }
}
</script>

<style>
.p-datatable {
    position: relative;
}

.p-datatable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.p-datatable .p-datatable-thead > tr > th,
.p-datatable .p-datatable-tbody > tr > td,
.p-datatable .p-datatable-tfoot > tr > td {
    padding: .25em .5em;
}

.p-datatable .p-column-title {
    user-select: none;
}

.p-datatable .p-sortable-column {
    cursor: pointer;
}

.p-datatable .p-sortable-column-icon {
    vertical-align: middle;
}

.p-datatable-auto-layout > .p-datatable-wrapper {
    overflow-x: auto;
}

.p-datatable-auto-layout > .p-datatable-wrapper > table {
    table-layout: auto;
}

.p-datatable-hoverable-rows .p-datatable-tbody > tr.p-highlight {
    cursor: pointer;
}

/* Sections */
.p-datatable-header,
.p-datatable-footer {
    padding: .25em .5em;
    text-align: center;
    font-weight: bold;
}

.p-datatable-header {
    border-bottom: 0 none;
}

.p-datatable-footer {
    border-top: 0 none;
}

/* Paginator */
.p-datatable .p-paginator-top {
    border-bottom: 0 none;
}

.p-datatable .p-paginator-bottom {
    border-top: 0 none;
}

/* Scrollable */
.p-datatable-scrollable-wrapper {
    position: relative;
}
.p-datatable-scrollable-header,
.p-datatable-scrollable-footer {
    overflow: hidden;
    border: 0 none;
}

.p-datatable-scrollable-body {
    overflow: auto;
    position: relative;
}

.p-datatable-scrollable-body > table > .p-datatable-tbody > tr:first-child > td {
    border-top: 0 none;
}

.p-datatable-virtual-table {
    position: absolute;
}

/* Frozen Columns */
.p-datatable-frozen-view .p-datatable-scrollable-body {
    overflow: hidden;
}

.p-datatable-frozen-view > .p-datatable-scrollable-body > table > .p-datatable-tbody > tr > td:last-child {
    border-right: 0 none;
}

.p-datatable-unfrozen-view {
    position: absolute;
    top: 0px;
}

/* Filter */
.p-column-filter {
    width: 100%;
}

/* Resizable */
.p-datatable-resizable > .p-datatable-wrapper {
    overflow-x: auto;
}

.p-datatable-resizable .p-datatable-thead > tr > th,
.p-datatable-resizable .p-datatable-tfoot > tr > td,
.p-datatable-resizable .p-datatable-tbody > tr > td {
    overflow: hidden;
}

.p-datatable-resizable .p-resizable-column {
    background-clip: padding-box;
    position: relative;
}

.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-datatable .p-column-resizer {
    display: block;
    position: absolute !important;
    top: 0;
    right: 0;
    margin: 0;
    width: .5em;
    height: 100%;
    padding: 0px;
    cursor:col-resize;
    border: 1px solid transparent;
}

.p-datatable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
}

/* Edit */
.p-datatable .p-datatable-tbody > tr > td.p-cell-editing .p-component {
    width: 100%;
}

/* Reorder */
.p-datatable-reorder-indicator-up,
.p-datatable-reorder-indicator-down {
    position: absolute;
    display: none;
}

/* Loader */
.p-datatable .p-datatable-loading-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
    opacity: 0.1;
    z-index: 1;
}

.p-datatable .p-datatable-loading-content {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    margin-top: -1em;
    margin-left: -1em;
}

.p-datatable .p-datatable-loading-icon {
    font-size: 2em;
}

</style>
