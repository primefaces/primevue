
/**
 *
 * OrderList Design Tokens
 *
 * [Live Demo](https://www.primevue.org/orderlist/)
 *
 * @module themes/orderlist
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface OrderListDesignTokens extends ColorSchemeDesignToken<OrderListDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Gap of root
    *
    * @designToken orderlist.gap
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
    * @designToken orderlist.controls.gap
    */
    gap?: string;
    }
}
