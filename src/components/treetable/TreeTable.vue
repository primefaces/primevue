<template>
    <div :class="containerClass">
        <slot></slot>
        <div class="p-treetable-header" v-if="$scopedSlots.header">
            <slot name="header"></slot>
        </div>
        <div class="p-treetable-wrapper">
            <table>
                <thead class="p-treetable-thead">
                    <tr>
                        <th v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" :class="getColumnHeaderClass(col)" @click="onColumnHeaderClick($event, col)">
                            <TTColumnSlot :column="col" type="header" v-if="col.$scopedSlots.header" />
                            <span class="p-column-title" v-if="col.header">{{col.header}}</span>
                            <span v-if="col.sortable" :class="getSortableColumnIcon(col)"></span>
                            <TTColumnSlot :column="col" type="filter" v-if="col.$scopedSlots.filter" />
                        </th>
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
                        <TTRow v-for="node of value" :key="node.key" :columns="columns" :node="node" :level="0"
                        :expandedKeys="d_expandedKeys" @node-toggle="onNodeToggle"
                        :selectionMode="selectionMode" :selectionKeys="selectionKeys"></TTRow>
                    </template>
                    <tr v-else class="p-treetable-emptymessage">
                        <td :colspan="columns.length">
                            <slot name="empty"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="p-treetable-footer" v-if="$scopedSlots.header">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import TreeTableColumnSlot from './TreeTableColumnSlot';
import TreeTableRowLoader from './TreeTableRowLoader';

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
        }
    },
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
        getColumnHeaderClass(column) {
            const sorted = this.sortMode === 'single' ? (this.d_sortField === (column.field || column.sortField)) : this.getMultiSortMetaIndex(column) > -1;

            return [column.headerClass, 
                    {'p-sortable-column': column.sortable}, 
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
        onColumnHeaderClick() {
            
        },
        isNodeSelected() {
            return false;
        }
    },
    computed: {
        containerClass() {
            return ['p-treetable p-component', {
                'p-treetable-hoverable-rows': (this.rowHover || this.selectionMode),
                'p-treetable-auto-layout': this.autoLayout
            }];
        },
        columns() {
            if (this.allChildren) {
                return this.allChildren.filter(child =>  child.$options._propKeys.indexOf('columnKey') !== -1);
            }
            return [];
        },
        processedData() {
            return this.value;
        },
        empty() {
            const data = this.processedData;
            return (!data || data.length === 0);
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
        }
    },
    components: {
        'TTColumnSlot': TreeTableColumnSlot,
        'TTRow': TreeTableRowLoader
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

.p-treetable-toggler {
    cursor: pointer;
    display: inline-block;
}

.p-treetable .p-treetable-thead > tr > th,
.p-treetable .p-treetable-tbody > tr > td,
.p-treetable .p-treetable-tfoot > tr > td {
    padding: .25em .5em;
}

.p-treetable .p-treetable-thead > tr > th .p-column-title {
    vertical-align: middle;
}

.p-treetable .p-sortable-column {
    cursor: pointer;
}

.p-treetable .p-sortable-column-icon {
    vertical-align: middle;
}

.p-treetable-auto-layout > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-auto-layout > .p-treetable-wrapper > table {
    table-layout: auto;
}

/* Sections */
.p-treetable-header,
.p-treetable-footer {
    padding: .25em .5em;
    text-align: center;
    font-weight: bold;
}

.p-treetable-header {
    border-bottom: 0 none;
}

.p-treetable-footer {
    border-top: 0 none;
}

/* Paginator */
.p-treetable .p-paginator-top {
    border-bottom: 0 none;
}

.p-treetable .p-paginator-bottom {
    border-top: 0 none;
}

/* Scrollable */
.p-treetable-scrollable-wrapper {
    position: relative;
}
.p-treetable-scrollable-header,
.p-treetable-scrollable-footer {
    overflow: hidden;
    border: 0 none;
}

.p-treetable-scrollable-body {
    overflow: auto;
    position: relative;
}

.p-treetable-scrollable-body > table > .p-treetable-tbody > tr:first-child > td {
    border-top: 0 none;
}

.p-treetable-virtual-table {
    position: absolute;
}

/* Frozen Columns */
.p-treetable-frozen-view .p-treetable-scrollable-body {
    overflow: hidden;
}

.p-treetable-frozen-view > .p-treetable-scrollable-body > table > .p-treetable-tbody > tr > td:last-child {
    border-right: 0 none;
}

.p-treetable-unfrozen-view {
    position: absolute;
    top: 0px;
}

/* Filter */
.p-column-filter {
    width: 100%;
}

/* Resizable */
.p-treetable-resizable > .p-treetable-tablewrapper {
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
    width: .5em;
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

/* Selection */
.p-treetable .p-treetable-checkbox {
    margin: 0 .5em 0 .25em;
    vertical-align: middle;
}

/* Edit */
.p-treetable .p-treetable-tbody > tr > td.p-cell-editing .p-component {
    width: 100%;
}

/* Reorder */
.p-treetable-reorder-indicator-up,
.p-treetable-reorder-indicator-down {
    position: absolute;
    display: none;
}

/* Responsive */
.p-treetable-responsive .p-treetable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    .p-treetable-responsive .p-treetable-thead > tr > th,
    .p-treetable-responsive .p-treetable-tfoot > tr > td {
        display: none !important;
    }

    .p-treetable-responsive .p-treetable-tbody > tr > td {
        text-align: left;
        display: block;
        border: 0 none;
        width: 100% !important;
		float: left;
		clear: left;
    }

    .p-treetable-responsive .p-treetable-tbody > tr > td .p-column-title {
        padding: .4em;
        min-width: 30%;
        display: inline-block;
        margin: -.4em 1em -.4em -.4em;
        font-weight: bold;
    }
}

/* Loader */
.p-treetable-loading-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
    opacity: 0.1;
    z-index: 1;
}

.p-treetable-loading-content {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    margin-top: -1em;
    margin-left: -1em;
}

.p-treetable .p-treetable-loading-icon {
    font-size: 2em;
}
</style>