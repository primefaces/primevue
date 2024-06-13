
/**
 *
 * Dock Design Tokens
 *
 * [Live Demo](https://www.primevue.org/dock/)
 *
 * @module themes/dock
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface DockDesignTokens extends ColorSchemeDesignToken<DockDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken dock.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken dock.border.color
    */
    borderColor?: string;
    /**
    * Padding of root
    *
    * @designToken dock.padding
    */
    padding?: string;
    /**
    * Border radius of root
    *
    * @designToken dock.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the item section
    */
    item?: {
        
    /**
    * Border radius of item
    *
    * @designToken dock.item.border.radius
    */
    borderRadius?: string;
    /**
    * Padding of item
    *
    * @designToken dock.item.padding
    */
    padding?: string;
    /**
    * Size of item
    *
    * @designToken dock.item.size
    */
    size?: string;
    /**
    * Focus ring of item
    */
    focusRing?: {
        
    /**
    * Focus ring width of item
    *
    * @designToken dock.item.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of item
    *
    * @designToken dock.item.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of item
    *
    * @designToken dock.item.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of item
    *
    * @designToken dock.item.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of item
    *
    * @designToken dock.item.focus.ring.shadow
    */
    shadow?: string;
    };
    }
}
