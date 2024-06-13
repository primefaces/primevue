
/**
 *
 * Password Design Tokens
 *
 * [Live Demo](https://www.primevue.org/password/)
 *
 * @module themes/password
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface PasswordDesignTokens extends ColorSchemeDesignToken<PasswordDesignTokens> {

    /**
    * Used to pass tokens of the meter section
    */
    meter?: {
        
    /**
    * Background of meter
    *
    * @designToken password.meter.background
    */
    background?: string;
    /**
    * Border radius of meter
    *
    * @designToken password.meter.border.radius
    */
    borderRadius?: string;
    /**
    * Height of meter
    *
    * @designToken password.meter.height
    */
    height?: string;
    }
    /**
    * Used to pass tokens of the icon section
    */
    icon?: {
        
    /**
    * Color of icon
    *
    * @designToken password.icon.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the overlay section
    */
    overlay?: {
        
    /**
    * Background of overlay
    *
    * @designToken password.overlay.background
    */
    background?: string;
    /**
    * Border color of overlay
    *
    * @designToken password.overlay.border.color
    */
    borderColor?: string;
    /**
    * Border radius of overlay
    *
    * @designToken password.overlay.border.radius
    */
    borderRadius?: string;
    /**
    * Color of overlay
    *
    * @designToken password.overlay.color
    */
    color?: string;
    /**
    * Padding of overlay
    *
    * @designToken password.overlay.padding
    */
    padding?: string;
    /**
    * Shadow of overlay
    *
    * @designToken password.overlay.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Gap of content
    *
    * @designToken password.content.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the strength section
    */
    strength?: {
        
    /**
    * Weak background of strength
    *
    * @designToken password.strength.weak.background
    */
    weakBackground?: string;
    /**
    * Medium background of strength
    *
    * @designToken password.strength.medium.background
    */
    mediumBackground?: string;
    /**
    * Strong background of strength
    *
    * @designToken password.strength.strong.background
    */
    strongBackground?: string;
    }
}
