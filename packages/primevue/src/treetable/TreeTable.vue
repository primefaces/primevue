<template>
    <div :class="cx('root')" data-scrollselectors=".p-treetable-scrollable-body" v-bind="ptmi('root')">
        <slot></slot>
        <div v-if="loading && loadingMode === 'mask'" :class="cx('loading')" v-bind="ptm('loading')">
            <div :class="cx('mask')" v-bind="ptm('mask')">
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
            :class="cx('pcPaginator', { position: 'top' })"
            @page="onPage($event)"
            :alwaysShow="alwaysShowPaginator"
            :unstyled="unstyled"
            :pt="ptm('pcPaginator')"
        >
            <template v-if="$slots.paginatorcontainer" #container="slotProps">
                <slot
                    name="paginatorcontainer"
                    :first="slotProps.first"
                    :last="slotProps.last"
                    :rows="slotProps.rows"
                    :page="slotProps.page"
                    :pageCount="slotProps.pageCount"
                    :totalRecords="slotProps.totalRecords"
                    :firstPageCallback="slotProps.firstPageCallback"
                    :lastPageCallback="slotProps.lastPageCallback"
                    :prevPageCallback="slotProps.prevPageCallback"
                    :nextPageCallback="slotProps.nextPageCallback"
                    :rowChangeCallback="slotProps.rowChangeCallback"
                ></slot>
            </template>
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
        </TTPaginator>
        <div :class="cx('tableContainer')" :style="[sx('tableContainer'), { maxHeight: scrollHeight }]" v-bind="ptm('tableContainer')">
            <table ref="table" role="treegrid" :class="[cx('table'), tableClass]" :style="tableStyle" v-bind="{ ...tableProps, ...ptm('table') }">
                <thead :class="cx('thead')" :style="sx('thead')" role="rowgroup" v-bind="ptm('thead')">
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
                                @column-click="onColumnHeaderClick($event)"
                                @column-resizestart="onColumnResizeStart($event)"
                                :index="i"
                                :unstyled="unstyled"
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
                            :key="nodeKey(node)"
                            :dataKey="dataKey"
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
                            :loadingMode="loadingMode"
                            :contextMenu="contextMenu"
                            :contextMenuSelection="contextMenuSelection"
                            :templates="$slots"
                            @node-toggle="onNodeToggle"
                            @node-click="onNodeClick"
                            @checkbox-change="onCheckboxChange"
                            @row-rightclick="onRowRightClick($event)"
                            :unstyled="unstyled"
                            :pt="pt"
                        ></TTRow>
                    </template>
                    <tr v-else :class="cx('emptyMessage')" v-bind="ptm('emptyMessage')">
                        <td :colspan="columns.length" v-bind="ptm('emptyMessageCell')">
                            <slot name="empty"></slot>
                        </td>
                    </tr>
                </tbody>
                <tfoot v-if="hasFooter" :class="cx('tfoot')" :style="sx('tfoot')" role="rowgroup" v-bind="ptm('tfoot')">
                    <tr role="row" v-bind="ptm('footerRow')">
                        <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
                            <TTFooterCell v-if="!columnProp(col, 'hidden')" :column="col" :index="i" :unstyled="unstyled" :pt="pt"></TTFooterCell>
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
            :class="cx('pcPaginator', { position: 'bottom' })"
            @page="onPage($event)"
            :alwaysShow="alwaysShowPaginator"
            :unstyled="unstyled"
            :pt="ptm('pcPaginator')"
        >
            <template v-if="$slots.paginatorcontainer" #container="slotProps">
                <slot
                    name="paginatorcontainer"
                    :first="slotProps.first"
                    :last="slotProps.last"
                    :rows="slotProps.rows"
                    :page="slotProps.page"
                    :pageCount="slotProps.pageCount"
                    :totalRecords="slotProps.totalRecords"
                    :firstPageCallback="slotProps.firstPageCallback"
                    :lastPageCallback="slotProps.lastPageCallback"
                    :prevPageCallback="slotProps.prevPageCallback"
                    :nextPageCallback="slotProps.nextPageCallback"
                    :rowChangeCallback="slotProps.rowChangeCallback"
                ></slot>
            </template>
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
        </TTPaginator>
        <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
            <slot name="footer"></slot>
        </div>
        <div ref="resizeHelper" :class="cx('columnResizeIndicator')" style="display: none" v-bind="ptm('columnResizeIndicator')"></div>
    </div>
