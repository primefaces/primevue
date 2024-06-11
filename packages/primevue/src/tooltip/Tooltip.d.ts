/**
 *
 * Tooltip directive provides advisory information for a component.
 *
 * [Live Demo](https://primevue.org/tooltip)
 *
 * @module tooltip
 *
 */
import type { DesignToken, PassThrough } from '@primevue/core';
import type { DirectiveHooks } from '@primevue/core/basedirective';
import type { PassThroughOptions } from 'primevue/passthrough';
import { DirectiveBinding, ObjectDirective } from 'vue';

export declare type TooltipDirectivePassThroughOptionType = TooltipDirectivePassThroughAttributes | ((options: TooltipPassThroughMethodOptions) => TooltipDirectivePassThroughAttributes) | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TooltipPassThroughMethodOptions {
    context: TooltipContext;
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
 * Defines options of Tooltip.
 */
export interface TooltipOptions {
    /**
     * Text of the tooltip.
     */
    value?: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it adds a custom id to the tooltip.
     */
    id?: string | undefined;
    /**
     * When present, it adds a custom class to the tooltip.
     */
    class?: string | undefined;
    /**
     * By default the tooltip contents are not rendered as text. Set to false to support html tags in the content.
     * @defaultValue true
     */
    escape?: boolean | undefined;
    /**
     * Automatically adjusts the element position when there is not enough space on the selected position.
     * @defaultValue true
     */
    fitContent?: boolean | undefined;
    /**
     * When present, it adds a custom delay to the tooltip's display.
     * @defaultValue 0
     */
    showDelay?: number | undefined;
    /**
     * When present, it adds a custom delay to the tooltip's hiding.
     * @defaultValue 0
     */
    hideDelay?: number | undefined;
    /**
     * Whether to hide tooltip when hovering over tooltip content.
     * @defaultValue true
     */
    autoHide?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {TooltipDirectivePassThroughOptions}
     */
    pt?: PassThrough<TooltipDirectivePassThroughOptions>;
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
 * Custom passthrough(pt) options.
 * @see {@link TooltipOptions.pt}
 */
export interface TooltipDirectivePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TooltipDirectivePassThroughOptionType;
    /**
     * Used to pass attributes to the text's DOM element.
     */
    text?: TooltipDirectivePassThroughOptionType;
    /**
     * Used to pass attributes to the arrow's DOM element.
     */
    arrow?: TooltipDirectivePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TooltipDirectivePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current options in Tooltip directive.
 */
export interface TooltipContext {
    /**
     * Current top position state as a boolean.
     */
    top: boolean;
    /**
     * Current right position state as a boolean.
     */
    right: boolean;
    /**
     * Current bottom position state as a boolean.
     */
    bottom: boolean;
    /**
     * Current left position state as a boolean.
     */
    left: boolean;
}

/**
 * Defines modifiers of Tooltip.
 */
export interface TooltipDirectiveModifiers {
    /**
     * Right position for Tooltip.
     *  @defaultValue true
     */
    right?: boolean | undefined;
    /**
     * Left position for Tooltip.
     *  @defaultValue false
     */
    left?: boolean | undefined;
    /**
     * Top position for Tooltip.
     *  @defaultValue false
     */
    top?: boolean | undefined;
    /**
     * Bottom position for Tooltip.
     *  @defaultValue false
     */
    bottom?: boolean | undefined;
    /**
     * Focus event for Tooltip.
     *  @defaultValue true
     */
    focus?: boolean | undefined;
}

/**
 * Binding of Tooltip directive.
 */
export interface TooltipDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the tooltip.
     */
    value?: string | TooltipOptions | undefined;
    /**
     * Modifiers of the tooltip.
     * @type {TooltipDirectiveModifiers}
     */
    modifiers?: TooltipDirectiveModifiers | undefined;
}

/**
 * **PrimeVue - Tooltip**
 *
 * _Tooltip directive provides advisory information for a component._
 *
 * [Live Demo](https://www.primevue.org/tooltip/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare const Tooltip: ObjectDirective;

export default Tooltip;
