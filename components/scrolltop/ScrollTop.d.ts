import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type ScrollTopTargetType = 'window' | 'parent' | undefined;

export interface ScrollTopProps {
    /**
     * Target of the ScrollTop.
     * @see ScrollTopTargetType
     * Default value is 'window'.
     */
    target?: ScrollTopTargetType;
    /**
     * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
     * Default value is 400.
     */
    threshold?: number | undefined;
    /**
     * Icon to display.
     * Default value is 'pi pi-chevron-up'.
     */
    icon?: string | undefined;
    /**
     * Defines the scrolling behaviour, 'smooth' adds an animation and 'auto' scrolls with a jump.
     * Default value is 'smooth'.
     */
    behavior?: string | undefined;
}

export interface ScrollTopSlots {
}

export declare type ScrollTopEmits = {
}

declare class ScrollTop extends ClassComponent<ScrollTopProps, ScrollTopSlots, ScrollTopEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ScrollTop: GlobalComponentConstructor<ScrollTop>
    }
}

/**
 *
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 *
 * Demos:
 *
 * - [ScrollTop](https://www.primefaces.org/primevue/showcase/#/scrolltop)
 *
 */
export default ScrollTop;
