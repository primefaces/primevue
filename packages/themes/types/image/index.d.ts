
/**
 *
 * Image Design Tokens
 *
 * [Live Demo](https://www.primevue.org/image/)
 *
 * @module themes/image
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ImageDesignTokens extends ColorSchemeDesignToken<ImageDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken image.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the preview section
    */
    preview?: {
        
    /**
    * Icon of preview
    */
    icon?: {
        
    /**
    * Icon size of preview
    *
    * @designToken image.preview.icon.size
    */
    size?: string;
    };
    /**
    * Mask of preview
    */
    mask?: {
        
    /**
    * Mask background of preview
    *
    * @designToken image.preview.mask.background
    */
    background?: string;
    /**
    * Mask color of preview
    *
    * @designToken image.preview.mask.color
    */
    color?: string;
    };
    }
    /**
    * Used to pass tokens of the toolbar section
    */
    toolbar?: {
        
    /**
    * Position of toolbar
    */
    position?: {
        
    /**
    * Position left of toolbar
    *
    * @designToken image.toolbar.position.left
    */
    left?: string;
    /**
    * Position right of toolbar
    *
    * @designToken image.toolbar.position.right
    */
    right?: string;
    /**
    * Position top of toolbar
    *
    * @designToken image.toolbar.position.top
    */
    top?: string;
    /**
    * Position bottom of toolbar
    *
    * @designToken image.toolbar.position.bottom
    */
    bottom?: string;
    };
    /**
    * Blur of toolbar
    *
    * @designToken image.toolbar.blur
    */
    blur?: string;
    /**
    * Background of toolbar
    *
    * @designToken image.toolbar.background
    */
    background?: string;
    /**
    * Border color of toolbar
    *
    * @designToken image.toolbar.border.color
    */
    borderColor?: string;
    /**
    * Border width of toolbar
    *
    * @designToken image.toolbar.border.width
    */
    borderWidth?: string;
    /**
    * Border radius of toolbar
    *
    * @designToken image.toolbar.border.radius
    */
    borderRadius?: string;
    /**
    * Padding of toolbar
    *
    * @designToken image.toolbar.padding
    */
    padding?: string;
    /**
    * Gap of toolbar
    *
    * @designToken image.toolbar.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the action section
    */
    action?: {
        
    /**
    * Hover background of action
    *
    * @designToken image.action.hover.background
    */
    hoverBackground?: string;
    /**
    * Color of action
    *
    * @designToken image.action.color
    */
    color?: string;
    /**
    * Hover color of action
    *
    * @designToken image.action.hover.color
    */
    hoverColor?: string;
    /**
    * Size of action
    *
    * @designToken image.action.size
    */
    size?: string;
    /**
    * Icon size of action
    *
    * @designToken image.action.icon.size
    */
    iconSize?: string;
    /**
    * Border radius of action
    *
    * @designToken image.action.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of action
    */
    focusRing?: {
        
    /**
    * Focus ring width of action
    *
    * @designToken image.action.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of action
    *
    * @designToken image.action.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of action
    *
    * @designToken image.action.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of action
    *
    * @designToken image.action.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of action
    *
    * @designToken image.action.focus.ring.shadow
    */
    shadow?: string;
    };
    }
}
