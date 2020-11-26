import Vue, { VNode } from 'vue';

export interface PageState {
    first: number,
    rows: number,
    page: number,
    pageCount: number
}

declare class Paginator extends Vue {
    totalRecords?: number;
    rows?: number;
    first?: number;
    pageLinkSize?: number;
    rowsPerPageOptions?: any[];
    template?: string;
    currentPageReportTemplate?: any;
    alwaysShow?: boolean;
    $emit(eventName: 'page', event: PageState): this;
    $slots: {
        left: VNode[];
        right: VNode[];
    }
}

export default Paginator;