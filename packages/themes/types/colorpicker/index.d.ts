
/**
 *
 * ColorPicker Design Tokens
 *
 * [Live Demo](https://www.primevue.org/colorpicker/)
 *
 * @module themes/colorpicker
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ColorPickerDesignTokens extends ColorSchemeDesignToken<ColorPickerDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken colorpicker.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the preview section
    */
    preview?: {
        
    /**
    * Width of preview
    *
    * @designToken colorpicker.preview.width
    */
    width?: string;
    /**
    * Height of preview
    *
    * @designToken colorpicker.preview.height
    */
    height?: string;
    /**
    * Border radius of preview
    *
    * @designToken colorpicker.preview.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of preview
    */
    focusRing?: {
        
    /**
    * Focus ring width of preview
    *
    * @designToken colorpicker.preview.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of preview
    *
    * @designToken colorpicker.preview.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of preview
    *
    * @designToken colorpicker.preview.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of preview
    *
    * @designToken colorpicker.preview.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of preview
    *
    * @designToken colorpicker.preview.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the panel section
    */
    panel?: {
        
    /**
    * Shadow of panel
    *
    * @designToken colorpicker.panel.shadow
    */
    shadow?: string;
    /**
    * Border radius of panel
    *
    * @designToken colorpicker.panel.border.radius
    */
    borderRadius?: string;
    /**
    * Background of panel
    *
    * @designToken colorpicker.panel.background
    */
    background?: string;
    /**
    * Border color of panel
    *
    * @designToken colorpicker.panel.border.color
    */
    borderColor?: string;
    }
    /**
    * Used to pass tokens of the handle section
    */
    handle?: {
        
    /**
    * Color of handle
    *
    * @designToken colorpicker.handle.color
    */
    color?: string;
    }
}
