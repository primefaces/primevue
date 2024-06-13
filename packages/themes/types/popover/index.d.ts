
/**
 *
 * Popover Design Tokens
 *
 * [Live Demo](https://www.primevue.org/popover/)
 *
 * @module themes/popover
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface PopoverDesignTokens extends ColorSchemeDesignToken<PopoverDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken popover.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken popover.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken popover.color
    */
    color?: string;
    /**
    * Border radius of root
    *
    * @designToken popover.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of root
    *
    * @designToken popover.shadow
    */
    shadow?: string;
    /**
    * Gutter of root
    *
    * @designToken popover.gutter
    */
    gutter?: string;
    /**
    * Arrow offset of root
    *
    * @designToken popover.arrow.offset
    */
    arrowOffset?: string;
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Padding of content
    *
    * @designToken popover.content.padding
    */
    padding?: string;
    }
}
