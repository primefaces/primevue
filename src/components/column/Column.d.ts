import Vue from 'vue';

export declare class Column extends Vue {
    columnKey?: any;
    field?: string;
    sortField?: string;
    sortable?: boolean;
    header?: any;
    footer?: any;
    headerStyle?: object;
    headerClass?: string;
    bodyStyle?: object;
    bodyClass?: string;
    footerStyle?: object;
    footerClass?: string;
    filterMatchMode?: string;
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
}