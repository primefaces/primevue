import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type AvatarSizeType = 'normal' | 'large' | 'xlarge' | undefined;

type AvatarShapeType = 'square' | 'circle' | undefined;

export interface AvatarProps {
    /**
     * Defines the text to display.
     */
    label?: string | undefined;
    /**
     * Defines the icon to display.
     */
    icon?: string | undefined;
    /**
     * Defines the image to display.
     */
    image?: string | undefined;
    /**
     * Size of the element, valid options are 'normal', 'large' and 'xlarge'.
     * @see AvatarSizeType
     * Default value is 'normal'.
     */
    size?: AvatarSizeType;
    /**
     * Shape of the element, valid options are 'square' and 'circle'.
     * @see AvatarShapeType
     * Default value is 'square'.
     */
    shape?: AvatarShapeType;
}

export interface AvatarSlots {
    /**
     * Content can easily be customized with the default slot instead of using the built-in modes.
     */
    default: () => VNode[];
}

export declare type AvatarEmits = {
    /**
     * Triggered when an error occurs while loading an image file.
     */
    error: () => void;
}

declare class Avatar extends ClassComponent<AvatarProps, AvatarSlots, AvatarEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Avatar: GlobalComponentConstructor<Avatar>
    }
}

/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * Demos:
 *
 * - [Avatar](https://www.primefaces.org/primevue/showcase/#/avatar)
 *
 */
export default Avatar;
