import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

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
     * Style class of the component.
     */
    class?: any;
    /**
     * Inline style of the component.
     */
    style?: any;
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
    'click': (event: Event) => void;
}

declare class SplitButton extends ClassComponent<SplitButtonProps, SplitButtonSlots, SplitButtonEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SplitButton: GlobalComponentConstructor<SplitButton>
    }
}

/**
 *
 * SplitButton groups a set of commands in an overlay with a default command.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [SplitButton](https://www.primefaces.org/primevue/showcase/#/splitbutton)
 *
 */
export default SplitButton;
