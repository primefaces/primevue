
/**
 *
 * Badge Design Tokens
 *
 * [Live Demo](https://www.primevue.org/badge/)
 *
 * @module themes/badge
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface BadgeDesignTokens extends ColorSchemeDesignToken<BadgeDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border radius of root
    *
    * @designToken badge.border.radius
    */
    borderRadius?: string;
    /**
    * Padding of root
    *
    * @designToken badge.padding
    */
    padding?: string;
    /**
    * Font size of root
    *
    * @designToken badge.font.size
    */
    fontSize?: string;
    /**
    * Font weight of root
    *
    * @designToken badge.font.weight
    */
    fontWeight?: string;
    /**
    * Min width of root
    *
    * @designToken badge.min.width
    */
    minWidth?: string;
    /**
    * Height of root
    *
    * @designToken badge.height
    */
    height?: string;
    }
    /**
    * Used to pass tokens of the dot section
    */
    dot?: {
        
    /**
    * Size of dot
    *
    * @designToken badge.dot.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the sm section
    */
    sm?: {
        
    /**
    * Font size of sm
    *
    * @designToken badge.sm.font.size
    */
    fontSize?: string;
    /**
    * Min width of sm
    *
    * @designToken badge.sm.min.width
    */
    minWidth?: string;
    /**
    * Height of sm
    *
    * @designToken badge.sm.height
    */
    height?: string;
    }
    /**
    * Used to pass tokens of the lg section
    */
    lg?: {
        
    /**
    * Font size of lg
    *
    * @designToken badge.lg.font.size
    */
    fontSize?: string;
    /**
    * Min width of lg
    *
    * @designToken badge.lg.min.width
    */
    minWidth?: string;
    /**
    * Height of lg
    *
    * @designToken badge.lg.height
    */
    height?: string;
    }
    /**
    * Used to pass tokens of the xl section
    */
    xl?: {
        
    /**
    * Font size of xl
    *
    * @designToken badge.xl.font.size
    */
    fontSize?: string;
    /**
    * Min width of xl
    *
    * @designToken badge.xl.min.width
    */
    minWidth?: string;
    /**
    * Height of xl
    *
    * @designToken badge.xl.height
    */
    height?: string;
    }
    /**
    * Used to pass tokens of the primary section
    */
    primary?: {
        
    /**
    * Background of primary
    *
    * @designToken badge.primary.background
    */
    background?: string;
    /**
    * Color of primary
    *
    * @designToken badge.primary.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the secondary section
    */
    secondary?: {
        
    /**
    * Background of secondary
    *
    * @designToken badge.secondary.background
    */
    background?: string;
    /**
    * Color of secondary
    *
    * @designToken badge.secondary.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the success section
    */
    success?: {
        
    /**
    * Background of success
    *
    * @designToken badge.success.background
    */
    background?: string;
    /**
    * Color of success
    *
    * @designToken badge.success.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the info section
    */
    info?: {
        
    /**
    * Background of info
    *
    * @designToken badge.info.background
    */
    background?: string;
    /**
    * Color of info
    *
    * @designToken badge.info.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the warn section
    */
    warn?: {
        
    /**
    * Background of warn
    *
    * @designToken badge.warn.background
    */
    background?: string;
    /**
    * Color of warn
    *
    * @designToken badge.warn.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the danger section
    */
    danger?: {
        
    /**
    * Background of danger
    *
    * @designToken badge.danger.background
    */
    background?: string;
    /**
    * Color of danger
    *
    * @designToken badge.danger.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the contrast section
    */
    contrast?: {
        
    /**
    * Background of contrast
    *
    * @designToken badge.contrast.background
    */
    background?: string;
    /**
    * Color of contrast
    *
    * @designToken badge.contrast.color
    */
    color?: string;
    }
}
