
/**
 *
 * Menu Design Tokens
 *
 * [Live Demo](https://www.primevue.org/menu/)
 *
 * @module themes/menu
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface MenuDesignTokens extends ColorSchemeDesignToken<MenuDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken menu.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken menu.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken menu.color
    */
    color?: string;
    /**
    * Border radius of root
    *
    * @designToken menu.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of root
    *
    * @designToken menu.shadow
    */
    shadow?: string;
    /**
    * Transition duration of root
    *
    * @designToken menu.transition.duration
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
    * @designToken menu.list.padding
    */
    padding?: string;
    /**
    * Gap of list
    *
    * @designToken menu.list.gap
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
    * @designToken menu.item.focus.background
    */
    focusBackground?: string;
    /**
    * Color of item
    *
    * @designToken menu.item.color
    */
    color?: string;
    /**
    * Focus color of item
    *
    * @designToken menu.item.focus.color
    */
    focusColor?: string;
    /**
    * Padding of item
    *
    * @designToken menu.item.padding
    */
    padding?: string;
    /**
    * Border radius of item
    *
    * @designToken menu.item.border.radius
    */
    borderRadius?: string;
    /**
    * Gap of item
    *
    * @designToken menu.item.gap
    */
    gap?: string;
    /**
    * Icon of item
    */
    icon?: {
        
    /**
    * Icon color of item
    *
    * @designToken menu.item.icon.color
    */
    color?: string;
    /**
    * Icon focus color of item
    *
    * @designToken menu.item.icon.focus.color
    */
    focusColor?: string;
    };
    }
    /**
    * Used to pass tokens of the submenu label section
    */
    submenuLabel?: {
        
    /**
    * Padding of submenu label
    *
    * @designToken menu.submenu.label.padding
    */
    padding?: string;
    /**
    * Font weight of submenu label
    *
    * @designToken menu.submenu.label.font.weight
    */
    fontWeight?: string;
    /**
    * Background of submenu label
    *
    * @designToken menu.submenu.label.background
    */
    background?: string;
    /**
    * Color of submenu label
    *
    * @designToken menu.submenu.label.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the separator section
    */
    separator?: {
        
    /**
    * Border color of separator
    *
    * @designToken menu.separator.border.color
    */
    borderColor?: string;
    }
}
