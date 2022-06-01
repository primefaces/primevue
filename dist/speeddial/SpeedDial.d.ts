import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

type SpeedDialDirectionType = 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right' | undefined;

type SpeedDialType = 'linear' | 'circle' | 'semi-circle' | 'quarter-circle' | undefined;

type SpeedDialTooltipPositionType = 'bottom' | 'top' | 'left' | 'right' | undefined;

type SpeedDialTooltipEventType = 'hover' | 'focus' | undefined;

export interface SpeedDialTooltipOptions {
    /**
     * Event to show the tooltip, valid values are hover and focus.
     * @see SpeedDialTooltipEventType
     */
    event: string;
    /**
     * Position of element.
     * @see SpeedDialTooltipPositionType
     * Default value is 'bottom'.
     */
    position: string;
    /**
     * Optional options.
     */
    [key: string]: string;
}

export interface SpeedDialProps {
    /**
     * MenuModel instance to define the action items.
     */
    model?: MenuItem[] | undefined;
    /**
     * Specifies the visibility of the overlay.
     */
    visible?: boolean | undefined;
    /**
     * Specifies the opening direction of actions.
     * @see SpeedDialDirectionType
     * Default value is 'up'.
     */
    direction?: SpeedDialDirectionType;
    /**
     * Transition delay step for each action item.
     * Default value is 30.
     */
    transitionDelay?: number | undefined;
    /**
     * Specifies the opening type of actions.
     * @see SpeedDialType
     * Default value is 'linear'.
     */
    type?: SpeedDialType;
    /**
     * Radius for *circle types.
     * Default value is 0.
     */
    radius?: number | undefined;
    /**
     * Whether to show a mask element behind the speeddial.
     */
    mask?: boolean | undefined;
    /**
     * Whether the component is disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Whether the actions close when clicked outside.
     * Default value is true.
     */
    hideOnClickOutside?: boolean | undefined;
    /**
     * Style class of the button element.
     */
    buttonClass?: any;
    /**
     * Inline style of the mask element.
     */
    maskStyle?: any;
    /**
     * Style class of the mask element.
     */
    maskClass?: string | undefined;
    /**
     * Show icon of the button element.
     * Default value is 'pi pi-plus'.
     */
    showIcon?: string | undefined;
    /**
     * Hide icon of the button element.
     */
    hideIcon?: string | undefined;
    /**
     * Defined to rotate showIcon when hideIcon is not present.
     * Default value is true.
     */
    rotateAnimation?: boolean | undefined;
    /**
     * Style class of the element.
     */
    class?: any;
    /**
     * Inline style of the element.
     */
    style?: any;
    /**
     * Whether to display the tooltip on items. The modifiers of Tooltip can be used like an object in it. Valid keys are 'event' and 'position'.
     * @see SpeedDialTooltipOptions
     */
    tooltipOptions?: SpeedDialTooltipOptions;
}

export interface SpeedDialSlots {
    /**
     * Custom content for each item.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
    }) => VNode[];
    /**
     * Custom button template.
     * @param {Object} scope - button slot's params.
     */
    button: (scope: {
        /**
         * Toggle metadata
         */
        toggle: () => void;
    }) => VNode[];
}

export declare type SpeedDialEmits = {
    /**
     * Fired when the button element clicked.
     * @param {Event} event - Browser event.
     */
    'click': (event: Event) => void;
    /**
     * Fired when the actions are visible.
     */
    'show': () => void;
    /**
     * Fired when the actions are hidden.
     */
    'hide': () => void;
}

declare class SpeedDial extends ClassComponent<SpeedDialProps, SpeedDialSlots, SpeedDialEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SpeedDial: GlobalComponentConstructor<SpeedDial>
    }
}

/**
 *
 * When pressed, a floating action button can display multiple primary actions that can be performed on a page.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [SpeedDial](https://www.primefaces.org/primevue/showcase/#/speeddial)
 *
 */
export default SpeedDial;
