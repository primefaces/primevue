
/**
 *
 * InputNumber Design Tokens
 *
 * [Live Demo](https://www.primevue.org/inputnumber/)
 *
 * @module themes/inputnumber
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface InputNumberDesignTokens extends ColorSchemeDesignToken<InputNumberDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken inputnumber.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the button section
    */
    button?: {
        
    /**
    * Width of button
    *
    * @designToken inputnumber.button.width
    */
    width?: string;
    /**
    * Border radius of button
    *
    * @designToken inputnumber.button.border.radius
    */
    borderRadius?: string;
    /**
    * Vertical padding of button
    *
    * @designToken inputnumber.button.vertical.padding
    */
    verticalPadding?: string;
    /**
    * Background of button
    *
    * @designToken inputnumber.button.background
    */
    background?: string;
    /**
    * Hover background of button
    *
    * @designToken inputnumber.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Active background of button
    *
    * @designToken inputnumber.button.active.background
    */
    activeBackground?: string;
    /**
    * Border color of button
    *
    * @designToken inputnumber.button.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of button
    *
    * @designToken inputnumber.button.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Active border color of button
    *
    * @designToken inputnumber.button.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Color of button
    *
    * @designToken inputnumber.button.color
    */
    color?: string;
    /**
    * Hover color of button
    *
    * @designToken inputnumber.button.hover.color
    */
    hoverColor?: string;
    /**
    * Active color of button
    *
    * @designToken inputnumber.button.active.color
    */
    activeColor?: string;
    }
}
