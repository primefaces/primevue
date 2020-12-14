<template>
    <div :class="containerClass">
        <slot></slot>
        <div class="p-treetable-loading" v-if="loading">
            <div class="p-treetable-loading-overlay p-component-overlay">
                <i :class="loadingIconClass"></i>
            </div>
        </div>
        <div class="p-treetable-header" v-if="$scopedSlots.header">
            <slot name="header"></slot>
        </div>
         <TTPaginator v-if="paginatorTop" :rows="d_rows" :first="d_first" :totalRecords="totalRecordsLength" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
                :currentPageReportTemplate="currentPageReportTemplate" class="p-paginator-top" @page="onPage($event)" :alwaysShow="alwaysShowPaginator">
            <template #left v-if="$scopedSlots.paginatorLeft">
                <slot name="paginatorLeft"></slot>
            </template>
            <template #right v-if="$scopedSlots.paginatorRight">
                <slot name="paginatorRight"></slot>
            </template>
        </TTPaginator>
        <div class="p-treetable-wrapper">
            <table ref="table">
                <thead class="p-treetable-thead">
                    <tr>
                        <th v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" :class="getColumnHeaderClass(col)" @click="onColumnHeaderClick($event, col)"
                            :tabindex="col.sortable ? '0' : null"  :aria-sort="getAriaSort(col)" @keydown="onColumnKeyDown($event, col)">
                            <span class="p-column-resizer" @mousedown="onColumnResizeStart" v-if="resizableColumns"></span>
                            <TTColumnSlot :column="col" type="header" v-if="col.$scopedSlots.header" />
                            <span class="p-column-title" v-if="col.header">{{col.header}}</span>
                            <span v-if="col.sortable" :class="getSortableColumnIcon(col)"></span>
                            <span v-if="isMultiSorted(col)" class="p-sortable-column-badge">{{getMultiSortMetaIndex(col) + 1}}</span>
                        </th>
                    </tr>
                    <tr v-if="hasColumnFilter()">
                        <template v-for="(col,i) of columns">
                            <th :key="col.columnKey||col.field||i" :class="getFilterColumnHeaderClass(col)" :style="col.filterHeaderStyle">
                                <TTColumnSlot :column="col" type="filter" v-if="col.$scopedSlots.filter" />
                            </th>
                        </template>
                    </tr>
                </thead>
                <tfoot class="p-treetable-tfoot" v-if="hasFooter">
                    <tr>
                        <td v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.footerStyle" :class="col.footerClass">
                            <TTColumnSlot :column="col" type="footer" v-if="col.$scopedSlots.footer" />
                            {{col.footer}}
                        </td>
                    </tr>
                </tfoot>
                <tbody class="p-treetable-tbody">
                    <template v-if="!empty">
                        <TTRow v-for="node of dataToRender" :key="node.key" :columns="columns" :node="node" :level="0"
                        :expandedKeys="d_expandedKeys" @node-toggle="onNodeToggle" :indentation="indentation"
                        :selectionMode="selectionMode" :selectionKeys="selectionKeys" @node-click="onNodeClick" @checkbox-change="onCheckboxChange"></TTRow>
                    </template>
                    <tr v-else class="p-treetable-emptymessage">
                        <td :colspan="columns.length">
                            <slot name="empty"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <TTPaginator v-if="paginatorBottom" :rows="d_rows" :first="d_first" :totalRecords="totalRecordsLength" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
                :currentPageReportTemplate="currentPageReportTemplate" class="p-paginator-bottom" @page="onPage($event)" :alwaysShow="alwaysShowPaginator">
            <template #left v-if="$scopedSlots.paginatorLeft">
                <slot name="paginatorLeft"></slot>
            </template>
            <template #right v-if="$scopedSlots.paginatorRight">
                <slot name="paginatorRight"></slot>
            </template>
        </TTPaginator>
        <div class="p-treetable-footer" v-if="$scopedSlots.footer">
            <slot name="footer"></slot>
        </div>
        <div ref="resizeHelper" class="p-column-resizer-helper p-highlight" style="display: none"></div>
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/FilterUtils';
import DomHandler from '../utils/DomHandler';
import TreeTableColumnSlot from './TreeTableColumnSlot';
import TreeTableRowLoader from './TreeTableRowLoader';
import Paginator from '../paginator/Paginator';

