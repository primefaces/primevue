
/**
 *
 * ScrollPanel Design Tokens
 *
 * [Live Demo](https://www.primevue.org/scrollpanel/)
 *
 * @module themes/scrollpanel
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ScrollPanelDesignTokens extends ColorSchemeDesignToken<ScrollPanelDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken scrollpanel.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the bar section
    */
    bar?: {
        
    /**
    * Size of bar
    *
    * @designToken scrollpanel.bar.size
    */
    size?: string;
    /**
    * Border radius of bar
    *
    * @designToken scrollpanel.bar.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of bar
    */
    focusRing?: {
        
    /**
    * Focus ring width of bar
    *
    * @designToken scrollpanel.bar.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of bar
    *
    * @designToken scrollpanel.bar.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of bar
    *
    * @designToken scrollpanel.bar.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of bar
    *
    * @designToken scrollpanel.bar.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of bar
    *
    * @designToken scrollpanel.bar.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Background of bar
    *
    * @designToken scrollpanel.bar.background
    */
    background?: string;
    }
}
