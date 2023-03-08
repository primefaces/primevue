/**
 *
 * Dialog is a container to display content in an overlay window.
 *
 * [Live Demo](https://www.primevue.org/dialog)
 *
 * @module dialog
 *
 */
import { HTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom breakpoint metadata.
 */
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

/**
 * Defines valid properties in Dialog component.
 */
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
     * @defaultValue false
     */
    visible?: boolean | undefined;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @defaultValue false
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
     * Uses to pass all properties of the HTMLDivElement to the overlay panel inside the component.
     */
    contentProps?: HTMLAttributes | undefined;
    /**
     * When enabled dialog is displayed in RTL direction.
     * @defaultValue false
     */
    rtl?: boolean | undefined;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @defaultValue true
     */
    closable?: boolean | undefined;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @defaultValue false
     */
    dismissableMask?: boolean | undefined;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @defaultValue true
     */
    closeOnEscape?: boolean | undefined;
    /**
     * Whether to show the header or not.
     * @defaultValue true
     */
    showHeader?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Position of the dialog.
     * @defaultValue center
     */
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' | undefined;
    /**
     * Whether the dialog can be displayed full screen.
     * @defaultValue false
     */
    maximizable?: boolean | undefined;
    /**
     * Object literal to define widths per screen size.
     */
    breakpoints?: DialogBreakpoints;
    /**
     * Enables dragging to change the position using header.
     * @defaultValue true
     */
    draggable?: boolean | undefined;
    /**
     * Keeps dialog in the viewport when dragging.
     * @defaultValue true
     */
    keepInViewPort?: boolean | undefined;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * @defaultValue 0.
     */
    minX?: number | undefined;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @defaultValue 0
     */
    minY?: number | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the dialog gets attached.
     * @defaultValue body
     */
    appendTo?: 'body' | 'self' | string | undefined | HTMLElement;
    /**
     * Style of the dynamic dialog.
     */
    style?: any;
    /**
     * Icon to display in the dialog close button.
     * @defaultValue pi pi-times
     */
    closeIcon?: string | undefined;
    /**
     * Icon to display in the dialog maximize button when dialog is not maximized.
     * @defaultValue pi pi-window-maximize
     */
    maximizeIcon?: string | undefined;
    /**
     * Icon to display in the dialog maximize button when dialog is maximized.
     * @defaultValue pi pi-window-minimize
     */
    minimizeIcon?: string | undefined;
}

/**
 * Defines valid slots in Dialog component.
 */
export interface DialogSlots {
    /**
     * Default content slot.
     */
    default(): VNode[];
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * Custom footer template.
     */
    footer(): VNode[];
}

/**
 * Defines valid emits in Dialog component.
 */
export interface DialogEmits {
    /**
     * Emitted when the visible changes.
     * @param {boolean} value - New value.
     */
    'update:visible'(value: boolean): void;
    /**
     * Callback to invoke when dialog is hidden.
     */
    hide(): void;
    /**
     * Callback to invoke after dialog is hidden.
     */
    'after-hide'(): void;
    /**
     * Callback to invoke when dialog is shown.
     */
    show(): void;
    /**
     * Fired when a dialog gets maximized.
     * @param {event} event - Browser event.
     */
    maximize(event: Event): void;
    /**
     * Fired when a dialog gets unmaximized.
     * @param {event} event - Browser event.
     */
    unmaximize(event: Event): void;
    /**
     * Fired when a dialog drag completes.
     * @param {event} event - Browser event.
     */
    dragend(event: Event): void;
}

/**
 * **PrimeVue - Dialog**
 *
 * _Dialog is a container to display content in an overlay window._
 *
 * [Live Demo](https://www.primevue.org/dialog/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Dialog extends ClassComponent<DialogProps, DialogSlots, DialogEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Dialog: GlobalComponentConstructor<Dialog>;
    }
}

export default Dialog;
