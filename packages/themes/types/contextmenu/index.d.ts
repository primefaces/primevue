
/**
 *
 * ContextMenu Design Tokens
 *
 * [Live Demo](https://www.primevue.org/contextmenu/)
 *
 * @module themes/contextmenu
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ContextMenuDesignTokens extends ColorSchemeDesignToken<ContextMenuDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken contextmenu.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken contextmenu.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken contextmenu.color
    */
    color?: string;
    /**
    * Border radius of root
    *
    * @designToken contextmenu.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of root
    *
    * @designToken contextmenu.shadow
    */
    shadow?: string;
    /**
    * Transition duration of root
    *
    * @designToken contextmenu.transition.duration
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
    * @designToken contextmenu.list.padding
    */
    padding?: string;
    /**
    * Gap of list
    *
    * @designToken contextmenu.list.gap
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
    * @designToken contextmenu.item.focus.background
    */
    focusBackground?: string;
    /**
    * Active background of item
    *
    * @designToken contextmenu.item.active.background
    */
    activeBackground?: string;
    /**
    * Color of item
    *
    * @designToken contextmenu.item.color
    */
    color?: string;
    /**
    * Focus color of item
    *
    * @designToken contextmenu.item.focus.color
    */
    focusColor?: string;
    /**
    * Active color of item
    *
    * @designToken contextmenu.item.active.color
    */
    activeColor?: string;
    /**
    * Padding of item
    *
    * @designToken contextmenu.item.padding
    */
    padding?: string;
    /**
    * Border radius of item
    *
    * @designToken contextmenu.item.border.radius
    */
    borderRadius?: string;
    /**
    * Gap of item
    *
    * @designToken contextmenu.item.gap
    */
    gap?: string;
    /**
    * Icon of item
    */
    icon?: {
        
    /**
    * Icon color of item
    *
    * @designToken contextmenu.item.icon.color
    */
    color?: string;
    /**
    * Icon focus color of item
    *
    * @designToken contextmenu.item.icon.focus.color
    */
    focusColor?: string;
    /**
    * Icon active color of item
    *
    * @designToken contextmenu.item.icon.active.color
    */
    activeColor?: string;
    };
    }
    /**
    * Used to pass tokens of the submenu icon section
    */
    submenuIcon?: {
        
    /**
    * Size of submenu icon
    *
    * @designToken contextmenu.submenu.icon.size
    */
    size?: string;
    /**
    * Color of submenu icon
    *
    * @designToken contextmenu.submenu.icon.color
    */
    color?: string;
    /**
    * Focus color of submenu icon
    *
    * @designToken contextmenu.submenu.icon.focus.color
    */
    focusColor?: string;
    /**
    * Active color of submenu icon
    *
    * @designToken contextmenu.submenu.icon.active.color
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
    * @designToken contextmenu.separator.border.color
    */
    borderColor?: string;
    }
}
