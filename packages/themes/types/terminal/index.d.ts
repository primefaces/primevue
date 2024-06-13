
/**
 *
 * Terminal Design Tokens
 *
 * [Live Demo](https://www.primevue.org/terminal/)
 *
 * @module themes/terminal
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TerminalDesignTokens extends ColorSchemeDesignToken<TerminalDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken terminal.background
    */
    background?: string;
    /**
    * Border color of root
    *
    * @designToken terminal.border.color
    */
    borderColor?: string;
    /**
    * Color of root
    *
    * @designToken terminal.color
    */
    color?: string;
    /**
    * Height of root
    *
    * @designToken terminal.height
    */
    height?: string;
    /**
    * Padding of root
    *
    * @designToken terminal.padding
    */
    padding?: string;
    /**
    * Border radius of root
    *
    * @designToken terminal.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the prompt section
    */
    prompt?: {
        
    /**
    * Gap of prompt
    *
    * @designToken terminal.prompt.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the command response section
    */
    commandResponse?: {
        
    /**
    * Margin of command response
    *
    * @designToken terminal.command.response.margin
    */
    margin?: string;
    }
}
