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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type DialogPassThroughOptionType = DialogPassThroughAttributes | ((options: DialogPassThroughMethodOptions) => DialogPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DialogPassThroughMethodOptions {
    instance: any;
    props: DialogProps;
    state: DialogState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link DialogProps.pt}
 */
export interface DialogPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the header's DOM element.
     */
    header?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the header title's DOM element.
     */
    headerTitle?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the header icons' DOM element.
     */
    headerIcons?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the maximizable button's DOM element.
     */
    maximizableButton?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the maximizable icon's DOM element.
     */
    maximizableIcon?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the close button's component.
     */
    closeButton?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the close button icon's component.
     */
    closeButtonIcon?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the footer's DOM element.
     */
    footer?: DialogPassThroughOptionType;
    /**
     * Uses to pass attributes to the mask's DOM element.
     */
    mask?: DialogPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DialogPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Dialog component.
 */
export interface DialogState {
    /**
     * Current visible state of the container as a boolean.
     * @defaultValue false
     */
    containerVisible: boolean;
    /**
     * Current maximized state as a boolean.
     * @defaultValue false
     */
    maximized: boolean;
}

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
     * @deprecated since v3.27.0. Use 'closeicon' slot.
     */
    closeIcon?: string | undefined;
    /**
     * Icon to display in the dialog maximize button when dialog is not maximized.
     * @deprecated since v3.27.0. Use 'maximizeicon' slot.
     */
    maximizeIcon?: string | undefined;
    /**
     * Icon to display in the dialog maximize button when dialog is minimized.
     * @deprecated since v3.27.0. Use 'minimizeicon' slot.
     */
    minimizeIcon?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {DialogPassThroughOptions}
     */
    pt?: DialogPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
    /**
     * Custom close icon template.
     */
    closeicon(): VNode[];
    /**
     * Custom maximize icon template of dialog.
     * @param {Object} scope - maximize icon slot's params.
     */
    maximizeicon(scope: {
        /**
         * Maximized state as a boolean
         */
        maximized: boolean;
    }): VNode[];
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
