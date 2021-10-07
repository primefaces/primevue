<template>
    <div :class="containerClass" data-scrollselectors=".p-treetable-scrollable-body">
        <div class="p-treetable-loading" v-if="loading">
            <div class="p-treetable-loading-overlay p-component-overlay">
                <i :class="loadingIconClass"></i>
            </div>
        </div>
        <div class="p-treetable-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
         <TTPaginator v-if="paginatorTop" :rows="d_rows" :first="d_first" :totalRecords="totalRecordsLength" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
                :currentPageReportTemplate="currentPageReportTemplate" class="p-paginator-top" @page="onPage($event)" :alwaysShow="alwaysShowPaginator">
            <template #left v-if="$slots.paginatorLeft">
                <slot name="paginatorLeft"></slot>
            </template>
            <template #right v-if="$slots.paginatorRight">
                <slot name="paginatorRight"></slot>
            </template>
        </TTPaginator>
        <div class="p-treetable-wrapper" :style="{maxHeight: scrollHeight}">
            <table ref="table">
                <thead class="p-treetable-thead">
                    <tr>
                        <template v-for="(col,i) of columns" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i">
                            <TTHeaderCell v-if="!columnProp(col, 'hidden')" :column="col" :resizableColumns="resizableColumns"
                            :sortField="d_sortField" :sortOrder="d_sortOrder" :multiSortMeta="d_multiSortMeta" :sortMode="sortMode"
                            @column-click="onColumnHeaderClick" @column-resizestart="onColumnResizeStart"></TTHeaderCell>
                        </template>
                    </tr>
                    <tr v-if="hasColumnFilter()">
                        <template v-for="(col,i) of columns" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i">
                            <th v-if="!columnProp(col, 'hidden')" :class="getFilterColumnHeaderClass(col)" :style="[columnProp(col, 'style'),columnProp(col, 'filterHeaderStyle')]">
                                <component :is="col.children.filter" :column="col" v-if="col.children && col.children.filter"/>
                            </th>
                        </template>
                    </tr>
                </thead>
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
                <tfoot class="p-treetable-tfoot" v-if="hasFooter">
                    <tr>
                        <template v-for="(col,i) of columns" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i">
                            <TTFooterCell v-if="!columnProp(col, 'hidden')" :column="col"></TTFooterCell>
                        </template>
                    </tr>
                </tfoot>
            </table>
        </div>
        <TTPaginator v-if="paginatorBottom" :rows="d_rows" :first="d_first" :totalRecords="totalRecordsLength" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
                :currentPageReportTemplate="currentPageReportTemplate" class="p-paginator-bottom" @page="onPage($event)" :alwaysShow="alwaysShowPaginator">
            <template #left v-if="$slots.paginatorLeft">
                <slot name="paginatorLeft"></slot>
            </template>
            <template #right v-if="$slots.paginatorRight">
                <slot name="paginatorRight"></slot>
            </template>
        </TTPaginator>
        <div class="p-treetable-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
        <div ref="resizeHelper" class="p-column-resizer-helper p-highlight" style="display: none"></div>
    </div>
</template>

<script>
import {ObjectUtils,DomHandler} from 'primevue/utils';
import {FilterService} from 'primevue/api';
import TreeTableRow from './TreeTableRow.vue';
import HeaderCell from './HeaderCell.vue';
import FooterCell from './FooterCell.vue';
import Paginator from 'primevue/paginator';

