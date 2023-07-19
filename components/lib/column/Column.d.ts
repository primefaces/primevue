/**
 *
 * Column component defines various options to specify corresponding features.
 * It is a helper component for DataTable and TreeTable.
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 *
 * @module column
 *
 */

import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptionType } from '../button';
import { DataTablePassThroughOptions } from '../datatable';
import { DropdownPassThroughOptionType } from '../dropdown';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { VirtualScrollerLoaderOptions } from '../virtualscroller';

export declare type ColumnPassThroughOptionType = ColumnPassThroughAttributes | ((options: ColumnPassThroughMethodOptions) => ColumnPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ColumnPassThroughMethodOptions {
    instance: any;
    props: ColumnProps;
    parent: DataTablePassThroughOptions;
    context: ColumnContext;
}

/**
 * Filter model metadata.
 */
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

/**
 * Filter match modes for specific columns.
 */
export interface ColumnFilterMatchModeOptions {
    [key: string]: string;
}

/**
 * Custom column loading metadata.
 */
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

/**
 * Custom passthrough(pt) options.
 * @see {@link ColumnProps.pt}
 */
export interface ColumnPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the header cell's DOM element.
     */
    headerCell?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the column resizer's DOM element.
     */
    columnResizer?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the header content's DOM element.
     */
    headerContent?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the header title's DOM element.
     */
    headerTitle?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the sort's DOM element.
     */
    sort?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the sort badge's DOM element.
     */
    sortBadge?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the checkbox wrapper's DOM element.
     */
    headerCheckboxWrapper?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the header checkbox's DOM element.
     */
    headerCheckbox?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the header checkbox icon's DOM element.
     */
    headerCheckboxIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the column filter's DOM element.
     */
    columnFilter?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter input's DOM element.
     */
    filterInput?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter menu button's DOM element.
     */
    filterMenuButton?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter menu icon's DOM element.
     */
    filterMenuIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the header filter clear button's DOM element.
     */
    headerFilterClearButton?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter clear icon's DOM element.
     */
    filterClearIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter overlay's DOM element.
     */
    filterOverlay?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter row items' DOM element.
     */
    filterRowItems?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter row item's DOM element.
     */
    filterRowItem?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter separator's DOM element.
     */
    filterSeparator?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter operator's DOM element.
     */
    filterOperator?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the Dropdown component.
     * @see {@link DropdownPassThroughOptionType}
     */
    filterOperatorDropdown?: DropdownPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter constraints' DOM element.
     */
    filterConstraints?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter constraint's DOM element.
     */
    filterConstraint?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the Dropdown component.
     * @see {@link DropdownPassThroughOptionType}
     */
    filterMatchModeDropdown?: DropdownPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter remove button container's DOM element.
     */
    filterRemove?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptionType}
     */
    filterRemoveButton?: ButtonPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter add rule's DOM element.
     */
    filterAddRule?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptionType}
     */
    filterAddRuleButton?: ButtonPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter buttonbar's DOM element.
     */
    filterButtonbar?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptionType}
     */
    filterClearButton?: ButtonPassThroughOptionType;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptionType}
     */
    filterApplyButton?: ButtonPassThroughOptionType;
    /**
     * Uses to pass attributes to the body cell's DOM element.
     */
    bodyCell?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the rowgroup toggler's DOM element.
     */
    rowGroupToggler?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the rowgroup toggler icon's DOM element.
     */
    rowGroupTogglerIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the column title's DOM element.
     */
    columnTitle?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the radiobutton wrapper's DOM element.
     */
    radiobuttonWrapper?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the radiobutton's DOM element.
     */
    radiobutton?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the radiobutton icon's DOM element.
     */
    radiobuttonIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the checkbox wrapper's DOM element.
     */
    checkboxWrapper?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the checkbox's DOM element.
     */
    checkbox?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the checkbox icon's DOM element.
     */
    checkboxIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the rowtoggler's DOM element.
     */
    rowToggler?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the rowtoggler icon's DOM element.
     */
    rowTogglerIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the row editor init button's DOM element.
     */
    rowEditorInitButton?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the row editor init icon's DOM element.
     */
    rowEditorInitIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the row editor save button's DOM element.
     */
    rowEditorSaveButton?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the row editor save icon's DOM element.
     */
    rowEditorSaveIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the row editor cancel button's DOM element.
     */
    rowEditorCancelButton?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the row editor cancel icon's DOM element.
     */
    rowEditorCancelIcon?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the footer cell's DOM element.
     */
    footerCell?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the body cell content's DOM element.
     */
    bodyCellContent?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input wrapper's DOM element.
     */
    hiddenHeaderInputWrapper?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input's DOM element.
     */
    hiddenHeaderInput?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input wrapper's DOM element.
     */
    hiddenInputWrapper?: ColumnPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: ColumnPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ColumnPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Column component.
 */
