
/**
 *
 * FileUpload Design Tokens
 *
 * [Live Demo](https://www.primevue.org/fileupload/)
 *
 * @module themes/fileupload
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface FileUploadDesignTokens extends ColorSchemeDesignToken<FileUploadDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken fileupload.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken fileupload.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken fileupload.color
    */
    color?: string;
    /**
    * Border radius of root
    *
    * @designToken fileupload.border.radius
    */
    borderRadius?: string;
    /**
    * Transition duration of root
    *
    * @designToken fileupload.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the header section
    */
    header?: {
        
    /**
    * Background of header
    *
    * @designToken fileupload.header.background
    */
    background?: string;
    /**
    * Color of header
    *
    * @designToken fileupload.header.color
    */
    color?: string;
    /**
    * Padding of header
    *
    * @designToken fileupload.header.padding
    */
    padding?: string;
    /**
    * Border width of header
    *
    * @designToken fileupload.header.border.width
    */
    borderWidth?: string;
    /**
    * Border radius of header
    *
    * @designToken fileupload.header.border.radius
    */
    borderRadius?: string;
    /**
    * Gap of header
    *
    * @designToken fileupload.header.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the content section
    */
    content?: {
        
    /**
    * Highlight border color of content
    *
    * @designToken fileupload.content.highlight.border.color
    */
    highlightBorderColor?: string;
    /**
    * Padding of content
    *
    * @designToken fileupload.content.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the file section
    */
    file?: {
        
    /**
    * Padding of file
    *
    * @designToken fileupload.file.padding
    */
    padding?: string;
    /**
    * Gap of file
    *
    * @designToken fileupload.file.gap
    */
    gap?: string;
    /**
    * Border color of file
    *
    * @designToken fileupload.file.border.color
    */
    borderColor?: string;
    /**
    * Info of file
    */
    info?: {
        
    /**
    * Info gap of file
    *
    * @designToken fileupload.file.info.gap
    */
    gap?: string;
    };
    }
    /**
    * Used to pass tokens of the progressbar section
    */
    progressbar?: {
        
    /**
    * Height of progressbar
    *
    * @designToken fileupload.progressbar.height
    */
    height?: string;
    }
    /**
    * Used to pass tokens of the basic section
    */
    basic?: {
        
    /**
    * Gap of basic
    *
    * @designToken fileupload.basic.gap
    */
    gap?: string;
    }
}
