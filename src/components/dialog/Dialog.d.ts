import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type DialogPositionType = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' | undefined;

type DialogAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

export interface DialogBreakpoints {
    /**
     * Breakpoint for responsive mode.
     *
     * Example:
     *
     * <Dialog :breakpoints="{'960px': '75vw', '640px': '100vw'}" ... />
     *
     * Result:
     *
     * @media screen and (max-width: ${breakpoint[key]}) {
     *      .p-dialog[attributeSelector] {
     *          width: ${breakpoint[value]} !important;
     *      }
     * }
     */
    [key: string]: string;
}

export interface DialogProps {
    /**
     * Title content of the dialog.
     */
    header?: string | undefined;
    /**
     * Footer content of the dialog.
     */
    footer?: string | undefined;
    /**
     * Specifies the visibility of the dialog.
     */
    visible?: boolean | undefined;
    /**
     * Defines if background should be blocked when dialog is displayed.
     */
    modal?: boolean | undefined;
    /**
     * Style of the content section.
     */
    contentStyle?: any;
    /**
     * Style class of the content section.
     */
    contentClass?: any;
    /**
     * When enabled dialog is displayed in RTL direction.
     */
    rtl?: boolean | undefined;
    /**
     * Adds a close icon to the header to hide the dialog.
     * Default value is true.
     */
    closable?: boolean | undefined;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     */
    dismissableMask?: boolean | undefined;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * Default value is true.
     */
    closeOnEscape?: boolean | undefined;
    /**
     * Whether to show the header or not.
     * Default value is true.
     */
    showHeader?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean | undefined;
    /**
     * Aria label of the close icon.
     * Default value is 'close'.
     */
    ariaCloseLabel?: string | undefined;
    /**
     * Position of the dialog, options are 'center', 'top', 'bottom', 'left', 'right', 'topleft', 'topright', 'bottomleft' or 'bottomright'.
     * @see DialogPositionType
     * Default value is 'center'.
     */
    position?: DialogPositionType;
    /**
     * Whether the dialog can be displayed full screen.
     */
    maximizable?: boolean | undefined;
    /**
     * Object literal to define widths per screen size.
     * @see DialogBreakpoints
     */
    breakpoints?: DialogBreakpoints;
    /**
     * Enables dragging to change the position using header.
     * Default value is true.
     */
    draggable?: boolean | undefined;
    /**
     * Keeps dialog in the viewport when dragging.
     * Default value is true.
     */
    keepInViewPort?: boolean | undefined;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * Default value is 0.
     */
    minX?: number | undefined;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * Default value is 0.
     */
    minY?: number | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the dialog gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @see DialogAppendToType
     * Default value is 'body'.
     */
    appendTo?: DialogAppendToType;
    /**
     * Style of the dynamic dialog.
     */
    style?: any;
}

export interface DialogSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
    /**
     * Custom header template.
     */
    header: () => VNode[];
    /**
     * Custom footer template.
     */
    footer: () => VNode[];
}

export declare type DialogEmits = {
    /**
     * Emitted when the visible changes.
     * @param {boolean} value - New value.
     */
    'update:visible': (value: boolean) => void;
    /**
     * Callback to invoke when dialog is hidden.
     */
    'hide': () => void;
    /**
     * Callback to invoke after dialog is hidden.
    */
    'after-hide': () => void;
    /**
     * Callback to invoke when dialog is shown.
     */
    'show': () => void;
    /**
     * Fired when a dialog gets maximized.
     * @param {event} event - Browser event.
     */
    'maximize': (event: Event) => void;
    /**
     * Fired when a dialog gets unmaximized.
     * @param {event} event - Browser event.
     */
    'unmaximize': (event: Event) => void;
    /**
     * Fired when a dialog drag completes.
     * @param {event} event - Browser event.
     */
    'dragend': (event: Event) => void;
}

declare class Dialog extends ClassComponent<DialogProps, DialogSlots, DialogEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Dialog: GlobalComponentConstructor<Dialog>
    }
}

/**
 *
 * Dialog is a container to display content in an overlay window.
 *
 * Demos:
 *
 * - [Dialog](https://www.primefaces.org/primevue/showcase/#/dialog)
 *
 */
export default Dialog;
