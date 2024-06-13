
/**
 *
 * Knob Design Tokens
 *
 * [Live Demo](https://www.primevue.org/knob/)
 *
 * @module themes/knob
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface KnobDesignTokens extends ColorSchemeDesignToken<KnobDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken knob.transition.duration
    */
    transitionDuration?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken knob.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken knob.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of root
    *
    * @designToken knob.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken knob.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of root
    *
    * @designToken knob.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the value section
    */
    value?: {
        
    /**
    * Background of value
    *
    * @designToken knob.value.background
    */
    background?: string;
    }
    /**
    * Used to pass tokens of the range section
    */
    range?: {
        
    /**
    * Background of range
    *
    * @designToken knob.range.background
    */
    background?: string;
    }
    /**
    * Used to pass tokens of the text section
    */
    text?: {
        
    /**
    * Color of text
    *
    * @designToken knob.text.color
    */
    color?: string;
    }
}
