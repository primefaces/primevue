
/**
 *
 * TieredMenu Design Tokens
 *
 * [Live Demo](https://www.primevue.org/tieredmenu/)
 *
 * @module themes/tieredmenu
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TieredMenuDesignTokens extends ColorSchemeDesignToken<TieredMenuDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken tieredmenu.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken tieredmenu.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken tieredmenu.color
    */
    color?: string;
    /**
    * Border radius of root
    *
    * @designToken tieredmenu.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of root
    *
    * @designToken tieredmenu.shadow
    */
    shadow?: string;
    /**
    * Transition duration of root
    *
    * @designToken tieredmenu.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the list section
    */
    list?: {
        
    /**
    * Padding of list
    *
    * @designToken tieredmenu.list.padding
    */
    padding?: string;
    /**
    * Gap of list
    *
    * @designToken tieredmenu.list.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the item section
    */
    item?: {
        
    /**
    * Focus background of item
    *
    * @designToken tieredmenu.item.focus.background
    */
    focusBackground?: string;
    /**
    * Active background of item
    *
    * @designToken tieredmenu.item.active.background
    */
    activeBackground?: string;
    /**
    * Color of item
    *
    * @designToken tieredmenu.item.color
    */
    color?: string;
    /**
    * Focus color of item
    *
    * @designToken tieredmenu.item.focus.color
    */
    focusColor?: string;
    /**
    * Active color of item
    *
    * @designToken tieredmenu.item.active.color
    */
    activeColor?: string;
    /**
    * Padding of item
    *
    * @designToken tieredmenu.item.padding
    */
    padding?: string;
    /**
    * Border radius of item
    *
    * @designToken tieredmenu.item.border.radius
    */
    borderRadius?: string;
    /**
    * Gap of item
    *
    * @designToken tieredmenu.item.gap
    */
    gap?: string;
    /**
    * Icon of item
    */
    icon?: {
        
    /**
    * Icon color of item
    *
    * @designToken tieredmenu.item.icon.color
    */
    color?: string;
    /**
    * Icon focus color of item
    *
    * @designToken tieredmenu.item.icon.focus.color
    */
    focusColor?: string;
    /**
    * Icon active color of item
    *
    * @designToken tieredmenu.item.icon.active.color
    */
    activeColor?: string;
    };
    }
    /**
    * Used to pass tokens of the submenu label section
    */
    submenuLabel?: {
        
    /**
    * Padding of submenu label
    *
    * @designToken tieredmenu.submenu.label.padding
    */
    padding?: string;
    /**
    * Font weight of submenu label
    *
    * @designToken tieredmenu.submenu.label.font.weight
    */
    fontWeight?: string;
    /**
    * Background of submenu label
    *
    * @designToken tieredmenu.submenu.label.background
    */
    background?: string;
    /**
    * Color of submenu label
    *
    * @designToken tieredmenu.submenu.label.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the submenu icon section
    */
    submenuIcon?: {
        
    /**
    * Size of submenu icon
    *
    * @designToken tieredmenu.submenu.icon.size
    */
    size?: string;
    /**
    * Color of submenu icon
    *
    * @designToken tieredmenu.submenu.icon.color
    */
    color?: string;
    /**
    * Focus color of submenu icon
    *
    * @designToken tieredmenu.submenu.icon.focus.color
    */
    focusColor?: string;
    /**
    * Active color of submenu icon
    *
    * @designToken tieredmenu.submenu.icon.active.color
    */
    activeColor?: string;
    }
    /**
    * Used to pass tokens of the separator section
    */
    separator?: {
        
    /**
    * Border color of separator
    *
    * @designToken tieredmenu.separator.border.color
    */
    borderColor?: string;
    }
}
