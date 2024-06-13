
/**
 *
 * PickList Design Tokens
 *
 * [Live Demo](https://www.primevue.org/picklist/)
 *
 * @module themes/picklist
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface PickListDesignTokens extends ColorSchemeDesignToken<PickListDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Gap of root
    *
    * @designToken picklist.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the controls section
    */
    controls?: {
        
    /**
    * Gap of controls
    *
    * @designToken picklist.controls.gap
    */
    gap?: string;
    }
}
