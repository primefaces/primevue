import { Ref, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type PortalAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

export interface PortalProps {
    /**
     * A valid query selector or an HTMLElement to specify where the dialog gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @see PortalAppendToType
     * Default value is 'body'.
     */
    appendTo?: PortalAppendToType;
    /**
     * If disabled, the Portal feature is eliminated and the content is displayed directly.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
}

export interface PortalSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

export declare type PortalEmits = {};

/**
 * Provides a way to globally set the appendTo value for all Portals, used if the appendTo prop is set to 'body' (default).
 * It is useful for e.g when you are building web components and you need to portal into another web component on the host page to inherit styles.
 */
export declare const globalAppendTo: Ref<HTMLElement>

declare class Portal extends ClassComponent<PortalProps, PortalSlots, PortalEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Portal: GlobalComponentConstructor<Portal>;
    }
}

export default Portal;
