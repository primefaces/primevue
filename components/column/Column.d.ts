import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { VirtualScrollerLoaderOptions } from '../virtualscroller';

type ColumnFieldType = string | ((item: any) => string) | undefined;

type ColumnSelectionModeType = 'single' | 'multiple' | undefined;

type ColumnAlignFrozenType = 'left' | 'right' | undefined;

export interface ColumnFilterModelType {
    /**
     * Value of filterModel.
     */
    value: any;
    /**
     * Match mode of filterModel.
     */
    matchMode: string;
}

export interface ColumnFilterMatchModeOptions {
    [key: string]: string;
}

export interface ColumnLoadingOptions extends VirtualScrollerLoaderOptions {
    /**
     * Cell index
     */
    cellIndex: number;
    /**
     * Whether the cell is first.
     */
    cellFirst: boolean;
    /**
     * Whether the cell is last.
     */
    cellLast: boolean;
    /**
     * Whether the cell is even.
     */
    cellEven: boolean;
    /**
     * Whether the item is odd.
     */
    cellOdd: boolean;
    /**
     * Column instance
     */
    column: Column;
    /**
     * Column field
     */
    field: string;
}

export interface ColumnProps {
    /**
     * Identifier of a column if field property is not defined.
     */
    columnKey?: string | undefined;
    /**
     * Property represented by the column.
     * @see ColumnFieldType
     */
    field?: ColumnFieldType;
    /**
     * Property name to use in sorting, defaults to field.
     * @see ColumnFieldType
     */
    sortField?: ColumnFieldType;
    /**
     * Property name to use in filtering, defaults to field.
     * @see ColumnFieldType
     */
    filterField?: ColumnFieldType;
    /**
     * Type of data. It's value is related to PrimeVue.filterMatchModeOptions config.
     */
    dataType?: string | undefined;
    /**
     * Defines if a column is sortable.
     */
    sortable?: boolean | undefined;
    /**
     * Header content of the column.
     */
    header?: string | undefined;
    /**
     * Footer content of the column.
     */
    footer?: string | undefined;
    /**
     * Inline style of header, body and footer cells.
     */
    style?: any;
    /**
     * Style class of header, body and footer cells.
     */
    class?: any;
    /**
     * Inline style of the column header.
     */
    headerStyle?: any;
    /**
     * Style class of the column header.
     */
    headerClass?: any;
    /**
     * Inline style of the column body.
     */
    bodyStyle?: any;
    /**
     * Style class of the column body.
     */
    bodyClass?: any;
    /**
     * Inline style of the column footer.
     */
    footerStyle?: any;
    /**
     * Style class of the column footer.
     */
    footerClass?: any;
    /**
     * Whether to display the filter overlay.
     * Default value is true.
     */
    showFilterMenu?: boolean | undefined;
    /**
     * When enabled, match all and match any operator selector is displayed.
     * Default value is true.
     */
    showFilterOperator?: boolean | undefined;
    /**
     * Displays a button to clear the column filtering.
     * Default value is true.
     */
    showClearButton?: boolean | undefined;
    /**
     * Displays a button to apply the column filtering.
     * Default value is true.
     */
    showApplyButton?: boolean | undefined;
    /**
     * Whether to show the match modes selector.
     * Default value is true.
     */
    showFilterMatchModes?: boolean | undefined;
    /**
     * When enabled, a button is displayed to add more rules.
     * Default value is true.
     */
    showAddButton?: boolean | undefined;
    /**
     * An array of label-value pairs to override the global match mode options.
     */
    filterMatchModeOptions?: ColumnFilterMatchModeOptions[];
    /**
     * Maximum number of constraints for a column filter.
     * Default value is 2.
     */
    maxConstraints?: number | undefined;
    /**
     * Whether to exclude from global filtering or not.
     */
    excludeGlobalFilter?: boolean | undefined;
    /**
     * Inline style of the column filter header in row filter display.
     */
    filterHeaderStyle?: any;
    /**
     * Style class of the column filter header in row filter display.
     */
    filterHeaderClass?: any;
    /**
     * Inline style of the column filter overlay.
     */
    filterMenuStyle?: any;
    /**
     * Style class of the column filter overlay.
     */
    filterMenuClass?: any;
    /**
     * Defines column based selection mode, options are 'single' and 'multiple'.
     * @see ColumnSelectionModeType
     */
    selectionMode?: ColumnSelectionModeType;
    /**
     * Displays an icon to toggle row expansion.
     */
    expander?: boolean | undefined;
    /**
     * Number of columns to span for grouping.
     */
    colspan?: number | undefined;
    /**
     * Number of rows to span for grouping.
     */
    rowspan?: number | undefined;
    /**
     * Whether this column displays an icon to reorder the rows.
     */
    rowReorder?: boolean | undefined;
    /**
     * Icon of the drag handle to reorder rows.
     * Default value is 'pi pi-bars'.
     */
    rowReorderIcon?: string | undefined;
    /**
     * Defines if the column itself can be reordered with dragging.
     */
    reorderableColumn?: boolean | undefined;
    /**
     * When enabled, column displays row editor controls.
     */
    rowEditor?: boolean | undefined;
    /**
     * Whether the column is fixed in horizontal scrolling.
     */
    frozen?: boolean | undefined;
    /**
     * Position of a frozen column, valid values are left and right.
     * @see ColumnAlignFrozenType
     * Default value is 'left'.
     */
    alignFrozen?: ColumnAlignFrozenType;
    /**
     * Whether the column is included in data export.
     */
    exportable?: boolean | undefined;
    /**
     * Custom export header of the column to be exported as CSV.
     */
    exportHeader?: string | undefined;
    /**
     * Custom export footer of the column to be exported as CSV.
     */
    exportFooter?: string | undefined;
    /**
     * Defines the filtering algorithm to use when searching the options.
     */
    filterMatchMode?: string | undefined;
    /**
     * Whether the column is rendered.
     */
    hidden?: boolean | undefined;
}

