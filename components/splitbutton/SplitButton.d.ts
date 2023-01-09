import { ButtonHTMLAttributes, VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type SplitButtonAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

export interface SplitButtonProps {
    /**
     * Text of the button.
     */
    label?: string | undefined;
    /**
     * Name of the icon.
     */
    icon?: string | undefined;
    /**
     * MenuModel instance to define the overlay items.
     */
    model?: MenuItem[] | undefined;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @see SplitButtonAppendToType
     * Default value is true.
     */
    appendTo?: SplitButtonAppendToType;
    /**
     * When present, it specifies that the element should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Style class of the component.
     */
    class?: any | undefined;
    /**
     * Inline style of the component.
     */
    style?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the default button.
     */
    buttonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the menu button.
     */
    menuButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Name of the menu button icon.
     */
    menuButtonIcon?: string | undefined;
}

export interface SplitButtonSlots {
    /**
     * Button part of the content can easily be customized with the default slot instead of using the built-in modes.
     */
    default: () => VNode[];
}

export declare type SplitButtonEmits = {
    /**
     * Callback to invoke when main button is clicked.
     * @param {Event} event - Browser event.
     */
    click: (event: Event) => void;
};

declare class SplitButton extends ClassComponent<SplitButtonProps, SplitButtonSlots, SplitButtonEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SplitButton: GlobalComponentConstructor<SplitButton>;
    }
}

/**
 *
 * SplitButton groups a set of commands in an overlay with a default command.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/menumodel)
 *
 * Demos:
 *
 * - [SplitButton](https://www.primefaces.org/primevue/splitbutton)
 *
 */
export default SplitButton;
