/**
 *
 * AvatarGroup is a helper component for Avatar.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module avatargroup
 *
 */
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in AvatarGroup component.
 */
export interface AvatarGroupProps {}

/**
 * Defines valid slots in AvatarGroup component.
 */
export interface AvatarGroupSlots {}

/**
 * Defines valid emits in AvatarGroup component.
 */
export interface AvatarGroupEmits {}

/**
 * **PrimeVue - AvatarGroup**
 *
 * _A set of Avatars can be displayed together using the AvatarGroup component._
 *
 * [Live Demo](https://www.primevue.org/avatargroup/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class AvatarGroup extends ClassComponent<AvatarGroupProps, AvatarGroupSlots, AvatarGroupEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AvatarGroup: GlobalComponentConstructor<AvatarGroup>;
    }
}

export default AvatarGroup;
