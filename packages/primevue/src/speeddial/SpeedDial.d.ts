/**
 *
 * When pressed, a floating action button can display multiple primary actions that can be performed on a page.
 *
 * [Live Demo](https://www.primevue.org/speeddial/)
 *
 * @module speeddial
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ButtonPassThroughOptions, ButtonProps } from 'primevue/button';
import type { MenuItem } from 'primevue/menuitem';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type SpeedDialPassThroughOptionType = SpeedDialPassThroughAttributes | ((options: SpeedDialPassThroughMethodOptions) => SpeedDialPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SpeedDialPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: SpeedDialProps;
    /**
     * Defines current inline state.
     */
    state: SpeedDialState;
    /**
     * Defines current options.
     */
    context: SpeedDialContext;
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
export interface SpeedDialSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: SpeedDialProps;
    /**
     * Defines current inline state.
     */
    state: SpeedDialState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SpeedDialProps.pt}
 */
export interface SpeedDialPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SpeedDialPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     *  @see {@link ButtonPassThroughOptions}
     */
    pcButton?: ButtonPassThroughOptions<SpeedDialSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: SpeedDialPassThroughOptionType;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: SpeedDialPassThroughOptionType;
    /**
     * Used to pass attributes to the action's Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcAction?: ButtonPassThroughOptions<SpeedDialSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the action icon's DOM element.
     */
    actionIcon?: SpeedDialPassThroughOptionType;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: SpeedDialPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SpeedDialPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in SpeedDial component.
 */
export interface SpeedDialState {
    /**
     * List of items' id.
     */
    id: string;
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
    /**
     * Current click state of component as a boolean.
     * @defaultValue false
     */
    isItemClicked: boolean;
    /**
     * Current focus state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current focused option index as a number.
     * @defaultValue -1
     */
    focusedOptionIndex: number;
}

/**
 * Defines current options in SpeedDial component.
 */
export interface SpeedDialContext {
    /**
     * Current active state of menuitem as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current hidden state of menuitem as a boolean.
     * @defaultValue false
     */
    hidden: boolean;
}

/**
 * Defines tooltip options.
 * @see {@link SpeedDialProps.tooltipOptions}
 */
export interface SpeedDialTooltipOptions {
    /**
     * Event to show the tooltip, valid values are hover and focus.
     */
    event: 'hover' | 'focus' | undefined;
    /**
     * Position of element.
     * @defaultValue bottom
     */
    position: 'bottom' | 'top' | 'left' | 'right' | undefined;
    /**
     * Optional options.
     */
    [key: string]: any;
}

/**
 * Defines valid properties in SpeedDial component.
 */
export interface SpeedDialProps {
    /**
     * MenuModel instance to define the action items.
     */
    model?: MenuItem[] | undefined;
    /**
     * Specifies the visibility of the overlay.
     * @defaultValue false
     */
    visible?: boolean | undefined;
    /**
     * Specifies the opening direction of actions.
     * @defaultValue up
     */
    direction?: 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right' | undefined;
    /**
     * Transition delay step for each action item.
     * @defaultValue 30
     */
    transitionDelay?: number | undefined;
    /**
     * Specifies the opening type of actions.
     * @defaultValue linear
     */
    type?: 'linear' | 'circle' | 'semi-circle' | 'quarter-circle' | undefined;
    /**
     * Radius for *circle types.
     * @defaultValue 0
     */
    radius?: number | undefined;
    /**
     * Whether to show a mask element behind the speeddial.
     * @defaultValue false
     */
    mask?: boolean | undefined;
    /**
     * Whether the component is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Whether the actions close when clicked outside.
     * @defaultValue true
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
     */
    showIcon?: string | undefined;
    /**
     * Hide icon of the button element.
     */
    hideIcon?: string | undefined;
    /**
     * Defined to rotate showIcon when hideIcon is not present.
     * @defaultValue true
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
     * @type {SpeedDialTooltipOptions}
     */
    tooltipOptions?: SpeedDialTooltipOptions;
    /**
     * Used to pass all properties of the ButtonProps to the button component.
     * @type {ButtonProps}
     * @defaultValue { rounded: true  }
     */
    buttonProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the item component.
     * @type {ButtonProps}
     * @defaultValue { severity: 'secondary', rounded: true, size: 'small' }
     */
    actionButtonProps?: object | undefined;
    /**
     * Defines a string value that labels an interactive list element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying list element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {SpeedDialPassThroughOptions}
     */
    pt?: PassThrough<SpeedDialPassThroughOptions>;
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
 * Defines valid slots in SpeedDial component.
 */
export interface SpeedDialSlots {
    /**
     * Custom content for each item.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Menuitem instance
         * @type {MenuItem}
         */
        item: MenuItem;
        /**
         * Item click function
         * @param {Event} event - Browser event.
         */
        onClick: (event: Event) => void;
        /**
         * Button click function
         * @param {Event} event - Browser event.
         */
        toggleCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom button template.
     * @param {Object} scope - button slot's params.
     */
    button(scope: {
        /**
         * Visible state of the item
         */
        visible: boolean;
        /**
         * Button click function
         * @param {Event} event - Browser event.
         */
        toggleCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Visible state of the item
         */
        visible: boolean;
    }): VNode[];
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    itemicon(scope: {
        /**
         * Menuitem instance
         * @type {MenuItem}
         */
        item: MenuItem;
        /**
         * Style class of the icon template
         */
        class: any;
    }): VNode[];
}

/**
 * Defines valid emits in SpeedDial component.
 */
export interface SpeedDialEmitsOptions {
    /**
     * Fired when the button element clicked.
     * @param {Event} event - Browser event.
     */
    click(event: Event): void;
    /**
     * Fired when the actions are visible.
     */
    show(): void;
    /**
     * Fired when the actions are hidden.
     */
    hide(): void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
}

export declare type SpeedDialEmits = EmitFn<SpeedDialEmitsOptions>;

/**
 * **PrimeVue - SpeedDial**
 *
 * _When pressed, a floating action button can display multiple primary actions that can be performed on a page._
 *
 * [Live Demo](https://www.primevue.org/speeddial/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const SpeedDial: DefineComponent<SpeedDialProps, SpeedDialSlots, SpeedDialEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        SpeedDial: GlobalComponentConstructor<SpeedDialProps, SpeedDialSlots, SpeedDialEmits>;
    }
}

export default SpeedDial;
