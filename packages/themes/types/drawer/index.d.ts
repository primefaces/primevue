
/**
 *
 * Drawer Design Tokens
 *
 * [Live Demo](https://www.primevue.org/drawer/)
 *
 * @module themes/drawer
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface DrawerDesignTokens extends ColorSchemeDesignToken<DrawerDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken drawer.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken drawer.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken drawer.color
    */
    color?: string;
    /**
    * Border radius of root
    *
    * @designToken drawer.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of root
    *
    * @designToken drawer.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the header section
    */
    header?: {
        
    /**
    * Padding of header
    *
    * @designToken drawer.header.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the title section
    */
    title?: {
        
    /**
    * Font size of title
    *
    * @designToken drawer.title.font.size
    */
    fontSize?: string;
    /**
    * Font weight of title
    *
    * @designToken drawer.title.font.weight
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
    * @designToken drawer.content.padding
    */
    padding?: string;
    }
}
