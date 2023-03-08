/**
 *
 * OrderList is used to managed the order of a collection.
 *
 * [Live Demo](https://primevue.org/orderlist)
 *
 * @module orderlist
 *
 */
import { ButtonHTMLAttributes, HTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
     * @defaultValue true
     */
    metaKeySelection?: boolean | undefined;
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
     *  Uses to pass all properties of the HTMLAttributes to the list element.
     */
    listProps?: HTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the move up button inside the component.
     */
    moveUpButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the move top button inside the component.
     */
    moveTopButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the move down button inside the component.
     */
    moveDownButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the move bottom button inside the component.
     */
    moveBottomButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Defines a string value that labels an interactive list element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying list element.
     */
    'aria-labelledby'?: string | undefined;
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
