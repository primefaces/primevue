import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
     * Default value is true.
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Inline style of the the list element.
     */
    listStyle?: any;
    /**
     * Whether the list optimizes layout based on screen size.
     * Default value is true.
     */
    responsive?: boolean | undefined;
    /**
     * The breakpoint to define the maximum width boundary when responsiveness is enabled.
     * Default value is '960px'.
     */
    breakpoint?: string | undefined;
    /**
     * Whether to displays rows with alternating colors.
     */
    stripedRows?: boolean | undefined;
}

export interface OrderListSlots {
    /**
     * Custom header template.
     */
    header: () => VNode[];
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Item of the component
         */
        item: any;
        /**
         * Index of the item.
         */
        index: number;
    }) => VNode[];
    /**
     * Custom controls start template.
     */
    controlsstart: () => VNode[];
    /**
     * Custom controls end template.
     */
    controlsend: () => VNode[];
}

export declare type OrderListEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any[]) => void;
    /**
     * Emitted when the selection changes.
     * @param {*} value - New value.
     */
    'update:selection': (value: any[]) => void;
    /**
     * Callback to invoke when the list is reordered.
     * @param {OrderListReorderEvent} event - Custom reorder event.
     */
    'reorder': (event: OrderListReorderEvent) => void;
    /**
     * Callback to invoke when selection changes.
     * @param {OrderListSelectionChangeEvent} event - Custom selection change event.
     */
    'selection-change': (event: OrderListSelectionChangeEvent) => void;
}

declare class OrderList extends ClassComponent<OrderListProps, OrderListSlots, OrderListEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        OrderList: GlobalComponentConstructor<OrderList>
    }
}

/**
 *
 * OrderList is used to managed the order of a collection.
 *
 * Demos:
 *
 * - [OrderList](https://www.primefaces.org/primevue/showcase/#/orderlist)
 *
 */
export default OrderList;
