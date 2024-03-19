<template>
    <div :class="cx('root')" data-scrollselectors=".p-datatable-wrapper" v-bind="ptmi('root')">
        <slot></slot>
        <div v-if="loading" :class="cx('loadingOverlay')" v-bind="ptm('loadingOverlay')">
            <slot v-if="$slots.loading" name="loading"></slot>
            <template v-else>
                <component v-if="$slots.loadingicon" :is="$slots.loadingicon" :class="cx('loadingIcon')" />
                <i v-else-if="loadingIcon" :class="[cx('loadingIcon'), 'pi-spin', loadingIcon]" v-bind="ptm('loadingIcon')" />
                <SpinnerIcon v-else spin :class="cx('loadingIcon')" v-bind="ptm('loadingIcon')" />
            </template>
        </div>
        <div v-if="$slots.header" :class="cx('header')" v-bind="ptm('header')">
            <slot name="header"></slot>
        </div>
        <DTPaginator
            v-if="paginatorTop"
            :rows="d_rows"
            :first="d_first"
            :totalRecords="totalRecordsLength"
            :pageLinkSize="pageLinkSize"
            :template="paginatorTemplate"
            :rowsPerPageOptions="rowsPerPageOptions"
            :currentPageReportTemplate="currentPageReportTemplate"
            :class="cx('paginator')"
            @page="onPage($event)"
            :alwaysShow="alwaysShowPaginator"
            :unstyled="unstyled"
            :pt="ptm('paginator')"
        >
            <template v-if="$slots.paginatorstart" #start>
                <slot name="paginatorstart"></slot>
            </template>
            <template v-if="$slots.paginatorend" #end>
                <slot name="paginatorend"></slot>
            </template>
            <template v-if="$slots.paginatorfirstpagelinkicon" #firstpagelinkicon="slotProps">
                <slot name="paginatorfirstpagelinkicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatorprevpagelinkicon" #prevpagelinkicon="slotProps">
                <slot name="paginatorprevpagelinkicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatornextpagelinkicon" #nextpagelinkicon="slotProps">
                <slot name="paginatornextpagelinkicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatorlastpagelinkicon" #lastpagelinkicon="slotProps">
                <slot name="paginatorlastpagelinkicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatorjumptopagedropdownicon" #jumptopagedropdownicon="slotProps">
                <slot name="paginatorjumptopagedropdownicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatorrowsperpagedropdownicon" #rowsperpagedropdownicon="slotProps">
                <slot name="paginatorrowsperpagedropdownicon" :class="slotProps.class"></slot>
            </template>
        </DTPaginator>
        <div :class="cx('wrapper')" :style="[sx('wrapper'), { maxHeight: virtualScrollerDisabled ? scrollHeight : '' }]" v-bind="ptm('wrapper')">
            <DTVirtualScroller
                ref="virtualScroller"
                v-bind="virtualScrollerOptions"
                :items="processedData"
                :columns="columns"
                :style="scrollHeight !== 'flex' ? { height: scrollHeight } : undefined"
                :scrollHeight="scrollHeight !== 'flex' ? undefined : '100%'"
                :disabled="virtualScrollerDisabled"
                loaderDisabled
                inline
                autoSize
                :showSpacer="false"
                :pt="ptm('virtualScroller')"
            >
                <template #content="slotProps">
                    <table ref="table" role="table" :class="[cx('table'), tableClass]" :style="[tableStyle, slotProps.spacerStyle]" v-bind="{ ...tableProps, ...ptm('table') }">
                        <DTTableHeader
                            :columnGroup="headerColumnGroup"
                            :columns="slotProps.columns"
                            :rowGroupMode="rowGroupMode"
                            :groupRowsBy="groupRowsBy"
                            :groupRowSortField="groupRowSortField"
                            :reorderableColumns="reorderableColumns"
                            :resizableColumns="resizableColumns"
                            :allRowsSelected="allRowsSelected"
                            :empty="empty"
                            :sortMode="sortMode"
                            :sortField="d_sortField"
                            :sortOrder="d_sortOrder"
                            :multiSortMeta="d_multiSortMeta"
                            :filters="d_filters"
                            :filtersStore="filters"
                            :filterDisplay="filterDisplay"
                            :filterInputProps="filterInputProps"
                            :first="d_first"
                            @column-click="onColumnHeaderClick($event)"
                            @column-mousedown="onColumnHeaderMouseDown($event)"
                            @filter-change="onFilterChange"
                            @filter-apply="onFilterApply"
                            @column-dragstart="onColumnHeaderDragStart($event)"
                            @column-dragover="onColumnHeaderDragOver($event)"
                            @column-dragleave="onColumnHeaderDragLeave($event)"
                            @column-drop="onColumnHeaderDrop($event)"
                            @column-resizestart="onColumnResizeStart($event)"
                            @checkbox-change="toggleRowsWithCheckbox($event)"
                            :unstyled="unstyled"
                            :pt="pt"
                        />
                        <DTTableBody
                            v-if="frozenValue"
                            ref="frozenBodyRef"
                            :value="frozenValue"
                            :frozenRow="true"
                            :columns="slotProps.columns"
                            :first="d_first"
                            :dataKey="dataKey"
                            :selection="selection"
                            :selectionKeys="d_selectionKeys"
                            :selectionMode="selectionMode"
                            :contextMenu="contextMenu"
                            :contextMenuSelection="contextMenuSelection"
                            :rowGroupMode="rowGroupMode"
                            :groupRowsBy="groupRowsBy"
                            :expandableRowGroups="expandableRowGroups"
                            :rowClass="rowClass"
                            :rowStyle="rowStyle"
                            :editMode="editMode"
                            :compareSelectionBy="compareSelectionBy"
                            :scrollable="scrollable"
                            :expandedRowIcon="expandedRowIcon"
                            :collapsedRowIcon="collapsedRowIcon"
                            :expandedRows="expandedRows"
                            :expandedRowGroups="expandedRowGroups"
                            :editingRows="editingRows"
                            :editingRowKeys="d_editingRowKeys"
                            :templates="$slots"
                            :responsiveLayout="responsiveLayout"
                            :isVirtualScrollerDisabled="true"
                            @rowgroup-toggle="toggleRowGroup"
                            @row-click="onRowClick($event)"
                            @row-dblclick="onRowDblClick($event)"
                            @row-rightclick="onRowRightClick($event)"
                            @row-touchend="onRowTouchEnd"
                            @row-keydown="onRowKeyDown"
                            @row-mousedown="onRowMouseDown"
                            @row-dragstart="onRowDragStart($event)"
                            @row-dragover="onRowDragOver($event)"
                            @row-dragleave="onRowDragLeave($event)"
                            @row-dragend="onRowDragEnd($event)"
                            @row-drop="onRowDrop($event)"
                            @row-toggle="toggleRow($event)"
                            @radio-change="toggleRowWithRadio($event)"
                            @checkbox-change="toggleRowWithCheckbox($event)"
                            @cell-edit-init="onCellEditInit($event)"
                            @cell-edit-complete="onCellEditComplete($event)"
                            @cell-edit-cancel="onCellEditCancel($event)"
                            @row-edit-init="onRowEditInit($event)"
                            @row-edit-save="onRowEditSave($event)"
                            @row-edit-cancel="onRowEditCancel($event)"
                            :editingMeta="d_editingMeta"
                            @editing-meta-change="onEditingMetaChange"
                            :unstyled="unstyled"
                            :pt="pt"
                        />
                        <DTTableBody
                            ref="bodyRef"
                            :value="dataToRender(slotProps.rows)"
                            :class="slotProps.styleClass"
                            :columns="slotProps.columns"
                            :empty="empty"
                            :first="d_first"
                            :dataKey="dataKey"
                            :selection="selection"
                            :selectionKeys="d_selectionKeys"
                            :selectionMode="selectionMode"
                            :contextMenu="contextMenu"
                            :contextMenuSelection="contextMenuSelection"
                            :rowGroupMode="rowGroupMode"
                            :groupRowsBy="groupRowsBy"
                            :expandableRowGroups="expandableRowGroups"
                            :rowClass="rowClass"
                            :rowStyle="rowStyle"
                            :editMode="editMode"
                            :compareSelectionBy="compareSelectionBy"
                            :scrollable="scrollable"
                            :expandedRowIcon="expandedRowIcon"
                            :collapsedRowIcon="collapsedRowIcon"
                            :expandedRows="expandedRows"
                            :expandedRowGroups="expandedRowGroups"
                            :editingRows="editingRows"
                            :editingRowKeys="d_editingRowKeys"
                            :templates="$slots"
                            :responsiveLayout="responsiveLayout"
                            :virtualScrollerContentProps="slotProps"
                            :isVirtualScrollerDisabled="virtualScrollerDisabled"
                            @rowgroup-toggle="toggleRowGroup"
                            @row-click="onRowClick($event)"
                            @row-dblclick="onRowDblClick($event)"
                            @row-rightclick="onRowRightClick($event)"
                            @row-touchend="onRowTouchEnd"
                            @row-keydown="onRowKeyDown($event, slotProps)"
                            @row-mousedown="onRowMouseDown"
                            @row-dragstart="onRowDragStart($event)"
                            @row-dragover="onRowDragOver($event)"
                            @row-dragleave="onRowDragLeave($event)"
                            @row-dragend="onRowDragEnd($event)"
                            @row-drop="onRowDrop($event)"
                            @row-toggle="toggleRow($event)"
                            @radio-change="toggleRowWithRadio($event)"
                            @checkbox-change="toggleRowWithCheckbox($event)"
                            @cell-edit-init="onCellEditInit($event)"
                            @cell-edit-complete="onCellEditComplete($event)"
                            @cell-edit-cancel="onCellEditCancel($event)"
                            @row-edit-init="onRowEditInit($event)"
                            @row-edit-save="onRowEditSave($event)"
                            @row-edit-cancel="onRowEditCancel($event)"
                            :editingMeta="d_editingMeta"
                            @editing-meta-change="onEditingMetaChange"
                            :unstyled="unstyled"
                            :pt="pt"
                        />
                        <tbody
                            v-if="hasSpacerStyle(slotProps.spacerStyle)"
                            :class="cx('virtualScrollerSpacer')"
                            :style="{ height: `calc(${slotProps.spacerStyle.height} - ${slotProps.rows.length * slotProps.itemSize}px)` }"
                            v-bind="ptm('virtualScrollerSpacer')"
                        ></tbody>
                        <DTTableFooter :columnGroup="footerColumnGroup" :columns="slotProps.columns" :pt="pt" />
                    </table>
                </template>
            </DTVirtualScroller>
        </div>
        <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
            <slot name="footer"></slot>
        </div>
        <DTPaginator
            v-if="paginatorBottom"
            :rows="d_rows"
            :first="d_first"
            :totalRecords="totalRecordsLength"
            :pageLinkSize="pageLinkSize"
            :template="paginatorTemplate"
            :rowsPerPageOptions="rowsPerPageOptions"
            :currentPageReportTemplate="currentPageReportTemplate"
            :class="cx('paginator')"
            @page="onPage($event)"
            :alwaysShow="alwaysShowPaginator"
            :unstyled="unstyled"
            :pt="ptm('paginator')"
        >
            <template v-if="$slots.paginatorstart" #start>
                <slot name="paginatorstart"></slot>
            </template>
            <template v-if="$slots.paginatorend" #end>
                <slot name="paginatorend"></slot>
            </template>
            <template v-if="$slots.paginatorfirstpagelinkicon" #firstpagelinkicon="slotProps">
                <slot name="paginatorfirstpagelinkicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatorprevpagelinkicon" #prevpagelinkicon="slotProps">
                <slot name="paginatorprevpagelinkicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatornextpagelinkicon" #nextpagelinkicon="slotProps">
                <slot name="paginatornextpagelinkicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatorlastpagelinkicon" #lastpagelinkicon="slotProps">
                <slot name="paginatorlastpagelinkicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatorjumptopagedropdownicon" #jumptopagedropdownicon="slotProps">
                <slot name="paginatorjumptopagedropdownicon" :class="slotProps.class"></slot>
            </template>
            <template v-if="$slots.paginatorrowsperpagedropdownicon" #rowsperpagedropdownicon="slotProps">
                <slot name="paginatorrowsperpagedropdownicon" :class="slotProps.class"></slot>
            </template>
        </DTPaginator>
        <div ref="resizeHelper" :class="cx('resizeHelper')" style="display: none" v-bind="ptm('resizeHelper')"></div>
        <span v-if="reorderableColumns" ref="reorderIndicatorUp" :class="cx('reorderIndicatorUp')" style="position: absolute; display: none" v-bind="ptm('reorderIndicatorUp')">
            <component :is="$slots.reorderindicatorupicon || 'ArrowDownIcon'" />
        </span>
        <span v-if="reorderableColumns" ref="reorderIndicatorDown" :class="cx('reorderIndicatorDown')" style="position: absolute; display: none" v-bind="ptm('reorderIndicatorDown')">
            <component :is="$slots.reorderindicatordownicon || 'ArrowUpIcon'" />
        </span>
    </div>
