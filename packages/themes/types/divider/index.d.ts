
/**
 *
 * Divider Design Tokens
 *
 * [Live Demo](https://www.primevue.org/divider/)
 *
 * @module themes/divider
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface DividerDesignTokens extends ColorSchemeDesignToken<DividerDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border color of root
    *
    * @designToken divider.border.color
    */
    borderColor?: string;
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Background of content
    *
    * @designToken divider.content.background
    */
    background?: string;
    /**
    * Color of content
    *
    * @designToken divider.content.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the horizontal section
    */
    horizontal?: {
        
    /**
    * Margin of horizontal
    *
    * @designToken divider.horizontal.margin
    */
    margin?: string;
    /**
    * Padding of horizontal
    *
    * @designToken divider.horizontal.padding
    */
    padding?: string;
    /**
    * Content of horizontal
    */
    content?: {
        
    /**
    * Content padding of horizontal
    *
    * @designToken divider.horizontal.content.padding
    */
    padding?: string;
    };
    }
    /**
    * Used to pass tokens of the vertical section
    */
    vertical?: {
        
    /**
    * Margin of vertical
    *
    * @designToken divider.vertical.margin
    */
    margin?: string;
    /**
    * Padding of vertical
    *
    * @designToken divider.vertical.padding
    */
    padding?: string;
    /**
    * Content of vertical
    */
    content?: {
        
    /**
    * Content padding of vertical
    *
    * @designToken divider.vertical.content.padding
    */
    padding?: string;
    };
    }
}
