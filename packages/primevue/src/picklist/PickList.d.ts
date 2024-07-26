/**
 *
 * PickList is used to reorder items between different lists.
 *
 * [Live Demo](https://primevue.org/picklist)
 *
 * @module picklist
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ButtonPassThroughOptions } from 'primevue/button';
import type { ListboxPassThroughOptions } from 'primevue/listbox';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type PickListPassThroughOptionType = PickListPassThroughAttributes | ((options: PickListPassThroughMethodOptions) => PickListPassThroughAttributes | string) | string | null | undefined;

export declare type PickListPassThroughTransitionType = TransitionProps | ((options: PickListPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface PickListPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: PickListProps;
    /**
     * Defines current inline state.
     */
    state: PickListState;
    /**
     * Defines current options.
     */
    context: PickListContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface PickListSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: PickListProps;
    /**
     * Defines current inline state.
     */
    state: PickListState;
}

/**
 * Custom reorder event.
 * @see {@link PickListEmitsOptions.reorder}
 */
export interface PickListReorderEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Ordered list
     */
    value: any[];
    /**
     * Direction of the change; 'up', 'down', 'bottom', 'top'
     */
    direction: string;
    /**
     * Index of the list that is ordered, 0 represents the source and 1 represents the target list.
     */
    listIndex: number;
}

/**
 * Custom selection change event.
 * @see {@link PickListEmitsOptions['selection-change']}
 */
export interface PickListSelectionChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Selected item
     */
    value: any[];
}

/**
 * Custom move-to-target event.
 * @see {@link PickListEmitsOptions['move-to-target']}
 */
export interface PickListMoveToTargetEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Moved items
     */
    items: any[];
}

/**
 * Custom move-all-to-target event.
 * @see {@link PickListEmitsOptions['move-all-to-target']}
 * @extends PickListMoveToTargetEvent
 */
export interface PickListMoveAllToTargetEvent extends PickListMoveToTargetEvent {}

/**
 * Custom move-to-source event.
 * @see {@link PickListEmitsOptions['move-all-to-target']}
 * @extends PickListMoveToTargetEvent
 */
export interface PickListMoveToSourceEvent extends PickListMoveToTargetEvent {}

/**
 * Custom move-all-to-source event.
 * @see {@link PickListEmitsOptions['move-all-to-target']}
 * @extends PickListMoveToTargetEvent
 */
export interface PickListMoveAllToSourceEvent extends PickListMoveToTargetEvent {}

/**
 * Custom passthrough(pt) options.
 * @see {@link PickListProps.pt}
 */
export interface PickListPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PickListPassThroughOptionType;
    /**
     * Used to pass attributes to the source controls' DOM element.
     */
    sourceControls?: PickListPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     */
    pcSourceMoveUpButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    pcSourceMoveTopButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    pcSourceMoveDownButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    pcSourceMoveBottomButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Listbox component.
     */
    pcList?: ListboxPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the source list containerr's DOM element.
     */
    sourceListContainer?: PickListPassThroughOptionType;
    /**
     * Used to pass attributes to the source list's DOM element.
     */
    sourceList?: PickListPassThroughOptionType;
    /**
     * Used to pass attributes to the transfer controls' DOM element.
     */
    transferControls?: PickListPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     */
    pcMoveToTargetButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    pcMoveAllToTargetButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    pcMoveToSourceButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    pcMoveAllToSourceButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the target list container's DOM element.
     */
    targetListContainer?: PickListPassThroughOptionType;
    /**
     * Used to pass attributes to the target list's DOM element.
     */
    targetList?: PickListPassThroughOptionType;
    /**
     * Used to pass attributes to the target item's DOM element.
     */
    item?: PickListPassThroughOptionType;
    /**
     * Used to pass attributes to the target controls' DOM element.
     */
    targetControls?: PickListPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     */
    pcTargetMoveUpButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    pcTargetMoveTopButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    pcTargetMoveDownButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    pcTargetMoveBottomButton?: ButtonPassThroughOptions<PickListSharedPassThroughMethodOptions>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: PickListPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface PickListPassThroughAttributes {
    [key: string]: any;
}

