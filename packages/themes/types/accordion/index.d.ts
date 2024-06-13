
/**
 *
 * Accordion Design Tokens
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module themes/accordion
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface AccordionDesignTokens extends ColorSchemeDesignToken<AccordionDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken accordion.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the panel section
    */
    panel?: {
        
    /**
    * Border width of panel
    *
    * @designToken accordion.panel.border.width
    */
    borderWidth?: string;
    /**
    * Border color of panel
    *
    * @designToken accordion.panel.border.color
    */
    borderColor?: string;
    }
    /**
    * Used to pass tokens of the header section
    */
    header?: {
        
    /**
    * Color of header
    *
    * @designToken accordion.header.color
    */
    color?: string;
    /**
    * Hover color of header
    *
    * @designToken accordion.header.hover.color
    */
    hoverColor?: string;
    /**
    * Active color of header
    *
    * @designToken accordion.header.active.color
    */
    activeColor?: string;
    /**
    * Padding of header
    *
    * @designToken accordion.header.padding
    */
    padding?: string;
    /**
    * Font weight of header
    *
    * @designToken accordion.header.font.weight
    */
    fontWeight?: string;
    /**
    * Border radius of header
    *
    * @designToken accordion.header.border.radius
    */
    borderRadius?: string;
    /**
    * Border width of header
    *
    * @designToken accordion.header.border.width
    */
    borderWidth?: string;
    /**
    * Border color of header
    *
    * @designToken accordion.header.border.color
    */
    borderColor?: string;
    /**
    * Background of header
    *
    * @designToken accordion.header.background
    */
    background?: string;
    /**
    * Hover background of header
    *
    * @designToken accordion.header.hover.background
    */
    hoverBackground?: string;
    /**
    * Active background of header
    *
    * @designToken accordion.header.active.background
    */
    activeBackground?: string;
    /**
    * Active hover background of header
    *
    * @designToken accordion.header.active.hover.background
    */
    activeHoverBackground?: string;
    /**
    * Focus ring of header
    */
    focusRing?: {
        
    /**
    * Focus ring width of header
    *
    * @designToken accordion.header.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of header
    *
    * @designToken accordion.header.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of header
    *
    * @designToken accordion.header.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of header
    *
    * @designToken accordion.header.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of header
    *
    * @designToken accordion.header.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Toggle icon of header
    */
    toggleIcon?: {
        
    /**
    * Toggle icon color of header
    *
    * @designToken accordion.header.toggle.icon.color
    */
    color?: string;
    /**
    * Toggle icon hover color of header
    *
    * @designToken accordion.header.toggle.icon.hover.color
    */
    hoverColor?: string;
    /**
    * Toggle icon active color of header
    *
    * @designToken accordion.header.toggle.icon.active.color
    */
    activeColor?: string;
    /**
    * Toggle icon active hover color of header
    *
    * @designToken accordion.header.toggle.icon.active.hover.color
    */
    activeHoverColor?: string;
    };
    /**
    * First of header
    */
    first?: {
        
    /**
    * First top border radius of header
    *
    * @designToken accordion.header.first.top.border.radius
    */
    topBorderRadius?: string;
    /**
    * First border width of header
    *
    * @designToken accordion.header.first.border.width
    */
    borderWidth?: string;
    };
    /**
    * Last of header
    */
    last?: {
        
    /**
    * Last bottom border radius of header
    *
    * @designToken accordion.header.last.bottom.border.radius
    */
    bottomBorderRadius?: string;
    /**
    * Last active bottom border radius of header
    *
    * @designToken accordion.header.last.active.bottom.border.radius
    */
    activeBottomBorderRadius?: string;
    };
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Border width of content
    *
    * @designToken accordion.content.border.width
    */
    borderWidth?: string;
    /**
    * Border color of content
    *
    * @designToken accordion.content.border.color
    */
    borderColor?: string;
    /**
    * Background of content
    *
    * @designToken accordion.content.background
    */
    background?: string;
    /**
    * Color of content
    *
    * @designToken accordion.content.color
    */
    color?: string;
    /**
    * Padding of content
    *
    * @designToken accordion.content.padding
    */
    padding?: string;
    }
}
