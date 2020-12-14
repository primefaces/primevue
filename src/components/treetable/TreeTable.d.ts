import Vue, {VNode} from 'vue';

declare class TreeTable extends Vue {
    value?: any;
    expandedKeys?: any;
    selectionKeys?: any;
    selectionMode?: string;
    metaKeySelection?: string;
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
    lazy?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    rowHover?: boolean;
    autoLayout?: boolean;
    sortField?: string | ((item: any) => any);
    sortOrder?: number;
    defaultSortOrder?: number;
    multiSortMeta?: any[];
    sortMode?: string;
    removableSort?: string;
    filters?: {
        [s: string]: any;
    };
    filterMode?: string;
    filterLocale?: string;
    resizableColumns?: boolean;
    columnResizeMode?: string;
    indentation?: number;
    $emit(eventName: 'page', event: Event): this;
    $emit(eventName: 'sort', event: Event): this;
    $emit(eventName: 'filter', event: Event): this;
    $emit(eventName: 'node-select', node: any): this;
    $emit(eventName: 'node-unselect', node: any): this;
    $emit(eventName: 'node-expand', node: any): this;
    $emit(eventName: 'node-collapse', node: any): this;
    $emit(eventName: 'column-resize-end', event: Event): this;
    $slots: {
        header: VNode[];
        paginatorLeft: VNode[];
        paginatorRight: VNode[];
        empty: VNode[];
        footer: VNode[];
    }
}

export default TreeTable;