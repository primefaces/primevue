/**
 *
 * Chip represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primevue.org/chip)
 *
 * @module chipstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ChipClasses {
    /**
     * Class name of the root element
     */
    root = 'p-chip',
    /**
     * Class name of the image element
     */
    image = 'p-chip-image',
    /**
     * Class name of the icon element
     */
    icon = 'p-chip-icon',
    /**
     * Class name of the label element
     */
    label = 'p-chip-label',
    /**
     * Class name of the remove icon element
     */
    removeIcon = 'p-chip-remove-icon'
}

export interface ChipStyle extends BaseStyle {}
