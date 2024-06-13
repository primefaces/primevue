
/**
 *
 * MeterGroup Design Tokens
 *
 * [Live Demo](https://www.primevue.org/metergroup/)
 *
 * @module themes/metergroup
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface MeterGroupDesignTokens extends ColorSchemeDesignToken<MeterGroupDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border radius of root
    *
    * @designToken metergroup.border.radius
    */
    borderRadius?: string;
    /**
    * Gap of root
    *
    * @designToken metergroup.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the meters section
    */
    meters?: {
        
    /**
    * Background of meters
    *
    * @designToken metergroup.meters.background
    */
    background?: string;
    /**
    * Size of meters
    *
    * @designToken metergroup.meters.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the label section
    */
    label?: {
        
    /**
    * Gap of label
    *
    * @designToken metergroup.label.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the label marker section
    */
    labelMarker?: {
        
    /**
    * Size of label marker
    *
    * @designToken metergroup.label.marker.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the label icon section
    */
    labelIcon?: {
        
    /**
    * Size of label icon
    *
    * @designToken metergroup.label.icon.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the label list section
    */
    labelList?: {
        
    /**
    * Vertical gap of label list
    *
    * @designToken metergroup.label.list.vertical.gap
    */
    verticalGap?: string;
    /**
    * Horizontal gap of label list
    *
    * @designToken metergroup.label.list.horizontal.gap
    */
    horizontalGap?: string;
    }
}
