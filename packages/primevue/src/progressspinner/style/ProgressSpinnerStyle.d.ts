/**
 *
 * ProgressSpinner is a process status indicator.
 *
 * [Live Demo](https://www.primevue.org/progressspinner)
 *
 * @module progressspinnerstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ProgressSpinnerClasses {
    /**
     * Class name of the root element
     */
    root = 'p-progressspinner',
    /**
     * Class name of the spin element
     */
    spin = 'p-progressspinner-spin',
    /**
     * Class name of the circle element
     */
    circle = 'p-progressspinner-circle'
}

export interface ProgressSpinnerStyle extends BaseStyle {}
