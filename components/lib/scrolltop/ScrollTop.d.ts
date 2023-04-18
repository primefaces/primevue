/**
 *
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 *
 * [Live Demo](https://www.primevue.org/scrolltop/)
 *
 * @module scrolltop
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in ScrollTop component.
 */
export interface ScrollTopProps {
    /**
     * Target of the ScrollTop.
     * @defaultValue window
     */
    target?: 'window' | 'parent' | undefined;
    /**
     * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
     * @defaultValue 400
     */
    threshold?: number | undefined;
    /**
     * Icon to display.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    icon?: string | undefined;
    /**
     * Defines the scrolling behaviour, 'smooth' adds an animation and 'auto' scrolls with a jump.
     * @defaultValue smooth
     */
    behavior?: string | undefined;
}

/**
 * Defines valid slots in ScrollTop component.
 */
export interface ScrollTopSlots {
    /**
     * Custom scrolltop icon template.
     */
    icon(): VNode[];
}

/**
 * Defines valid emits in ScrollTop component.
 */
export interface ScrollTopEmits {}

/**
 * **PrimeVue - ScrollTop**
 *
 * _ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly._
 *
 * [Live Demo](https://www.primevue.org/scrolltop/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class ScrollTop extends ClassComponent<ScrollTopProps, ScrollTopSlots, ScrollTopEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ScrollTop: GlobalComponentConstructor<ScrollTop>;
    }
}

export default ScrollTop;
