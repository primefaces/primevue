export interface DynamicDialogOptions {
    /**
     * Title content of the dialog.
     */
    header?: string | undefined;
    /**
     * Footer content of the dialog.
     */
    footer?: string | undefined;
    /**
     * Width of the component.
     */
    width?: number | undefined;
    /**
     * Height of the component.
     */
    height?: number | undefined;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * Default value is true.
     */
    closeOnEscape: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to automatically manage layering.
     */
    autoZIndex?: boolean | undefined;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     */
    dismissableMask?: boolean | undefined;
    /**
     * When enabled dialog is displayed in RTL direction.
     */
    rtl?: boolean | undefined;
    /**
     * Adds a close icon to the header to hide the dialog.
     */
    closable?: boolean | undefined;
    /**
     * Whether to show the header or not.
     */
    showHeader?: boolean | undefined;
    /**
     * Style class of the component.
     */
    class?: string | undefined;
    /**
     * Style of the component.
     */
    style?: string | undefined;
    /**
     * Style class of the content section.
     */
    contentClass?: string | undefined;
    /**
     * Style of the content section.
     */
    contentStyle?: string | undefined;
}