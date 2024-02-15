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
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough, HintedString } from '../ts-helpers';

export declare type TagPassThroughOptionType = TagPassThroughAttributes | ((options: TagPassThroughMethodOptions) => TagPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TagPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TagProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TagProps.pt}
 */
export interface TagPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TagPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: TagPassThroughOptionType;
    /**
     * Used to pass attributes to the value's DOM element.
     */
    value?: TagPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TagPassThroughAttributes {
    [key: string]: any;
}

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
    severity?: HintedString<'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'contrast'> | undefined;
    /**
     * Whether the corners of the tag are rounded.
     * @defaultValue false
     */
    rounded?: boolean | undefined;
    /**
     * Icon of the tag to display next to the value.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    icon?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TagPassThroughOptions}
     */
    pt?: PassThrough<TagPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Tag component.
 */
export interface TagSlots {
    /**
     * Custom content template
     */
    default(): VNode[];
    /**
     * Custom icon template
     */
    icon(): VNode[];
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