</template>

<script>
import { FilterMatchMode, FilterOperator, FilterService } from 'primevue/api';
import ArrowDownIcon from 'primevue/icons/arrowdown';
import ArrowUpIcon from 'primevue/icons/arrowup';
import SpinnerIcon from 'primevue/icons/spinner';
import Paginator from 'primevue/paginator';
import { DomHandler, HelperSet, ObjectUtils, UniqueComponentId } from 'primevue/utils';
import VirtualScroller from 'primevue/virtualscroller';
import BaseDataTable from './BaseDataTable.vue';
import TableBody from './TableBody.vue';
import TableFooter from './TableFooter.vue';
import TableHeader from './TableHeader.vue';

export default {
    name: 'DataTable',
    extends: BaseDataTable,
    inheritAttrs: false,
    emits: [
        'value-change',
        'update:first',
        'update:rows',
        'page',
        'update:sortField',
        'update:sortOrder',
        'update:multiSortMeta',
        'sort',
        'filter',
        'row-click',
        'row-dblclick',
        'update:selection',
        'row-select',
        'row-unselect',
        'update:contextMenuSelection',
        'row-contextmenu',
        'row-unselect-all',
        'row-select-all',
        'select-all-change',
        'column-resize-end',
        'column-reorder',
        'row-reorder',
        'update:expandedRows',
        'row-collapse',
        'row-expand',
        'update:expandedRowGroups',
        'rowgroup-collapse',
        'rowgroup-expand',
        'update:filters',
        'state-restore',
        'state-save',
        'cell-edit-init',
        'cell-edit-complete',
        'cell-edit-cancel',
        'update:editingRows',
        'row-edit-init',
        'row-edit-save',
        'row-edit-cancel'
    ],
    provide() {
        return {
            $columns: this.d_columns,
            $columnGroups: this.d_columnGroups
        };
    },
    data() {
        return {
            d_first: this.first,
            d_rows: this.rows,
            d_sortField: this.sortField,
            d_sortOrder: this.sortOrder,
            d_nullSortOrder: this.nullSortOrder,
            d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : [],
            d_groupRowsSortMeta: null,
            d_selectionKeys: null,
            d_columnOrder: null,
            d_editingRowKeys: null,
            d_editingMeta: {},
            d_filters: this.cloneFilters(this.filters),
            d_columns: new HelperSet({ type: 'Column' }),
            d_columnGroups: new HelperSet({ type: 'ColumnGroup' })
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
    draggedColumnElement: null,
    draggedRowIndex: null,
    droppedRowIndex: null,
    rowDragging: null,
    columnWidthsState: null,
    tableWidthState: null,
    columnWidthsRestored: false,
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
        nullSortOrder(newValue) {
            this.d_nullSortOrder = newValue;
        },
        multiSortMeta(newValue) {
            this.d_multiSortMeta = newValue;
        },
        selection: {
            immediate: true,
            handler(newValue) {
                if (this.dataKey) {
                    this.updateSelectionKeys(newValue);
                }
            }
        },
        editingRows: {
            immediate: true,
            handler(newValue) {
                if (this.dataKey) {
                    this.updateEditingRowKeys(newValue);
                }
            }
        },
        filters: {
            deep: true,
            handler: function (newValue) {
                this.d_filters = this.cloneFilters(newValue);
            }
        }
    },
    mounted() {
        this.$el.setAttribute(this.attributeSelector, '');

        if (this.responsiveLayout === 'stack' && !this.scrollable && !this.unstyled) {
            this.createResponsiveStyle();
        }

        if (this.isStateful()) {
            this.restoreState();

            this.resizableColumns && this.restoreColumnWidths();
        }

        if (this.editMode === 'row' && this.dataKey && !this.d_editingRowKeys) {
            this.updateEditingRowKeys(this.editingRows);
        }
    },
    beforeUnmount() {
        this.unbindColumnResizeEvents();
        this.destroyStyleElement();
        this.destroyResponsiveStyle();

        this.d_columns.clear();
        this.d_columnGroups.clear();
    },
    updated() {
        if (this.isStateful()) {
            this.saveState();
        }

        if (this.editMode === 'row' && this.dataKey && !this.d_editingRowKeys) {
            this.updateEditingRowKeys(this.editingRows);
        }
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        onPage(event) {
            this.clearEditingMetaData();

            this.d_first = event.first;
            this.d_rows = event.rows;

            let pageEvent = this.createLazyLoadEvent(event);

            pageEvent.pageCount = event.pageCount;
            pageEvent.page = event.page;

            this.$emit('update:first', this.d_first);
            this.$emit('update:rows', this.d_rows);
            this.$emit('page', pageEvent);
            this.$nextTick(() => {
                this.$emit('value-change', this.processedData);
            });
        },
        onColumnHeaderClick(e) {
            const event = e.originalEvent;
            const column = e.column;

            if (this.columnProp(column, 'sortable')) {
                const targetNode = event.target;
                const columnField = this.columnProp(column, 'sortField') || this.columnProp(column, 'field');

                if (
                    DomHandler.getAttribute(targetNode, 'data-p-sortable-column') === true ||
                    DomHandler.getAttribute(targetNode, 'data-pc-section') === 'headertitle' ||
                    DomHandler.getAttribute(targetNode, 'data-pc-section') === 'headercontent' ||
                    DomHandler.getAttribute(targetNode, 'data-pc-section') === 'sorticon' ||
                    DomHandler.getAttribute(targetNode.parentElement, 'data-pc-section') === 'sorticon' ||
                    DomHandler.getAttribute(targetNode.parentElement.parentElement, 'data-pc-section') === 'sorticon' ||
                    (targetNode.closest('[data-p-sortable-column="true"]') && !targetNode.closest('[data-pc-section="filtermenubutton"]') && !DomHandler.isClickable(event.target))
                ) {
                    DomHandler.clearSelection();

                    if (this.sortMode === 'single') {
                        if (this.d_sortField === columnField) {
                            if (this.removableSort && this.d_sortOrder * -1 === this.defaultSortOrder) {
                                this.d_sortOrder = null;
                                this.d_sortField = null;
                            } else {
                                this.d_sortOrder = this.d_sortOrder * -1;
                            }
                        } else {
                            this.d_sortOrder = this.defaultSortOrder;
                            this.d_sortField = columnField;
                        }

                        this.$emit('update:sortField', this.d_sortField);
                        this.$emit('update:sortOrder', this.d_sortOrder);
                        this.resetPage();
                    } else if (this.sortMode === 'multiple') {
                        let metaKey = event.metaKey || event.ctrlKey;

                        if (!metaKey) {
                            this.d_multiSortMeta = this.d_multiSortMeta.filter((meta) => meta.field === columnField);
                        }

                        this.addMultiSortField(columnField);
                        this.$emit('update:multiSortMeta', this.d_multiSortMeta);
                    }

                    this.$emit('sort', this.createLazyLoadEvent(event));
                    this.$nextTick(() => {
                        this.$emit('value-change', this.processedData);
                    });
                }
            }
        },
        sortSingle(value) {
            this.clearEditingMetaData();

            if (this.groupRowsBy && this.groupRowsBy === this.sortField) {
                this.d_multiSortMeta = [
                    { field: this.sortField, order: this.sortOrder || this.defaultSortOrder },
                    { field: this.d_sortField, order: this.d_sortOrder }
                ];

                return this.sortMultiple(value);
            }

            let data = [...value];
            let resolvedFieldData = new Map();

            for (let item of data) {
                resolvedFieldData.set(item, ObjectUtils.resolveFieldData(item, this.d_sortField));
            }

            const comparer = ObjectUtils.localeComparator();

            data.sort((data1, data2) => {
                let value1 = resolvedFieldData.get(data1);
                let value2 = resolvedFieldData.get(data2);

                return ObjectUtils.sort(value1, value2, this.d_sortOrder, comparer, this.d_nullSortOrder);
            });

            return data;
        },
        sortMultiple(value) {
            this.clearEditingMetaData();

            if (this.groupRowsBy && (this.d_groupRowsSortMeta || (this.d_multiSortMeta.length && this.groupRowsBy === this.d_multiSortMeta[0].field))) {
                const firstSortMeta = this.d_multiSortMeta[0];

                !this.d_groupRowsSortMeta && (this.d_groupRowsSortMeta = firstSortMeta);

                if (firstSortMeta.field !== this.d_groupRowsSortMeta.field) {
                    this.d_multiSortMeta = [this.d_groupRowsSortMeta, ...this.d_multiSortMeta];
                }
            }

            let data = [...value];

            data.sort((data1, data2) => {
                return this.multisortField(data1, data2, 0);
            });

            return data;
        },
        multisortField(data1, data2, index) {
            const value1 = ObjectUtils.resolveFieldData(data1, this.d_multiSortMeta[index].field);
            const value2 = ObjectUtils.resolveFieldData(data2, this.d_multiSortMeta[index].field);
            const comparer = ObjectUtils.localeComparator();

            if (value1 === value2) {
                return this.d_multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, index + 1) : 0;
            }

            return ObjectUtils.sort(value1, value2, this.d_multiSortMeta[index].order, comparer, this.d_nullSortOrder);
        },
        addMultiSortField(field) {
            let index = this.d_multiSortMeta.findIndex((meta) => meta.field === field);

            if (index >= 0) {
                if (this.removableSort && this.d_multiSortMeta[index].order * -1 === this.defaultSortOrder) this.d_multiSortMeta.splice(index, 1);
                else this.d_multiSortMeta[index] = { field: field, order: this.d_multiSortMeta[index].order * -1 };
            } else {
                this.d_multiSortMeta.push({ field: field, order: this.defaultSortOrder });
            }

            this.d_multiSortMeta = [...this.d_multiSortMeta];
        },
        getActiveFilters(filters) {
            const removeEmptyFilters = ([key, value]) => {
                if (value.constraints) {
                    const filteredConstraints = value.constraints.filter((constraint) => constraint.value !== null);

                    if (filteredConstraints.length > 0) {
                        return [key, { ...value, constraints: filteredConstraints }];
                    }
                } else if (value.value !== null) {
                    return [key, value];
                }

                return undefined;
            };

            const filterValidEntries = (entry) => entry !== undefined;
            const entries = Object.entries(filters).map(removeEmptyFilters).filter(filterValidEntries);

            return Object.fromEntries(entries);
        },
        filter(data) {
            if (!data) {
                return;
            }

            this.clearEditingMetaData();

            let activeFilters = this.getActiveFilters(this.filters);
            let globalFilterFieldsArray;

            if (activeFilters['global']) {
                globalFilterFieldsArray = this.globalFilterFields || this.columns.map((col) => this.columnProp(col, 'filterField') || this.columnProp(col, 'field'));
            }

            let filteredValue = [];

            for (let i = 0; i < data.length; i++) {
                let localMatch = true;
                let globalMatch = false;
                let localFiltered = false;

                for (let prop in activeFilters) {
                    if (Object.prototype.hasOwnProperty.call(activeFilters, prop) && prop !== 'global') {
                        localFiltered = true;
                        let filterField = prop;
                        let filterMeta = activeFilters[filterField];

                        if (filterMeta.operator) {
                            for (let filterConstraint of filterMeta.constraints) {
                                localMatch = this.executeLocalFilter(filterField, data[i], filterConstraint);

                                if ((filterMeta.operator === FilterOperator.OR && localMatch) || (filterMeta.operator === FilterOperator.AND && !localMatch)) {
                                    break;
                                }
                            }
                        } else {
                            localMatch = this.executeLocalFilter(filterField, data[i], filterMeta);
                        }

                        if (!localMatch) {
                            break;
                        }
                    }
                }

                if (localMatch && activeFilters['global'] && !globalMatch && globalFilterFieldsArray) {
                    for (let j = 0; j < globalFilterFieldsArray.length; j++) {
                        let globalFilterField = globalFilterFieldsArray[j];

                        globalMatch = FilterService.filters[activeFilters['global'].matchMode || FilterMatchMode.CONTAINS](ObjectUtils.resolveFieldData(data[i], globalFilterField), activeFilters['global'].value, this.filterLocale);

                        if (globalMatch) {
                            break;
                        }
                    }
                }

                let matches;

                if (activeFilters['global']) {
                    matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
                } else {
                    matches = localFiltered && localMatch;
                }

                if (matches) {
                    filteredValue.push(data[i]);
                }
            }

            if (filteredValue.length === this.value.length || Object.keys(activeFilters).length == 0) {
                filteredValue = data;
            }

            let filterEvent = this.createLazyLoadEvent();

            filterEvent.filteredValue = filteredValue;
            this.$emit('filter', filterEvent);
            this.$nextTick(() => {
                this.$emit('value-change', this.processedData);
            });

            return filteredValue;
        },
        executeLocalFilter(field, rowData, filterMeta) {
            let filterValue = filterMeta.value;
            let filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
            let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
            let filterConstraint = FilterService.filters[filterMatchMode];

            return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
        },
        onRowClick(e) {
            const event = e.originalEvent;
            const body = this.$refs.bodyRef && this.$refs.bodyRef.$el;
            const focusedItem = DomHandler.findSingle(body, 'tr[data-p-selectable-row="true"][tabindex="0"]');

            if (DomHandler.isClickable(event.target)) {
                return;
            }

            this.$emit('row-click', e);

            if (this.selectionMode) {
                const rowData = e.data;
                const rowIndex = this.d_first + e.index;

                if (this.isMultipleSelectionMode() && event.shiftKey && this.anchorRowIndex != null) {
                    DomHandler.clearSelection();
                    this.rangeRowIndex = rowIndex;
                    this.selectRange(event);
                } else {
                    const selected = this.isSelected(rowData);
                    const metaSelection = this.rowTouched ? false : this.metaKeySelection;

                    this.anchorRowIndex = rowIndex;
                    this.rangeRowIndex = rowIndex;

                    if (metaSelection) {
                        let metaKey = event.metaKey || event.ctrlKey;

                        if (selected && metaKey) {
                            if (this.isSingleSelectionMode()) {
                                this.$emit('update:selection', null);
                            } else {
                                const selectionIndex = this.findIndexInSelection(rowData);
                                const _selection = this.selection.filter((val, i) => i != selectionIndex);

                                this.$emit('update:selection', _selection);
                            }

                            this.$emit('row-unselect', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' });
                        } else {
                            if (this.isSingleSelectionMode()) {
                                this.$emit('update:selection', rowData);
                            } else if (this.isMultipleSelectionMode()) {
                                let _selection = metaKey ? this.selection || [] : [];

                                _selection = [..._selection, rowData];
                                this.$emit('update:selection', _selection);
                            }

                            this.$emit('row-select', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' });
                        }
                    } else {
                        if (this.selectionMode === 'single') {
                            if (selected) {
                                this.$emit('update:selection', null);
                                this.$emit('row-unselect', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' });
                            } else {
                                this.$emit('update:selection', rowData);
                                this.$emit('row-select', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' });
                            }
                        } else if (this.selectionMode === 'multiple') {
                            if (selected) {
                                const selectionIndex = this.findIndexInSelection(rowData);
                                const _selection = this.selection.filter((val, i) => i != selectionIndex);

                                this.$emit('update:selection', _selection);
                                this.$emit('row-unselect', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' });
                            } else {
                                const _selection = this.selection ? [...this.selection, rowData] : [rowData];

                                this.$emit('update:selection', _selection);
                                this.$emit('row-select', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' });
                            }
                        }
                    }
                }
            }

            this.rowTouched = false;

            if (focusedItem) {
                if (event.target?.getAttribute('data-pc-section') === 'rowtogglericon' || event.target?.parentElement?.getAttribute('data-pc-section') === 'rowtogglericon') return;

                const targetRow = event.target?.closest('tr[data-p-selectable-row="true"]');

                focusedItem.tabIndex = '-1';
                targetRow.tabIndex = '0';
            }
        },
        onRowDblClick(e) {
            const event = e.originalEvent;

            if (DomHandler.isClickable(event.target)) {
                return;
            }

            this.$emit('row-dblclick', e);
        },
        onRowRightClick(event) {
            if (this.contextMenu) {
                DomHandler.clearSelection();
                event.originalEvent.target.focus();
            }

            this.$emit('update:contextMenuSelection', event.data);
            this.$emit('row-contextmenu', event);
        },
        onRowTouchEnd() {
            this.rowTouched = true;
        },
        onRowKeyDown(e, slotProps) {
            const event = e.originalEvent;
            const rowData = e.data;
            const rowIndex = e.index;
            const metaKey = event.metaKey || event.ctrlKey;

            if (this.selectionMode) {
                const row = event.target;

                switch (event.code) {
                    case 'ArrowDown':
                        this.onArrowDownKey(event, row, rowIndex, slotProps);
                        break;

                    case 'ArrowUp':
                        this.onArrowUpKey(event, row, rowIndex, slotProps);
                        break;

                    case 'Home':
                        this.onHomeKey(event, row, rowIndex, slotProps);
                        break;

                    case 'End':
                        this.onEndKey(event, row, rowIndex, slotProps);
                        break;

                    case 'Enter':
                    case 'NumpadEnter':
                        this.onEnterKey(event, rowData, rowIndex);
                        break;

                    case 'Space':
                        this.onSpaceKey(event, rowData, rowIndex, slotProps);
                        break;

                    case 'Tab':
                        this.onTabKey(event, rowIndex);
                        break;

                    default:
                        if (event.code === 'KeyA' && metaKey && this.isMultipleSelectionMode()) {
                            const data = this.dataToRender(slotProps.rows);

                            this.$emit('update:selection', data);
                        }

                        event.preventDefault();

                        break;
                }
            }
        },
        onArrowDownKey(event, row, rowIndex, slotProps) {
            const nextRow = this.findNextSelectableRow(row);

            nextRow && this.focusRowChange(row, nextRow);

            if (event.shiftKey) {
                const data = this.dataToRender(slotProps.rows);
                const nextRowIndex = rowIndex + 1 >= data.length ? data.length - 1 : rowIndex + 1;

                this.onRowClick({ originalEvent: event, data: data[nextRowIndex], index: nextRowIndex });
            }

            event.preventDefault();
        },
        onArrowUpKey(event, row, rowIndex, slotProps) {
            const prevRow = this.findPrevSelectableRow(row);

            prevRow && this.focusRowChange(row, prevRow);

            if (event.shiftKey) {
                const data = this.dataToRender(slotProps.rows);
                const prevRowIndex = rowIndex - 1 <= 0 ? 0 : rowIndex - 1;

                this.onRowClick({ originalEvent: event, data: data[prevRowIndex], index: prevRowIndex });
            }

            event.preventDefault();
        },
        onHomeKey(event, row, rowIndex, slotProps) {
            const firstRow = this.findFirstSelectableRow();

            firstRow && this.focusRowChange(row, firstRow);

            if (event.ctrlKey && event.shiftKey) {
                const data = this.dataToRender(slotProps.rows);

                this.$emit('update:selection', data.slice(0, rowIndex + 1));
            }

            event.preventDefault();
        },
        onEndKey(event, row, rowIndex, slotProps) {
            const lastRow = this.findLastSelectableRow();

            lastRow && this.focusRowChange(row, lastRow);

            if (event.ctrlKey && event.shiftKey) {
                const data = this.dataToRender(slotProps.rows);

                this.$emit('update:selection', data.slice(rowIndex, data.length));
            }

            event.preventDefault();
        },
        onEnterKey(event, rowData, rowIndex) {
            this.onRowClick({ originalEvent: event, data: rowData, index: rowIndex });
            event.preventDefault();
        },
        onSpaceKey(event, rowData, rowIndex, slotProps) {
            this.onEnterKey(event, rowData, rowIndex);

            if (event.shiftKey && this.selection !== null) {
                const data = this.dataToRender(slotProps.rows);
                let index;

                if (this.selection.length > 0) {
                    let firstSelectedRowIndex, lastSelectedRowIndex;

                    firstSelectedRowIndex = ObjectUtils.findIndexInList(this.selection[0], data);
                    lastSelectedRowIndex = ObjectUtils.findIndexInList(this.selection[this.selection.length - 1], data);

                    index = rowIndex <= firstSelectedRowIndex ? lastSelectedRowIndex : firstSelectedRowIndex;
                } else {
                    index = ObjectUtils.findIndexInList(this.selection, data);
                }

                const _selection = index !== rowIndex ? data.slice(Math.min(index, rowIndex), Math.max(index, rowIndex) + 1) : rowData;

                this.$emit('update:selection', _selection);
            }
        },
        onTabKey(event, rowIndex) {
            const body = this.$refs.bodyRef && this.$refs.bodyRef.$el;
            const rows = DomHandler.find(body, 'tr[data-p-selectable-row="true"]');

            if (event.code === 'Tab' && rows && rows.length > 0) {
                const firstSelectedRow = DomHandler.findSingle(body, 'tr[data-p-highlight="true"]');
                const focusedItem = DomHandler.findSingle(body, 'tr[data-p-selectable-row="true"][tabindex="0"]');

                if (firstSelectedRow) {
                    firstSelectedRow.tabIndex = '0';
                    focusedItem && focusedItem !== firstSelectedRow && (focusedItem.tabIndex = '-1');
                } else {
                    rows[0].tabIndex = '0';
                    focusedItem !== rows[0] && (rows[rowIndex].tabIndex = '-1');
                }
            }
        },
        findNextSelectableRow(row) {
            let nextRow = row.nextElementSibling;

            if (nextRow) {
                if (DomHandler.getAttribute(nextRow, 'data-p-selectable-row') === true) return nextRow;
                else return this.findNextSelectableRow(nextRow);
            } else {
                return null;
            }
        },
        findPrevSelectableRow(row) {
            let prevRow = row.previousElementSibling;

            if (prevRow) {
                if (DomHandler.getAttribute(prevRow, 'data-p-selectable-row') === true) return prevRow;
                else return this.findPrevSelectableRow(prevRow);
            } else {
                return null;
            }
        },
        findFirstSelectableRow() {
            const firstRow = DomHandler.findSingle(this.$refs.table, 'tr[data-p-selectable-row="true"]');

            return firstRow;
        },
        findLastSelectableRow() {
            const rows = DomHandler.find(this.$refs.table, 'tr[data-p-selectable-row="true"]');

            return rows ? rows[rows.length - 1] : null;
        },
        focusRowChange(firstFocusableRow, currentFocusedRow) {
            firstFocusableRow.tabIndex = '-1';
            currentFocusedRow.tabIndex = '0';
            DomHandler.focus(currentFocusedRow);
        },
        toggleRowWithRadio(event) {
            const rowData = event.data;

            if (this.isSelected(rowData)) {
                this.$emit('update:selection', null);
                this.$emit('row-unselect', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'radiobutton' });
            } else {
                this.$emit('update:selection', rowData);
                this.$emit('row-select', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'radiobutton' });
            }
        },
        toggleRowWithCheckbox(event) {
            const rowData = event.data;

            if (this.isSelected(rowData)) {
                const selectionIndex = this.findIndexInSelection(rowData);
                const _selection = this.selection.filter((val, i) => i != selectionIndex);

                this.$emit('update:selection', _selection);
                this.$emit('row-unselect', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'checkbox' });
            } else {
                let _selection = this.selection ? [...this.selection] : [];

                _selection = [..._selection, rowData];
                this.$emit('update:selection', _selection);
                this.$emit('row-select', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'checkbox' });
            }
        },
        toggleRowsWithCheckbox(event) {
            if (this.selectAll !== null) {
                this.$emit('select-all-change', event);
            } else {
                const { originalEvent, checked } = event;
                let _selection = [];

                if (checked) {
                    _selection = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData;
                    this.$emit('row-select-all', { originalEvent, data: _selection });
                } else {
                    this.$emit('row-unselect-all', { originalEvent });
                }

                this.$emit('update:selection', _selection);
            }
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
                } else {
                    if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;
                    else return this.equals(rowData, this.selection);
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
            } else {
                this.d_selectionKeys[String(ObjectUtils.resolveFieldData(selection, this.dataKey))] = 1;
            }
        },
        updateEditingRowKeys(editingRows) {
            if (editingRows && editingRows.length) {
                this.d_editingRowKeys = {};

                for (let data of editingRows) {
                    this.d_editingRowKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            } else {
                this.d_editingRowKeys = null;
            }
        },
        equals(data1, data2) {
            return this.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
        },
        selectRange(event) {
            let rangeStart, rangeEnd;

            if (this.rangeRowIndex > this.anchorRowIndex) {
                rangeStart = this.anchorRowIndex;
                rangeEnd = this.rangeRowIndex;
            } else if (this.rangeRowIndex < this.anchorRowIndex) {
                rangeStart = this.rangeRowIndex;
                rangeEnd = this.anchorRowIndex;
            } else {
                rangeStart = this.rangeRowIndex;
                rangeEnd = this.rangeRowIndex;
            }

            if (this.lazy && this.paginator) {
                rangeStart -= this.first;
                rangeEnd -= this.first;
            }

            const value = this.processedData;
            let _selection = [];

            for (let i = rangeStart; i <= rangeEnd; i++) {
                let rangeRowData = value[i];

                _selection.push(rangeRowData);
                this.$emit('row-select', { originalEvent: event, data: rangeRowData, type: 'row' });
            }

            this.$emit('update:selection', _selection);
        },
        exportCSV(options, data) {
            let csv = '\ufeff';

            if (!data) {
                data = this.processedData;

                if (options && options.selectionOnly) data = this.selection || [];
                else if (this.frozenValue) data = data ? [...this.frozenValue, ...data] : this.frozenValue;
            }

            //headers
            let headerInitiated = false;

            for (let i = 0; i < this.columns.length; i++) {
                let column = this.columns[i];

                if (this.columnProp(column, 'exportable') !== false && this.columnProp(column, 'field')) {
                    if (headerInitiated) csv += this.csvSeparator;
                    else headerInitiated = true;

                    csv += '"' + (this.columnProp(column, 'exportHeader') || this.columnProp(column, 'header') || this.columnProp(column, 'field')) + '"';
                }
            }

            //body
            if (data) {
                data.forEach((record) => {
                    csv += '\n';
                    let rowInitiated = false;

                    for (let i = 0; i < this.columns.length; i++) {
                        let column = this.columns[i];

                        if (this.columnProp(column, 'exportable') !== false && this.columnProp(column, 'field')) {
                            if (rowInitiated) csv += this.csvSeparator;
                            else rowInitiated = true;

                            let cellData = ObjectUtils.resolveFieldData(record, this.columnProp(column, 'field'));

                            if (cellData != null) {
                                if (this.exportFunction) {
                                    cellData = this.exportFunction({
                                        data: cellData,
                                        field: this.columnProp(column, 'field')
                                    });
                                } else cellData = String(cellData).replace(/"/g, '""');
                            } else cellData = '';

                            csv += '"' + cellData + '"';
                        }
                    }
                });
            }

            //footers
            let footerInitiated = false;

            for (let i = 0; i < this.columns.length; i++) {
                let column = this.columns[i];

                if (i === 0) csv += '\n';

                if (this.columnProp(column, 'exportable') !== false && this.columnProp(column, 'exportFooter')) {
                    if (footerInitiated) csv += this.csvSeparator;
                    else footerInitiated = true;

                    csv += '"' + (this.columnProp(column, 'exportFooter') || this.columnProp(column, 'footer') || this.columnProp(column, 'field')) + '"';
                }
            }

            DomHandler.exportCSV(csv, this.exportFilename);
        },
        resetPage() {
            this.d_first = 0;
            this.$emit('update:first', this.d_first);
        },
        onColumnResizeStart(event) {
            let containerLeft = DomHandler.getOffset(this.$el).left;

            this.resizeColumnElement = event.target.parentElement;
            this.columnResizing = true;
            this.lastResizeHelperX = event.pageX - containerLeft + this.$el.scrollLeft;

            this.bindColumnResizeEvents();
        },
        onColumnResize(event) {
            let containerLeft = DomHandler.getOffset(this.$el).left;

            this.$el.setAttribute('data-p-unselectable-text', 'true');
            !this.isUnstyled && DomHandler.addClass(this.$el, 'p-unselectable-text');
            this.$refs.resizeHelper.style.height = this.$el.offsetHeight + 'px';
            this.$refs.resizeHelper.style.top = 0 + 'px';
            this.$refs.resizeHelper.style.left = event.pageX - containerLeft + this.$el.scrollLeft + 'px';

            this.$refs.resizeHelper.style.display = 'block';
        },
        onColumnResizeEnd() {
            let delta = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX;
            let columnWidth = this.resizeColumnElement.offsetWidth;
            let newColumnWidth = columnWidth + delta;
            let minWidth = this.resizeColumnElement.style.minWidth || 15;

            if (columnWidth + delta > parseInt(minWidth, 10)) {
                if (this.columnResizeMode === 'fit') {
                    let nextColumn = this.resizeColumnElement.nextElementSibling;
                    let nextColumnWidth = nextColumn.offsetWidth - delta;

                    if (newColumnWidth > 15 && nextColumnWidth > 15) {
                        this.resizeTableCells(newColumnWidth, nextColumnWidth);
                    }
                } else if (this.columnResizeMode === 'expand') {
                    const tableWidth = this.$refs.table.offsetWidth + delta + 'px';

                    const updateTableWidth = (el) => {
                        !!el && (el.style.width = el.style.minWidth = tableWidth);
                    };

                    // Reasoning: resize table cells before updating the table width so that it can use existing computed cell widths and adjust only the one column.
                    this.resizeTableCells(newColumnWidth);
                    updateTableWidth(this.$refs.table);

                    if (!this.virtualScrollerDisabled) {
                        const body = this.$refs.bodyRef && this.$refs.bodyRef.$el;
                        const frozenBody = this.$refs.frozenBodyRef && this.$refs.frozenBodyRef.$el;

                        updateTableWidth(body);
                        updateTableWidth(frozenBody);
                    }
                }

                this.$emit('column-resize-end', {
                    element: this.resizeColumnElement,
                    delta: delta
                });
            }

            this.$refs.resizeHelper.style.display = 'none';
            this.resizeColumn = null;
            this.$el.removeAttribute('data-p-unselectable-text');
            !this.isUnstyled && DomHandler.removeClass(this.$el, 'p-unselectable-text');

            this.unbindColumnResizeEvents();

            if (this.isStateful()) {
                this.saveState();
            }
        },
        resizeTableCells(newColumnWidth, nextColumnWidth) {
            let colIndex = DomHandler.index(this.resizeColumnElement);
            let widths = [];
            let headers = DomHandler.find(this.$refs.table, 'thead[data-pc-section="thead"] > tr > th');

            headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));

            this.destroyStyleElement();
            this.createStyleElement();

            let innerHTML = '';
            let selector = `[data-pc-name="datatable"][${this.attributeSelector}] > [data-pc-section="wrapper"] ${this.virtualScrollerDisabled ? '' : '> [data-pc-name="virtualscroller"]'} > table[data-pc-section="table"]`;

            widths.forEach((width, index) => {
                let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
                let style = `width: ${colWidth}px !important; max-width: ${colWidth}px !important`;

                innerHTML += `
                    ${selector} > thead[data-pc-section="thead"] > tr > th:nth-child(${index + 1}),
                    ${selector} > tbody[data-pc-section="tbody"] > tr > td:nth-child(${index + 1}),
                    ${selector} > tfoot[data-pc-section="tfoot"] > tr > td:nth-child(${index + 1}) {
                        ${style}
                    }
                `;
            });

            this.styleElement.innerHTML = innerHTML;
        },
        bindColumnResizeEvents() {
            if (!this.documentColumnResizeListener) {
                this.documentColumnResizeListener = document.addEventListener('mousemove', () => {
                    if (this.columnResizing) {
                        this.onColumnResize(event);
                    }
                });
            }

            if (!this.documentColumnResizeEndListener) {
                this.documentColumnResizeEndListener = document.addEventListener('mouseup', () => {
                    if (this.columnResizing) {
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

            if (this.reorderableColumns && this.columnProp(column, 'reorderableColumn') !== false) {
                if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.getAttribute(event.target, '[data-pc-section="columnresizer"]')) event.currentTarget.draggable = false;
                else event.currentTarget.draggable = true;
            }
        },
        onColumnHeaderDragStart(e) {
            const { originalEvent: event, column } = e;

            if (this.columnResizing) {
                event.preventDefault();

                return;
            }

            this.colReorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.$refs.reorderIndicatorUp);
            this.colReorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.$refs.reorderIndicatorUp);

            this.draggedColumn = column;
            this.draggedColumnElement = this.findParentHeader(event.target);
            event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
        },
        onColumnHeaderDragOver(e) {
            const { originalEvent: event, column } = e;
            let dropHeader = this.findParentHeader(event.target);

            if (this.reorderableColumns && this.draggedColumnElement && dropHeader && !this.columnProp(column, 'frozen')) {
                event.preventDefault();
                let containerOffset = DomHandler.getOffset(this.$el);
                let dropHeaderOffset = DomHandler.getOffset(dropHeader);

                if (this.draggedColumnElement !== dropHeader) {
                    let targetLeft = dropHeaderOffset.left - containerOffset.left;
                    let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;

                    this.$refs.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + 'px';
                    this.$refs.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

                    if (event.pageX > columnCenter) {
                        this.$refs.reorderIndicatorUp.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + 'px';
                        this.$refs.reorderIndicatorDown.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + 'px';
                        this.dropPosition = 1;
                    } else {
                        this.$refs.reorderIndicatorUp.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + 'px';
                        this.$refs.reorderIndicatorDown.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + 'px';
                        this.dropPosition = -1;
                    }

                    this.$refs.reorderIndicatorUp.style.display = 'block';
                    this.$refs.reorderIndicatorDown.style.display = 'block';
                }
            }
        },
        onColumnHeaderDragLeave(e) {
            const { originalEvent: event } = e;

            if (this.reorderableColumns && this.draggedColumnElement) {
                event.preventDefault();
                this.$refs.reorderIndicatorUp.style.display = 'none';
                this.$refs.reorderIndicatorDown.style.display = 'none';
            }
        },
        onColumnHeaderDrop(e) {
            const { originalEvent: event, column } = e;

            event.preventDefault();

            if (this.draggedColumnElement) {
                let dragIndex = DomHandler.index(this.draggedColumnElement);
                let dropIndex = DomHandler.index(this.findParentHeader(event.target));
                let allowDrop = dragIndex !== dropIndex;

                if (allowDrop && ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dropIndex - dragIndex === -1 && this.dropPosition === 1))) {
                    allowDrop = false;
                }

                if (allowDrop) {
                    let isSameColumn = (col1, col2) =>
                        this.columnProp(col1, 'columnKey') || this.columnProp(col2, 'columnKey') ? this.columnProp(col1, 'columnKey') === this.columnProp(col2, 'columnKey') : this.columnProp(col1, 'field') === this.columnProp(col2, 'field');
                    let dragColIndex = this.columns.findIndex((child) => isSameColumn(child, this.draggedColumn));
                    let dropColIndex = this.columns.findIndex((child) => isSameColumn(child, column));
                    let widths = [];
                    let headers = DomHandler.find(this.$el, 'thead[data-pc-section="thead"] > tr > th');

                    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
                    const movedItem = widths.find((_, index) => index === dragColIndex);
                    const remainingItems = widths.filter((_, index) => index !== dragColIndex);
                    const reorderedWidths = [...remainingItems.slice(0, dropColIndex), movedItem, ...remainingItems.slice(dropColIndex)];

                    this.addColumnWidthStyles(reorderedWidths);

                    if (dropColIndex < dragColIndex && this.dropPosition === 1) {
                        dropColIndex++;
                    }

                    if (dropColIndex > dragColIndex && this.dropPosition === -1) {
                        dropColIndex--;
                    }

                    ObjectUtils.reorderArray(this.columns, dragColIndex, dropColIndex);
                    this.updateReorderableColumns();

                    this.$emit('column-reorder', {
                        originalEvent: event,
                        dragIndex: dragColIndex,
                        dropIndex: dropColIndex
                    });
                }

                this.$refs.reorderIndicatorUp.style.display = 'none';
                this.$refs.reorderIndicatorDown.style.display = 'none';
                this.draggedColumnElement.draggable = false;
                this.draggedColumnElement = null;
                this.draggedColumn = null;
                this.dropPosition = null;
            }
        },
        findParentHeader(element) {
            if (element.nodeName === 'TH') {
                return element;
            } else {
                let parent = element.parentElement;

                while (parent.nodeName !== 'TH') {
                    parent = parent.parentElement;
                    if (!parent) break;
                }

                return parent;
            }
        },
        findColumnByKey(columns, key) {
            if (columns && columns.length) {
                for (let i = 0; i < columns.length; i++) {
                    let column = columns[i];

                    if (this.columnProp(column, 'columnKey') === key || this.columnProp(column, 'field') === key) {
                        return column;
                    }
                }
            }

            return null;
        },
        onRowMouseDown(event) {
            if (DomHandler.getAttribute(event.target, 'data-pc-section') === 'rowreordericon' || DomHandler.getAttribute(event.target.parentElement, 'data-pc-section') === 'rowreordericon') event.currentTarget.draggable = true;
            else event.currentTarget.draggable = false;
        },
        onRowDragStart(e) {
            const event = e.originalEvent;
            const index = e.index;

            this.rowDragging = true;
            this.draggedRowIndex = index;
            event.dataTransfer.setData('text', 'b'); // For firefox
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
                    rowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
                    !this.isUnstyled && DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');

                    this.droppedRowIndex = index;

                    if (prevRowElement) {
                        prevRowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'true');
                        !this.isUnstyled && DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    } else {
                        rowElement.setAttribute('data-p-datatable-dragpoint-top', 'true');
                        !this.isUnstyled && DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
                    }
                } else {
                    if (prevRowElement) {
                        prevRowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
                        !this.isUnstyled && DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    } else {
                        rowElement.setAttribute('data-p-datatable-dragpoint-top', 'true');
                        !this.isUnstyled && DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
                    }

                    this.droppedRowIndex = index + 1;
                    rowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'true');
                    !this.isUnstyled && DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
                }

                event.preventDefault();
            }
        },
        onRowDragLeave(event) {
            let rowElement = event.currentTarget;
            let prevRowElement = rowElement.previousElementSibling;

            if (prevRowElement) {
                prevRowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
                !this.isUnstyled && DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
            }

            rowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
            !this.isUnstyled && DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
            rowElement.setAttribute('data-p-datatable-dragpoint-top', 'false');
            !this.isUnstyled && DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
        },
        onRowDragEnd(event) {
            this.rowDragging = false;
            this.draggedRowIndex = null;
            this.droppedRowIndex = null;
            event.currentTarget.draggable = false;
        },
        onRowDrop(event) {
            if (this.droppedRowIndex != null) {
                let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
                let processedData = [...this.processedData];

                ObjectUtils.reorderArray(processedData, this.draggedRowIndex + this.d_first, dropIndex + this.d_first);

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
            const { expanded, ...rest } = event;
            const rowData = event.data;
            let expandedRows;

            if (this.dataKey) {
                const value = ObjectUtils.resolveFieldData(rowData, this.dataKey);

                expandedRows = this.expandedRows ? { ...this.expandedRows } : {};
                expanded ? (expandedRows[value] = true) : delete expandedRows[value];
            } else {
                expandedRows = this.expandedRows ? [...this.expandedRows] : [];
                expanded ? expandedRows.push(rowData) : (expandedRows = expandedRows.filter((d) => !this.equals(rowData, d)));
            }

            this.$emit('update:expandedRows', expandedRows);
            expanded ? this.$emit('row-expand', rest) : this.$emit('row-collapse', rest);
        },
        toggleRowGroup(e) {
            const event = e.originalEvent;
            const data = e.data;
            const groupFieldValue = ObjectUtils.resolveFieldData(data, this.groupRowsBy);
            let _expandedRowGroups = this.expandedRowGroups ? [...this.expandedRowGroups] : [];

            if (this.isRowGroupExpanded(data)) {
                _expandedRowGroups = _expandedRowGroups.filter((group) => group !== groupFieldValue);
                this.$emit('update:expandedRowGroups', _expandedRowGroups);
                this.$emit('rowgroup-collapse', { originalEvent: event, data: groupFieldValue });
            } else {
                _expandedRowGroups.push(groupFieldValue);
                this.$emit('update:expandedRowGroups', _expandedRowGroups);
                this.$emit('rowgroup-expand', { originalEvent: event, data: groupFieldValue });
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
            switch (this.stateStorage) {
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

            if (this.hasFilters) {
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

            this.$emit('state-save', state);
        },
        restoreState() {
            const storage = this.getStorage();
            const stateString = storage.getItem(this.stateKey);
            const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;

            const reviver = function (key, value) {
                if (typeof value === 'string' && dateFormat.test(value)) {
                    return new Date(value);
                }

                return value;
            };

            if (stateString) {
                let restoredState = JSON.parse(stateString, reviver);

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
                    this.$emit('update:expandedRows', restoredState.expandedRows);
                }

                if (restoredState.expandedRowGroups) {
                    this.$emit('update:expandedRowGroups', restoredState.expandedRowGroups);
                }

                if (restoredState.selection) {
                    this.d_selectionKeys = restoredState.d_selectionKeys;
                    this.$emit('update:selection', restoredState.selection);
                }

                this.$emit('state-restore', restoredState);
            }
        },
        saveColumnWidths(state) {
            let widths = [];
            let headers = DomHandler.find(this.$el, 'thead[data-pc-section="thead"] > tr > th');

            headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
            state.columnWidths = widths.join(',');

            if (this.columnResizeMode === 'expand') {
                state.tableWidth = DomHandler.getOuterWidth(this.$refs.table) + 'px';
            }
        },
        addColumnWidthStyles(widths) {
            this.createStyleElement();

            let innerHTML = '';
            let selector = `[data-pc-name="datatable"][${this.attributeSelector}] > [data-pc-section="wrapper"] ${this.virtualScrollerDisabled ? '' : '> [data-pc-name="virtualscroller"]'} > table[data-pc-section="table"]`;

            widths.forEach((width, index) => {
                let style = `width: ${width}px !important; max-width: ${width}px !important`;

                innerHTML += `
        ${selector} > thead[data-pc-section="thead"] > tr > th:nth-child(${index + 1}),
        ${selector} > tbody[data-pc-section="tbody"] > tr > td:nth-child(${index + 1}),
        ${selector} > tfoot[data-pc-section="tfoot"] > tr > td:nth-child(${index + 1}) {
            ${style}
        }
    `;
            });

            this.styleElement.innerHTML = innerHTML;
        },
        restoreColumnWidths() {
            if (this.columnWidthsState) {
                let widths = this.columnWidthsState.split(',');

                if (this.columnResizeMode === 'expand' && this.tableWidthState) {
                    this.$refs.table.style.width = this.tableWidthState;
                    this.$refs.table.style.minWidth = this.tableWidthState;
                }

                if (ObjectUtils.isNotEmpty(widths)) {
                    this.addColumnWidthStyles(widths);
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
        onEditingMetaChange(event) {
            let { data, field, index, editing } = event;
            let editingMeta = { ...this.d_editingMeta };
            let meta = editingMeta[index];

            if (editing) {
                !meta && (meta = editingMeta[index] = { data: { ...data }, fields: [] });
                meta['fields'].push(field);
            } else if (meta) {
                const fields = meta['fields'].filter((f) => f !== field);

                !fields.length ? delete editingMeta[index] : (meta['fields'] = fields);
            }

            this.d_editingMeta = editingMeta;
        },
        clearEditingMetaData() {
            if (this.editMode) {
                this.d_editingMeta = {};
            }
        },
        createLazyLoadEvent(event) {
            return {
                originalEvent: event,
                first: this.d_first,
                rows: this.d_rows,
                sortField: this.d_sortField,
                sortOrder: this.d_sortOrder,
                multiSortMeta: this.d_multiSortMeta,
                filters: this.d_filters
            };
        },
        hasGlobalFilter() {
            return this.filters && Object.prototype.hasOwnProperty.call(this.filters, 'global');
        },
        onFilterChange(filters) {
            this.d_filters = filters;
        },
        onFilterApply() {
            this.d_first = 0;
            this.$emit('update:first', this.d_first);
            this.$emit('update:filters', this.d_filters);

            if (this.lazy) {
                this.$emit('filter', this.createLazyLoadEvent());
            }
        },
        cloneFilters() {
            let cloned = {};

            if (this.filters) {
                Object.entries(this.filters).forEach(([prop, value]) => {
                    cloned[prop] = value.operator
                        ? {
                              operator: value.operator,
                              constraints: value.constraints.map((constraint) => {
                                  return { ...constraint };
                              })
                          }
                        : { ...value };
                });
            }

            return cloned;
        },
        updateReorderableColumns() {
            let columnOrder = [];

            this.columns.forEach((col) => columnOrder.push(this.columnProp(col, 'columnKey') || this.columnProp(col, 'field')));
            this.d_columnOrder = columnOrder;
        },
        createStyleElement() {
            this.styleElement = document.createElement('style');
            this.styleElement.type = 'text/css';
            DomHandler.setAttribute(this.styleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
            document.head.appendChild(this.styleElement);
        },
        createResponsiveStyle() {
            if (!this.responsiveStyleElement) {
                this.responsiveStyleElement = document.createElement('style');
                this.responsiveStyleElement.type = 'text/css';
                DomHandler.setAttribute(this.responsiveStyleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
                document.head.appendChild(this.responsiveStyleElement);

                let tableSelector = `.p-datatable-wrapper ${this.virtualScrollerDisabled ? '' : '> .p-virtualscroller'} > .p-datatable-table`;
                let selector = `.p-datatable[${this.attributeSelector}] > ${tableSelector}`;
                let gridLinesSelector = `.p-datatable[${this.attributeSelector}].p-datatable-gridlines > ${tableSelector}`;
                let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    ${selector} > .p-datatable-thead > tr > th,
    ${selector} > .p-datatable-tfoot > tr > td {
        display: none;
    }

    ${selector} > .p-datatable-tbody > tr > td {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    ${selector} > .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    ${gridLinesSelector} > .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    ${selector} > .p-datatable-tbody > tr > td > .p-column-title {
        display: block;
    }
}
`;

                this.responsiveStyleElement.innerHTML = innerHTML;
            }
        },
        destroyResponsiveStyle() {
            if (this.responsiveStyleElement) {
                document.head.removeChild(this.responsiveStyleElement);
                this.responsiveStyleElement = null;
            }
        },
        destroyStyleElement() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        },
        dataToRender(data) {
            const _data = data || this.processedData;

            if (_data && this.paginator) {
                const first = this.lazy ? 0 : this.d_first;

                return _data.slice(first, first + this.d_rows);
            }

            return _data;
        },
        getVirtualScrollerRef() {
            return this.$refs.virtualScroller;
        },
        hasSpacerStyle(style) {
            return ObjectUtils.isNotEmpty(style);
        }
    },
    computed: {
        columns() {
            const cols = this.d_columns.get(this);

            if (this.reorderableColumns && this.d_columnOrder) {
                let orderedColumns = [];

                for (let columnKey of this.d_columnOrder) {
                    let column = this.findColumnByKey(cols, columnKey);

                    if (column && !this.columnProp(column, 'hidden')) {
                        orderedColumns.push(column);
                    }
                }

                return [...orderedColumns, ...cols.filter((item) => orderedColumns.indexOf(item) < 0)];
            }

            return cols;
        },
        columnGroups() {
            return this.d_columnGroups.get(this);
        },
        headerColumnGroup() {
            return this.columnGroups?.find((group) => this.columnProp(group, 'type') === 'header');
        },
        footerColumnGroup() {
            return this.columnGroups?.find((group) => this.columnProp(group, 'type') === 'footer');
        },
        hasFilters() {
            return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
        },
        processedData() {
            let data = this.value || [];

            if (!this.lazy && !this.virtualScrollerOptions?.lazy) {
                if (data && data.length) {
                    if (this.hasFilters) {
                        data = this.filter(data);
                    }

                    if (this.sorted) {
                        if (this.sortMode === 'single') data = this.sortSingle(data);
                        else if (this.sortMode === 'multiple') data = this.sortMultiple(data);
                    }
                }
            }

            return data;
        },
        totalRecordsLength() {
            if (this.lazy) {
                return this.totalRecords;
            } else {
                const data = this.processedData;

                return data ? data.length : 0;
            }
        },
        empty() {
            const data = this.processedData;

            return !data || data.length === 0;
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
        allRowsSelected() {
            if (this.selectAll !== null) {
                return this.selectAll;
            } else {
                const val = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData;

                return ObjectUtils.isNotEmpty(val) && this.selection && Array.isArray(this.selection) && val.every((v) => this.selection.some((s) => this.equals(s, v)));
            }
        },
        attributeSelector() {
            return UniqueComponentId();
        },
        groupRowSortField() {
            return this.sortMode === 'single' ? this.sortField : this.d_groupRowsSortMeta ? this.d_groupRowsSortMeta.field : null;
        },
        virtualScrollerDisabled() {
            return ObjectUtils.isEmpty(this.virtualScrollerOptions) || !this.scrollable;
        }
    },
    components: {
        DTPaginator: Paginator,
        DTTableHeader: TableHeader,
        DTTableBody: TableBody,
        DTTableFooter: TableFooter,
        DTVirtualScroller: VirtualScroller,
        ArrowDownIcon: ArrowDownIcon,
        ArrowUpIcon: ArrowUpIcon,
        SpinnerIcon: SpinnerIcon
    }
};
</script>