export default {
    props: {
        value: {
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
        metaKeySelection: {
            type: Boolean,
            default: true
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
        rowHover: {
            type: Boolean,
            default: false
        },
        autoLayout: {
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
        filterMode: {
            type: String,
            default: 'lenient'
        },
        filterLocale: {
            type: String,
            default: undefined
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        columnResizeMode: {
            type: String,
            default: 'fit'
        },
        indentation: {
            type: Number,
            default: 1
        }
    },
    documentColumnResizeListener: null,
    documentColumnResizeEndListener: null,
    lastResizeHelperX: null,
    resizeColumnElement: null,
    data() {
        return {
            allChildren: null,
            d_expandedKeys: this.expandedKeys || {},
            d_first: this.first,
            d_rows: this.rows,
            d_sortField: this.sortField,
            d_sortOrder: this.sortOrder,
            d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : [],
        }
    },
    watch: {
        expandedKeys(newValue) {
            this.d_expandedKeys = newValue;
        },
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
        }
    },
    mounted() {
        this.allChildren = this.$children;
    },
    methods: {
        onNodeToggle(node) {
            const key = node.key;

            if (this.d_expandedKeys[key]) {
                delete this.d_expandedKeys[key];
                this.$emit('node-collapse', node);
            }
            else {
                this.d_expandedKeys[key] = true;
                this.$emit('node-expand', node);
            }

            this.d_expandedKeys = {...this.d_expandedKeys};
            this.$emit('update:expandedKeys', this.d_expandedKeys);
        },
        onNodeClick(event) {
            if (this.rowSelectionMode && event.node.selectable !== false) {
                const metaSelection = event.nodeTouched ? false : this.metaKeySelection;
                const _selectionKeys = metaSelection ? this.handleSelectionWithMetaKey(event) : this.handleSelectionWithoutMetaKey(event);

                this.$emit('update:selectionKeys', _selectionKeys);
            }
        },
        handleSelectionWithMetaKey(event) {
            const originalEvent = event.originalEvent;
            const node = event.node;
            const metaKey = (originalEvent.metaKey||originalEvent.ctrlKey);
            const selected = this.isNodeSelected(node);
            let _selectionKeys;

            if (selected && metaKey) {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                }
                else {
                    _selectionKeys = {...this.selectionKeys};
                    delete _selectionKeys[node.key];
                }

                this.$emit('node-unselect', node);
            }
            else {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                }
                else if (this.isMultipleSelectionMode()) {
                    _selectionKeys = !metaKey ? {} : (this.selectionKeys ? {...this.selectionKeys} : {});
                }

                _selectionKeys[node.key] = true;
                this.$emit('node-select', node);
            }

            return _selectionKeys;
        },
        handleSelectionWithoutMetaKey(event) {
            const node = event.node;
            const selected = this.isNodeSelected(node);
            let _selectionKeys;

            if (this.isSingleSelectionMode()) {
                if (selected) {
                    _selectionKeys = {};
                    this.$emit('node-unselect', node);
                }
                else {
                    _selectionKeys = {};
                    _selectionKeys[node.key] = true;
                    this.$emit('node-select', node);
                }
            }
            else {
                if (selected) {
                    _selectionKeys = {...this.selectionKeys};
                    delete _selectionKeys[node.key];

                    this.$emit('node-unselect', node);
                }
                else {
                    _selectionKeys = this.selectionKeys ? {...this.selectionKeys} : {};
                    _selectionKeys[node.key] = true;

                    this.$emit('node-select', node);
                }
            }

            return _selectionKeys;
        },
        onCheckboxChange(event) {
            this.$emit('update:selectionKeys', event.selectionKeys);

            if (event.check)
                this.$emit('node-select', event.node);
            else
                this.$emit('node-unselect', event.node);
        },
        isSingleSelectionMode() {
            return this.selectionMode === 'single';
        },
        isMultipleSelectionMode() {
            return this.selectionMode === 'multiple';
        },
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
        resetPage() {
            this.d_first = 0;
            this.$emit('update:first', this.d_first);
        },
        isMultiSorted(column) {
            return column.sortable && this.getMultiSortMetaIndex(column) > -1
        },
        isColumnSorted(column) {
            if (column.sortable) {
                return this.sortMode === 'single' ? (this.d_sortField === (column.field || column.sortField)) : this.getMultiSortMetaIndex(column) > -1;
            }

            return false;
        },
        getColumnHeaderClass(column) {
            return [column.headerClass,
                    {'p-sortable-column': column.sortable},
                    {'p-resizable-column': this.resizableColumns},
                    {'p-highlight': this.isColumnSorted(column)}
            ];
        },
        getFilterColumnHeaderClass(column) {
            return ['p-filter-column', column.filterHeaderClass];
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
                'p-sortable-column-icon pi pi-fw', {
                    'pi-sort-alt': !sorted,
                    'pi-sort-amount-up-alt': sorted && sortOrder > 0,
                    'pi-sort-amount-down': sorted && sortOrder < 0
                }
            ];
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
        onColumnHeaderClick(event, column) {
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
        sortSingle(nodes) {
            return this.sortNodesSingle(nodes);
        },
        sortNodesSingle(nodes) {
            let _nodes = [...nodes];

            _nodes.sort((node1, node2) => {
                const value1 = ObjectUtils.resolveFieldData(node1.data, this.d_sortField);
                const value2 = ObjectUtils.resolveFieldData(node2.data, this.d_sortField);
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

            return _nodes;
        },
        sortMultiple(nodes) {
            return this.sortNodesMultiple(nodes);
        },
        sortNodesMultiple(nodes) {
            let _nodes = [...nodes];
            _nodes.sort((node1, node2) => {
                return this.multisortField(node1, node2, 0);
            });

            return _nodes;
        },
        multisortField(node1, node2, index) {
            const value1 = ObjectUtils.resolveFieldData(node1.data, this.d_multiSortMeta[index].field);
            const value2 = ObjectUtils.resolveFieldData(node2.data, this.d_multiSortMeta[index].field);
            let result = null;

            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            else {
                if (value1 === value2)  {
                    return (this.d_multiSortMeta.length - 1) > (index) ? (this.multisortField(node1, node2, index + 1)) : 0;
                }
                else {
                    if ((typeof value1 === 'string' || value1 instanceof String) && (typeof value2 === 'string' || value2 instanceof String))
                        return (this.d_multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
                    else
                        result = (value1 < value2) ? -1 : 1;
                }
            }

            return (this.d_multiSortMeta[index].order * result);
        },
        filter(value) {
            let filteredNodes = [];
            const strict = this.filterMode === 'strict';

            for (let node of value) {
                let copyNode = {...node};
                let localMatch = true;
                let globalMatch = false;

                for (let j = 0; j < this.columns.length; j++) {
                    let col = this.columns[j];
                    let filterField = col.field;

                    //local
                    if (Object.prototype.hasOwnProperty.call(this.filters, col.field)) {
                        let filterMatchMode = col.filterMatchMode;
                        let filterValue = this.filters[col.field];
                        let filterConstraint = FilterUtils[filterMatchMode];
                        let paramsWithoutNode = {filterField, filterValue, filterConstraint, strict};

                        if ((strict && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode))) ||
                            (!strict && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode)))) {
                                localMatch = false;
                        }

                        if (!localMatch) {
                            break;
                        }
                    }

                    //global
                    if (this.hasGlobalFilter() && !globalMatch) {
                        let copyNodeForGlobal = {...copyNode};
                        let filterValue = this.filters['global'];
                        let filterConstraint = FilterUtils['contains'];
                        let globalFilterParamsWithoutNode = {filterField, filterValue, filterConstraint, strict};

                        if ((strict && (this.findFilteredNodes(copyNodeForGlobal, globalFilterParamsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, globalFilterParamsWithoutNode))) ||
                            (!strict && (this.isFilterMatched(copyNodeForGlobal, globalFilterParamsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, globalFilterParamsWithoutNode)))) {
                                globalMatch = true;
                                copyNode = copyNodeForGlobal;
                        }
                    }
                }

                let matches = localMatch;
                if (this.hasGlobalFilter()) {
                    matches = localMatch && globalMatch;
                }

                if (matches) {
                    filteredNodes.push(copyNode);
                }
            }

            let filterEvent = this.createLazyLoadEvent(event);
            filterEvent.filteredValue = filteredNodes;
            this.$emit('filter', filterEvent);

            return filteredNodes;
        },
        findFilteredNodes(node, paramsWithoutNode) {
            if (node) {
                let matched = false;
                if (node.children) {
                    let childNodes = [...node.children];
                    node.children = [];
                    for (let childNode of childNodes) {
                        let copyChildNode = {...childNode};
                        if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                            matched = true;
                            node.children.push(copyChildNode);
                        }
                    }
                }

                if (matched) {
                    return true;
                }
            }
        },
        isFilterMatched(node, {filterField, filterValue, filterConstraint, strict}) {
            let matched = false;
            let dataFieldValue = ObjectUtils.resolveFieldData(node.data, filterField);
            if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
                matched = true;
            }

            if (!matched || (strict && !this.isNodeLeaf(node))) {
                matched = this.findFilteredNodes(node, {filterField, filterValue, filterConstraint, strict}) || matched;
            }

            return matched;
        },
        isNodeSelected(node) {
            return (this.selectionMode && this.selectionKeys) ? this.selectionKeys[node.key] === true : false;
        },
        isNodeLeaf(node) {
            return node.leaf === false ? false : !(node.children && node.children.length);
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
        onColumnKeyDown(event, col) {
            if (event.which === 13 && event.currentTarget.nodeName === 'TH' && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
                this.onColumnHeaderClick(event, col);
            }
        },
        getAriaSort(column) {
            if (column.sortable) {
                const sortIcon = this.getSortableColumnIcon(column);
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
        },
        hasColumnFilter() {
            if (this.columns) {
                for (let col of this.columns) {
                    if (col.$scopedSlots.filter) {
                        return true;
                    }
                }
            }

            return false;
        },
        hasFilters() {
            return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
        },
        hasGlobalFilter() {
            return this.filters && Object.prototype.hasOwnProperty.call(this.filters, 'global');
        }
    },
    computed: {
        containerClass() {
            return ['p-treetable p-component', {
                'p-treetable-hoverable-rows': (this.rowHover || this.rowSelectionMode),
                'p-treetable-auto-layout': this.autoLayout,
                'p-treetable-resizable': this.resizableColumns,
                'p-treetable-resizable-fit': this.resizableColumns && this.columnResizeMode === 'fit',
            }];
        },
        columns() {
            if (this.allChildren) {
                return this.allChildren.filter(child =>  child.$options._propKeys.indexOf('columnKey') !== -1);
            }
            return [];
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

            if (this.paginator) {
                const first = this.lazy ? 0 : this.d_first;
                return data.slice(first, first + this.d_rows);
            }
            else {
                return data;
            }
        },
        empty() {
            const data = this.processedData;
            return (!data || data.length === 0);
        },
        sorted() {
            return this.d_sortField || (this.d_multiSortMeta && this.d_multiSortMeta.length > 0);
        },
        hasFooter() {
            let hasFooter = false;

            for (let col of this.columns) {
                if (col.footer || col.$scopedSlots.footer) {
                    hasFooter = true;
                    break;
                }
            }

            return hasFooter;
        },
        paginatorTop() {
            return this.paginator && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both');
        },
        paginatorBottom() {
            return this.paginator && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both');
        },
        singleSelectionMode() {
            return this.selectionMode && this.selectionMode === 'single';
        },
        multipleSelectionMode() {
            return this.selectionMode && this.selectionMode === 'multiple';
        },
        rowSelectionMode() {
            return this.singleSelectionMode || this.multipleSelectionMode;
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
        loadingIconClass() {
            return ['p-treetable-loading-icon pi-spin', this.loadingIcon];
        }
    },
    components: {
        'TTColumnSlot': TreeTableColumnSlot,
        'TTRow': TreeTableRowLoader,
        'TTPaginator': Paginator,
    }
}
</script>

<style>
.p-treetable {
    position: relative;
}

.p-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
}

.p-treetable-auto-layout > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-auto-layout > .p-treetable-wrapper > table {
    table-layout: auto;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr {
    cursor: pointer;
}

.p-treetable-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
}

.p-treetable-toggler + .p-checkbox {
    vertical-align: middle;
}

.p-treetable-toggler + .p-checkbox + span {
    vertical-align: middle;
}

/* Resizable */
.p-treetable-resizable > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-resizable .p-treetable-thead > tr > th,
.p-treetable-resizable .p-treetable-tfoot > tr > td,
.p-treetable-resizable .p-treetable-tbody > tr > td {
    overflow: hidden;
}

.p-treetable-resizable .p-resizable-column {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-treetable .p-column-resizer {
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

.p-treetable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
}

.p-treetable .p-treetable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}
</style>