export interface ColumnState {
    d_editing: boolean;
    /**
     * Current style of the body cell.
     */
    styleObject: object;
    /**
     * Current filter overlay visible as a boolean.
     */
    overlayVisible: boolean;
    /**
     * Current filter match mode.
     */
    defaultMatchMode: string;
    /**
     * Current filter operator.
     */
    defaultOperator: string;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current style of the rowgroup header.
     */
    rowGroupHeaderStyleObject: object;
}

/**
 * Defines valid properties in Column component.
 */
export interface ColumnProps {
    /**
     * Identifier of a column if field property is not defined.
     */
    columnKey?: string | undefined;
    /**
     * Property represented by the column.
     */
    field?: string | ((item: any) => string) | undefined;
    /**
     * Property name to use in sorting, defaults to field.
     */
    sortField?: string | ((item: any) => string) | undefined;
    /**
     * Property name to use in filtering, defaults to field.
     */
    filterField?: string | ((item: any) => string) | undefined;
    /**
     * Type of data. It's value is related to PrimeVue.filterMatchModeOptions config.
     */
    dataType?: string | undefined;
    /**
     * Defines if a column is sortable.
     * @defaultValue false
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
     * @defaultValue true
     */
    showFilterMenu?: boolean | undefined;
    /**
     * When enabled, match all and match any operator selector is displayed.
     * @defaultValue true
     */
    showFilterOperator?: boolean | undefined;
    /**
     * Displays a button to clear the column filtering.
     * @defaultValue true
     */
    showClearButton?: boolean | undefined;
    /**
     * Displays a button to apply the column filtering.
     * @defaultValue true
     */
    showApplyButton?: boolean | undefined;
    /**
     * Whether to show the match modes selector.
     * @defaultValue true
     */
    showFilterMatchModes?: boolean | undefined;
    /**
     * When enabled, a button is displayed to add more rules.
     * @defaultValue true
     */
    showAddButton?: boolean | undefined;
    /**
     * An array of label-value pairs to override the global match mode options.
     */
    filterMatchModeOptions?: ColumnFilterMatchModeOptions[];
    /**
     * Maximum number of constraints for a column filter.
     * @defaultValue 2
     */
    maxConstraints?: number | undefined;
    /**
     * Whether to exclude from global filtering or not.
     * @defaultValue false
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
     * Defines column based selection mode.
     */
    selectionMode?: 'single' | 'multiple' | undefined;
    /**
     * Displays an icon to toggle row expansion.
     * @defaultValue false
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
     * @defaultValue false
     */
    rowReorder?: boolean | undefined;
    /**
     * Icon of the drag handle to reorder rows.
     * @deprecated since v3.27.0. Use 'rowreordericon' slot.
     */
    rowReorderIcon?: string | undefined;
    /**
     * Defines if the column itself can be reordered with dragging.
     * @defaultValue false
     */
    reorderableColumn?: boolean | undefined;
    /**
     * When enabled, column displays row editor controls.
     * @defaultValue false
     */
    rowEditor?: boolean | undefined;
    /**
     * Whether the column is fixed in horizontal scrolling.
     * @defaultValue false
     */
    frozen?: boolean | undefined;
    /**
     * Position of a frozen column, valid values are left and right.
     * @defaultValue left
     */
    alignFrozen?: 'left' | 'right' | undefined;
    /**
     * Whether the column is included in data export.
     * @defaultValue false
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
     * @defaultValue false
     */
    hidden?: boolean | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ColumnPassThroughOptions}
     */
    pt?: ColumnPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines current options in Column component.
 */
export interface ColumnContext {
    /**
     * Current index of the column.
     */
    index: number;
    /**
     * Current checked state of row as a boolean.
     * @defaultValue false
     */
    checked: boolean;
    /**
     * Current focused state of row as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current disabled state of row as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
    /**
     * Current sort state of the column as a boolean.
     * @defaultValue false
     */
    sorted: boolean;
    /**
     * Current frozen state of the column as a boolean.
     * @defaultValue false
     */
    frozen: boolean;
    /**
     * Current resizable state of the column as a boolean.
     * @defaultValue false
     */
    resizable: boolean;
    /**
     * Current size state of the table.
     */
    size: string;
    /**
     * Current gridlines state of the table as a boolean.
     * @defaultValue false
     */
    showGridlines: boolean;
    /**
     * Current highlighted state of the filter row item as a boolean.
     * @defaultValue false
     */
    highlighted: boolean;
    /**
     * Current hidden state of the filter clear button of a column as a boolean.
     * @defaultValue false
     */
    hidden: boolean;
    /**
     * Current visible state of the filter menu of a column as a boolean.
     * @defaultValue false
     */
    overlayVisible: boolean;
    /**
     * Current active state of the filter menu of a column as a boolean.
     * @defaultValue false
     */
    active: boolean;
}

