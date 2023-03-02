import { DirectiveBinding, ObjectDirective } from 'vue';

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

export declare type TooltipDirectiveModifiers = {};

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

declare const Tooltip: ObjectDirective;

export default Tooltip;
