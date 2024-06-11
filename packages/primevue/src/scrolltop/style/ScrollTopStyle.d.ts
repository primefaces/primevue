/**
 *
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 *
 * [Live Demo](https://www.primevue.org/scrolltop/)
 *
 * @module scrolltopstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ScrollTopClasses {
    /**
     * Class name of the root element
     */
    root = 'p-scrolltop',
    /**
     * Class name of the icon element
     */
    icon = 'p-scrolltop-icon'
}

export interface ScrollTopStyle extends BaseStyle {}
