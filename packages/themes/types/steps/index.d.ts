
/**
 *
 * Steps Design Tokens
 *
 * [Live Demo](https://www.primevue.org/steps/)
 *
 * @module themes/steps
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface StepsDesignTokens extends ColorSchemeDesignToken<StepsDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken steps.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the separator section
    */
    separator?: {
        
    /**
    * Background of separator
    *
    * @designToken steps.separator.background
    */
    background?: string;
    }
    /**
    * Used to pass tokens of the item link section
    */
    itemLink?: {
        
    /**
    * Border radius of item link
    *
    * @designToken steps.item.link.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of item link
    */
    focusRing?: {
        
    /**
    * Focus ring width of item link
    *
    * @designToken steps.item.link.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of item link
    *
    * @designToken steps.item.link.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of item link
    *
    * @designToken steps.item.link.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of item link
    *
    * @designToken steps.item.link.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of item link
    *
    * @designToken steps.item.link.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Gap of item link
    *
    * @designToken steps.item.link.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the item label section
    */
    itemLabel?: {
        
    /**
    * Color of item label
    *
    * @designToken steps.item.label.color
    */
    color?: string;
    /**
    * Active color of item label
    *
    * @designToken steps.item.label.active.color
    */
    activeColor?: string;
    /**
    * Font weight of item label
    *
    * @designToken steps.item.label.font.weight
    */
    fontWeight?: string;
    }
    /**
    * Used to pass tokens of the item number section
    */
    itemNumber?: {
        
    /**
    * Background of item number
    *
    * @designToken steps.item.number.background
    */
    background?: string;
    /**
    * Active background of item number
    *
    * @designToken steps.item.number.active.background
    */
    activeBackground?: string;
    /**
    * Border color of item number
    *
    * @designToken steps.item.number.border.color
    */
    borderColor?: string;
    /**
    * Active border color of item number
    *
    * @designToken steps.item.number.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Color of item number
    *
    * @designToken steps.item.number.color
    */
    color?: string;
    /**
    * Active color of item number
    *
    * @designToken steps.item.number.active.color
    */
    activeColor?: string;
    /**
    * Size of item number
    *
    * @designToken steps.item.number.size
    */
    size?: string;
    /**
    * Font size of item number
    *
    * @designToken steps.item.number.font.size
    */
    fontSize?: string;
    /**
    * Font weight of item number
    *
    * @designToken steps.item.number.font.weight
    */
    fontWeight?: string;
    /**
    * Border radius of item number
    *
    * @designToken steps.item.number.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of item number
    *
    * @designToken steps.item.number.shadow
    */
    shadow?: string;
    }
}
