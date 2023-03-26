/**
 *
 * Tag component is used to categorize content.
 *
 * [Live Demo](https://www.primevue.org/tag)
 *
 * @module tag
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Tag component.
 */
export interface TagProps {
    /**
     * Value to display inside the tag.
     */
    value?: any;
    /**
     * Severity type of the tag.
     */
    severity?: 'success' | 'info' | 'warning' | 'danger' | undefined;
    /**
     * Whether the corners of the tag are rounded.
     * @defaultValue false
     */
    rounded?: boolean | undefined;
    /**
     * Icon of the tag to display next to the value.
     */
    icon?: string | undefined;
}

/**
 * Defines valid slots in Tag component.
 */
export interface TagSlots {
    /**
     * Custom content template
     */
    default(): VNode[];
}

/**
 * Defines valid emits in Tag component.
 */
export interface TagEmits {}

/**
 * **PrimeVue - Tag**
 *
 * _Tag component is used to categorize content._
 *
 * [Live Demo](https://www.primevue.org/tag/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Tag extends ClassComponent<TagProps, TagSlots, TagEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Tag: GlobalComponentConstructor<Tag>;
    }
}

export default Tag;
