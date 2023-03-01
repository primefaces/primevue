import { ObjectDirective } from 'vue';

declare const Tooltip: ObjectDirective;

/**
 * Defines options of Tooltip.
 * @group Model
 */
export interface TooltipProps {
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
     * 	Automatically adjusts the element position when there is not enough space on the selected position.
     * @defaultValue true
     */
    fitContent?: boolean | undefined;
}

export default Tooltip;
