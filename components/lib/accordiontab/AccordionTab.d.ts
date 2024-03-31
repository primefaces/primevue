/**
 *
 * AccordionTab is a helper component for Accordion.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module accordiontab
 *
 */
import { AnchorHTMLAttributes, HTMLAttributes, TransitionProps, VNode } from 'vue';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type AccordionTabPassThroughOptionType = AccordionTabPassThroughAttributes | ((options: AccordionTabPassThroughMethodOptions) => AccordionTabPassThroughAttributes | string) | string | null | undefined;

export declare type AccordionTabPassThroughTransitionType = TransitionProps | ((options: AccordionTabPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface AccordionTabPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: AccordionTabProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines current options.
     */
    context: AccordionTabContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link AccordionTabProps.pt}
 */
export interface AccordionTabPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionTabPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: AccordionTabPassThroughOptionType;
    /**
     * Used to pass attributes to the headeraction's DOM element.
     */
    headerAction?: AccordionTabPassThroughOptionType;
    /**
     * Used to pass attributes to the headericon's DOM element.
     */
    headerIcon?: AccordionTabPassThroughOptionType;
    /**
     * Used to pass attributes to the headertitle's DOM element.
     */
    headerTitle?: AccordionTabPassThroughOptionType;
    /**
     * Used to pass attributes to the toggleablecontent's DOM element.
     */
    toggleableContent?: AccordionTabPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: AccordionTabPassThroughOptionType;
    /**
     * Used to control Vue Transition API.
     */
    transition?: AccordionTabPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface AccordionTabPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in AccordionTab component.
 */
export interface AccordionTabProps {
    /**
     * Orientation of tab headers.
     */
    header?: string | undefined;
    /**
     * Inline style of the tab header.
     */
    headerStyle?: any;
    /**
     * Style class of the tab header.
     */
    headerClass?: any;
    /**
     * Used to pass all properties of the HTMLDivElement to the tab header.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    headerProps?: HTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLAnchorElement to the focusable anchor element inside the tab header.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    headerActionProps?: AnchorHTMLAttributes | undefined;
    /**
     * Inline style of the tab content.
     */
    contentStyle?: any;
    /**
     * Style class of the tab content.
     */
    contentClass?: any;
    /**
     * Used to pass all properties of the HTMLDivElement to the tab content.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    contentProps?: HTMLAttributes | undefined;
    /**
     * Whether the tab is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AccordionTabPassThroughOptions}
     */
    pt?: PassThrough<AccordionTabPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in AccordionTab component.
 */
export interface AccordionTabContext {
    /**
     * Current index of the tab.
     */
    index: number;
    /**
     * Count of tabs
     */
    count: number;
    /**
     * Whether the tab is first.
     */
    first: boolean;
    /**
     * Whether the tab is last.
     */
    last: boolean;
    /**
     * Whether the tab is active.
     */
    active: boolean;
}

/**
 * Defines valid slots in AcordionTab slots.
 */
export interface AccordionTabSlots {
    /**
     * Default slot for content.
     */
    default(): VNode[];
    /**
     * Custom content for the title section of a AccordionTab is defined using the header template.
     */
    header(): VNode[];
    /**
     * Custom icon for the header section of a AccordionTab is defined using the headericon template.
     * @param {Object} scope - header slot's params.
     */
    headericon(scope: {
        /**
         * Index of the tab
         */
        index: number;
        /**
         * Whether the tab is active
         * @param {number} index - Index of the tab
         * @deprecated since v3.40.0. Use 'active' property instead.
         */
        isTabActive: (index: number) => void;
        /**
         * Whether the tab is active
         * @param {number} index - Index of the tab
         */
        active: (index: number) => void;
    }): VNode[];
}

/**
 * Defines valid emits in AcordionTab component.
 */
export interface AccordionTabEmits {}

/**
 * **PrimeVue - Accordion**
 *
 * _AccordionTab is a helper component for Accordion.._
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class AccordionTab extends ClassComponent<AccordionTabProps, AccordionTabSlots, AccordionTabEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        AccordionTab: GlobalComponentConstructor<AccordionTab>;
    }
}

export default AccordionTab;
