
/**
 *
 * PanelMenu Design Tokens
 *
 * [Live Demo](https://www.primevue.org/panelmenu/)
 *
 * @module themes/panelmenu
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface PanelMenuDesignTokens extends ColorSchemeDesignToken<PanelMenuDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Gap of root
    *
    * @designToken panelmenu.gap
    */
    gap?: string;
    /**
    * Transition duration of root
    *
    * @designToken panelmenu.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the panel section
    */
    panel?: {
        
    /**
    * Background of panel
    *
    * @designToken panelmenu.panel.background
    */
    background?: string;
    /**
    * Border color of panel
    *
    * @designToken panelmenu.panel.border.color
    */
    borderColor?: string;
    /**
    * Border width of panel
    *
    * @designToken panelmenu.panel.border.width
    */
    borderWidth?: string;
    /**
    * Color of panel
    *
    * @designToken panelmenu.panel.color
    */
    color?: string;
    /**
    * Padding of panel
    *
    * @designToken panelmenu.panel.padding
    */
    padding?: string;
    /**
    * Border radius of panel
    *
    * @designToken panelmenu.panel.border.radius
    */
    borderRadius?: string;
    /**
    * First of panel
    */
    first?: {
        
    /**
    * First border width of panel
    *
    * @designToken panelmenu.panel.first.border.width
    */
    borderWidth?: string;
    /**
    * First top border radius of panel
    *
    * @designToken panelmenu.panel.first.top.border.radius
    */
    topBorderRadius?: string;
    };
    /**
    * Last of panel
    */
    last?: {
        
    /**
    * Last border width of panel
    *
    * @designToken panelmenu.panel.last.border.width
    */
    borderWidth?: string;
    /**
    * Last bottom border radius of panel
    *
    * @designToken panelmenu.panel.last.bottom.border.radius
    */
    bottomBorderRadius?: string;
    };
    }
    /**
    * Used to pass tokens of the item section
    */
    item?: {
        
    /**
    * Focus background of item
    *
    * @designToken panelmenu.item.focus.background
    */
    focusBackground?: string;
    /**
    * Color of item
    *
    * @designToken panelmenu.item.color
    */
    color?: string;
    /**
    * Focus color of item
    *
    * @designToken panelmenu.item.focus.color
    */
    focusColor?: string;
    /**
    * Gap of item
    *
    * @designToken panelmenu.item.gap
    */
    gap?: string;
    /**
    * Padding of item
    *
    * @designToken panelmenu.item.padding
    */
    padding?: string;
    /**
    * Border radius of item
    *
    * @designToken panelmenu.item.border.radius
    */
    borderRadius?: string;
    /**
    * Icon of item
    */
    icon?: {
        
    /**
    * Icon color of item
    *
    * @designToken panelmenu.item.icon.color
    */
    color?: string;
    /**
    * Icon focus color of item
    *
    * @designToken panelmenu.item.icon.focus.color
    */
    focusColor?: string;
    };
    }
    /**
    * Used to pass tokens of the submenu section
    */
    submenu?: {
        
    /**
    * Indent of submenu
    *
    * @designToken panelmenu.submenu.indent
    */
    indent?: string;
    }
    /**
    * Used to pass tokens of the submenu icon section
    */
    submenuIcon?: {
        
    /**
    * Color of submenu icon
    *
    * @designToken panelmenu.submenu.icon.color
    */
    color?: string;
    /**
    * Focus color of submenu icon
    *
    * @designToken panelmenu.submenu.icon.focus.color
    */
    focusColor?: string;
    }
}
