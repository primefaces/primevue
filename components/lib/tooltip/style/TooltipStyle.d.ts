/**
 *
 * Tooltip directive provides advisory information for a component.
 *
 * [Live Demo](https://primevue.org/tooltip)
 *
 * @module tooltipstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TooltipClasses {
    root = 'p-tooltip',
    arrow = 'p-tooltip-arrow',
    text = 'p-tooltip-text'
}

export interface TooltipStyle extends BaseStyle {}
