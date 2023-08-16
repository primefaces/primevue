<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="dataview">
        <div v-if="$slots.header" :class="cx('header')" v-bind="ptm('header')">
            <slot name="header"></slot>
        </div>
        <DVPaginator
            v-if="paginatorTop"
            :rows="d_rows"
            :first="d_first"
            :totalRecords="getTotalRecords"
            :pageLinkSize="pageLinkSize"
            :template="paginatorTemplate"
            :rowsPerPageOptions="rowsPerPageOptions"
            :currentPageReportTemplate="currentPageReportTemplate"
            :class="cx('paginator')"
            :alwaysShow="alwaysShowPaginator"
            @page="onPage($event)"
            :unstyled="unstyled"
            :pt="ptm('paginator')"
        >
            <template v-if="$slots.paginatorstart" #start>
                <slot name="paginatorstart"></slot>
            </template>
            <template v-if="$slots.paginatorend" #end>
                <slot name="paginatorend"></slot>
            </template>
        </DVPaginator>
        <div :class="cx('content')" v-bind="ptm('content')">
            <div :class="cx('grid')" v-bind="ptm('grid')">
                <template v-for="(item, index) of items" :key="getKey(item, index)">
                    <slot v-if="$slots.list && layout === 'list'" name="list" :data="item" :index="index"></slot>
                    <slot v-if="$slots.grid && layout === 'grid'" name="grid" :data="item" :index="index"></slot>
                </template>
                <div v-if="empty" :class="cx('column')" v-bind="ptm('column')">
                    <div :class="cx('emptyMessage')" v-bind="ptm('emptyMessage')">
                        <slot name="empty"></slot>
                    </div>
                </div>
            </div>
        </div>
        <DVPaginator
            v-if="paginatorBottom"
            :rows="d_rows"
            :first="d_first"
            :totalRecords="getTotalRecords"
            :pageLinkSize="pageLinkSize"
            :template="paginatorTemplate"
            :rowsPerPageOptions="rowsPerPageOptions"
            :currentPageReportTemplate="currentPageReportTemplate"
            :class="cx('paginator')"
            :alwaysShow="alwaysShowPaginator"
            @page="onPage($event)"
            :unstyled="unstyled"
            :pt="ptm('paginator')"
        >
            <template v-if="$slots.paginatorstart" #start>
                <slot name="paginatorstart"></slot>
            </template>
            <template v-if="$slots.paginatorend" #end>
                <slot name="paginatorend"></slot>
            </template>
        </DVPaginator>
        <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import Paginator from 'primevue/paginator';
import { ObjectUtils } from 'primevue/utils';
import BaseDataView from './BaseDataView.vue';

export default {
    name: 'DataView',
    extends: BaseDataView,
    emits: ['update:first', 'update:rows', 'page'],
    data() {
        return {
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
        },
        sortField() {
            this.resetPage();
        },
        sortOrder() {
            this.resetPage();
        }
    },
    methods: {
        getKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
        },
        onPage(event) {
            this.d_first = event.first;
            this.d_rows = event.rows;

            this.$emit('update:first', this.d_first);
            this.$emit('update:rows', this.d_rows);
            this.$emit('page', event);
        },
        sort() {
            if (this.value) {
                const value = [...this.value];

                value.sort((data1, data2) => {
                    let value1 = ObjectUtils.resolveFieldData(data1, this.sortField);
                    let value2 = ObjectUtils.resolveFieldData(data2, this.sortField);
                    let result = null;

                    if (value1 == null && value2 != null) result = -1;
                    else if (value1 != null && value2 == null) result = 1;
                    else if (value1 == null && value2 == null) result = 0;
                    else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, { numeric: true });
                    else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

                    return this.sortOrder * result;
                });

                return value;
            } else {
                return null;
            }
        },
        resetPage() {
            this.d_first = 0;
            this.$emit('update:first', this.d_first);
        }
    },
    computed: {
        getTotalRecords() {
            if (this.totalRecords) return this.totalRecords;
            else return this.value ? this.value.length : 0;
        },
        empty() {
            return !this.value || this.value.length === 0;
        },
        paginatorTop() {
            return this.paginator && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both');
        },
        paginatorBottom() {
            return this.paginator && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both');
        },
        items() {
            if (this.value && this.value.length) {
                let data = this.value;

                if (data && data.length && this.sortField) {
                    data = this.sort();
                }

                if (this.paginator) {
                    const first = this.lazy ? 0 : this.d_first;

                    return data.slice(first, first + this.d_rows);
                } else {
                    return data;
                }
            } else {
                return null;
            }
        }
    },
    components: {
        DVPaginator: Paginator
    }
};
</script>
