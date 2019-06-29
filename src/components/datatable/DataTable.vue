<template>
    <div class="p-datatable p-component">
        <slot></slot>
        <div class="p-datatable-wrapper">
            <div class="p-datatable-header" v-if="$slots.header">
                <slot name="header"></slot>
            </div>
            <DTPaginator v-if="paginatorTop" :rows="rows" :first="first" :totalRecords="totalRecordsLength" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
					:currentPageReportTemplate="currentPageReportTemplate" :class="{'p-paginator-top': paginatorTop}" @page="onPage($event)">
                <template #left v-if="$scopedSlots.paginatorLeft">
                    <slot name="paginatorLeft"></slot>
                </template>
                <template #right v-if="$scopedSlots.paginatorRight">
                    <slot name="paginatorRight"></slot>
                </template>
            </DTPaginator>
            <table>
                <thead class="p-datatable-thead">
                    <tr>
                        <th v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" :class="col.headerClass">
                            <span class="p-column-title" v-if="col.header">{{col.header}}</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="p-datatable-tbody">
                    <tr class="p-datatable-row" v-for="(rowData, index) of data" :key="getRowKey(rowData, index)">
                        <td v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.bodyStyle" :class="col.bodyClass">
                            <ColumnSlot :data="rowData" :column="col" type="body" v-if="col.$scopedSlots.body" />
                            <template v-else>{{resolveFieldData(rowData, col.field)}}</template>
                        </td>
                    </tr>
                </tbody>
            </table>
            <DTPaginator v-if="paginatorBottom" :rows="rows" :first="first" :totalRecords="totalRecordsLength" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
					:currentPageReportTemplate="currentPageReportTemplate" :class="{'p-paginator-bottom': paginatorBottom}" @page="onPage($event)">
                <template #left v-if="$scopedSlots.paginatorLeft">
                    <slot name="paginatorLeft"></slot>
                </template>
                <template #right v-if="$scopedSlots.paginatorRight">
                    <slot name="paginatorRight"></slot>
                </template>
            </DTPaginator>
            <div class="p-datatable-footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';
import Paginator from '../paginator/Paginator';

const ColumnSlot = {
    functional: true,
    props: {
        column: {
            type: null,
            default: null
        },
        data: {
            type: null,
            default: null
        },
        type: {
            type: String,
            default: null
        }
    },
    render(createElement, context) {
        const content = context.props.column.$scopedSlots[context.props.type]({
            'data': context.props.data,
            'column': context.props.column
        });
        return [content];
    }
};

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
        }
    },
    data() {
        return {
            columns: [],
            d_first: this.first,
            d_rows: this.rows
        };
    },
    watch: {
        first(newValue) {
            this.d_first = newValue;
        },
        rows(newValue) {
            this.d_rows = newValue;
        }
    },
    mounted() {
        this.columns = [...this.$children];
    },
    methods: {
        getRowKey(rowData, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(rowData, this.dataKey): index;
        },
        resolveFieldData(rowData, field) {
            return ObjectUtils.resolveFieldData(rowData, field);
        },
        onPage(event) {
            this.d_first = event.first;
            this.d_rows = event.rows;

            this.$emit('update:first', this.d_first);
            this.$emit('update:rows', this.d_rows);
            this.$emit('page', event);
        }
    },
    computed: {
        data() {
            if (this.value && this.value.length) {
                let data = this.value;

                /*if (data && data.length && this.sortField) {
                    data = this.sort();
                }*/
            
                if (this.paginator) {
                    const first = this.lazy ? 0 : this.d_first;
                    return data.slice(first, first + this.d_rows);
                }
                else {
                    return data;
                }
                    
            }
            else {
                return null;
            }
        },
        totalRecordsLength() {
            if (this.totalRecords)
                return this.totalRecords;
            else
                return this.value ? this.value.length : 0;
        },
        empty() {
            return (!this.value || this.value.length === 0);
        },
        paginatorTop() {
            if (this.paginatorPosition && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both')) {
                return true
            }
            else
                return null;
        },
        paginatorBottom() {
            if (this.paginatorPosition && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both')) {
                return true
            }
            else
                return null;
        },
    },
    components: {
        'ColumnSlot': ColumnSlot,
        'DTPaginator': Paginator
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

/* Responsive */
.p-datatable-responsive .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    .p-datatable-responsive .p-datatable-thead > tr > th,
    .p-datatable-responsive .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .p-datatable-responsive .p-datatable-tbody > tr > td {
        text-align: left;
        display: block;
        border: 0 none;
        width: 100% !important;
		float: left;
		clear: left;
    }

    .p-datatable-responsive .p-datatable-tbody > tr > td .p-column-title {
        padding: .4em;
        min-width: 30%;
        display: inline-block;
        margin: -.4em 1em -.4em -.4em;
        font-weight: bold;
    }
}

/* Loader */
.p-datatable-loading-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
    opacity: 0.1;
    z-index: 1;
}

.p-datatable-loading-content {
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
