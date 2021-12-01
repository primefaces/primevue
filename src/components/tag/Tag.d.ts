import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type TagSeverityType = 'success' | 'info' | 'warning' | 'danger' | undefined;

export interface TagProps {
    /**
     * Value to display inside the tag.
     */
    value?: any;
    /**
     * Severity type of the tag.
     * @see TagSeverityType
     */
    severity?: TagSeverityType;
    /**
     * Whether the corners of the tag are rounded.
     */
    rounded?: boolean | undefined;
    /**
     * Icon of the tag to display next to the value.
     */
    icon?: string | undefined;
}

export interface TagSlots {
    /**
     * Custom content template
     */
    default: () => VNode[];
}

export declare type TagEmits = {
}

declare class Tag extends ClassComponent<TagProps, TagSlots, TagEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Tag: GlobalComponentConstructor<Tag>
    }
}

/**
 *
 * Tag component is used to categorize content.
 *
 * Demos:
 *
 * - [Tag](https://www.primefaces.org/primevue/showcase/#/tag)
 *
 */
export default Tag;
