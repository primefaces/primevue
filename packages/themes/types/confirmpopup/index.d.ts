
/**
 *
 * ConfirmPopup Design Tokens
 *
 * [Live Demo](https://www.primevue.org/confirmpopup/)
 *
 * @module themes/confirmpopup
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ConfirmPopupDesignTokens extends ColorSchemeDesignToken<ConfirmPopupDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken confirmpopup.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken confirmpopup.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken confirmpopup.color
    */
    color?: string;
    /**
    * Border radius of root
    *
    * @designToken confirmpopup.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of root
    *
    * @designToken confirmpopup.shadow
    */
    shadow?: string;
    /**
    * Gutter of root
    *
    * @designToken confirmpopup.gutter
    */
    gutter?: string;
    /**
    * Arrow offset of root
    *
    * @designToken confirmpopup.arrow.offset
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
    * @designToken confirmpopup.content.padding
    */
    padding?: string;
    /**
    * Gap of content
    *
    * @designToken confirmpopup.content.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the icon section
    */
    icon?: {
        
    /**
    * Size of icon
    *
    * @designToken confirmpopup.icon.size
    */
    size?: string;
    /**
    * Color of icon
    *
    * @designToken confirmpopup.icon.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the footer section
    */
    footer?: {
        
    /**
    * Gap of footer
    *
    * @designToken confirmpopup.footer.gap
    */
    gap?: string;
    /**
    * Padding of footer
    *
    * @designToken confirmpopup.footer.padding
    */
    padding?: string;
    }
}
