import { VNode } from 'vue';

interface DataViewProps {
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
    sortField?: string | ((item: any) => any);
    sortOrder?: number;
    lazy?: boolean;
}

declare class DataView {
    $props: DataViewProps;
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

export default DataView;
