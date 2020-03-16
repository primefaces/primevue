<template>
	<div class="p-paginator p-component p-unselectable-text" v-if="alwaysShow ? true : (pageLinks && pageLinks.length > 1)">
        <div class="p-paginator-left-content" v-if="$scopedSlots.left">
            <slot name="left" :state="currentState"></slot>
        </div>
		<template v-for="item of templateItems">
			<FirstPageLink v-if="item === 'FirstPageLink'" :key="item" @click="changePageToFirst($event)" :disabled="isFirstPage" />
			<PrevPageLink v-else-if="item === 'PrevPageLink'" :key="item" @click="changePageToPrev($event)" :disabled="isFirstPage" />
			<NextPageLink v-else-if="item === 'NextPageLink'" :key="item" @click="changePageToNext($event)" :disabled="isLastPage" />
			<LastPageLink v-else-if="item === 'LastPageLink'" :key="item" @click="changePageToLast($event)" :disabled="isLastPage" />
			<PageLinks v-else-if="item === 'PageLinks'" :key="item" :value="pageLinks" :page="page" @click="changePageLink($event)" />
			<CurrentPageReport v-else-if="item === 'CurrentPageReport'" :key="item" :template="currentPageReportTemplate"
                :page="page" :pageCount="pageCount" :first="d_first" :rows="d_rows" :totalRecords="totalRecords" />
			<RowsPerPageDropdown v-else-if="item === 'RowsPerPageDropdown' && rowsPerPageOptions" :key="item" :rows="d_rows"
                :options="rowsPerPageOptions" @rows-change="onRowChange($event)" />
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
            return Math.ceil(this.totalRecords / this.d_rows) || 1;
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
}
</script>

<style lang="css">
.p-paginator {
	margin: 0;
	text-align: center;
	padding: .125em;
}

.p-paginator .p-paginator-top {
	border-bottom: 0 none;
}

.p-paginator .p-paginator-bottom {
	border-top:0 none;
}

.p-paginator .p-paginator-left-content {
	float: left;
}

.p-paginator .p-paginator-right-content {
	float: right;
}

.p-paginator .p-paginator-page,
.p-paginator .p-paginator-pages,
.p-paginator .p-paginator-next,
.p-paginator .p-paginator-last,
.p-paginator .p-paginator-first,
.p-paginator .p-paginator-prev,
.p-paginator .p-paginator-current {
	display: inline-block;
	width: 1.5em;
	height: 1.5em;
	line-height: 1.5em;
	zoom: 1;
	margin-left: .063em;
	margin-right: .063em;
	text-decoration: none;
	vertical-align: middle;
	text-align: center;
    position: relative;
    cursor: pointer;
}

.p-paginator .p-paginator-pages {
	width: auto;
	line-height: 1;
}

.p-paginator .p-paginator-icon {
	display: block;
	position: absolute;
	left: 50%;
	top: 50%;
	width: 1em;
	height: 1em;
	margin-top: -.5em;
	margin-left: -.5em;
}

.p-paginator .p-paginator-page,
.p-paginator .p-paginator-next,
.p-paginator .p-paginator-last,
.p-paginator .p-paginator-first,
.p-paginator .p-paginator-prev{
	cursor: pointer;
}

.p-paginator .p-paginator-current,
.p-paginator .p-paginator-rpp-options {
	margin-left: 1em;
	margin-right: 1em;
	background-image: none;
}

.p-paginator .p-paginator-jtp-select option,
.p-paginator .p-paginator-rpp-options option {
	background-image: none;
	border: 0 none;
	box-shadow: none;
	-moz-box-shadow: none;
	-webkit-box-shadow: none;
}

.p-paginator .p-disabled {
	outline: 0 none;
}

.p-paginator .p-dropdown {
	min-width: 4em;
	margin-left: .375em;
}

.p-fluid .p-paginator .p-dropdown {
	width: auto;
}

.p-paginator .p-paginator-current {
	width: auto;
	height: auto;
}
</style>