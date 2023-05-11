/**
 *
 * Tooltip directive provides advisory information for a component.
 *
 * [Live Demo](https://primevue.org/tooltip)
 *
 * @module tooltip
 *
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
     * By default the tooltip contents are not rendered as text. Set to true to support html tags in the content.
     * @defaultValue false
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
