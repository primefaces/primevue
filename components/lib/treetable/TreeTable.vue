<template>
    <div :class="cx('root')" data-scrollselectors=".p-treetable-scrollable-body" role="table" v-bind="ptm('root')" data-pc-name="treetable">
        <div v-if="loading" :class="cx('loadingWrapper')" v-bind="ptm('loadingWrapper')">
            <div :class="cx('loadingOverlay')" v-bind="ptm('loadingOverlay')">
                <slot name="loadingicon" :class="cx('loadingIcon')">
                    <component :is="loadingIcon ? 'span' : 'SpinnerIcon'" spin :class="[cx('loadingIcon'), loadingIcon]" v-bind="ptm('loadingIcon')" />
                </slot>
            </div>
        </div>
        <div v-if="$slots.header" :class="cx('header')" v-bind="ptm('header')">
            <slot name="header"></slot>
        </div>
        <TTPaginator
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
            data-pc-section="paginator"
        >
            <template v-if="$slots.paginatorstart" #start>
                <slot name="paginatorstart"></slot>
            </template>
            <template v-if="$slots.paginatorend" #end>
                <slot name="paginatorend"></slot>
            </template>
            <template v-if="$slots.paginatorfirstpagelinkicon" #firstpagelinkicon>
                <slot name="paginatorfirstpagelinkicon"></slot>
            </template>
            <template v-if="$slots.paginatorprevpagelinkicon" #prevpagelinkicon>
                <slot name="paginatorprevpagelinkicon"></slot>
            </template>
            <template v-if="$slots.paginatornextpagelinkicon" #nextpagelinkicon>
                <slot name="paginatornextpagelinkicon"></slot>
            </template>
            <template v-if="$slots.paginatorlastpagelinkicon" #lastpagelinkicon>
                <slot name="paginatorlastpagelinkicon"></slot>
            </template>
        </TTPaginator>
        <div :class="cx('wrapper')" :style="{ maxHeight: scrollHeight }" v-bind="ptm('wrapper')">
            <table ref="table" role="table" v-bind="{ ...tableProps, ...ptm('table') }">
                <thead :class="cx('thead')" role="rowgroup" v-bind="ptm('thead')">
                    <tr role="row" v-bind="ptm('headerRow')">
                        <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
                            <TTHeaderCell
                                v-if="!columnProp(col, 'hidden')"
                                :column="col"
                                :resizableColumns="resizableColumns"
                                :sortField="d_sortField"
                                :sortOrder="d_sortOrder"
                                :multiSortMeta="d_multiSortMeta"
                                :sortMode="sortMode"
                                @column-click="onColumnHeaderClick"
                                @column-resizestart="onColumnResizeStart"
                                :index="i"
                                :pt="pt"
                            ></TTHeaderCell>
                        </template>
                    </tr>
                    <tr v-if="hasColumnFilter()" v-bind="ptm('headerRow')">
                        <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
                            <th v-if="!columnProp(col, 'hidden')" :class="getFilterColumnHeaderClass(col)" :style="[columnProp(col, 'style'), columnProp(col, 'filterHeaderStyle')]" v-bind="ptm('headerCell', ptHeaderCellOptions(col))">
                                <component v-if="col.children && col.children.filter" :is="col.children.filter" :column="col" :index="i" />
                            </th>
                        </template>
                    </tr>
                </thead>
                <tbody :class="cx('tbody')" role="rowgroup" v-bind="ptm('tbody')">
                    <template v-if="!empty">
                        <TTRow
                            v-for="(node, index) of dataToRender"
                            :key="node.key"
                            :columns="columns"
                            :node="node"
                            :level="0"
                            :expandedKeys="d_expandedKeys"
                            :indentation="indentation"
                            :selectionMode="selectionMode"
                            :selectionKeys="selectionKeys"
                            :ariaSetSize="dataToRender.length"
                            :ariaPosInset="index + 1"
                            :tabindex="setTabindex(node, index)"
                            :templates="$slots"
                            @node-toggle="onNodeToggle"
                            @node-click="onNodeClick"
                            @checkbox-change="onCheckboxChange"
                            :pt="pt"
                        ></TTRow>
                    </template>
                    <tr v-else :class="cx('emptyMessage')" v-bind="ptm('emptyMessage')">
                        <td :colspan="columns.length" v-bind="ptm('emptyMessageCell')">
                            <slot name="empty"></slot>
                        </td>
                    </tr>
                </tbody>
                <tfoot v-if="hasFooter" :class="cx('tfoot')" role="rowgroup" v-bind="ptm('tfoot')">
                    <tr role="row" v-bind="ptm('footerRow')">
                        <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
                            <TTFooterCell v-if="!columnProp(col, 'hidden')" :column="col" :index="i" :pt="pt"></TTFooterCell>
                        </template>
                    </tr>
                </tfoot>
            </table>
        </div>
        <TTPaginator
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
            :pt="pt"
            data-pc-section="paginator"
        >
            <template v-if="$slots.paginatorstart" #start>
                <slot name="paginatorstart"></slot>
            </template>
            <template v-if="$slots.paginatorend" #end>
                <slot name="paginatorend"></slot>
            </template>
            <template v-if="$slots.paginatorfirstpagelinkicon" #firstpagelinkicon>
                <slot name="paginatorfirstpagelinkicon"></slot>
            </template>
            <template v-if="$slots.paginatorprevpagelinkicon" #prevpagelinkicon>
                <slot name="paginatorprevpagelinkicon"></slot>
            </template>
            <template v-if="$slots.paginatornextpagelinkicon" #nextpagelinkicon>
                <slot name="paginatornextpagelinkicon"></slot>
            </template>
            <template v-if="$slots.paginatorlastpagelinkicon" #lastpagelinkicon>
                <slot name="paginatorlastpagelinkicon"></slot>
            </template>
        </TTPaginator>
        <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
            <slot name="footer"></slot>
        </div>
        <div ref="resizeHelper" :class="cx('resizeHelper')" style="display: none" v-bind="ptm('resizeHelper')"></div>
    </div>
