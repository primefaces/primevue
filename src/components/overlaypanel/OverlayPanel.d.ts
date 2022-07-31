import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type OverlayPanelAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

export interface OverlayPanelBreakpoints {
    /**
     * Breakpoint for responsive mode.
     *
     * Example:
     *
     * <OverlayPanel :breakpoints="{'960px': '75vw', '640px': '100vw'}" ... />
     *
     * Result:
     *
     * @media screen and (max-width: ${breakpoint[key]}) {
     *      .p-overlaypanel[attributeSelector] {
     *          width: ${breakpoint[value]} !important;
     *      }
     * }
     */
    [key: string]: string;
}

export interface OverlayPanelProps {
    /**
     * Enables to hide the overlay when outside is clicked.
     * Default value is true.
     */
    dismissable?: boolean;
    /**
     * When enabled, displays a close icon at top right corner.
     */
    showCloseIcon?: boolean;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @see OverlayPanelAppendToType
     * Default value is 'body'.
     */
    appendTo?: OverlayPanelAppendToType;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean;
    /**
     * Aria label of the close icon.
     * Default value is 'close'.
     */
    ariaCloseLabel?: string;
    /**
     * Object literal to define widths per screen size.
     * @see OverlayPanelBreakpoints
     */
    breakpoints?: OverlayPanelBreakpoints;
}

export interface OverlayPanelSlots {
    /**
     * Custom content template.
     */
    default: () => VNode[];
}

export declare type OverlayPanelEmits = {
    /**
     * Callback to invoke when the overlay is shown.
     */
    'show': () => void;
    /**
     * Callback to invoke when the overlay is hidden.
     */
    'hide': () => void;
}

declare class OverlayPanel extends ClassComponent<OverlayPanelProps, OverlayPanelSlots, OverlayPanelEmits> {
    /**
     * Toggles the visibility of the overlay.
     * @param {Event} event - Browser event.
     *
     * @memberof OverlayPanel
     */
    toggle: (event: Event) => void;
    /**
     * Shows the overlay.
     * @param {Event} event - Browser event.
     * @param {*} [target] - Optional target if event.currentTarget should not be used.
     *
     * @memberof OverlayPanel
     */
    show: (event: Event, target?: any) => void;
    /**
     * Hides the overlay.
     *
     * @memberof OverlayPanel
     */
    hide: () => void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        OverlayPanel: GlobalComponentConstructor<OverlayPanel>
    }
}

/**
 *
 * OverlayPanel is a container component positioned as connected to its target.
 *
 * Demos:
 *
 * - [OverlayPanel](https://www.primefaces.org/primevue/showcase/#/overlaypanel)
 *
 */
export default OverlayPanel;
