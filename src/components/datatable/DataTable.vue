<template>
    <div :class="containerClass">
        <slot></slot>
        <div class="p-datatable-loading-overlay p-component-overlay" v-if="loading">
            <i :class="loadingIconClass"></i>
        </div>
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
        <div class="p-datatable-wrapper" v-if="!scrollable">
            <table ref="table" role="grid">
                <DTTableHeader :columnGroup="headerColumnGroup" :columns="columns" :rowGroupMode="rowGroupMode"
                        :groupRowsBy="groupRowsBy" :resizableColumns="resizableColumns" :allRowsSelected="allRowsSelected" :empty="empty"
                        :sortMode="sortMode" :sortField="d_sortField" :sortOrder="d_sortOrder" :multiSortMeta="d_multiSortMeta"
                        @column-click="onColumnHeaderClick($event)" @column-mousedown="onColumnHeaderMouseDown($event)"
                        @column-dragstart="onColumnHeaderDragStart($event)" @column-dragover="onColumnHeaderDragOver($event)" @column-dragleave="onColumnHeaderDragLeave($event)" @column-drop="onColumnHeaderDrop($event)"
                        @column-resizestart="onColumnResizeStart($event)" @checkbox-change="toggleRowsWithCheckbox($event)" />
                <DTTableBody :value="dataToRender" :columns="columns" :empty="empty" :dataKey="dataKey" :selection="selection" :selectionKeys="d_selectionKeys" :selectionMode="selectionMode" :contextMenu="contextMenu" :contextMenuSelection="contextMenuSelection"
                    :rowGroupMode="rowGroupMode" :groupRowsBy="groupRowsBy" :expandableRowGroups="expandableRowGroups" :rowClass="rowClass" :editMode="editMode" :compareSelectionBy="compareSelectionBy"
                    :expandedRowIcon="expandedRowIcon" :collapsedRowIcon="collapsedRowIcon" :expandedRows="expandedRows" :expandedRowKeys="d_expandedRowKeys" :expandedRowGroups="expandedRowGroups"
                    :editingRows="editingRows" :editingRowKeys="d_editingRowKeys" :templates="$scopedSlots" :loading="loading"
                    @rowgroup-toggle="toggleRowGroup" @row-click="onRowClick($event)" @row-rightclick="onRowRightClick($event)" @row-touchend="onRowTouchEnd" @row-keydown="onRowKeyDown"
                    @row-mousedown="onRowMouseDown" @row-dragstart="onRowDragStart($event)" @row-dragover="onRowDragOver($event)" @row-dragleave="onRowDragLeave($event)" @row-dragend="onRowDragEnd($event)" @row-drop="onRowDrop($event)"
                    @row-toggle="toggleRow($event)" @radio-change="toggleRowWithRadio($event)" @checkbox-change="toggleRowWithCheckbox($event)"
                    @cell-edit-init="onCellEditInit($event)" @cell-edit-complete="onCellEditComplete($event)" @cell-edit-cancel="onCellEditCancel($event)"
                    @row-edit-init="onRowEditInit($event)" @row-edit-save="onRowEditSave($event)" @row-edit-cancel="onRowEditCancel($event)"/>
                <DTTableFooter :columnGroup="footerColumnGroup" :columns="columns" />
            </table>
        </div>
        <div class="p-datatable-scrollable-wrapper" v-else>
            <DTScrollableView v-if="hasFrozenColumns" :scrollHeight="scrollHeight" :columns="frozenColumns" :frozenWidth="frozenWidth" :frozen="true"
                :rowGroupMode="rowGroupMode" :groupRowsBy="groupRowsBy">
                <template #header>
                    <DTTableHeader :columnGroup="frozenHeaderColumnGroup" :columns="frozenColumns" :rowGroupMode="rowGroupMode"
                        :groupRowsBy="groupRowsBy" :resizableColumns="resizableColumns" :allRowsSelected="allRowsSelected" :empty="empty"
                        :sortMode="sortMode" :sortField="d_sortField" :sortOrder="d_sortOrder" :multiSortMeta="d_multiSortMeta"
                        @column-click="onColumnHeaderClick($event)" @column-mousedown="onColumnHeaderMouseDown($event)"
                        @column-dragstart="onColumnHeaderDragStart($event)" @column-dragover="onColumnHeaderDragOver($event)" @column-dragleave="onColumnHeaderDragLeave($event)" @column-drop="onColumnHeaderDrop($event)"
                        @column-resizestart="onColumnResizeStart($event)" @checkbox-change="toggleRowsWithCheckbox($event)" />
                </template>
                <template #body>
                    <DTTableBody :value="dataToRender" :columns="frozenColumns" :empty="empty" :dataKey="dataKey" :selection="selection" :selectionKeys="d_selectionKeys" :selectionMode="selectionMode" :contextMenu="contextMenu" :contextMenuSelection="contextMenuSelection"
                        :rowGroupMode="rowGroupMode" :groupRowsBy="groupRowsBy" :expandableRowGroups="expandableRowGroups" :rowClass="rowClass" :editMode="editMode" :compareSelectionBy="compareSelectionBy"
                        :expandedRowIcon="expandedRowIcon" :collapsedRowIcon="collapsedRowIcon" :expandedRows="expandedRows" :expandedRowKeys="d_expandedRowKeys" :expandedRowGroups="expandedRowGroups"
                        :editingRows="editingRows" :editingRowKeys="d_editingRowKeys" :templates="$scopedSlots" :loading="loading"
                        @rowgroup-toggle="toggleRowGroup" @row-click="onRowClick($event)" @row-rightclick="onRowRightClick($event)" @row-touchend="onRowTouchEnd" @row-keydown="onRowKeyDown"
                        @row-mousedown="onRowMouseDown" @row-dragstart="onRowDragStart($event)" @row-dragover="onRowDragOver($event)" @row-dragleave="onRowDragLeave($event)" @row-dragend="onRowDragEnd($event)" @row-drop="onRowDrop($event)"
                        @row-toggle="toggleRow($event)" @radio-change="toggleRowWithRadio($event)" @checkbox-change="toggleRowWithCheckbox($event)"
                        @cell-edit-init="onCellEditInit($event)" @cell-edit-complete="onCellEditComplete($event)" @cell-edit-cancel="onCellEditCancel($event)"
                        @row-edit-init="onRowEditInit($event)" @row-edit-save="onRowEditSave($event)" @row-edit-cancel="onRowEditCancel($event)"/>
                </template>
                <template #frozenbody>
                    <DTTableBody v-if="frozenValue" :value="frozenValue" :columns="frozenColumns" :dataKey="dataKey" :selection="selection" :selectionKeys="d_selectionKeys" :selectionMode="selectionMode" :contextMenu="contextMenu" :contextMenuSelection="contextMenuSelection"
                        :rowGroupMode="rowGroupMode" :groupRowsBy="groupRowsBy" :expandableRowGroups="expandableRowGroups" :rowClass="rowClass" :editMode="editMode" :compareSelectionBy="compareSelectionBy"
                        :expandedRowIcon="expandedRowIcon" :collapsedRowIcon="collapsedRowIcon" :expandedRows="expandedRows" :expandedRowKeys="d_expandedRowKeys" :expandedRowGroups="expandedRowGroups"
                        :editingRows="editingRows" :editingRowKeys="d_editingRowKeys" :templates="$scopedSlots" :loading="loading"
                        @rowgroup-toggle="toggleRowGroup" @row-click="onRowClick($event)" @row-rightclick="onRowRightClick($event)" @row-touchend="onRowTouchEnd" @row-keydown="onRowKeyDown"
                        @row-mousedown="onRowMouseDown" @row-dragstart="onRowDragStart($event)" @row-dragover="onRowDragOver($event)" @row-dragleave="onRowDragLeave($event)" @row-dragend="onRowDragEnd($event)" @row-drop="onRowDrop($event)"
                        @row-toggle="toggleRow($event)" @radio-change="toggleRowWithRadio($event)" @checkbox-change="toggleRowWithCheckbox($event)"
                        @cell-edit-init="onCellEditInit($event)" @cell-edit-complete="onCellEditComplete($event)" @cell-edit-cancel="onCellEditCancel($event)"
                        @row-edit-init="onRowEditInit($event)" @row-edit-save="onRowEditSave($event)" @row-edit-cancel="onRowEditCancel($event)"/>
                </template>
                <template #footer>
                    <DTTableFooter :columnGroup="frozenFooterColumnGroup" :columns="frozenColumns" />
                </template>
            </DTScrollableView>
            <DTScrollableView :scrollHeight="scrollHeight" :columns="scrollableColumns" :frozenWidth="frozenWidth" :rows="rows"
                :virtualScroll="virtualScroll" :virtualRowHeight="virtualRowHeight" :totalRecords="totalRecordsLength" @virtual-scroll="onVirtualScroll"
                :rowGroupMode="rowGroupMode" :groupRowsBy="groupRowsBy">
                <template #header>
                    <DTTableHeader :columnGroup="headerColumnGroup" :columns="scrollableColumns" :rowGroupMode="rowGroupMode"
                        :groupRowsBy="groupRowsBy" :resizableColumns="resizableColumns" :allRowsSelected="allRowsSelected" :empty="empty"
                        :sortMode="sortMode" :sortField="d_sortField" :sortOrder="d_sortOrder" :multiSortMeta="d_multiSortMeta"
                        @column-click="onColumnHeaderClick($event)" @column-mousedown="onColumnHeaderMouseDown($event)"
                        @column-dragstart="onColumnHeaderDragStart($event)" @column-dragover="onColumnHeaderDragOver($event)" @column-dragleave="onColumnHeaderDragLeave($event)" @column-drop="onColumnHeaderDrop($event)"
                        @column-resizestart="onColumnResizeStart($event)" @checkbox-change="toggleRowsWithCheckbox($event)" />
                </template>
                <template #body>
                    <DTTableBody :value="dataToRender" :columns="scrollableColumns" :empty="empty" :dataKey="dataKey" :selection="selection" :selectionKeys="d_selectionKeys" :selectionMode="selectionMode" :contextMenu="contextMenu" :contextMenuSelection="contextMenuSelection"
                        :rowGroupMode="rowGroupMode" :groupRowsBy="groupRowsBy" :expandableRowGroups="expandableRowGroups" :rowClass="rowClass" :editMode="editMode" :compareSelectionBy="compareSelectionBy"
                        :expandedRowIcon="expandedRowIcon" :collapsedRowIcon="collapsedRowIcon" :expandedRows="expandedRows" :expandedRowKeys="d_expandedRowKeys" :expandedRowGroups="expandedRowGroups"
                        :editingRows="editingRows" :editingRowKeys="d_editingRowKeys" :templates="$scopedSlots" :loading="loading"
                        @rowgroup-toggle="toggleRowGroup" @row-click="onRowClick($event)" @row-rightclick="onRowRightClick($event)" @row-touchend="onRowTouchEnd" @row-keydown="onRowKeyDown"
                        @row-mousedown="onRowMouseDown" @row-dragstart="onRowDragStart($event)" @row-dragover="onRowDragOver($event)" @row-dragleave="onRowDragLeave($event)" @row-dragend="onRowDragEnd($event)" @row-drop="onRowDrop($event)"
                        @row-toggle="toggleRow($event)" @radio-change="toggleRowWithRadio($event)" @checkbox-change="toggleRowWithCheckbox($event)"
                        @cell-edit-init="onCellEditInit($event)" @cell-edit-complete="onCellEditComplete($event)" @cell-edit-cancel="onCellEditCancel($event)"
                        @row-edit-init="onRowEditInit($event)" @row-edit-save="onRowEditSave($event)" @row-edit-cancel="onRowEditCancel($event)"/>
                </template>
                <template #frozenbody>
                    <DTTableBody  v-if="frozenValue" :value="frozenValue" :columns="scrollableColumns" :dataKey="dataKey" :selection="selection" :selectionKeys="d_selectionKeys" :selectionMode="selectionMode" :contextMenu="contextMenu" :contextMenuSelection="contextMenuSelection"
                        :rowGroupMode="rowGroupMode" :groupRowsBy="groupRowsBy" :expandableRowGroups="expandableRowGroups" :rowClass="rowClass" :editMode="editMode" :compareSelectionBy="compareSelectionBy"
                        :expandedRowIcon="expandedRowIcon" :collapsedRowIcon="collapsedRowIcon" :expandedRows="expandedRows" :expandedRowKeys="d_expandedRowKeys" :expandedRowGroups="expandedRowGroups"
                        :editingRows="editingRows" :editingRowKeys="d_editingRowKeys" :templates="$scopedSlots" :loading="loading"
                        @rowgroup-toggle="toggleRowGroup" @row-click="onRowClick($event)" @row-rightclick="onRowRightClick($event)" @row-touchend="onRowTouchEnd" @row-keydown="onRowKeyDown"
                        @row-mousedown="onRowMouseDown" @row-dragstart="onRowDragStart($event)" @row-dragover="onRowDragOver($event)" @row-dragleave="onRowDragLeave($event)" @row-dragend="onRowDragEnd($event)" @row-drop="onRowDrop($event)"
                        @row-toggle="toggleRow($event)" @radio-change="toggleRowWithRadio($event)" @checkbox-change="toggleRowWithCheckbox($event)"
                        @cell-edit-init="onCellEditInit($event)" @cell-edit-complete="onCellEditComplete($event)" @cell-edit-cancel="onCellEditCancel($event)"
                        @row-edit-init="onRowEditInit($event)" @row-edit-save="onRowEditSave($event)" @row-edit-cancel="onRowEditCancel($event)"/>
                </template>
                <template #footer>
                    <DTTableFooter :columnGroup="footerColumnGroup" :columns="scrollableColumns" />
                </template>
            </DTScrollableView>
        </div>
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
        <div ref="resizeHelper" class="p-column-resizer-helper" style="display: none"></div>
        <span ref="reorderIndicatorUp" class="pi pi-arrow-down p-datatable-reorder-indicator-up" style="position: absolute; display: none" v-if="reorderableColumns" />
        <span ref="reorderIndicatorDown" class="pi pi-arrow-up p-datatable-reorder-indicator-down" style="position: absolute; display: none" v-if="reorderableColumns" />
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/FilterUtils';
import DomHandler from '../utils/DomHandler';
import Paginator from '../paginator/Paginator';
import ScrollableView from './ScrollableView.vue';
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import TableFooter from './TableFooter.vue';

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
            type: [String, Function],
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
        removableSort: {
            type: Boolean,
            default: false
        },
        filters: {
            type: Object,
            default: null
        },
        filterLocale: {
            type: String,
            default: undefined
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
        contextMenu: {
            type: Boolean,
            default: false
        },
        contextMenuSelection: {
            type: Object,
            default: null
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
        },
        expandableRowGroups: {
            type: Boolean,
            default: false
        },
        expandedRowGroups: {
            type: Array,
            default: null
        },
        stateStorage: {
            type: String,
            default: 'session'
        },
        stateKey: {
            type: String,
            default: null
        },
        editMode: {
            type: String,
            default: null
        },
        editingRows: {
            type: Array,
            default: null
        },
        rowClass: {
            type: null,
            default: null
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        scrollHeight: {
            type: String,
            default: null
        },
        frozenValue: {
            type: Array,
            default: null
        },
        frozenWidth: {
            type: String,
            default: null
        },
        virtualScroll: {
            type: Boolean,
            default: false
        },
        virtualRowHeight: {
            type: Number,
            default: 28
        },
        virtualScrollDelay: {
            type: Number,
            default: 150
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
            d_columnOrder: null,
            d_editingRowKeys: null
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
    columnWidthsState: null,
    tableWidthState: null,
    columnWidthsRestored: false,
    virtualScrollTimer: null,
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
        },
        editingRows(newValue) {
            if (this.dataKey) {
                this.updateEditingRowKeys(newValue);
            }
        }
    },
    beforeMount() {
        if (this.isStateful()) {
            this.restoreState();
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
            this.d_columnOrder = columnOrder;
        }
    },
    beforeDestroy() {
        this.unbindColumnResizeEvents();
    },
    updated() {
        if (this.isStateful()) {
            this.saveState();

            if (this.resizableColumns && !this.columnWidthsRestored) {
                this.restoreColumnWidths();
                this.columnWidthsRestored = true;
            }
        }
    },
    methods: {
        onPage(event) {
            this.d_first = event.first;
            this.d_rows = event.rows;

            let pageEvent = this.createLazyLoadEvent(event);
            pageEvent.pageCount = event.pageCount;
            pageEvent.page = event.page;

            this.$emit('update:first', this.d_first);
            this.$emit('update:rows', this.d_rows);
            this.$emit('page', pageEvent);
        },
        onColumnHeaderClick(e) {
            const event = e.originalEvent;
            const column = e.column;

            if (column.sortable) {
                const targetNode = event.target;
                const columnField = column.sortField || column.field;

                if (DomHandler.hasClass(targetNode, 'p-sortable-column') || DomHandler.hasClass(targetNode, 'p-column-title')
                    || DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
                    DomHandler.clearSelection();

                    if (this.sortMode === 'single') {
                        if (this.d_sortField === columnField) {
                            if (this.removableSort && (this.d_sortOrder * -1 === this.defaultSortOrder)) {
                                this.d_sortOrder = null;
                                this.d_sortField = null;
                            }
                            else {
                                this.d_sortOrder = this.d_sortOrder * -1;
                            }
                        }
                        else {
                            this.d_sortOrder = this.defaultSortOrder;
                            this.d_sortField = columnField;
                        }

                        this.$emit('update:sortField', this.d_sortField);
                        this.$emit('update:sortOrder', this.d_sortOrder);
                        this.resetPage();
                    }
                    else if (this.sortMode === 'multiple') {
                        let metaKey = event.metaKey || event.ctrlKey;
                        if (!metaKey) {
                            this.d_multiSortMeta =  this.d_multiSortMeta.filter(meta => meta.field === columnField);
                        }

                        this.addMultiSortField(columnField);
                        this.$emit('update:multiSortMeta', this.d_multiSortMeta);
                    }

                    this.$emit('sort', this.createLazyLoadEvent(event));
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
        addMultiSortField(field) {
            let index =  this.d_multiSortMeta.findIndex(meta => meta.field === field);

            if (index >= 0) {
                if (this.removableSort && (this.d_multiSortMeta[index].order * -1 === this.defaultSortOrder))
                    this.d_multiSortMeta.splice(index, 1);
                else
                    this.d_multiSortMeta[index] = {field: field, order: this.d_multiSortMeta[index].order * -1};
            }
            else {
                this.d_multiSortMeta.push({field: field, order: this.defaultSortOrder});
            }

            this.d_multiSortMeta = [...this.d_multiSortMeta];
        },
        filter(data) {
            let filteredValue = [];

            for(let i = 0; i < data.length; i++) {
                let localMatch = true;
                let globalMatch = false;

                for(let j = 0; j < this.columns.length; j++) {
                    let col = this.columns[j];
                    let columnField = col.filterField || col.field;

                    //local
                    if (Object.prototype.hasOwnProperty.call(this.filters, columnField)) {
                        let filterValue = this.filters[columnField];
                        let dataFieldValue = ObjectUtils.resolveFieldData(data[i], columnField);
                        let filterConstraint = col.filterMatchMode === 'custom' ? col.filterFunction : FilterUtils[col.filterMatchMode];
                        if (!filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
                            localMatch = false;
                        }

                        if (!localMatch) {
                            break;
                        }
                    }

                    if (!col.excludeGlobalFilter && this.hasGlobalFilter() && !globalMatch) {
                        globalMatch = FilterUtils.contains(ObjectUtils.resolveFieldData(data[i], columnField), this.filters['global'], this.filterLocale);
                    }
                }

                let matches = localMatch;
                if(this.hasGlobalFilter()) {
                    matches = localMatch && globalMatch;
                }

                if(matches) {
                    filteredValue.push(data[i]);
                }
            }

            if (filteredValue.length === data.length) {
                filteredValue = data;
            }

            let filterEvent = this.createLazyLoadEvent();
            filterEvent.filteredValue = filteredValue;
            this.$emit('filter', filterEvent);

            return filteredValue;
        },
        onRowClick(e) {
            const event = e.originalEvent;
            if (DomHandler.isClickable(event.target)) {
                return;
            }

            this.$emit('row-click', e);

            if (this.selectionMode) {
                const rowData = e.data;
                const rowIndex = e.index;

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

                            this.$emit('row-unselect', {originalEvent: event, data: rowData, index: event.index, type: 'row'});
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

                            this.$emit('row-select', {originalEvent: event, data: rowData, index: event.index, type: 'row'});
                        }
                    }
                    else {
                        if (this.selectionMode === 'single') {
                            if (selected) {
                                this.$emit('update:selection', null);
                                this.$emit('row-unselect', {originalEvent: event, data: rowData, index: event.index, type: 'row'});
                            }
                            else {
                                this.$emit('update:selection', rowData);
                                this.$emit('row-select', {originalEvent: event, data: rowData, index: event.index, type: 'row'});
                            }
                        }
                        else if (this.selectionMode === 'multiple') {
                            if (selected) {
                                const selectionIndex = this.findIndexInSelection(rowData);
                                const _selection = this.selection.filter((val, i) => i != selectionIndex);
                                this.$emit('update:selection', _selection);
                                this.$emit('row-unselect', {originalEvent: event, data: rowData, index: event.index, type: 'row'});
                            }
                            else {
                                const _selection = this.selection ? [...this.selection, rowData] : [rowData];
                                this.$emit('update:selection', _selection);
                                this.$emit('row-select', {originalEvent: event, data: rowData, index: event.index, type: 'row'});
                            }
                        }
                    }
                }
            }

            this.rowTouched = false;
        },
        onRowRightClick(event) {
            DomHandler.clearSelection();
            event.originalEvent.target.focus();

            this.$emit('update:contextMenuSelection', event.data);
            this.$emit('row-contextmenu', event);
        },
        onRowTouchEnd() {
            this.rowTouched = true;
        },
        onRowKeyDown(e) {
            const event = e.originalEvent;
            const rowData = e.data;
            const rowIndex = e.index;

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
                        this.onRowClick({originalEvent: event, data: rowData, index: rowIndex});
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
                if (DomHandler.hasClass(nextRow, 'p-selectable-row'))
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
                if (DomHandler.hasClass(prevRow, 'p-selectable-row'))
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
        updateEditingRowKeys(editingRows) {
            if (editingRows && editingRows.length) {
                this.d_editingRowKeys = {};
                for (let data of editingRows) {
                    this.d_editingRowKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.d_editingRowKeys = null;
            }
        },
        equals(data1, data2) {
            return this.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.dataKey);
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
            if (data) {
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
            }

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

            if (columnWidth + delta > parseInt(minWidth, 10)) {
                if (this.columnResizeMode === 'fit') {
                    let nextColumn = this.resizeColumnElement.nextElementSibling;
                    let nextColumnWidth = nextColumn.offsetWidth - delta;

                    if (newColumnWidth > 15 && nextColumnWidth > 15) {
                        if(this.scrollable) {
                            const scrollableView = this.findParentScrollableView(this.resizeColumnElement);
                            const scrollableBodyTable = DomHandler.findSingle(scrollableView, 'table.p-datatable-scrollable-body-table');
                            const scrollableHeaderTable = DomHandler.findSingle(scrollableView, 'table.p-datatable-scrollable-header-table');
                            const scrollableFooterTable = DomHandler.findSingle(scrollableView, 'table.p-datatable-scrollable-footer-table');
                            const resizeColumnIndex = DomHandler.index(this.resizeColumnElement);

                            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        }
                        else {
                            this.resizeColumnElement.style.width = newColumnWidth + 'px';
                            if(nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                    }
                }
                else if (this.columnResizeMode === 'expand') {
                    if (this.scrollable) {
                        this.resizeScrollableTable(this.resizeColumnElement, newColumnWidth, delta);
                    }
                    else {
                        this.$refs.table.style.width = this.$refs.table.offsetWidth + delta + 'px';
                        this.resizeColumnElement.style.width = newColumnWidth + 'px';
                    }
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

            if (this.isStateful()) {
                this.saveState();
            }
        },
        resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
            if(table) {
                let colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;

                if(colGroup) {
                    let col = colGroup.children[resizeColumnIndex];
                    let nextCol = col.nextElementSibling;
                    col.style.width = newColumnWidth + 'px';

                    if (nextCol && nextColumnWidth) {
                        nextCol.style.width = nextColumnWidth + 'px';
                    }
                }
                else {
                    throw new Error("Scrollable tables require a colgroup to support resizable columns");
                }
            }
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
        onColumnHeaderMouseDown(e) {
            const event = e.originalEvent;
            const column = e.column;

            if (this.reorderableColumns && column.reorderableColumn) {
                if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.hasClass(event.target, 'p-column-resizer'))
                    event.currentTarget.draggable = false;
                else
                    event.currentTarget.draggable = true;
            }
        },
        onColumnHeaderDragStart(event) {
            if (this.columnResizing) {
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
                    ObjectUtils.reorderArray(this.d_columnOrder, dragIndex, dropIndex);

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
        findParentScrollableView(column) {
            if (column) {
                let parent = column.parentElement;
                while (parent && !DomHandler.hasClass(parent, 'p-datatable-scrollable-view')) {
                    parent = parent.parentElement;
                }

                return parent;
            }
            else {
                return null;
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
        resizeScrollableTable(column, newColumnWidth, delta) {
            const scrollableView = column ? this.findParentScrollableView(column) : this.$el;
            const scrollableBody = DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-body');
            const scrollableHeader = DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-header');
            const scrollableFooter = DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-footer');
            const scrollableBodyTable = DomHandler.findSingle(scrollableBody, 'table.p-datatable-scrollable-body-table');
            const scrollableHeaderTable = DomHandler.findSingle(scrollableHeader, 'table.p-datatable-scrollable-header-table');
            const scrollableFooterTable = DomHandler.findSingle(scrollableFooter, 'table.p-datatable-scrollable-footer-table');

            const scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
            const scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
            const isContainerInViewport = this.$el.offsetWidth >= parseFloat(scrollableBodyTableWidth);

            let setWidth = (container, table, width, isContainerInViewport) => {
                if (container && table) {
                    container.style.width = isContainerInViewport ? width + DomHandler.calculateScrollbarWidth(scrollableBody) + 'px' : 'auto'
                    table.style.width = width + 'px';
                }
            };

            setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
            setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
            setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);

            if (column) {
                let resizeColumnIndex = DomHandler.index(column);

                this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
            }
        },
        onRowMouseDown(event) {
            if (DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle'))
                event.currentTarget.draggable = true;
            else
                event.currentTarget.draggable = false;
        },
        onRowDragStart(e) {
            const event = e.originalEvent;
            const index = e.index;
            this.rowDragging = true;
            this.draggedRowIndex = index;
            event.dataTransfer.setData('text', 'b');    // For firefox
        },
        onRowDragOver(e) {
            const event = e.originalEvent;
            const index = e.index;

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
        toggleRowGroup(e) {
            const event = e.originalEvent;
            const data = e.data;
            const groupFieldValue = ObjectUtils.resolveFieldData(data, this.groupRowsBy);
            let _expandedRowGroups = this.expandedRowGroups ? [...this.expandedRowGroups] : [];

            if (this.isRowGroupExpanded(data)) {
                _expandedRowGroups = _expandedRowGroups.filter(group => group !== groupFieldValue);
                this.$emit('update:expandedRowGroups', _expandedRowGroups);
                this.$emit('rowgroup-collapse', {originalEvent: event, data: groupFieldValue});
            }
            else {
                _expandedRowGroups.push(groupFieldValue);
                this.$emit('update:expandedRowGroups', _expandedRowGroups);
                this.$emit('rowgroup-expand', {originalEvent: event, data: groupFieldValue});
            }
        },
        isRowGroupExpanded(rowData) {
            if (this.expandableRowGroups && this.expandedRowGroups) {
                let groupFieldValue = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
                return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
            }
            return false;
        },
        isStateful() {
            return this.stateKey != null;
        },
        getStorage() {
            switch(this.stateStorage) {
                case 'local':
                    return window.localStorage;

                case 'session':
                    return window.sessionStorage;

                default:
                    throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
            }
        },
        saveState() {
            const storage = this.getStorage();
            let state = {};

            if (this.paginator) {
                state.first = this.d_first;
                state.rows = this.d_rows;
            }

            if (this.d_sortField) {
                state.sortField = this.d_sortField;
                state.sortOrder = this.d_sortOrder;
            }

            if (this.d_multiSortMeta) {
                state.multiSortMeta = this.d_multiSortMeta;
            }

            if (this.hasFilters()) {
                state.filters = this.filters;
            }

            if (this.resizableColumns) {
                this.saveColumnWidths(state);
            }

            if (this.reorderableColumns) {
                state.columnOrder = this.d_columnOrder;
            }

            if (this.expandedRows) {
                state.expandedRows = this.expandedRows;
                state.expandedRowKeys = this.d_expandedRowKeys;
            }

            if (this.expandedRowGroups) {
                state.expandedRowGroups = this.expandedRowGroups;
            }

            if (this.selection) {
                state.selection = this.selection;
                state.selectionKeys = this.d_selectionKeys;
            }

            if (Object.keys(state).length) {
                storage.setItem(this.stateKey, JSON.stringify(state));
            }
        },
        restoreState() {
            const storage = this.getStorage();
            const stateString = storage.getItem(this.stateKey);

            if (stateString) {
                let restoredState = JSON.parse(stateString);

                if (this.paginator) {
                    this.d_first = restoredState.first;
                    this.d_rows = restoredState.rows;
                }

                if (restoredState.sortField) {
                    this.d_sortField = restoredState.sortField;
                    this.d_sortOrder = restoredState.sortOrder;
                }

                if (restoredState.multiSortMeta) {
                    this.d_multiSortMeta = restoredState.multiSortMeta;
                }

                if (restoredState.filters) {
                    this.$emit('update:filters', restoredState.filters);
                }

                if (this.resizableColumns) {
                    this.columnWidthsState = restoredState.columnWidths;
                    this.tableWidthState = restoredState.tableWidth;
                }

                if (this.reorderableColumns) {
                    this.d_columnOrder = restoredState.columnOrder;
                }

                if (restoredState.expandedRows) {
                    this.d_expandedRowKeys = restoredState.expandedRowKeys;
                    this.$emit('update:expandedRows', restoredState.expandedRows);
                }

                if (restoredState.expandedRowGroups) {
                    this.$emit('update:expandedRowGroups', restoredState.expandedRowGroups);
                }

                if (restoredState.selection) {
                    this.d_selectionKeys = restoredState.d_selectionKeys;
                    this.$emit('update:selection', restoredState.selection);
                }
            }
        },
        saveColumnWidths(state) {
            let widths = [];
            let headers = DomHandler.find(this.$el, '.p-datatable-thead > tr > th');
            headers.forEach(header => widths.push(DomHandler.getOuterWidth(header)));
            state.columnWidths = widths.join(',');

            if (this.columnResizeMode === 'expand') {
                state.tableWidth = this.scrollable ? DomHandler.findSingle(this.$el, '.p-datatable-scrollable-header-table').style.width :
                                                    DomHandler.getOuterWidth(this.$refs.table) + 'px';
            }
        },
        restoreColumnWidths() {
            if (this.columnWidthsState) {
                let widths = this.columnWidthsState.split(',');

                if (this.columnResizeMode === 'expand' && this.tableWidthState) {
                    if (this.scrollable) {
                        this.resizeScrollableTable(null, this.tableWidthState, 0);
                    }
                    else {
                        this.$refs.table.style.width = this.tableWidthState;
                        this.$el.style.width = this.tableWidthState;
                    }
                }

                if (this.scrollable) {
                    let headerCols = DomHandler.find(this.$el, '.p-datatable-scrollable-header-table > colgroup > col');
                    let bodyCols = DomHandler.find(this.$el, '.p-datatable-scrollable-body-table > colgroup > col');

                    headerCols.forEach((col, index) => col.style.width = widths[index] + 'px');
                    bodyCols.forEach((col, index) => col.style.width = widths[index] + 'px');
                }
                else {
                    let headers = DomHandler.find(this.$refs.table, '.p-datatable-thead > tr > th');
                    headers.forEach((header, index) => header.style.width = widths[index] + 'px');
                }


            }
        },
        onCellEditInit(event) {
            this.$emit('cell-edit-init', event);
        },
        onCellEditComplete(event) {
            this.$emit('cell-edit-complete', event);
        },
        onCellEditCancel(event) {
            this.$emit('cell-edit-cancel', event);
        },
        onRowEditInit(event) {
            let _editingRows = this.editingRows ? [...this.editingRows] : [];
            _editingRows.push(event.data);
            this.$emit('update:editingRows', _editingRows);
            this.$emit('row-edit-init', event);
        },
        onRowEditSave(event) {
            let _editingRows = [...this.editingRows];
            _editingRows.splice(this.findIndex(event.data, _editingRows), 1);
            this.$emit('update:editingRows', _editingRows);
            this.$emit('row-edit-save', event);
        },
        onRowEditCancel(event) {
            let _editingRows = [...this.editingRows];
            _editingRows.splice(this.findIndex(event.data, _editingRows), 1);
            this.$emit('update:editingRows', _editingRows);
            this.$emit('row-edit-cancel', event);
        },
        onVirtualScroll(event) {
            if(this.virtualScrollTimer) {
                clearTimeout(this.virtualScrollTimer);
            }

            this.virtualScrollTimer = setTimeout(() => {
                this.$emit('virtual-scroll', {
                        first: (event.page - 1) * this.rows,
                        rows: this.rows * 2
                    });
                }, this.virtualScrollDelay);
        },
        createLazyLoadEvent(event) {
            let filterMatchModes;
            if (this.hasFilters()) {
                filterMatchModes = {};
                this.columns.forEach(col => {
                    if (col.field) {
                        filterMatchModes[col.field] = col.filterMatchMode;
                    }
                });
            }

            return {
                originalEvent: event,
                first: this.d_first,
                rows: this.d_rows,
                sortField: this.d_sortField,
                sortOrder: this.d_sortOrder,
                multiSortMeta: this.d_multiSortMeta,
                filters: this.filters,
                filterMatchModes: filterMatchModes
            };
        },
        hasFilters() {
            return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
        },
        hasGlobalFilter() {
            return this.filters && Object.prototype.hasOwnProperty.call(this.filters, 'global');
        },
    },
    computed: {
        containerClass() {
            return [
                'p-datatable p-component', {
                    'p-datatable-hoverable-rows': (this.rowHover || this.selectionMode),
                    'p-datatable-auto-layout': this.autoLayout,
                    'p-datatable-resizable': this.resizableColumns,
                    'p-datatable-resizable-fit': this.resizableColumns && this.columnResizeMode === 'fit',
                    'p-datatable-scrollable': this.scrollable,
                    'p-datatable-virtual-scrollable': this.virtualScroll,
                    'p-datatable-flex-scrollable': (this.scrollable && this.scrollHeight === 'flex')
                }
            ];
        },
        columns() {
            let columns = [];

            if (this.allChildren) {
                columns = this.allChildren.filter(child => child.$options._propKeys.indexOf('columnKey') !== -1);

                if (this.reorderableColumns && this.d_columnOrder) {
                    let orderedColumns = [];
                    for (let columnKey of this.d_columnOrder) {
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
        frozenColumns() {
            let frozenColumns = [];

            for(let col of this.columns) {
                if(col.frozen) {
                    frozenColumns = frozenColumns||[];
                    frozenColumns.push(col);
                }
            }

            return frozenColumns;
        },
        scrollableColumns() {
            let scrollableColumns = [];

            for(let col of this.columns) {
                if(!col.frozen) {
                    scrollableColumns = scrollableColumns||[];
                    scrollableColumns.push(col);
                }
            }

            return scrollableColumns;
        },
        hasFrozenColumns() {
            return this.frozenColumns.length > 0;
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
        frozenHeaderColumnGroup() {
            if (this.allChildren) {
                for (let child of this.allChildren) {
                    if (child.$vnode.tag.indexOf('columngroup') !== -1 && child.type === 'frozenheader') {
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
        frozenFooterColumnGroup() {
            if (this.allChildren) {
                for (let child of this.allChildren) {
                    if (child.$vnode.tag.indexOf('columngroup') !== -1 && child.type === 'frozenfooter') {
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

                    if (this.hasFilters()) {
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

            if (data && this.paginator) {
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
        loadingIconClass() {
            return ['p-datatable-loading-icon pi-spin', this.loadingIcon];
        },
        allRowsSelected() {
            const val = this.processedData;
            return (val && val.length > 0 && this.selection && this.selection.length > 0 && this.selection.length === val.length);
        }
    },
    components: {
        'DTPaginator': Paginator,
        'DTScrollableView': ScrollableView,
        'DTTableHeader': TableHeader,
        'DTTableBody': TableBody,
        'DTTableFooter': TableFooter,
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

.p-datatable .p-sortable-column {
    cursor: pointer;
    user-select: none;
}

.p-datatable .p-sortable-column .p-column-title,
.p-datatable .p-sortable-column .p-sortable-column-icon,
.p-datatable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-datatable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.p-datatable-auto-layout > .p-datatable-wrapper {
    overflow-x: auto;
}

.p-datatable-auto-layout > .p-datatable-wrapper > table {
    table-layout: auto;
}

.p-datatable-hoverable-rows .p-selectable-row {
    cursor: pointer;
}

/* Scrollable */
.p-datatable-scrollable-wrapper {
    position: relative;
}

.p-datatable-scrollable-header,
.p-datatable-scrollable-footer {
    overflow: hidden;
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
    top: 0;
}

/* Flex Scrollable */
.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-flex-scrollable .p-datatable-scrollable-wrapper,
.p-datatable-flex-scrollable .p-datatable-scrollable-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-flex-scrollable .p-datatable-scrollable-body {
    flex: 1;
}

/* Resizable */
.p-datatable-resizable > .p-datatable-wrapper {
    overflow-x: auto;
}

.p-datatable-resizable .p-datatable-thead > tr > th,
.p-datatable-resizable .p-datatable-tfoot > tr > td,
.p-datatable-resizable .p-datatable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
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
    width: .5rem;
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

.p-datatable .p-row-editor-init,
.p-datatable .p-row-editor-save,
.p-datatable .p-row-editor-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Expand */
.p-datatable .p-row-toggler {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
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
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}
</style>
