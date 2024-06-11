
/**
 *
 * Fieldset Design Tokens
 *
 * [Live Demo](https://www.primevue.org/fieldset/)
 *
 * @module themes/fieldset
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface FieldsetDesignTokens extends ColorSchemeDesignToken<FieldsetDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken fieldset.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken fieldset.border.color
    */
    borderColor?: string;
    /**
    * Border radius of root
    *
    * @designToken fieldset.border.radius
    */
    borderRadius?: string;
    /**
    * Color of root
    *
    * @designToken fieldset.color
    */
    color?: string;
    /**
    * Padding of root
    *
    * @designToken fieldset.padding
    */
    padding?: string;
    /**
    * Transition duration of root
    *
    * @designToken fieldset.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the legend section
    */
    legend?: {
        
    /**
    * Background of legend
    *
    * @designToken fieldset.legend.background
    */
    background?: string;
    /**
    * Hover background of legend
    *
    * @designToken fieldset.legend.hover.background
    */
    hoverBackground?: string;
    /**
    * Color of legend
    *
    * @designToken fieldset.legend.color
    */
    color?: string;
    /**
    * Hover color of legend
    *
    * @designToken fieldset.legend.hover.color
    */
    hoverColor?: string;
    /**
    * Border radius of legend
    *
    * @designToken fieldset.legend.border.radius
    */
    borderRadius?: string;
    /**
    * Border width of legend
    *
    * @designToken fieldset.legend.border.width
    */
    borderWidth?: string;
    /**
    * Border color of legend
    *
    * @designToken fieldset.legend.border.color
    */
    borderColor?: string;
    /**
    * Padding of legend
    *
    * @designToken fieldset.legend.padding
    */
    padding?: string;
    /**
    * Gap of legend
    *
    * @designToken fieldset.legend.gap
    */
    gap?: string;
    /**
    * Font weight of legend
    *
    * @designToken fieldset.legend.font.weight
    */
    fontWeight?: string;
    /**
    * Focus ring of legend
    */
    focusRing?: {
        
    /**
    * Focus ring width of legend
    *
    * @designToken fieldset.legend.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of legend
    *
    * @designToken fieldset.legend.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of legend
    *
    * @designToken fieldset.legend.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of legend
    *
    * @designToken fieldset.legend.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of legend
    *
    * @designToken fieldset.legend.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the toggle icon section
    */
    toggleIcon?: {
        
    /**
    * Color of toggle icon
    *
    * @designToken fieldset.toggle.icon.color
    */
    color?: string;
    /**
    * Hover color of toggle icon
    *
    * @designToken fieldset.toggle.icon.hover.color
    */
    hoverColor?: string;
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Padding of content
    *
    * @designToken fieldset.content.padding
    */
    padding?: string;
    }
}
