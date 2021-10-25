interface ColumnProps {
    columnKey?: any;
    field?: string | ((item: any) => any);
    sortField?: string | ((item: any) => any);
    filterField?: string | ((item: any) => any);
    dataType?: string;
    sortable?: boolean;
    header?: any;
    footer?: any;
    style?: object;
    class?: string;
    headerStyle?: object;
    headerClass?: string;
    bodyStyle?: object;
    bodyClass?: string;
    footerStyle?: object;
    footerClass?: string;
    showFilterMenu?: boolean;
    showFilterOperator?: boolean;
    showClearButton?: boolean;
    showApplyButton?: boolean;
    showFilterMatchModes?: boolean;
    showAddButton?: boolean;
    filterMatchModeOptions?: any[];
    maxConstraints?: number;
    excludeGlobalFilter?: boolean;
    filterHeaderStyle?: object;
    filterHeaderClass?: string;
    filterMenuStyle?: object;
    filterMenuClass?: string;
    selectionMode?: string;
    expander?: boolean;
    colspan?: number;
    rowspan?: number;
    rowReorder?: boolean;
    rowReorderIcon?: string;
    reorderableColumn?: boolean;
    rowEditor?: boolean;
    frozen?: boolean;
    alignFrozen?: string;
    exportable?: boolean;
    filterMatchMode?: string;
    hidden?: boolean;
}

interface ColumnBodySlotInterface {
    data: any;
    column: any;
    field: string;
    index: number;
    frozenRow: boolean;
}

interface ColumnHeaderSlotInterface {
    column: any;
}

interface ColumnFooterSlotInterface {
    column: any;
}

interface ColumnEditorSlotInterface {
    data: any;
    column: any;
    field: string;
    index: number;
    frozenRow: boolean;
}

interface ColumnFilterSlotInterface {
    field: string;
    filterModel: {
        value: any;
        matchMode: string;
    };
    filterCallback: any;
}

declare class Column {
    $props: ColumnProps;
    $slots: {
        body: ColumnBodySlotInterface;
        header: ColumnHeaderSlotInterface;
        footer: ColumnFooterSlotInterface;
        editor: ColumnEditorSlotInterface;
        filter: ColumnFilterSlotInterface;
        filterheader: ColumnFilterSlotInterface;
        filterfooter: ColumnFilterSlotInterface;
        filterclear: ColumnFilterSlotInterface;
        filterapply: ColumnFilterSlotInterface;
    }
}

export default Column;