export default {
    name: 'TreeTable',
    emits: ['node-expand', 'node-collapse', 'update:expandedKeys', 'update:selectionKeys', 'node-select', 'node-unselect',
        'update:first', 'update:rows', 'page', 'update:sortField', 'update:sortOrder', 'update:multiSortMeta', 'sort', 'filter', 'column-resize-end'],
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
        },
        showGridlines: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        scrollDirection: {
            type: String,
            default: "vertical"
        },
        scrollHeight: {
            type: String,
            default: null
        },
        responsiveLayout: {
            type: String,
            default: null
        }
    },
    documentColumnResizeListener: null,
    documentColumnResizeEndListener: null,
    lastResizeHelperX: null,
    resizeColumnElement: null,
    data() {
        return {
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
        if (this.scrollable && this.scrollDirection !== 'vertical') {
            this.updateScrollWidth();
        }
    },
    updated() {
        if (this.scrollable && this.scrollDirection !== 'vertical') {
            this.updateScrollWidth();
        }
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
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
        getFilterColumnHeaderClass(column) {
            return ['p-filter-column', this.columnProp(column, 'filterHeaderClass'), {
                'p-frozen-column': this.columnProp(column, 'frozen')
            }];
        },
        onColumnHeaderClick(e) {
            let event = e.originalEvent;
            let column = e.column;

            if (this.columnProp(column, 'sortable')) {
                const targetNode = event.target;
                const columnField = this.columnProp(column, 'sortField') || this.columnProp(column, 'field');

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
                    let filterField = this.columnProp(col, 'field');

                    //local
                    if (Object.prototype.hasOwnProperty.call(this.filters, this.columnProp(col, 'field'))) {
                        let filterMatchMode = this.columnProp(col, 'filterMatchMode') || 'startsWith';
                        let filterValue = this.filters[this.columnProp(col, 'field')];
                        let filterConstraint = FilterService.filters[filterMatchMode];
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
                        let filterConstraint = FilterService.filters['contains'];
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
                    if (this.columnProp(col, 'field')) {
                        filterMatchModes[col.props.field] = this.columnProp(col, 'filterMatchMode');
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

            if (columnWidth + delta > parseInt(minWidth, 10)) {
                if (this.columnResizeMode === 'fit') {
                    let nextColumn = this.resizeColumnElement.nextElementSibling;
                    let nextColumnWidth = nextColumn.offsetWidth - delta;

                    if (newColumnWidth > 15 && nextColumnWidth > 15) {
                        if (!this.scrollable) {
                            this.resizeColumnElement.style.width = newColumnWidth + 'px';
                            if(nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                        else {
                            this.resizeTableCells(newColumnWidth, nextColumnWidth);
                        }
                    }
                }
                else if (this.columnResizeMode === 'expand') {
                    this.$refs.table.style.width = this.$refs.table.offsetWidth + delta + 'px';

                    if (!this.scrollable)
                        this.resizeColumnElement.style.width = newColumnWidth + 'px';
                    else
                        this.resizeTableCells(newColumnWidth);
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
        resizeTableCells(newColumnWidth, nextColumnWidth) {
            let colIndex = DomHandler.index(this.resizeColumnElement);
            let children = this.$refs.table.children;
            for (let child of children) {
                for (let row of child.children) {
                    let resizeCell = row.children[colIndex];
                    resizeCell.style.flex = '0 0 ' + newColumnWidth + 'px';

                    if (this.columnResizeMode === 'fit') {
                        let nextCell = resizeCell.nextElementSibling;
                        if (nextCell) {
                            nextCell.style.flex = '0 0 ' + nextColumnWidth + 'px';
                        }
                    }
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
        onColumnKeyDown(event, col) {
            if (event.which === 13 && event.currentTarget.nodeName === 'TH' && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
                this.onColumnHeaderClick(event, col);
            }
        },
        hasColumnFilter() {
            if (this.columns) {
                for (let col of this.columns) {
                    if (col.children && col.children.filter) {
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
        },
        updateScrollWidth() {
            this.$refs.table.style.width = this.$refs.table.scrollWidth + 'px';
        }
    },
    computed: {
        containerClass() {
            return ['p-treetable p-component', {
                'p-treetable-hoverable-rows': (this.rowHover || this.rowSelectionMode),
                'p-treetable-auto-layout': this.autoLayout,
                'p-treetable-resizable': this.resizableColumns,
                'p-treetable-resizable-fit': this.resizableColumns && this.columnResizeMode === 'fit',
                'p-treetable-gridlines': this.showGridlines,
                'p-treetable-scrollable': this.scrollable,
                'p-treetable-scrollable-vertical': this.scrollable && this.scrollDirection === 'vertical',
                'p-treetable-scrollable-horizontal': this.scrollable && this.scrollDirection === 'horizontal',
                'p-treetable-scrollable-both': this.scrollable && this.scrollDirection === 'both',
                'p-treetable-flex-scrollable': (this.scrollable && this.scrollHeight === 'flex'),
                'p-treetable-responsive-scroll': this.responsiveLayout === 'scroll',
            }];
        },
        columns() {
            let cols = [];
            let children = this.$slots.default();

            children.forEach(child => {
                if (child.children && child.children instanceof Array)
                    cols = [...cols, ...child.children];
                else if (child.type.name === 'Column')
                    cols.push(child);
            });

            return cols;
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
                if (this.columnProp(col, 'footer')|| (col.children && col.children.footer)) {
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
        'TTRow': TreeTableRow,
        'TTPaginator': Paginator,
        'TTHeaderCell': HeaderCell,
        'TTFooterCell': FooterCell
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

.p-treetable-responsive-scroll > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-responsive-scroll > .p-treetable-wrapper > table,
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

/* Scrollable */
.p-treetable-scrollable .p-treetable-wrapper {
    position: relative;
    overflow: auto;
}

.p-treetable-scrollable .p-treetable-table {
    display: block;
}

.p-treetable-scrollable .p-treetable-thead,
.p-treetable-scrollable .p-treetable-tbody,
.p-treetable-scrollable .p-treetable-tfoot {
    display: block;
}

.p-treetable-scrollable .p-treetable-thead > tr,
.p-treetable-scrollable .p-treetable-tbody > tr,
.p-treetable-scrollable .p-treetable-tfoot > tr {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}

.p-treetable-scrollable .p-treetable-thead > tr > th,
.p-treetable-scrollable .p-treetable-tbody > tr > td,
.p-treetable-scrollable .p-treetable-tfoot > tr > td {
    display: flex;
    flex: 1 1 0;
    align-items: center;
}

.p-treetable-scrollable .p-treetable-thead {
    position: sticky;
    top: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-treetable-tfoot {
    position: sticky;
    bottom: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}

.p-treetable-scrollable-both .p-treetable-thead > tr > th,
.p-treetable-scrollable-both .p-treetable-tbody > tr > td,
.p-treetable-scrollable-both .p-treetable-tfoot > tr > td,
.p-treetable-scrollable-horizontal .p-treetable-thead > tr > th
.p-treetable-scrollable-horizontal .p-treetable-tbody > tr > td,
.p-treetable-scrollable-horizontal .p-treetable-tfoot > tr > td {
    flex: 0 0 auto;
}

.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}
</style>