export interface PickListFocusedState {
    /**
     * Current source list's focused state as a boolean.
     * @defaultValue false
     */
    sourceList: boolean;
    /**
     * Current target list's focused state as a boolean.
     * @defaultValue false
     */
    targetList: boolean;
}

/**
 * Defines current inline state in PickList component.
 */
export interface PickListState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current id state as a string.
     */
    d_selection: any[];
    /**
     * Current view change state as a boolean.
     * @defaultValue false
     */
    viewChanged: boolean;
}

/**
 * Defines current options in PickList component.
 */
export interface PickListContext {
    /**
     * Current active state of the item as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current focus state of the item as a boolean.
     * @defaultValue false
     */
    focused: boolean;
}

/**
 * Defines valid properties in PickList component.
 */
export interface PickListProps {
    /**
     * Value of the component as a multidimensional array.
     */
    modelValue?: any[][] | undefined;
    /**
     * Selected items in the list as a multidimensional array.
     */
    selection?: any[][] | undefined;
    /**
     * Name of the field that uniquely identifies the a record in the data.
     */
    dataKey?: string | undefined;
    /**
     * Defines whether metaKey is requred or not for the selection.
     * When true metaKey needs to be pressed to select or unselect an item and
     * when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @defaultValue false
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Whether to focus on the first visible or selected element.
     * @defaultValue true
     */
    autoOptionFocus?: boolean | undefined;
    /**
     * When enabled, the focus is placed on the hovered option.
     * @defaultValue true
     */
    focusOnHover?: boolean | undefined;
    /**
     * Inline style of the the list element.
     */
    listStyle?: any | undefined;
    /**
     * Whether the list optimizes layout based on screen size.
     * @defaultValue true
     */
    responsive?: boolean | undefined;
    /**
     * The breakpoint to define the maximum width boundary when responsiveness is enabled.
     * @defaultValue 960px
     */
    breakpoint?: string | undefined;
    /**
     * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
     * @defaultValue 14rem
     */
    scrollHeight?: string | undefined;
    /**
     * Whether to displays rows with alternating colors.
     * @defaultValue false
     */
    striped?: boolean | undefined;
    /**
     * Whether to show buttons of source list.
     * @defaultValue true
     */
    showSourceControls?: boolean | undefined;
    /**
     * Whether to show buttons of target list.
     * @defaultValue true
     */
    showTargetControls?: boolean | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the move up button inside the component.
     * @type {ButtonProps}
     * @defaultValue { severity: 'secondary' }
     */
    buttonProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the move up button inside the component.
     */
    moveUpButtonProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the move top button inside the component.
     */
    moveTopButtonProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the move down button inside the component.
     */
    moveDownButtonProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the move bottom button inside the component.
     */
    moveBottomButtonProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the move to target button inside the component.
     */
    moveToTargetProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the move all to target button inside the component.
     */
    moveAllToTargetProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the move to source button inside the component.
     */
    moveToSourceProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the move all to source button inside the component.
     */
    moveAllToSourceProps?: object | undefined;
    /**
     * Index of the list element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {PickListPassThroughOptions}
     */
    pt?: PassThrough<PickListPassThroughOptions>;
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
 * Defines valid slots in PickList component.
 */
export interface PickListSlots {
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * @deprecated since v4.0. Use option slot instead.
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Item of the component
         */
        item: any;
        /**
         * Selection state
         */
        selected: boolean;
        /**
         * Index of the item.
         */
        index: number;
    }): VNode[];
    /**
     * Custom option template.
     * @param {Object} scope - option slot's params.
     */
    option(scope: {
        /**
         * Option of the component
         */
        option: any;
        /**
         * Selection state
         */
        selected: boolean;
        /**
         * Index of the option.
         */
        index: number;
    }): VNode[];
    /**
     * Custom source header template.
     */
    sourceheader(): VNode[];
    /**
     * Custom target header template.
     */
    targetheader(): VNode[];
    /**
     * Custom source controls start template.
     */
    sourcecontrolsstart(): VNode[];
    /**
     * Custom source controls end template.
     */
    sourcecontrolsend(): VNode[];
    /**
     * Custom move controls start template.
     */
    movecontrolsstart(): VNode[];
    /**
     * Custom move controls end template.
     */
    movecontrolsend(): VNode[];
    /**
     * Custom target controls start template.
     */
    targetcontrolsstart(): VNode[];
    /**
     * Custom target controls end template.
     */
    targetcontrolsend(): VNode[];
    /**
     * Custom move up icon template.
     */
    moveupicon(): VNode[];
    /**
     * Custom move top icon template.
     */
    movetopicon(): VNode[];
    /**
     * Custom move down icon template.
     */
    movedownicon(): VNode[];
    /**
     * Custom move bottom icon template.
     */
    movebottomicon(): VNode[];
    /**
     * Custom move to target icon template.
     * @param {Object} scope - movetotargeticon slot's params.
     */
    movetotargeticon(scope: {
        /**
         * Whether view change.
         */
        viewChanged: boolean;
    }): VNode[];
    /**
     * Custom move all to target icon template.
     * @param {Object} scope - movealltotargeticon slot's params.
     */
    movealltotargeticon(scope: {
        /**
         * Whether view change.
         */
        viewChanged: boolean;
    }): VNode[];
    /**
     * Custom move to source icon template.
     * @param {Object} scope - movetosourceicon slot's params.
     */
    movetosourceicon(scope: {
        /**
         * Whether view change.
         */
        viewChanged: boolean;
    }): VNode[];
    /**
     * Custom move all to source icon template.
     * @param {Object} scope - movealltosourceicon slot's params.
     */
    movealltosourceicon(scope: {
        /**
         * Whether view change.
         */
        viewChanged: boolean;
    }): VNode[];
}

