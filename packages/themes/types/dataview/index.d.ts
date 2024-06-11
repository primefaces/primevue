
/**
 *
 * DataView Design Tokens
 *
 * [Live Demo](https://www.primevue.org/dataview/)
 *
 * @module themes/dataview
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface DataViewDesignTokens extends ColorSchemeDesignToken<DataViewDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border color of root
    *
    * @designToken dataview.border.color
    */
    borderColor?: string;
    /**
    * Border width of root
    *
    * @designToken dataview.border.width
    */
    borderWidth?: string;
    /**
    * Border radius of root
    *
    * @designToken dataview.border.radius
    */
    borderRadius?: string;
    /**
    * Padding of root
    *
    * @designToken dataview.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the header section
    */
    header?: {
        
    /**
    * Background of header
    *
    * @designToken dataview.header.background
    */
    background?: string;
    /**
    * Color of header
    *
    * @designToken dataview.header.color
    */
    color?: string;
    /**
    * Border color of header
    *
    * @designToken dataview.header.border.color
    */
    borderColor?: string;
    /**
    * Border width of header
    *
    * @designToken dataview.header.border.width
    */
    borderWidth?: string;
    /**
    * Padding of header
    *
    * @designToken dataview.header.padding
    */
    padding?: string;
    /**
    * Border radius of header
    *
    * @designToken dataview.header.border.radius
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
    * @designToken dataview.content.background
    */
    background?: string;
    /**
    * Color of content
    *
    * @designToken dataview.content.color
    */
    color?: string;
    /**
    * Border color of content
    *
    * @designToken dataview.content.border.color
    */
    borderColor?: string;
    /**
    * Border width of content
    *
    * @designToken dataview.content.border.width
    */
    borderWidth?: string;
    /**
    * Padding of content
    *
    * @designToken dataview.content.padding
    */
    padding?: string;
    /**
    * Border radius of content
    *
    * @designToken dataview.content.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the footer section
    */
    footer?: {
        
    /**
    * Background of footer
    *
    * @designToken dataview.footer.background
    */
    background?: string;
    /**
    * Color of footer
    *
    * @designToken dataview.footer.color
    */
    color?: string;
    /**
    * Border color of footer
    *
    * @designToken dataview.footer.border.color
    */
    borderColor?: string;
    /**
    * Border width of footer
    *
    * @designToken dataview.footer.border.width
    */
    borderWidth?: string;
    /**
    * Padding of footer
    *
    * @designToken dataview.footer.padding
    */
    padding?: string;
    /**
    * Border radius of footer
    *
    * @designToken dataview.footer.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the paginator top section
    */
    paginatorTop?: {
        
    /**
    * Border color of paginator top
    *
    * @designToken dataview.paginator.top.border.color
    */
    borderColor?: string;
    /**
    * Border width of paginator top
    *
    * @designToken dataview.paginator.top.border.width
    */
    borderWidth?: string;
    }
    /**
    * Used to pass tokens of the paginator bottom section
    */
    paginatorBottom?: {
        
    /**
    * Border color of paginator bottom
    *
    * @designToken dataview.paginator.bottom.border.color
    */
    borderColor?: string;
    /**
    * Border width of paginator bottom
    *
    * @designToken dataview.paginator.bottom.border.width
    */
    borderWidth?: string;
    }
}
