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
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { BadgePassThroughOptions } from 'primevue/badge';
import type { ButtonPassThroughOptions } from 'primevue/button';
import type { CheckboxPassThroughOptionType } from 'primevue/checkbox';
import type { DataTablePassThroughOptions } from 'primevue/datatable';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { RadioButtonPassThroughOptionType } from 'primevue/radiobutton';
import type { SelectPassThroughOptionType } from 'primevue/select';
import type { VirtualScrollerLoaderOptions } from 'primevue/virtualscroller';
import { VNode } from 'vue';

export declare type ColumnPassThroughOptionType = ColumnPassThroughAttributes | ((options: ColumnPassThroughMethodOptions) => ColumnPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ColumnPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ColumnProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines current options.
     */
    context: ColumnContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface ColumnSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: ColumnProps;
    /**
     * Defines parent instance.
     */
    parent: DataTablePassThroughOptions;
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
    column: ColumnNode;
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
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the header cell's DOM element.
     */
    headerCell?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the column resizer's DOM element.
     */
    columnResizer?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the column header content's DOM element.
     */
    columnHeaderContent?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the header title's DOM element.
     */
    columnTitle?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the sort's DOM element.
     */
    sort?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the sort icon's DOM element.
     */
    sortIcon?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the Badge component.
     */
    pcSortBadge?: BadgePassThroughOptions;
    /**
     * Used to pass attributes to the Checkbox component.
     */
    pcHeaderCheckbox?: CheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the column filter's DOM element.
     */
    filter?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the filter element container's DOM element.
     */
    filterElementContainer?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the column filter button's DOM element.
     */
    pcColumnFilterButton?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the filter menu icon's DOM element.
     */
    filterMenuIcon?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the column filter clear button's DOM element.
     */
    pcColumnFilterClearButton?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the filter clear icon's DOM element.
     */
    filterClearIcon?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the filter overlay's DOM element.
     */
    filterOverlay?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the filter constraint list's DOM element.
     */
    filterConstraintList?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the filter constraint's DOM element.
     */
    filterConstraint?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the filter constraint separator's DOM element.
     */
    filterConstraintSeparator?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the filter operator's DOM element.
     */
    filterOperator?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the Select component.
     * @see {@link SelectPassThroughOptionType}
     */
    pcFilterOperatorDropdown?: SelectPassThroughOptionType<ColumnSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the filter rule list' DOM element.
     */
    filterRuleList?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the filter rule's DOM element.
     */
    filterRule?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the Select component.
     * @see {@link SelectPassThroughOptionType}
     */
    pcFilterConstraintDropdown?: SelectPassThroughOptionType<ColumnSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the filter remove button container's DOM element.
     */
    filterRemove?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcFilterRemoveRuleButton?: ButtonPassThroughOptions<ColumnSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the filter add button container's DOM element.
     */
    filterAddButtonContainer?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcFilterAddRuleButton?: ButtonPassThroughOptions<ColumnSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the filter buttonbar's DOM element.
     */
    filterButtonbar?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcFilterClearButton?: ButtonPassThroughOptions<ColumnSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcFilterApplyButton?: ButtonPassThroughOptions<ColumnSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the row toggler button's DOM element.
     */
    rowToggleButton?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the row toggler icon's DOM element.
     */
    rowToggleIcon?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the body cell's DOM element.
     */
    bodyCell?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the reorderable row handle's DOM element.
     */
    reorderableRowHandle?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the radiobutton's DOM element.
     */
    pcRowRadiobutton?: RadioButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the checkbox's DOM element.
     */
    pcRowCheckbox?: CheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the row editor init button's DOM element.
     */
    pcRowEditorInit?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the row editor save button's DOM element.
     */
    pcRowEditorSave?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the row editor cancel button's DOM element.
     */
    pcRowEditorCancel?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the footer cell's DOM element.
     */
    footerCell?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the footer content DOM element.
     */
    columnFooter?: ColumnPassThroughOptionType;
    /**
     * Used to pass attributes to the body cell content's DOM element.
     */
    bodyCellContent?: ColumnPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ColumnPassThroughOptions}
     */
    pt?: PassThrough<ColumnPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
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
     * Custom body template for DataTable.
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
        column: ColumnNode;
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
         * Editor init callback function
         * @param {Event} event - Browser event
         */
        editorInitCallback: (event: Event) => void;
        /**
         * Row toggler callback unction
         * @param {Event} event - Browser event
         */
        rowTogglerCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom body template for TreeTable.
     * @param {Object} scope - body slot's params.
     */
    node(scope: {
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
        column: ColumnNode;
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
         * Editor init callback function
         * @param {Event} event - Browser event
         */
        editorInitCallback: (event: Event) => void;
        /**
         * Row toggler callback unction
         * @param {Event} event - Browser event
         */
        rowTogglerCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom header template.
     * @param {Object} scope - header slot's params.
     */
    header(scope: {
        /**
         * Column node.
         */
        column: ColumnNode;
    }): VNode[];
    /**
     * Custom footer template.
     * @param {Object} scope - footer slot's params.
     */
    footer(scope: {
        /**
         * Column node.
         */
        column: ColumnNode;
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
        column: ColumnNode;
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
         * @param {Event} event - Browser event
         */
        editorSaveCallback: (event: Event) => void;
        /**
         * Callback function
         * @param {Event} event - Browser event
         */
        editorCancelCallback: (event: Event) => void;
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
        filterCallback: () => void;
        /**
         * Callback function (closes the overlay)
         */
        applyFilter: () => void;
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
        filterCallback: () => void;
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
        filterCallback: () => void;
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
        filterCallback: () => void;
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
        filterCallback: () => void;
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
        column: ColumnNode;
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
     * @deprecated since v4.0. Use 'rowtoggleicon' slot instead.
     * Custom row toggler icon template.
     * @param {Object} scope - row toggler icon slot's params.
     */
    rowtogglericon(scope: {
        /**
         * Style class of the row toggler icon.
         */
        class: string;
        /**
         * Current row expanded state.
         */
        rowExpanded: boolean;
    }): VNode[];
    /**
     * Custom row toggler icon template.
     * @param {Object} scope - row toggler icon slot's params.
     */
    rowtoggleicon(scope: {
        /**
         * Style class of the row toggler icon.
         */
        class: string;
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
         * Style class of the sort icon.
         */
        class: string;
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
    /**
     * @deprecated since v4.0. Use 'nodetoggleicon' slot instead.
     * Custom node toggler icon template.
     */
    nodetogglericon(): VNode[];
    /**
     * Custom node toggler icon template.
     */
    nodetoggleicon(): VNode[];
}

export interface ColumnEmitsOptions {}

export declare type ColumnEmits = EmitFn<ColumnEmitsOptions>;

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
 *
 */
declare const Column: DefineComponent<ColumnProps, ColumnSlots, ColumnEmits>;

export type ColumnNode = { props: ColumnProps };

declare module 'vue' {
    export interface GlobalComponents {
        Column: GlobalComponentConstructor<ColumnProps, ColumnSlots, ColumnEmits>;
    }
}

export default Column;
