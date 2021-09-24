<template>
	<div class="p-paginator p-component" v-if="alwaysShow ? true : (pageLinks && pageLinks.length > 1)">
        <div class="p-paginator-left-content" v-if="$slots.left">
            <slot name="left" :state="currentState"></slot>
        </div>
		<template v-for="item of templateItems" :key="item">
			<FirstPageLink v-if="item === 'FirstPageLink'" @click="changePageToFirst($event)" :disabled="isFirstPage || empty" />
			<PrevPageLink v-else-if="item === 'PrevPageLink'" @click="changePageToPrev($event)" :disabled="isFirstPage || empty" />
			<NextPageLink v-else-if="item === 'NextPageLink'" @click="changePageToNext($event)" :disabled="isLastPage || empty" />
			<LastPageLink v-else-if="item === 'LastPageLink'" @click="changePageToLast($event)" :disabled="isLastPage || empty" />
			<PageLinks v-else-if="item === 'PageLinks'" :value="pageLinks" :page="page" @click="changePageLink($event)" />
			<CurrentPageReport v-else-if="item === 'CurrentPageReport'" :template="currentPageReportTemplate" :currentPage="currentPage"
                :page="page" :pageCount="pageCount" :first="d_first" :rows="d_rows" :totalRecords="totalRecords" />
			<RowsPerPageDropdown v-else-if="item === 'RowsPerPageDropdown' && rowsPerPageOptions" :rows="d_rows"
                :options="rowsPerPageOptions" @rows-change="onRowChange($event)" :disabled="empty"/>
            <JumpToPageDropdown v-else-if="item === 'JumpToPageDropdown'" :page="page" :pageCount="pageCount"
                @page-change="changePage($event)" :disabled="empty"/>
            <JumpToPageInput v-else-if="item === 'JumpToPageInput'" :page="currentPage" @page-change="changePage($event)" :disabled="empty"/>
        </template>
        <div class="p-paginator-right-content" v-if="$slots.right">
            <slot name="right" :state="currentState"></slot>
        </div>
	</div>
</template>

<script>
import CurrrentPageReport from './CurrentPageReport.vue';
import FirstPageLink from './FirstPageLink.vue';
import LastPageLink from './LastPageLink.vue';
import NextPageLink from './NextPageLink.vue';
import PageLinks from './PageLinks.vue';
import PrevPageLink from './PrevPageLink.vue';
import RowsPerPageDropdown from './RowsPerPageDropdown.vue';
import JumpToPageDropdown from './JumpToPageDropdown.vue';
import JumpToPageInput from './JumpToPageInput.vue';

export default {
    name: 'Paginator',
    emits: ['update:first', 'update:rows', 'page'],
    props: {
        totalRecords: {
            type: Number,
            default: 0
        },
        rows: {
            type: Number,
            default: 0
        },
        first: {
            type: Number,
            default: 0
        },
        pageLinkSize: {
            type: Number,
            default: 5
        },
        rowsPerPageOptions: {
            type: Array,
            default: null
        },
        template: {
            type: String,
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        },
        currentPageReportTemplate: {
            type: null,
            default: '({currentPage} of {totalPages})'
        },
        alwaysShow: {
            type: Boolean,
            default: true
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
        totalRecords(newValue) {
            if (this.page > 0 && newValue && (this.d_first >= newValue)) {
                this.changePage(this.pageCount - 1);
            }
        }
    },
    methods: {
        changePage(p) {
            const pc = this.pageCount;

            if (p >= 0 && p < pc) {
                this.d_first = this.d_rows * p;
                const state = {
                    page: p,
                    first: this.d_first,
                    rows: this.d_rows,
                    pageCount: pc
                };

				this.$emit('update:first', this.d_first);
                this.$emit('update:rows', this.d_rows);
                this.$emit('page', state);
            }
        },
        changePageToFirst(event) {
            if(!this.isFirstPage) {
                this.changePage(0);
            }

            event.preventDefault();
        },
        changePageToPrev(event) {
            this.changePage(this.page - 1);
            event.preventDefault();
        },
        changePageLink(event) {
            this.changePage(event.value - 1);
            event.originalEvent.preventDefault();
        },
        changePageToNext(event) {
            this.changePage(this.page  + 1);
            event.preventDefault();
        },
        changePageToLast(event) {
            if(!this.isLastPage) {
                this.changePage(this.pageCount - 1);
            }

            event.preventDefault();
        },
        onRowChange(value) {
            this.d_rows = value;
            this.changePage(this.page);
        }
    },
    computed: {
        templateItems() {
            let keys = [];
            this.template.split(' ').map((value) => {
                keys.push(value.trim());
            })
            return keys;
        },
        page() {
            return Math.floor(this.d_first / this.d_rows);
        },
        pageCount() {
            return Math.ceil(this.totalRecords / this.d_rows);
        },
        isFirstPage() {
            return this.page === 0;
        },
        isLastPage() {
            return this.page === this.pageCount - 1;
        },
        calculatePageLinkBoundaries() {
            const numberOfPages = this.pageCount;
            const visiblePages = Math.min(this.pageLinkSize, numberOfPages);

            //calculate range, keep current in middle if necessary
            let start = Math.max(0, Math.ceil(this.page - ((visiblePages) / 2)));
            let end = Math.min(numberOfPages - 1, start + visiblePages - 1);

            //check when approaching to last page
            const delta = this.pageLinkSize - (end - start + 1);
            start = Math.max(0, start - delta);

            return [start, end];
        },
        pageLinks() {
            let pageLinks = [];
            let boundaries = this.calculatePageLinkBoundaries;
            let start = boundaries[0];
            let end = boundaries[1];

            for(var i = start; i <= end; i++) {
                pageLinks.push(i + 1);
            }

            return pageLinks;
        },
        currentState() {
            return {
                page: this.page,
                first: this.d_first,
                rows: this.d_rows
            }
        },
        empty() {
            return this.pageCount === 0;
        },
        currentPage() {
            return this.pageCount > 0 ? this.page + 1 : 0;
        }
    },
    components: {
        'CurrentPageReport': CurrrentPageReport,
        'FirstPageLink': FirstPageLink,
        'LastPageLink': LastPageLink,
        'NextPageLink': NextPageLink,
        'PageLinks': PageLinks,
        'PrevPageLink': PrevPageLink,
        'RowsPerPageDropdown': RowsPerPageDropdown,
        'JumpToPageDropdown': JumpToPageDropdown,
        'JumpToPageInput': JumpToPageInput
    }
}
</script>

<style lang="css">
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.p-paginator-left-content {
	margin-right: auto;
}

.p-paginator-right-content {
	margin-left: auto;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev,
.p-paginator-current {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
}

.p-paginator-element:focus {
    z-index: 1;
    position: relative;
}
</style>
