import type { DefineComponent, EmitFn, GlobalComponentConstructor, HintedString } from '@primevue/core';
import { VNode } from 'vue';

type PortalAppendToType = HintedString<'body' | 'self'> | undefined | HTMLElement;

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

declare type PortalEmitsOptions = {};

export declare type PortalEmits = EmitFn<PortalEmitsOptions>;

declare const Portal: DefineComponent<PortalProps, PortalSlots, PortalEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Portal: GlobalComponentConstructor<PortalProps, PortalSlots, PortalEmits>;
    }
}

export default Portal;