</template>

<script>
import { FilterService } from 'primevue/api';
import SpinnerIcon from 'primevue/icons/spinner';
import Paginator from 'primevue/paginator';
import { DomHandler, ObjectUtils } from 'primevue/utils';
import BaseTreeTable from './BaseTreeTable.vue';
import FooterCell from './FooterCell.vue';
import HeaderCell from './HeaderCell.vue';
import TreeTableRow from './TreeTableRow.vue';

export default {
    name: 'TreeTable',
    extends: BaseTreeTable,
    emits: [
        'node-expand',
        'node-collapse',
        'update:expandedKeys',
        'update:selectionKeys',
        'node-select',
        'node-unselect',
        'update:first',
        'update:rows',
        'page',
        'update:sortField',
        'update:sortOrder',
        'update:multiSortMeta',
        'sort',
        'filter',
        'column-resize-end'
    ],
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
            hasASelectedNode: false
        };
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
        ptHeaderCellOptions(column) {
            return {
                context: {
                    frozen: this.columnProp(column, 'frozen')
                }
            };
        },
        onNodeToggle(node) {
            const key = node.key;

            if (this.d_expandedKeys[key]) {
                delete this.d_expandedKeys[key];
                this.$emit('node-collapse', node);
            } else {
                this.d_expandedKeys[key] = true;
                this.$emit('node-expand', node);
            }

            this.d_expandedKeys = { ...this.d_expandedKeys };
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
            const metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            const selected = this.isNodeSelected(node);
            let _selectionKeys;

            if (selected && metaKey) {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                } else {
                    _selectionKeys = { ...this.selectionKeys };
                    delete _selectionKeys[node.key];
                }

                this.$emit('node-unselect', node);
            } else {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                } else if (this.isMultipleSelectionMode()) {
                    _selectionKeys = !metaKey ? {} : this.selectionKeys ? { ...this.selectionKeys } : {};
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
                } else {
                    _selectionKeys = {};
                    _selectionKeys[node.key] = true;
                    this.$emit('node-select', node);
                }
            } else {
                if (selected) {
                    _selectionKeys = { ...this.selectionKeys };
                    delete _selectionKeys[node.key];

                    this.$emit('node-unselect', node);
                } else {
                    _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {};
                    _selectionKeys[node.key] = true;

                    this.$emit('node-select', node);
                }
            }

            return _selectionKeys;
        },
        onCheckboxChange(event) {
            this.$emit('update:selectionKeys', event.selectionKeys);

            if (event.check) this.$emit('node-select', event.node);
            else this.$emit('node-unselect', event.node);
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
            return [this.cx('headerCell', { column }), this.columnProp(column, 'filterHeaderClass')];
        },
        onColumnHeaderClick(e) {
            let event = e.originalEvent;
            let column = e.column;

            if (this.columnProp(column, 'sortable')) {
                const targetNode = event.target;
                const columnField = this.columnProp(column, 'sortField') || this.columnProp(column, 'field');

                if (
                    DomHandler.getAttribute(targetNode, 'data-p-sortable-column') === true ||
                    DomHandler.getAttribute(targetNode, 'data-pc-section') === 'headertitle' ||
                    DomHandler.getAttribute(targetNode, 'data-pc-section') === 'sorticon' ||
                    DomHandler.getAttribute(targetNode.parentElement, 'data-pc-section') === 'sorticon' ||
                    DomHandler.getAttribute(targetNode.parentElement.parentElement, 'data-pc-section') === 'sorticon'
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
                }
            }
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
        sortSingle(nodes) {
            return this.sortNodesSingle(nodes);
        },
        sortNodesSingle(nodes) {
            let _nodes = [...nodes];

            _nodes.sort((node1, node2) => {
                const value1 = ObjectUtils.resolveFieldData(node1.data, this.d_sortField);
                const value2 = ObjectUtils.resolveFieldData(node2.data, this.d_sortField);
                let result = null;

                if (value1 == null && value2 != null) result = -1;
                else if (value1 != null && value2 == null) result = 1;
                else if (value1 == null && value2 == null) result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, { numeric: true });
                else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

                return this.d_sortOrder * result;
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

            if (value1 == null && value2 != null) result = -1;
            else if (value1 != null && value2 == null) result = 1;
            else if (value1 == null && value2 == null) result = 0;
            else {
                if (value1 === value2) {
                    return this.d_multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, index + 1) : 0;
                } else {
                    if ((typeof value1 === 'string' || value1 instanceof String) && (typeof value2 === 'string' || value2 instanceof String)) return this.d_multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true });
                    else result = value1 < value2 ? -1 : 1;
                }
            }

            return this.d_multiSortMeta[index].order * result;
        },
        filter(value) {
            let filteredNodes = [];
            const strict = this.filterMode === 'strict';

            for (let node of value) {
                let copyNode = { ...node };
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
                        let paramsWithoutNode = { filterField, filterValue, filterConstraint, strict };

                        if (
                            (strict && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode))) ||
                            (!strict && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode)))
                        ) {
                            localMatch = false;
                        }

                        if (!localMatch) {
                            break;
                        }
                    }

                    //global
                    if (this.hasGlobalFilter() && !globalMatch) {
                        let copyNodeForGlobal = { ...copyNode };
                        let filterValue = this.filters['global'];
                        let filterConstraint = FilterService.filters['contains'];
                        let globalFilterParamsWithoutNode = { filterField, filterValue, filterConstraint, strict };

                        if (
                            (strict && (this.findFilteredNodes(copyNodeForGlobal, globalFilterParamsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, globalFilterParamsWithoutNode))) ||
                            (!strict && (this.isFilterMatched(copyNodeForGlobal, globalFilterParamsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, globalFilterParamsWithoutNode)))
                        ) {
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
                        let copyChildNode = { ...childNode };

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
        isFilterMatched(node, { filterField, filterValue, filterConstraint, strict }) {
            let matched = false;
            let dataFieldValue = ObjectUtils.resolveFieldData(node.data, filterField);

            if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
                matched = true;
            }

            if (!matched || (strict && !this.isNodeLeaf(node))) {
                matched = this.findFilteredNodes(node, { filterField, filterValue, filterConstraint, strict }) || matched;
            }

            return matched;
        },
        isNodeSelected(node) {
            return this.selectionMode && this.selectionKeys ? this.selectionKeys[node.key] === true : false;
        },
        isNodeLeaf(node) {
            return node.leaf === false ? false : !(node.children && node.children.length);
        },
        createLazyLoadEvent(event) {
            let filterMatchModes;

            if (this.hasFilters()) {
                filterMatchModes = {};
                this.columns.forEach((col) => {
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
                        if (!this.scrollable) {
                            this.resizeColumnElement.style.width = newColumnWidth + 'px';

                            if (nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        } else {
                            this.resizeTableCells(newColumnWidth, nextColumnWidth);
                        }
                    }
                } else if (this.columnResizeMode === 'expand') {
                    this.$refs.table.style.width = this.$refs.table.offsetWidth + delta + 'px';

                    if (!this.scrollable) this.resizeColumnElement.style.width = newColumnWidth + 'px';
                    else this.resizeTableCells(newColumnWidth);
                }

                this.$emit('column-resize-end', {
                    element: this.resizeColumnElement,
                    delta: delta
                });
            }

            this.$refs.resizeHelper.style.display = 'none';
            this.resizeColumn = null;
            this.$el.setAttribute('data-p-unselectable-text', 'false');
            !this.isUnstyled && DomHandler.removeClass(this.$el, 'p-unselectable-text');

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
                this.documentColumnResizeListener = document.addEventListener('mousemove', (event) => {
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
        onColumnKeyDown(event, col) {
            if (event.code === 'Enter' && event.currentTarget.nodeName === 'TH' && DomHandler.getAttribute(event.currentTarget, 'data-p-sortable-column')) {
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
        },
        getItemLabel(node) {
            return node.data.name;
        },
        setTabindex(node, index) {
            if (this.isNodeSelected(node)) {
                this.hasASelectedNode = true;

                return 0;
            }

            if (this.selectionMode) {
                if (!this.isNodeSelected(node) && index === 0 && !this.hasASelectedNode) return 0;
            } else if (!this.selectionMode && index === 0) {
                return 0;
            }

            return -1;
        }
    },
    computed: {
        columns() {
            let cols = [];
            let children = this.$slots.default();

            children.forEach((child) => {
                if (child.children && child.children instanceof Array) cols = [...cols, ...child.children];
                else if (child.type.name === 'Column') cols.push(child);
            });

            return cols;
        },
        processedData() {
            if (this.lazy) {
                return this.value;
            } else {
                if (this.value && this.value.length) {
                    let data = this.value;

                    if (this.sorted) {
                        if (this.sortMode === 'single') data = this.sortSingle(data);
                        else if (this.sortMode === 'multiple') data = this.sortMultiple(data);
                    }

                    if (this.hasFilters()) {
                        data = this.filter(data);
                    }

                    return data;
                } else {
                    return null;
                }
            }
        },
        dataToRender() {
            const data = this.processedData;

            if (this.paginator) {
                const first = this.lazy ? 0 : this.d_first;

                return data.slice(first, first + this.d_rows);
            } else {
                return data;
            }
        },
        empty() {
            const data = this.processedData;

            return !data || data.length === 0;
        },
        sorted() {
            return this.d_sortField || (this.d_multiSortMeta && this.d_multiSortMeta.length > 0);
        },
        hasFooter() {
            let hasFooter = false;

            for (let col of this.columns) {
                if (this.columnProp(col, 'footer') || (col.children && col.children.footer)) {
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
            } else {
                const data = this.processedData;

                return data ? data.length : 0;
            }
        }
    },
    components: {
        TTRow: TreeTableRow,
        TTPaginator: Paginator,
        TTHeaderCell: HeaderCell,
        TTFooterCell: FooterCell,
        SpinnerIcon: SpinnerIcon
    }
};
</script>
