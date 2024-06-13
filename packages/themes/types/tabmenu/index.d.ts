
/**
 *
 * Tabmenu Design Tokens
 *
 * [Live Demo](https://www.primevue.org/tabmenu/)
 *
 * @module themes/tabmenu
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TabmenuDesignTokens extends ColorSchemeDesignToken<TabmenuDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken tabmenu.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the tablist section
    */
    tablist?: {
        
    /**
    * Border width of tablist
    *
    * @designToken tabmenu.tablist.border.width
    */
    borderWidth?: string;
    /**
    * Background of tablist
    *
    * @designToken tabmenu.tablist.background
    */
    background?: string;
    /**
    * Border color of tablist
    *
    * @designToken tabmenu.tablist.border.color
    */
    borderColor?: string;
    }
    /**
    * Used to pass tokens of the item section
    */
    item?: {
        
    /**
    * Background of item
    *
    * @designToken tabmenu.item.background
    */
    background?: string;
    /**
    * Hover background of item
    *
    * @designToken tabmenu.item.hover.background
    */
    hoverBackground?: string;
    /**
    * Active background of item
    *
    * @designToken tabmenu.item.active.background
    */
    activeBackground?: string;
    /**
    * Border width of item
    *
    * @designToken tabmenu.item.border.width
    */
    borderWidth?: string;
    /**
    * Border color of item
    *
    * @designToken tabmenu.item.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of item
    *
    * @designToken tabmenu.item.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Active border color of item
    *
    * @designToken tabmenu.item.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Color of item
    *
    * @designToken tabmenu.item.color
    */
    color?: string;
    /**
    * Hover color of item
    *
    * @designToken tabmenu.item.hover.color
    */
    hoverColor?: string;
    /**
    * Active color of item
    *
    * @designToken tabmenu.item.active.color
    */
    activeColor?: string;
    /**
    * Padding of item
    *
    * @designToken tabmenu.item.padding
    */
    padding?: string;
    /**
    * Font weight of item
    *
    * @designToken tabmenu.item.font.weight
    */
    fontWeight?: string;
    /**
    * Margin of item
    *
    * @designToken tabmenu.item.margin
    */
    margin?: string;
    /**
    * Gap of item
    *
    * @designToken tabmenu.item.gap
    */
    gap?: string;
    /**
    * Focus ring of item
    */
    focusRing?: {
        
    /**
    * Focus ring width of item
    *
    * @designToken tabmenu.item.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of item
    *
    * @designToken tabmenu.item.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of item
    *
    * @designToken tabmenu.item.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of item
    *
    * @designToken tabmenu.item.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of item
    *
    * @designToken tabmenu.item.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the item icon section
    */
    itemIcon?: {
        
    /**
    * Color of item icon
    *
    * @designToken tabmenu.item.icon.color
    */
    color?: string;
    /**
    * Hover color of item icon
    *
    * @designToken tabmenu.item.icon.hover.color
    */
    hoverColor?: string;
    /**
    * Active color of item icon
    *
    * @designToken tabmenu.item.icon.active.color
    */
    activeColor?: string;
    }
    /**
    * Used to pass tokens of the active bar section
    */
    activeBar?: {
        
    /**
    * Height of active bar
    *
    * @designToken tabmenu.active.bar.height
    */
    height?: string;
    /**
    * Bottom of active bar
    *
    * @designToken tabmenu.active.bar.bottom
    */
    bottom?: string;
    /**
    * Background of active bar
    *
    * @designToken tabmenu.active.bar.background
    */
    background?: string;
    }
}
