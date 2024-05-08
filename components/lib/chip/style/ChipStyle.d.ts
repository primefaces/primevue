/**
 *
 * Chip represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primevue.org/chip)
 *
 * @module chipstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ChipClasses {
    root = 'p-chip',
    image = 'p-chip-image',
    icon = 'p-chip-icon',
    label = 'p-chip-label',
    removeIcon = 'p-chip-remove-icon'
}

export interface ChipStyle extends BaseStyle {}
