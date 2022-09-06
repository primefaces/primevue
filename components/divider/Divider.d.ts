import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type DividerHorizontalAlignType = 'left' | 'center' | 'right' | undefined;

type DividerVerticalAlignType = 'top' | 'center' | 'bottom' | undefined;

type DividerAlignType = DividerHorizontalAlignType | DividerVerticalAlignType | undefined;

type DividerLayoutType = 'horizontal' | 'vertical' | undefined;

type DividerType = 'solid' | 'dashed' | 'dotted' | undefined;

export interface DividerProps {
    /**
     * Alignment of the content, options are 'left', 'center', 'right' for horizontal layout and 'top', 'center', 'bottom' for vertical.
     * @see DividerAlignType
     */
    align?: DividerAlignType;
    /**
     * Specifies the orientation, valid values are 'horizontal' and 'vertical'.
     * @see DividerLayoutType
     * Default value is 'horizontal'.
     */
    layout?: DividerLayoutType;
    /**
     * Border style type.
     * @see DividerType
     * Default value is 'solid'.
     */
    type?: DividerType;
}

export interface DividerSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

export declare type DividerEmits = {
}

declare class Divider extends ClassComponent<DividerProps, DividerSlots, DividerEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Divider: GlobalComponentConstructor<Divider>
    }
}

/**
 *
 * Divider is used to separate contents.
 *
 * Demos:
 *
 * - [Divider](https://www.primefaces.org/primevue/showcase/#/divider)
 *
 */
export default Divider;
