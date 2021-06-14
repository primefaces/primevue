import { VNode } from 'vue';

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

declare class Column {
    $props: ColumnProps;
    $slots: {
        body: VNode[];
        header: VNode[];
        footer: VNode[];
        editor: VNode[];
        filter: VNode[];
        filterheader: VNode[];
        filterfooter: VNode[];
        filterclear: VNode[];
        filterapply: VNode[];
    }
}

export default Column;
