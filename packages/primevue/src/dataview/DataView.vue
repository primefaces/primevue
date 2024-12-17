<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
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
            :class="cx('pcPaginator', { position: 'top' })"
            :alwaysShow="alwaysShowPaginator"
            @page="onPage($event)"
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
        </DVPaginator>
        <div :class="cx('content')" v-bind="ptm('content')">
            <template v-if="!empty">
                <slot v-if="$slots.list && layout === 'list'" name="list" :items="items"></slot>
                <slot v-if="$slots.grid && layout === 'grid'" name="grid" :items="items"></slot>
            </template>
            <div v-else :class="cx('emptyMessage')" v-bind="ptm('emptyMessage')">
                <slot name="empty" :layout="layout">
                    {{ emptyMessageText }}
                </slot>
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
            :class="cx('pcPaginator', { position: 'bottom' })"
            :alwaysShow="alwaysShowPaginator"
            @page="onPage($event)"
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
        </DVPaginator>
        <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import { localeComparator, resolveFieldData, sort } from '@primeuix/utils/object';
import Paginator from 'primevue/paginator';
import BaseDataView from './BaseDataView.vue';

export default {
    name: 'DataView',
    extends: BaseDataView,
    inheritAttrs: false,
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
            return this.dataKey ? resolveFieldData(item, this.dataKey) : index;
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
                const comparer = localeComparator();

                value.sort((data1, data2) => {
                    let value1 = resolveFieldData(data1, this.sortField);
                    let value2 = resolveFieldData(data2, this.sortField);

                    return sort(value1, value2, this.sortOrder, comparer);
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
        emptyMessageText() {
            return this.$primevue.config?.locale?.emptyMessage || '';
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
