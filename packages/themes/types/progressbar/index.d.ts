
/**
 *
 * ProgressBar Design Tokens
 *
 * [Live Demo](https://www.primevue.org/progressbar/)
 *
 * @module themes/progressbar
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ProgressBarDesignTokens extends ColorSchemeDesignToken<ProgressBarDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken progressbar.background
    */
    background?: string;
    /**
    * Border radius of root
    *
    * @designToken progressbar.border.radius
    */
    borderRadius?: string;
    /**
    * Height of root
    *
    * @designToken progressbar.height
    */
    height?: string;
    }
    /**
    * Used to pass tokens of the value section
    */
    value?: {
        
    /**
    * Background of value
    *
    * @designToken progressbar.value.background
    */
    background?: string;
    }
    /**
    * Used to pass tokens of the label section
    */
    label?: {
        
    /**
    * Color of label
    *
    * @designToken progressbar.label.color
    */
    color?: string;
    /**
    * Font size of label
    *
    * @designToken progressbar.label.font.size
    */
    fontSize?: string;
    /**
    * Font weight of label
    *
    * @designToken progressbar.label.font.weight
    */
    fontWeight?: string;
    }
}