export interface ColumnSlots {
    /**
     * Custom body template.
     * @param {Object} scope - body slot's params.
     */
    body: (scope: {
        /**
         * Row data.
         */
        data: any;
        /**
         * Row node data.
         */
        node: any;
        /**
         * Column node.
         */
        column: Column;
        /**
         * Column field.
         */
        field: string;
        /**
         * Row index.
         */
        index: number;
        /**
         * Whether the row is frozen.
         */
        frozenRow: boolean;
        /**
         * Callback function
         */
        editorInitCallback: () => void;
    }) => VNode[];
    /**
     * Custom header template.
     * @param {Object} scope - header slot's params.
     */
    header: (scope: {
        /**
         * Column node.
         */
        column: Column;
    }) => VNode[];
    /**
     * Custom footer template.
     * @param {Object} scope - footer slot's params.
     */
    footer: (scope: {
        /**
         * Column node.
         */
        column: Column;
    }) => VNode[];
    /**
     * Custom editor template.
     * @param {Object} scope - editor slot's params.
     */
    editor: (scope: {
        /**
         * Row data.
         */
        data: any;
        /**
         * Column node.
         */
        column: Column;
        /**
         * Column field.
         */
        field: string;
        /**
         * Row index.
         */
        index: number;
        /**
         * Whether the row is frozen.
         */
        frozenRow: boolean;
        /**
         * Callback function
         */
        editorSaveCallback: () => void;
        /**
         * Callback function
         */
        editorCancelCallback: () => void;
    }) => VNode[];
    /**
     * Custom filter template.
     * @param {Object} scope - filter slot's params.
     */
    filter: (scope: {
        /**
         * Column field.
         */
        field: string;
        /**
         * Filter metadata
         * @see ColumnFilterModelType
         */
        filterModel: ColumnFilterModelType;
        /**
         * Callback function
         */
        filterCallback: () => void;
    }) => VNode[];
    /**
     * Custom filter header template.
     * @param {Object} scope - filter header slot's params.
     */
    filterheader: (scope: {
        /**
         * Column field.
         */
        field: string;
        /**
         * Filter metadata
         * @see ColumnFilterModelType
         */
        filterModel: ColumnFilterModelType;
        /**
         * Callback function
         */
        filterCallback: () => void;
    }) => VNode[];
    /**
     * Custom filter footer template.
     * @param {Object} scope - filter footer slot's params.
     */
    filterfooter: (scope: {
        /**
         * Column field.
         */
        field: string;
        /**
         * Filter metadata
         * @see ColumnFilterModelType
         */
        filterModel: ColumnFilterModelType;
        /**
         * Callback function
         */
        filterCallback: () => void;
    }) => VNode[];
    /**
     * Custom filter clear template.
     * @param {Object} scope - filter clear slot's params.
     */
    filterclear: (scope: {
        /**
         * Column field.
         */
        field: string;
        /**
         * Filter metadata
         * @see ColumnFilterModelType
         */
        filterModel: ColumnFilterModelType;
        /**
         * Callback function
         */
        filterCallback: () => void;
    }) => VNode[];
    /**
     * Custom filter apply template.
     * @param {Object} scope - filter apply slot's params.
     */
    filterapply: (scope: {
        /**
         * Column field.
         */
        field: string;
        /**
         * Filter metadata
         * @see ColumnFilterModelType
         */
        filterModel: ColumnFilterModelType;
        /**
         * Callback function
         */
        filterCallback: () => void;
    }) => VNode[];
    /**
     * Custom loading template.
     * @param {Object} scope - loading slot's params.
     */
    loading: (scope: {
        /**
         * Row data.
         */
        data: any;
        /**
         * Column node.
         */
        column: Column;
        /**
         * Column field.
         */
        field: string;
        /**
         * Row index.
         */
        index: number;
        /**
         * Whether the row is frozen.
         */
        frozenRow: boolean;
        /**
         * Loading options.
         * @see ColumnLoadingOptions
         */
        loadingOptions: ColumnLoadingOptions;
    }) => VNode[];
}

export declare type ColumnEmits = {
}

declare class Column extends ClassComponent<ColumnProps, ColumnSlots, ColumnEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Column: GlobalComponentConstructor<Column>
    }
}

/**
 *
 * Column is a helper component for DataTable and TreeTable.
 *
 * Demos:
 *
 * - [DataTable](https://www.primefaces.org/primevue/showcase/#/datatable)
 * - [TreeTable](https://www.primefaces.org/primevue/showcase/#/treetable)
 *
 */
export default Column;
