
/**
 *
 * Card Design Tokens
 *
 * [Live Demo](https://www.primevue.org/card/)
 *
 * @module themes/card
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface CardDesignTokens extends ColorSchemeDesignToken<CardDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken card.background
    */
    background?: string;
    /**
    * Border radius of root
    *
    * @designToken card.border.radius
    */
    borderRadius?: string;
    /**
    * Color of root
    *
    * @designToken card.color
    */
    color?: string;
    /**
    * Shadow of root
    *
    * @designToken card.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the body section
    */
    body?: {
        
    /**
    * Padding of body
    *
    * @designToken card.body.padding
    */
    padding?: string;
    /**
    * Gap of body
    *
    * @designToken card.body.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the caption section
    */
    caption?: {
        
    /**
    * Gap of caption
    *
    * @designToken card.caption.gap
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
    * @designToken card.title.font.size
    */
    fontSize?: string;
    /**
    * Font weight of title
    *
    * @designToken card.title.font.weight
    */
    fontWeight?: string;
    }
    /**
    * Used to pass tokens of the subtitle section
    */
    subtitle?: {
        
    /**
    * Color of subtitle
    *
    * @designToken card.subtitle.color
    */
    color?: string;
    }
}
