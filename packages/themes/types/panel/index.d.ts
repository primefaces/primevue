
/**
 *
 * Panel Design Tokens
 *
 * [Live Demo](https://www.primevue.org/panel/)
 *
 * @module themes/panel
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface PanelDesignTokens extends ColorSchemeDesignToken<PanelDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken panel.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken panel.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken panel.color
    */
    color?: string;
    /**
    * Border radius of root
    *
    * @designToken panel.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the header section
    */
    header?: {
        
    /**
    * Background of header
    *
    * @designToken panel.header.background
    */
    background?: string;
    /**
    * Color of header
    *
    * @designToken panel.header.color
    */
    color?: string;
    /**
    * Padding of header
    *
    * @designToken panel.header.padding
    */
    padding?: string;
    /**
    * Border color of header
    *
    * @designToken panel.header.border.color
    */
    borderColor?: string;
    /**
    * Border width of header
    *
    * @designToken panel.header.border.width
    */
    borderWidth?: string;
    /**
    * Border radius of header
    *
    * @designToken panel.header.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the toggleable header section
    */
    toggleableHeader?: {
        
    /**
    * Padding of toggleable header
    *
    * @designToken panel.toggleable.header.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the title section
    */
    title?: {
        
    /**
    * Font weight of title
    *
    * @designToken panel.title.font.weight
    */
    fontWeight?: string;
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Padding of content
    *
    * @designToken panel.content.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the footer section
    */
    footer?: {
        
    /**
    * Padding of footer
    *
    * @designToken panel.footer.padding
    */
    padding?: string;
    }
}
