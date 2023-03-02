/**
 *
 * Tooltip directive provides advisory information for a component.
 *
 * - [Live Demo](https://primevue.org/tooltip)
 */
import { DirectiveBinding, ObjectDirective } from 'vue';

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
     * When present, it adds a custom id to the tooltip.
     * @defaultValue false
     */
    escape?: boolean | undefined;
    /**
     * Automatically adjusts the element position when there is not enough space on the selected position.
     * @defaultValue true
     */
    fitContent?: boolean | undefined;
}

/**
 * Defines modifiers of Tooltip.
 */
export declare type TooltipDirectiveModifiers = {
    /**
     * Right position for Tooltip.
     */
    right?: string | undefined;
    /**
     * Feft position for Tooltip.
     */
    left?: string | undefined;
    /**
     * Top position for Tooltip.
     */
    top?: string | undefined;
    /**
     * Bottom position for Tooltip.
     */
    bottom?: string | undefined;
    /**
     * Focus event for Tooltip.
     */
    focus?: string | undefined;
};

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
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo.svg)
 *
 */
declare const Tooltip: ObjectDirective;

export default Tooltip;
