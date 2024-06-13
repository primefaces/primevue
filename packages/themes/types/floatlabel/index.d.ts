
/**
 *
 * FloatLabel Design Tokens
 *
 * [Live Demo](https://www.primevue.org/floatlabel/)
 *
 * @module themes/floatlabel
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface FloatLabelDesignTokens extends ColorSchemeDesignToken<FloatLabelDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Color of root
    *
    * @designToken floatlabel.color
    */
    color?: string;
    /**
    * Focus color of root
    *
    * @designToken floatlabel.focus.color
    */
    focusColor?: string;
    /**
    * Invalid color of root
    *
    * @designToken floatlabel.invalid.color
    */
    invalidColor?: string;
    /**
    * Transition duration of root
    *
    * @designToken floatlabel.transition.duration
    */
    transitionDuration?: string;
    }
}