</template>

<script>
import { addStyle, clearSelection, find, getAttribute, getIndex, getOffset, getOuterWidth, isRTL, setAttribute } from '@primeuix/utils/dom';
import { localeComparator, resolveFieldData, sort } from '@primeuix/utils/object';
import { FilterService } from '@primevue/core/api';
import { getVNodeProp, HelperSet } from '@primevue/core/utils';
import SpinnerIcon from '@primevue/icons/spinner';
import Paginator from 'primevue/paginator';
import BaseTreeTable from './BaseTreeTable.vue';
import FooterCell from './FooterCell.vue';
import HeaderCell from './HeaderCell.vue';
import TreeTableRow from './TreeTableRow.vue';

export default {
    name: 'TreeTable',
    extends: BaseTreeTable,
    inheritAttrs: false,
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
        'column-resize-end',
        'update:contextMenuSelection',
        'row-contextmenu'
    ],
    provide() {
        return {
            $columns: this.d_columns
        };
    },
    data() {
        return {
            d_expandedKeys: this.expandedKeys || {},
            d_first: this.first,
            d_rows: this.rows,
            d_sortField: this.sortField,
            d_sortOrder: this.sortOrder,
            d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : [],
            hasASelectedNode: false,
            d_columns: new HelperSet({ type: 'Column' })
        };
    },
    documentColumnResizeListener: null,
    documentColumnResizeEndListener: null,
    lastResizeHelperX: null,
    resizeColumnElement: null,
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
    beforeUnmount() {
        this.destroyStyleElement();
        this.d_columns.clear();
    },
    methods: {
        columnProp(col, prop) {
            return getVNodeProp(col, prop);
        },
        ptHeaderCellOptions(column) {
            return {
                context: {
                    frozen: this.columnProp(column, 'frozen')
                }
            };
        },
        onNodeToggle(node) {
            const key = this.nodeKey(node);

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
        nodeKey(node) {
            return resolveFieldData(node, this.dataKey);
        },
        handleSelectionWithMetaKey(event) {
            const originalEvent = event.originalEvent;
            const node = event.node;
            const nodeKey = this.nodeKey(node);
            const metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            const selected = this.isNodeSelected(node);
            let _selectionKeys;

            if (selected && metaKey) {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                } else {
                    _selectionKeys = { ...this.selectionKeys };
                    delete _selectionKeys[nodeKey];
                }

                this.$emit('node-unselect', node);
            } else {
                if (this.isSingleSelectionMode()) {
                    _selectionKeys = {};
                } else if (this.isMultipleSelectionMode()) {
                    _selectionKeys = !metaKey ? {} : this.selectionKeys ? { ...this.selectionKeys } : {};
                }

                _selectionKeys[nodeKey] = true;
                this.$emit('node-select', node);
            }

            return _selectionKeys;
        },
        handleSelectionWithoutMetaKey(event) {
            const node = event.node;
            const nodeKey = this.nodeKey(node);
            const selected = this.isNodeSelected(node);
            let _selectionKeys;

            if (this.isSingleSelectionMode()) {
                if (selected) {
                    _selectionKeys = {};
                    this.$emit('node-unselect', node);
                } else {
                    _selectionKeys = {};
                    _selectionKeys[nodeKey] = true;
                    this.$emit('node-select', node);
                }
            } else {
                if (selected) {
                    _selectionKeys = { ...this.selectionKeys };
                    delete _selectionKeys[nodeKey];

                    this.$emit('node-unselect', node);
                } else {
                    _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {};
                    _selectionKeys[nodeKey] = true;

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
        onRowRightClick(event) {
            if (this.contextMenu) {
                clearSelection();
                event.originalEvent.target.focus();
            }

            this.$emit('update:contextMenuSelection', event.node);
            this.$emit('row-contextmenu', event);
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

            this.d_expandedKeys = {};
            this.$emit('update:expandedKeys', this.d_expandedKeys);
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
                    getAttribute(targetNode, 'data-p-sortable-column') === true ||
                    getAttribute(targetNode, 'data-pc-section') === 'columntitle' ||
                    getAttribute(targetNode, 'data-pc-section') === 'columnheadercontent' ||
                    getAttribute(targetNode, 'data-pc-section') === 'sorticon' ||
                    getAttribute(targetNode.parentElement, 'data-pc-section') === 'sorticon' ||
                    getAttribute(targetNode.parentElement.parentElement, 'data-pc-section') === 'sorticon' ||
                    targetNode.closest('[data-p-sortable-column="true"]')
                ) {
                    clearSelection();

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
            const comparer = localeComparator();

            _nodes.sort((node1, node2) => {
                const value1 = resolveFieldData(node1.data, this.d_sortField);
                const value2 = resolveFieldData(node2.data, this.d_sortField);

                return sort(value1, value2, this.d_sortOrder, comparer);
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
            const value1 = resolveFieldData(node1.data, this.d_multiSortMeta[index].field);
            const value2 = resolveFieldData(node2.data, this.d_multiSortMeta[index].field);
            const comparer = localeComparator();

            if (value1 === value2) {
                return this.d_multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, index + 1) : 0;
            }

            return sort(value1, value2, this.d_multiSortMeta[index].order, comparer);
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
                    let filterField = this.columnProp(col, 'filterField') || this.columnProp(col, 'field');

                    //local
                    if (Object.prototype.hasOwnProperty.call(this.filters, filterField)) {
                        let filterMatchMode = this.columnProp(col, 'filterMatchMode') || 'startsWith';
                        let filterValue = this.filters[filterField];
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
            let dataFieldValue = resolveFieldData(node.data, filterField);

            if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
                matched = true;
            }

            if (!matched || (strict && !this.isNodeLeaf(node))) {
                matched = this.findFilteredNodes(node, { filterField, filterValue, filterConstraint, strict }) || matched;
            }

            return matched;
        },
        isNodeSelected(node) {
            return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(node)] === true : false;
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
            let containerLeft = getOffset(this.$el).left;

            this.resizeColumnElement = event.target.parentElement;
            this.columnResizing = true;
            this.lastResizeHelperX = event.pageX - containerLeft + this.$el.scrollLeft;

            this.bindColumnResizeEvents();
        },
        onColumnResize(event) {
            let containerLeft = getOffset(this.$el).left;

            this.$el.setAttribute('data-p-unselectable-text', 'true');
            !this.isUnstyled && addStyle(this.$el, { 'user-select': 'none' });
            this.$refs.resizeHelper.style.height = this.$el.offsetHeight + 'px';
            this.$refs.resizeHelper.style.top = 0 + 'px';
            this.$refs.resizeHelper.style.left = event.pageX - containerLeft + this.$el.scrollLeft + 'px';

            this.$refs.resizeHelper.style.display = 'block';
        },
        onColumnResizeEnd() {
            let delta = isRTL(this.$el) ? this.lastResizeHelperX - this.$refs.resizeHelper.offsetLeft : this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX;
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
                }

                this.$emit('column-resize-end', {
                    element: this.resizeColumnElement,
                    delta: delta
                });
            }

            this.$refs.resizeHelper.style.display = 'none';
            this.resizeColumn = null;
            this.$el.removeAttribute('data-p-unselectable-text');
            !this.isUnstyled && (this.$el.style['user-select'] = '');

            this.unbindColumnResizeEvents();
        },
        resizeTableCells(newColumnWidth, nextColumnWidth) {
            let colIndex = getIndex(this.resizeColumnElement);
            let widths = [];
            let headers = find(this.$refs.table, 'thead[data-pc-section="thead"] > tr > th');

            headers.forEach((header) => widths.push(getOuterWidth(header)));

            this.destroyStyleElement();
            this.createStyleElement();

            let innerHTML = '';
            let selector = `[data-pc-name="treetable"][${this.$attrSelector}] > [data-pc-section="tablecontainer"] > table[data-pc-section="table"]`;

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
            if ((event.code === 'Enter' || event.code === 'NumpadEnter') && event.currentTarget.nodeName === 'TH' && getAttribute(event.currentTarget, 'data-p-sortable-column')) {
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
        getItemLabel(node) {
            return node.data.name;
        },
        createStyleElement() {
            this.styleElement = document.createElement('style');
            this.styleElement.type = 'text/css';
            setAttribute(this.styleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
            document.head.appendChild(this.styleElement);
        },
        destroyStyleElement() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
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
            return this.d_columns.get(this);
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
