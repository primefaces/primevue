
/**
 *
 * Editor Design Tokens
 *
 * [Live Demo](https://www.primevue.org/editor/)
 *
 * @module themes/editor
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface EditorDesignTokens extends ColorSchemeDesignToken<EditorDesignTokens> {

    /**
    * Used to pass tokens of the toolbar section
    */
    toolbar?: {
        
    /**
    * Background of toolbar
    *
    * @designToken editor.toolbar.background
    */
    background?: string;
    /**
    * Border color of toolbar
    *
    * @designToken editor.toolbar.border.color
    */
    borderColor?: string;
    /**
    * Border radius of toolbar
    *
    * @designToken editor.toolbar.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the toolbar item section
    */
    toolbarItem?: {
        
    /**
    * Color of toolbar item
    *
    * @designToken editor.toolbar.item.color
    */
    color?: string;
    /**
    * Hover color of toolbar item
    *
    * @designToken editor.toolbar.item.hover.color
    */
    hoverColor?: string;
    /**
    * Active color of toolbar item
    *
    * @designToken editor.toolbar.item.active.color
    */
    activeColor?: string;
    }
    /**
    * Used to pass tokens of the overlay section
    */
    overlay?: {
        
    /**
    * Background of overlay
    *
    * @designToken editor.overlay.background
    */
    background?: string;
    /**
    * Border color of overlay
    *
    * @designToken editor.overlay.border.color
    */
    borderColor?: string;
    /**
    * Border radius of overlay
    *
    * @designToken editor.overlay.border.radius
    */
    borderRadius?: string;
    /**
    * Color of overlay
    *
    * @designToken editor.overlay.color
    */
    color?: string;
    /**
    * Shadow of overlay
    *
    * @designToken editor.overlay.shadow
    */
    shadow?: string;
    /**
    * Padding of overlay
    *
    * @designToken editor.overlay.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the overlay option section
    */
    overlayOption?: {
        
    /**
    * Focus background of overlay option
    *
    * @designToken editor.overlay.option.focus.background
    */
    focusBackground?: string;
    /**
    * Color of overlay option
    *
    * @designToken editor.overlay.option.color
    */
    color?: string;
    /**
    * Focus color of overlay option
    *
    * @designToken editor.overlay.option.focus.color
    */
    focusColor?: string;
    /**
    * Padding of overlay option
    *
    * @designToken editor.overlay.option.padding
    */
    padding?: string;
    /**
    * Border radius of overlay option
    *
    * @designToken editor.overlay.option.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Background of content
    *
    * @designToken editor.content.background
    */
    background?: string;
    /**
    * Border color of content
    *
    * @designToken editor.content.border.color
    */
    borderColor?: string;
    /**
    * Color of content
    *
    * @designToken editor.content.color
    */
    color?: string;
    /**
    * Border radius of content
    *
    * @designToken editor.content.border.radius
    */
    borderRadius?: string;
    }
}