/**
 * Defines valid emits in PickList component.
 */
export interface PickListEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any[][]): void;
    /**
     * Emitted when the selection changes.
     * @param {*} value - New value.
     */
    'update:selection'(value: any[][]): void;
    /**
     * Callback to invoke when the list is reordered.
     * @param {PickListReorderEvent} event - Custom reorder event.
     */
    reorder(event: PickListReorderEvent): void;
    /**
     * Callback to invoke when one or more items are moved to the other list.
     * @param {PickListSelectionChangeEvent} event - Custom selection change event.
     */
    'selection-change'(event: PickListSelectionChangeEvent): void;
    /**
     * Callback to invoke when one or more items are moved to the target list.
     * @param {PickListMoveToTargetEvent} event - Custom move to target event.
     */
    'move-to-target'(event: PickListMoveToTargetEvent): void;
    /**
     * Callback to invoke when all items are moved to the target list.
     * @param {PickListMoveAllToTargetEvent} event - Custom move all to target event.
     */
    'move-all-to-target'(event: PickListMoveAllToTargetEvent): void;
    /**
     * Callback to invoke when one or more items are moved to the source list.
     * @param {PickListMoveToSourceEvent} event - Custom move to source event.
     */
    'move-to-source'(event: PickListMoveToSourceEvent): void;
    /**
     * Callback to invoke when all items are moved to the source list.
     * @param {PickListMoveAllToSourceEvent} event - Custom move all to source event.
     */
    'move-all-to-source'(event: PickListMoveAllToSourceEvent): void;
}

export declare type PickListEmits = EmitFn<PickListEmitsOptions>;

/**
 * **PrimeVue - PickList**
 *
 * _PickList is used to reorder items between different lists._
 *
 * [Live Demo](https://www.primevue.org/picklist/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const PickList: DefineComponent<PickListProps, PickListSlots, PickListEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        PickList: GlobalComponentConstructor<PickListProps, PickListSlots, PickListEmits>;
    }
}

export default PickList;
