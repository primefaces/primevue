
/**
 *
 * Message Design Tokens
 *
 * [Live Demo](https://www.primevue.org/message/)
 *
 * @module themes/message
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface MessageDesignTokens extends ColorSchemeDesignToken<MessageDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border radius of root
    *
    * @designToken message.border.radius
    */
    borderRadius?: string;
    /**
    * Border width of root
    *
    * @designToken message.border.width
    */
    borderWidth?: string;
    /**
    * Transition duration of root
    *
    * @designToken message.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Padding of content
    *
    * @designToken message.content.padding
    */
    padding?: string;
    /**
    * Gap of content
    *
    * @designToken message.content.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the text section
    */
    text?: {
        
    /**
    * Font size of text
    *
    * @designToken message.text.font.size
    */
    fontSize?: string;
    /**
    * Font weight of text
    *
    * @designToken message.text.font.weight
    */
    fontWeight?: string;
    }
    /**
    * Used to pass tokens of the icon section
    */
    icon?: {
        
    /**
    * Size of icon
    *
    * @designToken message.icon.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the close button section
    */
    closeButton?: {
        
    /**
    * Width of close button
    *
    * @designToken message.close.button.width
    */
    width?: string;
    /**
    * Height of close button
    *
    * @designToken message.close.button.height
    */
    height?: string;
    /**
    * Border radius of close button
    *
    * @designToken message.close.button.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of close button
    */
    focusRing?: {
        
    /**
    * Focus ring width of close button
    *
    * @designToken message.close.button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of close button
    *
    * @designToken message.close.button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring offset of close button
    *
    * @designToken message.close.button.focus.ring.offset
    */
    offset?: string;
    };
    }
    /**
    * Used to pass tokens of the close icon section
    */
    closeIcon?: {
        
    /**
    * Size of close icon
    *
    * @designToken message.close.icon.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the info section
    */
    info?: {
        
    /**
    * Background of info
    *
    * @designToken message.info.background
    */
    background?: string;
    /**
    * Border color of info
    *
    * @designToken message.info.border.color
    */
    borderColor?: string;
    /**
    * Color of info
    *
    * @designToken message.info.color
    */
    color?: string;
    /**
    * Shadow of info
    *
    * @designToken message.info.shadow
    */
    shadow?: string;
    /**
    * Close button of info
    */
    closeButton?: {
        
    /**
    * Close button hover background of info
    *
    * @designToken message.info.close.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Close button focus ring of info
    */
    focusRing?: {
        
    /**
    * Close button focus ring color of info
    *
    * @designToken message.info.close.button.focus.ring.color
    */
    color?: string;
    /**
    * Close button focus ring shadow of info
    *
    * @designToken message.info.close.button.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    }
    /**
    * Used to pass tokens of the success section
    */
    success?: {
        
    /**
    * Background of success
    *
    * @designToken message.success.background
    */
    background?: string;
    /**
    * Border color of success
    *
    * @designToken message.success.border.color
    */
    borderColor?: string;
    /**
    * Color of success
    *
    * @designToken message.success.color
    */
    color?: string;
    /**
    * Shadow of success
    *
    * @designToken message.success.shadow
    */
    shadow?: string;
    /**
    * Close button of success
    */
    closeButton?: {
        
    /**
    * Close button hover background of success
    *
    * @designToken message.success.close.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Close button focus ring of success
    */
    focusRing?: {
        
    /**
    * Close button focus ring color of success
    *
    * @designToken message.success.close.button.focus.ring.color
    */
    color?: string;
    /**
    * Close button focus ring shadow of success
    *
    * @designToken message.success.close.button.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    }
    /**
    * Used to pass tokens of the warn section
    */
    warn?: {
        
    /**
    * Background of warn
    *
    * @designToken message.warn.background
    */
    background?: string;
    /**
    * Border color of warn
    *
    * @designToken message.warn.border.color
    */
    borderColor?: string;
    /**
    * Color of warn
    *
    * @designToken message.warn.color
    */
    color?: string;
    /**
    * Shadow of warn
    *
    * @designToken message.warn.shadow
    */
    shadow?: string;
    /**
    * Close button of warn
    */
    closeButton?: {
        
    /**
    * Close button hover background of warn
    *
    * @designToken message.warn.close.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Close button focus ring of warn
    */
    focusRing?: {
        
    /**
    * Close button focus ring color of warn
    *
    * @designToken message.warn.close.button.focus.ring.color
    */
    color?: string;
    /**
    * Close button focus ring shadow of warn
    *
    * @designToken message.warn.close.button.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    }
    /**
    * Used to pass tokens of the error section
    */
    error?: {
        
    /**
    * Background of error
    *
    * @designToken message.error.background
    */
    background?: string;
    /**
    * Border color of error
    *
    * @designToken message.error.border.color
    */
    borderColor?: string;
    /**
    * Color of error
    *
    * @designToken message.error.color
    */
    color?: string;
    /**
    * Shadow of error
    *
    * @designToken message.error.shadow
    */
    shadow?: string;
    /**
    * Close button of error
    */
    closeButton?: {
        
    /**
    * Close button hover background of error
    *
    * @designToken message.error.close.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Close button focus ring of error
    */
    focusRing?: {
        
    /**
    * Close button focus ring color of error
    *
    * @designToken message.error.close.button.focus.ring.color
    */
    color?: string;
    /**
    * Close button focus ring shadow of error
    *
    * @designToken message.error.close.button.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    }
    /**
    * Used to pass tokens of the secondary section
    */
    secondary?: {
        
    /**
    * Background of secondary
    *
    * @designToken message.secondary.background
    */
    background?: string;
    /**
    * Border color of secondary
    *
    * @designToken message.secondary.border.color
    */
    borderColor?: string;
    /**
    * Color of secondary
    *
    * @designToken message.secondary.color
    */
    color?: string;
    /**
    * Shadow of secondary
    *
    * @designToken message.secondary.shadow
    */
    shadow?: string;
    /**
    * Close button of secondary
    */
    closeButton?: {
        
    /**
    * Close button hover background of secondary
    *
    * @designToken message.secondary.close.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Close button focus ring of secondary
    */
    focusRing?: {
        
    /**
    * Close button focus ring color of secondary
    *
    * @designToken message.secondary.close.button.focus.ring.color
    */
    color?: string;
    /**
    * Close button focus ring shadow of secondary
    *
    * @designToken message.secondary.close.button.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    }
    /**
    * Used to pass tokens of the contrast section
    */
    contrast?: {
        
    /**
    * Background of contrast
    *
    * @designToken message.contrast.background
    */
    background?: string;
    /**
    * Border color of contrast
    *
    * @designToken message.contrast.border.color
    */
    borderColor?: string;
    /**
    * Color of contrast
    *
    * @designToken message.contrast.color
    */
    color?: string;
    /**
    * Shadow of contrast
    *
    * @designToken message.contrast.shadow
    */
    shadow?: string;
    /**
    * Close button of contrast
    */
    closeButton?: {
        
    /**
    * Close button hover background of contrast
    *
    * @designToken message.contrast.close.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Close button focus ring of contrast
    */
    focusRing?: {
        
    /**
    * Close button focus ring color of contrast
    *
    * @designToken message.contrast.close.button.focus.ring.color
    */
    color?: string;
    /**
    * Close button focus ring shadow of contrast
    *
    * @designToken message.contrast.close.button.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    }
}
