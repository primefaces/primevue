/**
 *
 * Ripple directive adds ripple effect to the host element.
 *
 * [Live Demo](https://primevue.org/ripple)
 *
 * @module ripplestyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum RippleClasses {
    /**
     * Class name of the root element
     */
    root = 'p-ink'
}

export interface RippleStyle extends BaseStyle {}
