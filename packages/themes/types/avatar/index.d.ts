
/**
 *
 * Avatar Design Tokens
 *
 * [Live Demo](https://www.primevue.org/avatar/)
 *
 * @module themes/avatar
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface AvatarDesignTokens extends ColorSchemeDesignToken<AvatarDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Width of root
    *
    * @designToken avatar.width
    */
    width?: string;
    /**
    * Height of root
    *
    * @designToken avatar.height
    */
    height?: string;
    /**
    * Font size of root
    *
    * @designToken avatar.font.size
    */
    fontSize?: string;
    /**
    * Background of root
    *
    * @designToken avatar.background
    */
    background?: string;
    /**
    * Border radius of root
    *
    * @designToken avatar.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the group section
    */
    group?: {
        
    /**
    * Border color of group
    *
    * @designToken avatar.group.border.color
    */
    borderColor?: string;
    /**
    * Offset of group
    *
    * @designToken avatar.group.offset
    */
    offset?: string;
    }
    /**
    * Used to pass tokens of the lg section
    */
    lg?: {
        
    /**
    * Width of lg
    *
    * @designToken avatar.lg.width
    */
    width?: string;
    /**
    * Height of lg
    *
    * @designToken avatar.lg.height
    */
    height?: string;
    /**
    * Font size of lg
    *
    * @designToken avatar.lg.font.size
    */
    fontSize?: string;
    }
    /**
    * Used to pass tokens of the xl section
    */
    xl?: {
        
    /**
    * Width of xl
    *
    * @designToken avatar.xl.width
    */
    width?: string;
    /**
    * Height of xl
    *
    * @designToken avatar.xl.height
    */
    height?: string;
    /**
    * Font size of xl
    *
    * @designToken avatar.xl.font.size
    */
    fontSize?: string;
    }
}
