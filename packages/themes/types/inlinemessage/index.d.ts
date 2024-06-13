
/**
 *
 * InlineMessage Design Tokens
 *
 * [Live Demo](https://www.primevue.org/inlinemessage/)
 *
 * @module themes/inlinemessage
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface InlineMessageDesignTokens extends ColorSchemeDesignToken<InlineMessageDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Padding of root
    *
    * @designToken inlinemessage.padding
    */
    padding?: string;
    /**
    * Border radius of root
    *
    * @designToken inlinemessage.border.radius
    */
    borderRadius?: string;
    /**
    * Gap of root
    *
    * @designToken inlinemessage.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the text section
    */
    text?: {
        
    /**
    * Font weight of text
    *
    * @designToken inlinemessage.text.font.weight
    */
    fontWeight?: string;
    }
    /**
    * Used to pass tokens of the icon section
    */
    icon?: {
        
    /**
    * Size of icon
    *
    * @designToken inlinemessage.icon.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the info section
    */
    info?: {
        
    /**
    * Background of info
    *
    * @designToken inlinemessage.info.background
    */
    background?: string;
    /**
    * Border color of info
    *
    * @designToken inlinemessage.info.border.color
    */
    borderColor?: string;
    /**
    * Color of info
    *
    * @designToken inlinemessage.info.color
    */
    color?: string;
    /**
    * Shadow of info
    *
    * @designToken inlinemessage.info.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the success section
    */
    success?: {
        
    /**
    * Background of success
    *
    * @designToken inlinemessage.success.background
    */
    background?: string;
    /**
    * Border color of success
    *
    * @designToken inlinemessage.success.border.color
    */
    borderColor?: string;
    /**
    * Color of success
    *
    * @designToken inlinemessage.success.color
    */
    color?: string;
    /**
    * Shadow of success
    *
    * @designToken inlinemessage.success.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the warn section
    */
    warn?: {
        
    /**
    * Background of warn
    *
    * @designToken inlinemessage.warn.background
    */
    background?: string;
    /**
    * Border color of warn
    *
    * @designToken inlinemessage.warn.border.color
    */
    borderColor?: string;
    /**
    * Color of warn
    *
    * @designToken inlinemessage.warn.color
    */
    color?: string;
    /**
    * Shadow of warn
    *
    * @designToken inlinemessage.warn.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the error section
    */
    error?: {
        
    /**
    * Background of error
    *
    * @designToken inlinemessage.error.background
    */
    background?: string;
    /**
    * Border color of error
    *
    * @designToken inlinemessage.error.border.color
    */
    borderColor?: string;
    /**
    * Color of error
    *
    * @designToken inlinemessage.error.color
    */
    color?: string;
    /**
    * Shadow of error
    *
    * @designToken inlinemessage.error.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the secondary section
    */
    secondary?: {
        
    /**
    * Background of secondary
    *
    * @designToken inlinemessage.secondary.background
    */
    background?: string;
    /**
    * Border color of secondary
    *
    * @designToken inlinemessage.secondary.border.color
    */
    borderColor?: string;
    /**
    * Color of secondary
    *
    * @designToken inlinemessage.secondary.color
    */
    color?: string;
    /**
    * Shadow of secondary
    *
    * @designToken inlinemessage.secondary.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the contrast section
    */
    contrast?: {
        
    /**
    * Background of contrast
    *
    * @designToken inlinemessage.contrast.background
    */
    background?: string;
    /**
    * Border color of contrast
    *
    * @designToken inlinemessage.contrast.border.color
    */
    borderColor?: string;
    /**
    * Color of contrast
    *
    * @designToken inlinemessage.contrast.color
    */
    color?: string;
    /**
    * Shadow of contrast
    *
    * @designToken inlinemessage.contrast.shadow
    */
    shadow?: string;
    }
}
