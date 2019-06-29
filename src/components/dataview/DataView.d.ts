import Vue, { VNode } from 'vue';

export declare class DataView extends Vue {
    value?: any[];
    layout?: string;
    rows?: number;
    first?: number;
    totalRecords?: number;
    paginator?: boolean;
    paginatorPosition?: string;
    alwaysShowPaginator?: boolean;
    paginatorTemplate?: string;
    pageLinkSize?: number;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    sortField?: string;
    sortOrder?: number;
    lazy?: boolean;
    $emit(eventName: 'page', event: Event): this;
    $slots: {
        header: VNode[];
        paginatorLeft: VNode[];
        paginatorRight: VNode[];
        list: VNode[];
        grid: VNode[];
        footer: VNode[];
    }
}