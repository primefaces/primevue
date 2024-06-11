
/**
 *
 * SpeedDial Design Tokens
 *
 * [Live Demo](https://www.primevue.org/speeddial/)
 *
 * @module themes/speeddial
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface SpeedDialDesignTokens extends ColorSchemeDesignToken<SpeedDialDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Gap of root
    *
    * @designToken speeddial.gap
    */
    gap?: string;
    /**
    * Transition duration of root
    *
    * @designToken speeddial.transition.duration
    */
    transitionDuration?: string;
    }
}
