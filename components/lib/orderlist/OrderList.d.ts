/**
 *
 * OrderList is used to managed the order of a collection.
 *
 * [Live Demo](https://primevue.org/orderlist)
 *
 * @module orderlist
 *
 */
import { ButtonHTMLAttributes, HTMLAttributes, TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptions } from '../button';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type OrderListPassThroughOptionType = OrderListPassThroughAttributes | ((options: OrderListPassThroughMethodOptions) => OrderListPassThroughAttributes | string) | string | null | undefined;

export declare type OrderListPassThroughTransitionType = TransitionProps | ((options: OrderListPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface OrderListPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: OrderListProps;
    /**
     * Defines current inline state.
     */
    state: OrderListState;
    /**
     * Defines current options.
     */
    context: OrderListContext;
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
export interface OrderListSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: OrderListProps;
    /**
     * Defines current inline state.
     */
    state: OrderListState;
}

/**
 * Custom reorder event
 * @see {@link OrderListEmits.reorder}
 */
export interface OrderListReorderEvent {
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
}

/**
 * Custom selection change event
 * @see {@link OrderListEmits['selection-change']}
 */
export interface OrderListSelectionChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Ordered list
     */
    value: any[];
}

/**
 * Custom passthrough(pt) options.
 * @see {@link OrderListProps.pt}
 */
export interface OrderListPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OrderListPassThroughOptionType;
    /**
     * Used to pass attributes to the controls' DOM element.
     */
    controls?: OrderListPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     */
    moveUpButton?: ButtonPassThroughOptions<OrderListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    moveTopButton?: ButtonPassThroughOptions<OrderListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    moveDownButton?: ButtonPassThroughOptions<OrderListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     */
    moveBottomButton?: ButtonPassThroughOptions<OrderListSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the container's DOM element.
     */
    container?: OrderListPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: OrderListPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: OrderListPassThroughOptionType;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: OrderListPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: OrderListPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface OrderListPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in OrderList component.
 */
export interface OrderListState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current id state as a string.
     */
    d_selection: any[];
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current focused item index as a number.
     * @defaultvalue -1
     */
    focusedOptionIndex: number;
}

/**
 * Defines current options in OrderList component.
 */
export interface OrderListContext {
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
 * Defines valid properties in OrderList component.
 */
export interface OrderListProps {
    /**
     * Value of the component.
     */
    modelValue?: any[];
    /**
     * Name of the field that uniquely identifies the a record in the data.
     */
    dataKey?: string | undefined;
    /**
     * Selected items in the list.
     */
    selection?: any[];
    /**
     * Defines whether metaKey is requred or not for the selection.
     * When true metaKey needs to be pressed to select or unselect an item and
     * when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @defaultValue false
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Whether to focus on the first visible or selected element.
     * @defaultValue false
     */
    autoOptionFocus?: boolean | undefined;
    /**
     * Inline style of the the list element.
     */
    listStyle?: any;
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
     * Whether to displays rows with alternating colors.
     */
    stripedRows?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     *  Used to pass all properties of the HTMLAttributes to the list element.
     */
    listProps?: HTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the move up button inside the component.
     */
    moveUpButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the move top button inside the component.
     */
    moveTopButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the move down button inside the component.
     */
    moveDownButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the move bottom button inside the component.
     */
    moveBottomButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Defines a string value that labels an interactive list element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying list element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {OrderListPassThroughOptions}
     */
    pt?: PassThrough<OrderListPassThroughOptions>;
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
 * Defines valid slots in OrderList component.
 */
export interface OrderListSlots {
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Item of the component
         */
        item: any;
        /**
         * Index of the item.
         */
        index: number;
    }): VNode[];
    /**
     * Custom controls start template.
     */
    controlsstart(): VNode[];
    /**
     * Custom controls end template.
     */
    controlsend(): VNode[];
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
}

/**
 * Defines valid slots in OrderList component.
 */
export interface OrderListEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any[]): void;
    /**
     * Emitted when the selection changes.
     * @param {*} value - New value.
     */
    'update:selection'(value: any[]): void;
    /**
     * Callback to invoke when the list is reordered.
     * @param {OrderListReorderEvent} event - Custom reorder event.
     */
    reorder(event: OrderListReorderEvent): void;
    /**
     * Callback to invoke when selection changes.
     * @param {OrderListSelectionChangeEvent} event - Custom selection change event.
     */
    'selection-change'(event: OrderListSelectionChangeEvent): void;
}

/**
 * **PrimeVue - OrderList**
 *
 * _OrderList is used to sort a collection._
 *
 * [Live Demo](https://www.primevue.org/orderlist/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class OrderList extends ClassComponent<OrderListProps, OrderListSlots, OrderListEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        OrderList: GlobalComponentConstructor<OrderList>;
    }
}

export default OrderList;
