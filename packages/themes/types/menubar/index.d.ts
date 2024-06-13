
/**
 *
 * Menubar Design Tokens
 *
 * [Live Demo](https://www.primevue.org/menubar/)
 *
 * @module themes/menubar
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface MenubarDesignTokens extends ColorSchemeDesignToken<MenubarDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken menubar.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken menubar.border.color
    */
    borderColor?: string;
    /**
    * Border radius of root
    *
    * @designToken menubar.border.radius
    */
    borderRadius?: string;
    /**
    * Color of root
    *
    * @designToken menubar.color
    */
    color?: string;
    /**
    * Gap of root
    *
    * @designToken menubar.gap
    */
    gap?: string;
    /**
    * Padding of root
    *
    * @designToken menubar.padding
    */
    padding?: string;
    /**
    * Transition duration of root
    *
    * @designToken menubar.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the base item section
    */
    baseItem?: {
        
    /**
    * Border radius of base item
    *
    * @designToken menubar.base.item.border.radius
    */
    borderRadius?: string;
    /**
    * Padding of base item
    *
    * @designToken menubar.base.item.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the item section
    */
    item?: {
        
    /**
    * Focus background of item
    *
    * @designToken menubar.item.focus.background
    */
    focusBackground?: string;
    /**
    * Active background of item
    *
    * @designToken menubar.item.active.background
    */
    activeBackground?: string;
    /**
    * Color of item
    *
    * @designToken menubar.item.color
    */
    color?: string;
    /**
    * Focus color of item
    *
    * @designToken menubar.item.focus.color
    */
    focusColor?: string;
    /**
    * Active color of item
    *
    * @designToken menubar.item.active.color
    */
    activeColor?: string;
    /**
    * Padding of item
    *
    * @designToken menubar.item.padding
    */
    padding?: string;
    /**
    * Border radius of item
    *
    * @designToken menubar.item.border.radius
    */
    borderRadius?: string;
    /**
    * Gap of item
    *
    * @designToken menubar.item.gap
    */
    gap?: string;
    /**
    * Icon of item
    */
    icon?: {
        
    /**
    * Icon color of item
    *
    * @designToken menubar.item.icon.color
    */
    color?: string;
    /**
    * Icon focus color of item
    *
    * @designToken menubar.item.icon.focus.color
    */
    focusColor?: string;
    /**
    * Icon active color of item
    *
    * @designToken menubar.item.icon.active.color
    */
    activeColor?: string;
    };
    }
    /**
    * Used to pass tokens of the submenu section
    */
    submenu?: {
        
    /**
    * Padding of submenu
    *
    * @designToken menubar.submenu.padding
    */
    padding?: string;
    /**
    * Gap of submenu
    *
    * @designToken menubar.submenu.gap
    */
    gap?: string;
    /**
    * Background of submenu
    *
    * @designToken menubar.submenu.background
    */
    background?: string;
    /**
    * Border color of submenu
    *
    * @designToken menubar.submenu.border.color
    */
    borderColor?: string;
    /**
    * Border radius of submenu
    *
    * @designToken menubar.submenu.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of submenu
    *
    * @designToken menubar.submenu.shadow
    */
    shadow?: string;
    /**
    * Mobile indent of submenu
    *
    * @designToken menubar.submenu.mobile.indent
    */
    mobileIndent?: string;
    }
    /**
    * Used to pass tokens of the submenu icon section
    */
    submenuIcon?: {
        
    /**
    * Size of submenu icon
    *
    * @designToken menubar.submenu.icon.size
    */
    size?: string;
    /**
    * Color of submenu icon
    *
    * @designToken menubar.submenu.icon.color
    */
    color?: string;
    /**
    * Focus color of submenu icon
    *
    * @designToken menubar.submenu.icon.focus.color
    */
    focusColor?: string;
    /**
    * Active color of submenu icon
    *
    * @designToken menubar.submenu.icon.active.color
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
    * @designToken menubar.separator.border.color
    */
    borderColor?: string;
    }
    /**
    * Used to pass tokens of the mobile button section
    */
    mobileButton?: {
        
    /**
    * Border radius of mobile button
    *
    * @designToken menubar.mobile.button.border.radius
    */
    borderRadius?: string;
    /**
    * Size of mobile button
    *
    * @designToken menubar.mobile.button.size
    */
    size?: string;
    /**
    * Color of mobile button
    *
    * @designToken menubar.mobile.button.color
    */
    color?: string;
    /**
    * Hover color of mobile button
    *
    * @designToken menubar.mobile.button.hover.color
    */
    hoverColor?: string;
    /**
    * Hover background of mobile button
    *
    * @designToken menubar.mobile.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Focus ring of mobile button
    */
    focusRing?: {
        
    /**
    * Focus ring width of mobile button
    *
    * @designToken menubar.mobile.button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of mobile button
    *
    * @designToken menubar.mobile.button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of mobile button
    *
    * @designToken menubar.mobile.button.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of mobile button
    *
    * @designToken menubar.mobile.button.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of mobile button
    *
    * @designToken menubar.mobile.button.focus.ring.shadow
    */
    shadow?: string;
    };
    }
}
