
/**
 *
 * Dialog Design Tokens
 *
 * [Live Demo](https://www.primevue.org/dialog/)
 *
 * @module themes/dialog
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface DialogDesignTokens extends ColorSchemeDesignToken<DialogDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken dialog.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken dialog.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken dialog.color
    */
    color?: string;
    /**
    * Border radius of root
    *
    * @designToken dialog.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of root
    *
    * @designToken dialog.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the header section
    */
    header?: {
        
    /**
    * Padding of header
    *
    * @designToken dialog.header.padding
    */
    padding?: string;
    /**
    * Gap of header
    *
    * @designToken dialog.header.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the title section
    */
    title?: {
        
    /**
    * Font size of title
    *
    * @designToken dialog.title.font.size
    */
    fontSize?: string;
    /**
    * Font weight of title
    *
    * @designToken dialog.title.font.weight
    */
    fontWeight?: string;
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Padding of content
    *
    * @designToken dialog.content.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the footer section
    */
    footer?: {
        
    /**
    * Padding of footer
    *
    * @designToken dialog.footer.padding
    */
    padding?: string;
    /**
    * Gap of footer
    *
    * @designToken dialog.footer.gap
    */
    gap?: string;
    }
}
