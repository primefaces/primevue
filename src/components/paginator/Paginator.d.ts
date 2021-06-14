import { VNode } from 'vue';

export interface PageState {
    first: number,
    rows: number,
    page: number,
    pageCount: number
}

interface PaginatorProps {
    totalRecords?: number;
    rows?: number;
    first?: number;
    pageLinkSize?: number;
    rowsPerPageOptions?: any[];
    template?: string;
    currentPageReportTemplate?: any;
    alwaysShow?: boolean;
}

declare class Paginator {
    $props: PaginatorProps;
    $emit(eventName: 'update:first', value: number): this;
    $emit(eventName: 'update:rows', value: number): this;
    $emit(eventName: 'page', event: PageState): this;
    $slots: {
        left: VNode[];
        right: VNode[];
    }
}

export default Paginator;
