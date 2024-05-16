/**
 *
 * Ripple directive adds ripple effect to the host element.
 *
 * [Live Demo](https://primevue.org/ripple)
 *
 * @module aura/ripple
 *
 */
import { ColorSchemeDesignToken } from '..';

/**
 * **PrimeVue - Ripple**
 *
 * _Ripple directive adds ripple effect to the host element._
 *
 * [Live Demo](https://www.primevue.org/ripple/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group DesignTokens
 *
 */
export interface RippleDesignTokens extends ColorSchemeDesignToken<RippleDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root: {
        /**
         * Background of ripple
         *
         * @designToken ripple.background
         */
        background?: string;
    };
}
