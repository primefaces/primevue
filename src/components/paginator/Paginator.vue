<template>
	<div class="p-paginator p-component p-unselectable-text">
        <div class="p-paginator-left-content" v-if="$scopedSlots.left">
            <slot name="left" :state="currentState"></slot>
        </div>
		<template v-for="(item,i) of templateItems">
			<FirstPageLink v-if="item === 'FirstPageLink'" :key="i" @click="changePageToFirst($event)" :disabled="isFirstPage" />
			<PrevPageLink v-else-if="item === 'PrevPageLink'" :key="i" @click="changePageToPrev($event)" :disabled="isFirstPage" />
			<NextPageLink v-else-if="item === 'NextPageLink'" :key="i" @click="changePageToNext($event)" :disabled="isLastPage" />
			<LastPageLink v-else-if="item === 'LastPageLink'" :key="i" @click="changePageToLast($event)" :disabled="isLastPage" />
			<PageLinks v-else-if="item === 'PageLinks'" :key="i" :value="updatePageLinks" :page="page" @click="pageLinkClick($event)" />
			<CurrentPageReport v-else-if="item === 'CurrentPageReport'" :key="i" :template="currentPageReportTemplate" :page="page" :pageCount="pageCount" />
			<RowsPerPageDropdown v-else-if="item === 'RowsPerPageDropdown'" :key="i" :value="rows" :options="rowsPerPageOptions" @rowsChange="rowsChange($event)" />
        </template>
        <div class="p-paginator-right-content" v-if="$scopedSlots.right">
            <slot name="right" :state="currentState"></slot>
        </div>
	</div>
</template>

<script>
import CurrrentPageReport from './CurrentPageReport';
import FirstPageLink from './FirstPageLink';
import LastPageLink from './LastPageLink';
import NextPageLink from './NextPageLink';
import PageLinks from './PageLinks';
import PrevPageLink from './PrevPageLink';
import RowsPerPageDropdown from './RowsPerPageDropdown';

export default {
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
        rowsPerPageOptions: Array,
        template: {
            type: String,
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        },
        currentPageReportTemplate: {
            type: null,
            default: '({currentPage} of {totalPages})'
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
    },
    computed: {
        templateItems() {
            var keys = [];
            this.template.split(' ').map((value) => {
                keys.push(value.trim());
            })
            return keys;
        },
        page() {
            return Math.floor(this.first / this.rows);
        },
        pageCount() {
            return Math.ceil(this.totalRecords / this.rows) || 1;
        },
        isFirstPage() {
            return this.page === 0;
        },
        isLastPage() {
            return this.page === this.pageCount - 1;
        },
        calculatePageLinkBoundaries() {
            var numberOfPages = this.pageCount;
            var visiblePages = Math.min(this.pageLinkSize, numberOfPages);

            //calculate range, keep current in middle if necessary
            var start = Math.max(0, Math.ceil(this.page - ((visiblePages) / 2)));
            var end = Math.min(numberOfPages - 1, start + visiblePages - 1);

            //check when approaching to last page
            var delta = this.pageLinkSize - (end - start + 1);
            start = Math.max(0, start - delta);

            return [start, end];
        },
        updatePageLinks() {
            var pageLinks = [];
            var boundaries = this.calculatePageLinkBoundaries;
            var start = boundaries[0];
            var end = boundaries[1];

            for(var i = start; i <= end; i++) {
                pageLinks.push(i + 1);
            }

            return pageLinks;
        },
        currentState() {
            return {
                page: this.page,
                first: this.first,
                rows: this.rows
            }
        }
    },
    methods: {
        changePage(first, rows) {
            var pc = this.pageCount;
            var p = Math.floor(first / rows);

            if(p >= 0 && p < pc) {
                var newPageState = {
                    first: first,
                    rows: rows,
                    page: p,
                    pageCount: pc
                };
                this.$emit('change', newPageState);
            }
        },
        changePageToFirst(event) {
            this.changePage(0, this.rows);
            event.preventDefault();
        },
        changePageToPrev(event) {
            this.changePage(this.first - this.rows, this.rows);
            event.preventDefault();
        },
        pageLinkClick(event) {
            this.changePage((event.value - 1) * this.rows, this.rows);
        },
        changePageToNext(event) {
            this.changePage(this.first + this.rows, this.rows);
            event.preventDefault();
        },
        changePageToLast(event) {
            this.changePage((this.pageCount - 1) * this.rows, this.rows);
            event.preventDefault();
        },
        rowsChange(event) {
            this.changePage(0, event.value.code);
        }
    }
}
</script>