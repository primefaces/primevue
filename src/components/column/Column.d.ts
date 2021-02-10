interface ColumnProps {
    columnKey?: any;
    field?: string;
    sortField?: string | ((item: any) => any);
    filterField?: string;
    sortable?: boolean;
    header?: any;
    footer?: any;
    headerStyle?: object;
    headerClass?: string;
    bodyStyle?: object;
    bodyClass?: string;
    footerStyle?: object;
    footerClass?: string;
    filterHeaderStyle?: object;
    filterHeaderClass?: string;
    filterMenuStyle?: object;
    filterMenuClass?: string;
    filterFunction?: Function;
    excludeGlobalFilter?: boolean;
    selectionMode?: string;
    expander?: boolean;
    colspan?: number;
    rowspan?: number;
    rowReorder?: boolean;
    rowReorderIcon?: string;
    reorderableColumn?: boolean;
    rowEditor?: boolean;
    frozen?: boolean;
    exportable?: boolean;
}

declare class Column {
    $props: ColumnProps;
}

export default Column;
