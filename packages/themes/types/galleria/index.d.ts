
/**
 *
 * Galleria Design Tokens
 *
 * [Live Demo](https://www.primevue.org/galleria/)
 *
 * @module themes/galleria
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface GalleriaDesignTokens extends ColorSchemeDesignToken<GalleriaDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border width of root
    *
    * @designToken galleria.border.width
    */
    borderWidth?: string;
    /**
    * Border color of root
    *
    * @designToken galleria.border.color
    */
    borderColor?: string;
    /**
    * Border radius of root
    *
    * @designToken galleria.border.radius
    */
    borderRadius?: string;
    /**
    * Transition duration of root
    *
    * @designToken galleria.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the nav button section
    */
    navButton?: {
        
    /**
    * Background of nav button
    *
    * @designToken galleria.nav.button.background
    */
    background?: string;
    /**
    * Hover background of nav button
    *
    * @designToken galleria.nav.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Color of nav button
    *
    * @designToken galleria.nav.button.color
    */
    color?: string;
    /**
    * Hover color of nav button
    *
    * @designToken galleria.nav.button.hover.color
    */
    hoverColor?: string;
    /**
    * Size of nav button
    *
    * @designToken galleria.nav.button.size
    */
    size?: string;
    /**
    * Gutter of nav button
    *
    * @designToken galleria.nav.button.gutter
    */
    gutter?: string;
    /**
    * Prev of nav button
    */
    prev?: {
        
    /**
    * Prev border radius of nav button
    *
    * @designToken galleria.nav.button.prev.border.radius
    */
    borderRadius?: string;
    };
    /**
    * Next of nav button
    */
    next?: {
        
    /**
    * Next border radius of nav button
    *
    * @designToken galleria.nav.button.next.border.radius
    */
    borderRadius?: string;
    };
    /**
    * Focus ring of nav button
    */
    focusRing?: {
        
    /**
    * Focus ring width of nav button
    *
    * @designToken galleria.nav.button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of nav button
    *
    * @designToken galleria.nav.button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of nav button
    *
    * @designToken galleria.nav.button.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of nav button
    *
    * @designToken galleria.nav.button.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of nav button
    *
    * @designToken galleria.nav.button.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the nav icon section
    */
    navIcon?: {
        
    /**
    * Size of nav icon
    *
    * @designToken galleria.nav.icon.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the thumbnails content section
    */
    thumbnailsContent?: {
        
    /**
    * Background of thumbnails content
    *
    * @designToken galleria.thumbnails.content.background
    */
    background?: string;
    /**
    * Padding of thumbnails content
    *
    * @designToken galleria.thumbnails.content.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the thumbnail nav button section
    */
    thumbnailNavButton?: {
        
    /**
    * Size of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.size
    */
    size?: string;
    /**
    * Border radius of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.border.radius
    */
    borderRadius?: string;
    /**
    * Gutter of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.gutter
    */
    gutter?: string;
    /**
    * Focus ring of thumbnail nav button
    */
    focusRing?: {
        
    /**
    * Focus ring width of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Hover background of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Color of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.color
    */
    color?: string;
    /**
    * Hover color of thumbnail nav button
    *
    * @designToken galleria.thumbnail.nav.button.hover.color
    */
    hoverColor?: string;
    }
    /**
    * Used to pass tokens of the thumbnail nav button icon section
    */
    thumbnailNavButtonIcon?: {
        
    /**
    * Size of thumbnail nav button icon
    *
    * @designToken galleria.thumbnail.nav.button.icon.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the caption section
    */
    caption?: {
        
    /**
    * Background of caption
    *
    * @designToken galleria.caption.background
    */
    background?: string;
    /**
    * Color of caption
    *
    * @designToken galleria.caption.color
    */
    color?: string;
    /**
    * Padding of caption
    *
    * @designToken galleria.caption.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the indicator list section
    */
    indicatorList?: {
        
    /**
    * Gap of indicator list
    *
    * @designToken galleria.indicator.list.gap
    */
    gap?: string;
    /**
    * Padding of indicator list
    *
    * @designToken galleria.indicator.list.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the indicator button section
    */
    indicatorButton?: {
        
    /**
    * Width of indicator button
    *
    * @designToken galleria.indicator.button.width
    */
    width?: string;
    /**
    * Height of indicator button
    *
    * @designToken galleria.indicator.button.height
    */
    height?: string;
    /**
    * Active background of indicator button
    *
    * @designToken galleria.indicator.button.active.background
    */
    activeBackground?: string;
    /**
    * Border radius of indicator button
    *
    * @designToken galleria.indicator.button.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of indicator button
    */
    focusRing?: {
        
    /**
    * Focus ring width of indicator button
    *
    * @designToken galleria.indicator.button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of indicator button
    *
    * @designToken galleria.indicator.button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of indicator button
    *
    * @designToken galleria.indicator.button.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of indicator button
    *
    * @designToken galleria.indicator.button.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of indicator button
    *
    * @designToken galleria.indicator.button.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Background of indicator button
    *
    * @designToken galleria.indicator.button.background
    */
    background?: string;
    /**
    * Hover background of indicator button
    *
    * @designToken galleria.indicator.button.hover.background
    */
    hoverBackground?: string;
    }
    /**
    * Used to pass tokens of the inset indicator list section
    */
    insetIndicatorList?: {
        
    /**
    * Background of inset indicator list
    *
    * @designToken galleria.inset.indicator.list.background
    */
    background?: string;
    }
    /**
    * Used to pass tokens of the inset indicator button section
    */
    insetIndicatorButton?: {
        
    /**
    * Background of inset indicator button
    *
    * @designToken galleria.inset.indicator.button.background
    */
    background?: string;
    /**
    * Hover background of inset indicator button
    *
    * @designToken galleria.inset.indicator.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Active background of inset indicator button
    *
    * @designToken galleria.inset.indicator.button.active.background
    */
    activeBackground?: string;
    }
    /**
    * Used to pass tokens of the mask section
    */
    mask?: {
        
    /**
    * Background of mask
    *
    * @designToken galleria.mask.background
    */
    background?: string;
    /**
    * Color of mask
    *
    * @designToken galleria.mask.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the close button section
    */
    closeButton?: {
        
    /**
    * Size of close button
    *
    * @designToken galleria.close.button.size
    */
    size?: string;
    /**
    * Gutter of close button
    *
    * @designToken galleria.close.button.gutter
    */
    gutter?: string;
    /**
    * Background of close button
    *
    * @designToken galleria.close.button.background
    */
    background?: string;
    /**
    * Hover background of close button
    *
    * @designToken galleria.close.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Color of close button
    *
    * @designToken galleria.close.button.color
    */
    color?: string;
    /**
    * Hover color of close button
    *
    * @designToken galleria.close.button.hover.color
    */
    hoverColor?: string;
    /**
    * Border radius of close button
    *
    * @designToken galleria.close.button.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of close button
    */
    focusRing?: {
        
    /**
    * Focus ring width of close button
    *
    * @designToken galleria.close.button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of close button
    *
    * @designToken galleria.close.button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of close button
    *
    * @designToken galleria.close.button.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of close button
    *
    * @designToken galleria.close.button.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of close button
    *
    * @designToken galleria.close.button.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the close button icon section
    */
    closeButtonIcon?: {
        
    /**
    * Size of close button icon
    *
    * @designToken galleria.close.button.icon.size
    */
    size?: string;
    }
}
