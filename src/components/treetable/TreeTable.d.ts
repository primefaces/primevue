import { VNode } from 'vue';

interface TreeTableProps {
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
    sortField?: string | Function;
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
    showGridlines?: boolean;
    scrollable?: boolean;
    scrollHeight?: string;
    scrollDirection?: string;
    responsiveLayout?: string;
}

declare class TreeTable {
    $props: TreeTableProps;
    $emit(eventName: 'update:expandedKeys', value: any): this;
    $emit(eventName: 'update:selectionKeys', value: any): this;
    $emit(eventName: 'update:first', value: number): this;
    $emit(eventName: 'update:rows', value: number): this;
    $emit(eventName: 'update:sortField', value: string | Function): this;
    $emit(eventName: 'update:sortOrder', value: number): this;
    $emit(eventName: 'update:multiSortMeta', value: any[]): this;
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
