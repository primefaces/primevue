
/**
 *
 * IconField Design Tokens
 *
 * [Live Demo](https://www.primevue.org/iconfield/)
 *
 * @module themes/iconfield
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface IconFieldDesignTokens extends ColorSchemeDesignToken<IconFieldDesignTokens> {

    /**
    * Used to pass tokens of the icon section
    */
    icon?: {
        
    /**
    * Color of icon
    *
    * @designToken iconfield.icon.color
    */
    color?: string;
    }
}
