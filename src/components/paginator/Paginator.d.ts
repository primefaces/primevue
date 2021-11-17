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

interface PaginatorSlotInterface {
    currentState: {
        page: number;
        first: number;
        rows: number;
    }
}

declare class Paginator {
    $props: PaginatorProps;
    $emit(eventName: 'update:first', value: number): this;
    $emit(eventName: 'update:rows', value: number): this;
    $emit(eventName: 'page', event: PageState): this;
    $slots: {
        left: PaginatorSlotInterface;
        right: PaginatorSlotInterface;
    }
}

export default Paginator;
