
/**
 *
 * Tag Design Tokens
 *
 * [Live Demo](https://www.primevue.org/tag/)
 *
 * @module themes/tag
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TagDesignTokens extends ColorSchemeDesignToken<TagDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Font size of root
    *
    * @designToken tag.font.size
    */
    fontSize?: string;
    /**
    * Font weight of root
    *
    * @designToken tag.font.weight
    */
    fontWeight?: string;
    /**
    * Padding of root
    *
    * @designToken tag.padding
    */
    padding?: string;
    /**
    * Gap of root
    *
    * @designToken tag.gap
    */
    gap?: string;
    /**
    * Border radius of root
    *
    * @designToken tag.border.radius
    */
    borderRadius?: string;
    /**
    * Rounded border radius of root
    *
    * @designToken tag.rounded.border.radius
    */
    roundedBorderRadius?: string;
    }
    /**
    * Used to pass tokens of the icon section
    */
    icon?: {
        
    /**
    * Size of icon
    *
    * @designToken tag.icon.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the primary section
    */
    primary?: {
        
    /**
    * Background of primary
    *
    * @designToken tag.primary.background
    */
    background?: string;
    /**
    * Color of primary
    *
    * @designToken tag.primary.color
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
    * @designToken tag.secondary.background
    */
    background?: string;
    /**
    * Color of secondary
    *
    * @designToken tag.secondary.color
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
    * @designToken tag.success.background
    */
    background?: string;
    /**
    * Color of success
    *
    * @designToken tag.success.color
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
    * @designToken tag.info.background
    */
    background?: string;
    /**
    * Color of info
    *
    * @designToken tag.info.color
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
    * @designToken tag.warn.background
    */
    background?: string;
    /**
    * Color of warn
    *
    * @designToken tag.warn.color
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
    * @designToken tag.danger.background
    */
    background?: string;
    /**
    * Color of danger
    *
    * @designToken tag.danger.color
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
    * @designToken tag.contrast.background
    */
    background?: string;
    /**
    * Color of contrast
    *
    * @designToken tag.contrast.color
    */
    color?: string;
    }
}
