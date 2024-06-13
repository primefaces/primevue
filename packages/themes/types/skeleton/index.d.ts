
/**
 *
 * Skeleton Design Tokens
 *
 * [Live Demo](https://www.primevue.org/skeleton/)
 *
 * @module themes/skeleton
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface SkeletonDesignTokens extends ColorSchemeDesignToken<SkeletonDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border radius of root
    *
    * @designToken skeleton.border.radius
    */
    borderRadius?: string;
    /**
    * Background of root
    *
    * @designToken skeleton.background
    */
    background?: string;
    /**
    * Animation background of root
    *
    * @designToken skeleton.animation.background
    */
    animationBackground?: string;
    }
}
