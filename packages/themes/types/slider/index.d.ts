
/**
 *
 * Slider Design Tokens
 *
 * [Live Demo](https://www.primevue.org/slider/)
 *
 * @module themes/slider
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface SliderDesignTokens extends ColorSchemeDesignToken<SliderDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken slider.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the track section
    */
    track?: {
        
    /**
    * Background of track
    *
    * @designToken slider.track.background
    */
    background?: string;
    /**
    * Border radius of track
    *
    * @designToken slider.track.border.radius
    */
    borderRadius?: string;
    /**
    * Size of track
    *
    * @designToken slider.track.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the range section
    */
    range?: {
        
    /**
    * Background of range
    *
    * @designToken slider.range.background
    */
    background?: string;
    }
    /**
    * Used to pass tokens of the handle section
    */
    handle?: {
        
    /**
    * Width of handle
    *
    * @designToken slider.handle.width
    */
    width?: string;
    /**
    * Height of handle
    *
    * @designToken slider.handle.height
    */
    height?: string;
    /**
    * Border radius of handle
    *
    * @designToken slider.handle.border.radius
    */
    borderRadius?: string;
    /**
    * Background of handle
    *
    * @designToken slider.handle.background
    */
    background?: string;
    /**
    * Hover background of handle
    *
    * @designToken slider.handle.hover.background
    */
    hoverBackground?: string;
    /**
    * Content of handle
    */
    content?: {
        
    /**
    * Content border radius of handle
    *
    * @designToken slider.handle.content.border.radius
    */
    borderRadius?: string;
    /**
    * Content hover background of handle
    *
    * @designToken slider.handle.content.hover.background
    */
    hoverBackground?: string;
    /**
    * Content width of handle
    *
    * @designToken slider.handle.content.width
    */
    width?: string;
    /**
    * Content height of handle
    *
    * @designToken slider.handle.content.height
    */
    height?: string;
    /**
    * Content shadow of handle
    *
    * @designToken slider.handle.content.shadow
    */
    shadow?: string;
    };
    /**
    * Focus ring of handle
    */
    focusRing?: {
        
    /**
    * Focus ring width of handle
    *
    * @designToken slider.handle.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of handle
    *
    * @designToken slider.handle.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of handle
    *
    * @designToken slider.handle.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of handle
    *
    * @designToken slider.handle.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of handle
    *
    * @designToken slider.handle.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Content background of handle
    *
    * @designToken slider.handle.content.background
    */
    contentBackground?: string;
    }
}
