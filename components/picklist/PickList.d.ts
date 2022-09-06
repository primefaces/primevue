import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
 * @extends PickListMoveToTargetEvent
 */
export interface PickListMoveAllToTargetEvent extends PickListMoveToTargetEvent { }

/**
 * @extends PickListMoveToTargetEvent
 */
export interface PickListMoveToSourceEvent extends PickListMoveToTargetEvent { }

/**
 * @extends PickListMoveToTargetEvent
 */
export interface PickListMoveAllToSourceEvent extends PickListMoveToTargetEvent { }

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
     * Default value is true.
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Inline style of the the list element.
     */
    listStyle?: any | undefined;
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
    /**
     * Whether to show buttons of source list.
     */
    showSourceControls?: boolean | undefined;
    /**
     * Whether to show buttons of target list.
     */
    showTargetControls?: boolean | undefined;
}

export interface PickListSlots {
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
         * Index of the item
         */
        index: number;
    }) => VNode[];
    /**
     * Custom source header template.
     */
    sourceheader: () => VNode[];
    /**
     * Custom target header template.
     */
    targetheader: () => VNode[];
    /**
     * Custom source controls start template.
     */
    sourcecontrolsstart: () => VNode[];
     /**
     * Custom source controls end template.
     */
    sourcecontrolsend: () => VNode[];
    /**
     * Custom move controls start template.
     */
    movecontrolsstart: () => VNode[];
    /**
     * Custom move controls end template.
     */
    movecontrolsend: () => VNode[];
    /**
     * Custom target controls start template.
     */
    targetcontrolsstart: () => VNode[];
    /**
     * Custom target controls end template.
     */
    targetcontrolsend: () => VNode[];
}

export declare type PickListEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any[][]) => void;
    /**
     * Emitted when the selection changes.
     * @param {*} value - New value.
     */
    'update:selection': (value: any[][]) => void;
    /**
     * Callback to invoke when the list is reordered.
     * @param {PickListReorderEvent} event - Custom reorder event.
     */
    'reorder': (event: PickListReorderEvent) => void;
    /**
     * Callback to invoke when one or more items are moved to the other list.
     * @param {PickListSelectionChangeEvent} event - Custom selection change event.
     */
    'selection-change': (event: PickListSelectionChangeEvent) => void;
    /**
     * Callback to invoke when one or more items are moved to the target list.
     * @param {PickListMoveToTargetEvent} event - Custom move to target event.
     */
    'move-to-target': (event: PickListMoveToTargetEvent) => void;
    /**
     * Callback to invoke when all items are moved to the target list.
     * @param {PickListMoveAllToTargetEvent} event - Custom move all to target event.
     */
    'move-all-to-target': (event: PickListMoveAllToTargetEvent) => void;
    /**
     * Callback to invoke when one or more items are moved to the source list.
     * @param {PickListMoveToSourceEvent} event - Custom move to source event.
     */
    'move-to-source': (event: PickListMoveToSourceEvent) => void;
    /**
     * Callback to invoke when all items are moved to the source list.
     * @param {PickListMoveAllToSourceEvent} event - Custom move all to source event.
     */
    'move-all-to-source': (event: PickListMoveAllToSourceEvent) => void;
}

declare class PickList extends ClassComponent<PickListProps, PickListSlots, PickListEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        PickList: GlobalComponentConstructor<PickList>
    }
}

/**
 *
 * PickList is used to reorder items between different lists.
 *
 * Demos:
 *
 * - [PickList](https://www.primefaces.org/primevue/showcase/#/picklist)
 *
 */
export default PickList;
