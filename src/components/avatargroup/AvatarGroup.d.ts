import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface AvatarGroupProps {
}

export interface AvatarGroupSlots {
}

export declare type AvatarGroupEmits = {
}

declare class AvatarGroup extends ClassComponent<AvatarGroupProps, AvatarGroupSlots, AvatarGroupEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AvatarGroup: GlobalComponentConstructor<AvatarGroup>
    }
}

/**
 *
 * A set of Avatars can be displayed together using the AvatarGroup component.
 *
 * Helper Components:
 *
 * - Avatar
 *
 * Demos:
 *
 * - [AvatarGroup](https://www.primefaces.org/primevue/showcase/#/avatar)
 *
 */
export default AvatarGroup;
