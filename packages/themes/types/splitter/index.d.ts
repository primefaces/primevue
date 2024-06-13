
/**
 *
 * Splitter Design Tokens
 *
 * [Live Demo](https://www.primevue.org/splitter/)
 *
 * @module themes/splitter
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface SplitterDesignTokens extends ColorSchemeDesignToken<SplitterDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken splitter.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken splitter.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken splitter.color
    */
    color?: string;
    /**
    * Transition duration of root
    *
    * @designToken splitter.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the gutter section
    */
    gutter?: {
        
    /**
    * Background of gutter
    *
    * @designToken splitter.gutter.background
    */
    background?: string;
    }
    /**
    * Used to pass tokens of the handle section
    */
    handle?: {
        
    /**
    * Size of handle
    *
    * @designToken splitter.handle.size
    */
    size?: string;
    /**
    * Background of handle
    *
    * @designToken splitter.handle.background
    */
    background?: string;
    /**
    * Border radius of handle
    *
    * @designToken splitter.handle.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of handle
    */
    focusRing?: {
        
    /**
    * Focus ring width of handle
    *
    * @designToken splitter.handle.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of handle
    *
    * @designToken splitter.handle.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of handle
    *
    * @designToken splitter.handle.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of handle
    *
    * @designToken splitter.handle.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of handle
    *
    * @designToken splitter.handle.focus.ring.shadow
    */
    shadow?: string;
    };
    }
}
