<template>
	<div :class="containerClass">
		<div class="p-dataview-header" v-if="$scopedSlots.header">
			<slot name="header"></slot>
		</div>
		<DVPaginator v-if="paginatorTop" :rows="d_rows" :first="d_first" :totalRecords="getTotalRecords" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
					:currentPageReportTemplate="currentPageReportTemplate" :class="{'p-paginator-top': paginatorTop}" :alwaysShow="alwaysShowPaginator" @page="onPage($event)">
			<template #left v-if="$scopedSlots.paginatorLeft">
				<slot name="paginatorLeft"></slot>
			</template>
			<template #right v-if="$scopedSlots.paginatorRight">
				<slot name="paginatorRight"></slot>
			</template>
		</DVPaginator>
		<div class="p-dataview-content">
			<div class="p-grid p-nogutter">
				<template v-for="(item,index) of items">
					<slot v-if="$scopedSlots.list && layout === 'list'" name="list" :data="item" :index="index"></slot>
					<slot v-if="$scopedSlots.grid && layout === 'grid'" name="grid" :data="item" :index="index"></slot>
				</template>
				<div v-if="empty" class="p-col">
                    <div class="p-dataview-emptymessage">
                        <slot name="empty"></slot>
                    </div>
                </div>
			</div>
		</div>
		<DVPaginator v-if="paginatorBottom" :rows="d_rows" :first="d_first" :totalRecords="getTotalRecords" :pageLinkSize="pageLinkSize" :template="paginatorTemplate" :rowsPerPageOptions="rowsPerPageOptions"
					:currentPageReportTemplate="currentPageReportTemplate" :class="{'p-paginator-bottom': paginatorBottom}" :alwaysShow="alwaysShowPaginator" @page="onPage($event)">
			<template #left v-if="$scopedSlots.paginatorLeft">
				<slot name="paginatorLeft"></slot>
			</template>
			<template #right v-if="$scopedSlots.paginatorRight">
				<slot name="paginatorRight"></slot>
			</template>
		</DVPaginator>
		<div class="p-dataview-footer" v-if="$scopedSlots.footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
<script>
import ObjectUtils from '../utils/ObjectUtils';
import Paginator from '../paginator/Paginator';

export default {
    props: {
        value: {
            type: Array,
            default: null
        },
        layout: {
            type: String,
            default: 'list'
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
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        lazy: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            d_first: this.first,
            d_rows: this.rows
        }
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

                    return (this.sortOrder * result);
                });

                return value;
            }
            else {
                return null;
            }
        },
        resetPage() {
            this.d_first = 0;
            this.$emit('update:first', this.d_first);
        }
    },
    computed: {
        containerClass() {
            return ['p-dataview p-component', {
                    'p-dataview-list': (this.layout === 'list'),
                    'p-dataview-grid': (this.layout === 'grid')
                }
            ]
        },
        getTotalRecords() {
            if (this.totalRecords)
                return this.totalRecords;
            else
                return this.value ? this.value.length : 0;
        },
        empty() {
            return (!this.value || this.value.length === 0);
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
                }
                else {
                    return data;
                }

            }
            else {
                return null;
            }
        }
    },
    components: {
        'DVPaginator': Paginator
    }
}
</script>