/**
 * Defines valid slots in Column component.
 */
export interface ColumnSlots {
    /**
     * Custom body template.
     * @param {Object} scope - body slot's params.
     */
    body(scope: {
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
        editorInitCallback(): void;
    }): VNode[];
    /**
     * Custom header template.
     * @param {Object} scope - header slot's params.
     */
    header(scope: {
        /**
         * Column node.
         */
        column: Column;
    }): VNode[];
    /**
     * Custom footer template.
     * @param {Object} scope - footer slot's params.
     */
    footer(scope: {
        /**
         * Column node.
         */
        column: Column;
    }): VNode[];
    /**
     * Custom editor template.
     * @param {Object} scope - editor slot's params.
     */
    editor(scope: {
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
        editorSaveCallback(): void;
        /**
         * Callback function
         */
        editorCancelCallback(): void;
    }): VNode[];
    /**
     * Custom filter template.
     * @param {Object} scope - filter slot's params.
     */
    filter(scope: {
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
        filterCallback(): void;
    }): VNode[];
    /**
     * Custom filter header template.
     * @param {Object} scope - filter header slot's params.
     */
    filterheader(scope: {
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
        filterCallback(): void;
    }): VNode[];
    /**
     * Custom filter footer template.
     * @param {Object} scope - filter footer slot's params.
     */
    filterfooter(scope: {
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
        filterCallback(): void;
    }): VNode[];
    /**
     * Custom filter clear template.
     * @param {Object} scope - filter clear slot's params.
     */
    filterclear(scope: {
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
        filterCallback(): void;
    }): VNode[];
    /**
     * Custom filter apply template.
     * @param {Object} scope - filter apply slot's params.
     */
    filterapply(scope: {
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
        filterCallback(): void;
    }): VNode[];
    /**
     * Custom loading template.
     * @param {Object} scope - loading slot's params.
     */
    loading(scope: {
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
    }): VNode[];
    /**
     * Custom row toggler icon template.
     * @param {Object} scope - row toggler icon slot's params.
     */
    rowtogglericon(scope: {
        /**
         * Current row expanded state.
         */
        rowExpanded: boolean;
    }): VNode[];
    /**
     * Custom row checkbox icon template.
     * @param {Object} scope - header row icon slot's params.
     */
    rowcheckboxicon(scope: {
        /**
         * Current check state.
         */
        checked: boolean;
    }): VNode[];
    /**
     * Custom row editor init icon template.
     */
    roweditoriniticon(): VNode[];
    /**
     * Custom row editor save icon template.
     */
    roweditorsaveicon(): VNode[];
    /**
     * Custom row editor cancel icon template.
     */
    roweditorcancelicon(): VNode[];
    /**
     * Custom filter icon template.
     */
    filtericon(): VNode[];
    /**
     * Custom filter clear icon template.
     */
    filterclearicon(): VNode[];
    /**
     * Custom filter remove icon template.
     */
    filterremoveicon(): VNode[];
    /**
     * Custom filter add icon template.
     */
    filteraddicon(): VNode[];
    /**
     * Custom sort icon template.
     * @param {Object} scope - sort icon slot's params.
     */
    sorticon(scope: {
        /**
         * Current sort state.
         */
        sorted: boolean;
        /**
         * Current sort order state.
         */
        sortOrder: number;
    }): VNode[];
    /**
     * Custom header checkbox icon template.
     * @param {Object} scope - header checkbox icon slot's params.
     */
    headercheckboxicon(scope: {
        /**
         * Current check state.
         */
        checked: boolean;
    }): VNode[];
    /**
     * Custom row reorder icon template.
     */
    rowreordericon(): VNode[];
}

export interface ColumnEmits {}

/**
 * **PrimeVue - Column**
 *
 * _Column is a helper component for Column and TreeTable._
 *
 * [Live Demo](https://www.primevue.org/Column/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Column extends ClassComponent<ColumnProps, ColumnSlots, ColumnEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Column: GlobalComponentConstructor<Column>;
    }
}

export default Column;
