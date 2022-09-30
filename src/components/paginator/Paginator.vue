<template>
    <div v-if="alwaysShow ? true : pageLinks && pageLinks.length > 1" class="p-paginator p-component">
        <div v-if="$slots.start" class="p-paginator-left-content">
            <slot name="start" :state="currentState"></slot>
        </div>
        <template v-for="item of templateItems" :key="item">
            <slot v-if="item.value === 'FirstPageLink'" name="FirstPageLink" :options="item">
                <FirstPageLink @click="changePageToFirst($event)" :disabled="isFirstPage || empty" />
            </slot>
            <slot v-else-if="item.value === 'PrevPageLink'" name="PrevPageLink" :options="item">
                <PrevPageLink @click="changePageToPrev($event)" :disabled="isFirstPage || empty" />
            </slot>
            <slot v-else-if="item.value === 'NextPageLink'" name="NextPageLink" :options="item">
                <NextPageLink @click="changePageToNext($event)" :disabled="isLastPage || empty" />
            </slot>
            <slot v-else-if="item.value === 'LastPageLink'" name="LastPageLink" :options="item">
                <LastPageLink @click="changePageToLast($event)" :disabled="isLastPage || empty" />
            </slot>
            <slot v-else-if="item.value === 'PageLinks'" name="PageLinks" :options="item">
                <PageLinks :value="pageLinks" :page="page" @click="changePageLink($event)" />
            </slot>
            <slot v-else-if="item.value === 'CurrentPageReport'" name="CurrentPageReport" :options="item">
                <CurrentPageReport :template="currentPageReportTemplate" :currentPage="currentPage" :page="page" :pageCount="pageCount" :first="d_first" :rows="d_rows" :totalRecords="totalRecords" />
            </slot>
            <slot v-else-if="item.value === 'RowsPerPageDropdown' && rowsPerPageOptions" name="RowsPerPageDropdown" :options="item">
                <RowsPerPageDropdown :rows="d_rows" :options="rowsPerPageOptions" @rows-change="onRowChange($event)" :disabled="empty" />
            </slot>
            <slot v-else-if="item.value === 'JumpToPageDropdown'" name="JumpToPageDropdown" :options="item">
                <JumpToPageDropdown :page="page" :pageCount="pageCount" @page-change="changePage($event)" :disabled="empty" />
            </slot>
            <slot v-else-if="item.value === 'JumpToPageInput'" name="JumpToPageInput" :options="item">
                <JumpToPageInput :page="currentPage" @page-change="changePage($event)" :disabled="empty" />
            </slot>
        </template>
        <div v-if="$slots.end" class="p-paginator-right-content">
            <slot name="end" :state="currentState"></slot>
        </div>
    </div>
</template>

<script>
import CurrrentPageReport from './CurrentPageReport.vue';
import FirstPageLink from './FirstPageLink.vue';
import JumpToPageDropdown from './JumpToPageDropdown.vue';
import JumpToPageInput from './JumpToPageInput.vue';
import LastPageLink from './LastPageLink.vue';
import NextPageLink from './NextPageLink.vue';
import PageLinks from './PageLinks.vue';
import PrevPageLink from './PrevPageLink.vue';
import RowsPerPageDropdown from './RowsPerPageDropdown.vue';

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
        };
    },
    watch: {
        first(newValue) {
            this.d_first = newValue;
        },
        rows(newValue) {
            this.d_rows = newValue;
        },
        totalRecords(newValue) {
            if (this.page > 0 && newValue && this.d_first >= newValue) {
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
            if (!this.isFirstPage) {
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
            this.changePage(this.page + 1);
            event.preventDefault();
        },
        changePageToLast(event) {
            if (!this.isLastPage) {
                this.changePage(this.pageCount - 1);
            }

            event.preventDefault();
        },
        onRowChange(value) {
            this.d_rows = value;
            this.changePage(this.page);
        },
        setTemplateItems(name) {
            let item = {
                value: name,
                links: this.pageLinks,
                page: this.page,
                pageCount: this.pageCount,
                pageLinks: this.pageLinks,
                currentPage: this.currentPage,
                first: this.d_first + 1,
                last: this.d_first + this.d_rows,
                rows: this.d_rows,
                totalRecords: this.totalRecords,
                template: this.currentPageReportTemplate
            };

            switch (name) {
                case 'FirstPageLink':
                    item.onClick = (event) => this.changePageToFirst(event);
                    item.disabled = this.isFirstPage || this.empty;
                    break;
                case 'PrevPageLink':
                    item.onClick = (event) => this.changePageToPrev(event);
                    item.disabled = this.isFirstPage || this.empty;
                    break;
                case 'NextPageLink':
                    item.onClick = (event) => this.changePageToNext(event);
                    item.disabled = this.isLastPage || this.empty;
                    break;
                case 'LastPageLink':
                    item.onClick = (event) => this.changePageToLast(event);
                    item.disabled = this.isLastPage || this.empty;
                    break;
                case 'PageLinks':
                    item.onClick = (event) => this.changePageLink(event);
                    break;
                case 'RowsPerPageDropdown':
                    item.onChange = (event) => this.onRowChange(event.value);
                    break;
                case 'CurrentPageReport':
                    item.onChange = (event) => this.changePage(event.value || event - 1);
                    break;
                case 'JumpToPageDropdown':
                    item.onClick = (event) => this.changePage(event.value - 1);
                    break;
                case 'JumpToPageInput':
                    item.onClick = (event) => this.changePage(event.value - 1);
                    break;
            }

            return item;
        }
    },
    computed: {
        templateItems() {
            let keys = [];

            this.template.split(' ').map((value) => {
                keys.push(this.setTemplateItems(value));
            });

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
            let start = Math.max(0, Math.ceil(this.page - visiblePages / 2));
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

            for (var i = start; i <= end; i++) {
                pageLinks.push(i + 1);
            }

            return pageLinks;
        },
        currentState() {
            return {
                page: this.page,
                first: this.d_first,
                rows: this.d_rows
            };
        },
        empty() {
            return this.pageCount === 0;
        },
        currentPage() {
            return this.pageCount > 0 ? this.page + 1 : 0;
        }
    },
    components: {
        CurrentPageReport: CurrrentPageReport,
        FirstPageLink: FirstPageLink,
        LastPageLink: LastPageLink,
        NextPageLink: NextPageLink,
        PageLinks: PageLinks,
        PrevPageLink: PrevPageLink,
        RowsPerPageDropdown: RowsPerPageDropdown,
        JumpToPageDropdown: JumpToPageDropdown,
        JumpToPageInput: JumpToPageInput
    }
};
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
