/**
 *
 * Badge directive is a small status indicator for another element.
 *
 * [Live Demo](https://primevue.org/badge)
 *
 * @module badgedirective
 */
import type { DesignToken, PassThrough } from '@primevue/core';
import type { DirectiveHooks } from '@primevue/core/basedirective';
import type { PassThroughOptions } from 'primevue/passthrough';
import { DirectiveBinding, ObjectDirective } from 'vue';

export declare type BadgeDirectivePassThroughOptionType = BadgeDirectivePassThroughAttributes | ((options: BadgeDirectivePassThroughMethodOptions) => BadgeDirectivePassThroughAttributes) | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface BadgeDirectivePassThroughMethodOptions {
    context: BadgeContext;
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
 * Defines options of Badge.
 */
export interface BadgeDirectiveOptions {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {BadgeDirectivePassThroughOptions}
     */
    pt?: PassThrough<BadgeDirectivePassThroughOptions>;
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
 * Custom passthrough(pt) options.
 * @see {@link BadgeDirectiveOptions.pt}
 */
export interface BadgeDirectivePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BadgeDirectivePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface BadgeDirectivePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current options in Badge directive.
 */
export interface BadgeContext {
    /**
     * Current info state as a boolean.
     * @defaultValue true
     */
    info: boolean;
    /**
     * Current success state as a boolean.
     * @defaultValue false
     */
    success: boolean;
    /**
     * Current warn state as a boolean.
     * @defaultValue false
     */
    warn: boolean;
    /**
     * Current danger state as a boolean.
     * @defaultValue false
     */
    danger: boolean;
    /**
     * Current gutter state as a boolean.
     */
    nogutter: boolean;
    /**
     * Current dot state as a boolean.
     */
    dot: boolean;
}

/**
 * Defines modifiers of Badge directive.
 */
export interface BadgeDirectiveModifiers {
    /**
     * Info severity for Badge directive.
     *  @defaultValue true
     */
    info?: boolean | undefined;
    /**
     * Success severity for Badge directive.
     * @defaultValue false
     */
    success?: boolean | undefined;
    /**
     * warn severity for Badge directive.
     *  @defaultValue false
     */
    warn?: boolean | undefined;
    /**
     * Danger severity for Badge directive.
     *  @defaultValue false
     */
    danger?: boolean | undefined;
}

/**
 * Binding of Badge directive.
 */
export interface BadgeDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the Badge.
     */
    value?: string | BadgeDirectiveOptions | undefined;
    /**
     * Modifiers of the Badge.
     * @type {BadgeDirectiveModifiers}
     */
    modifiers?: BadgeDirectiveModifiers | undefined;
}

/**
 * **PrimeVue - Badge**
 *
 * _Badge directive provides advisory information for a component._
 *
 * [Live Demo](https://www.primevue.org/badge/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare const BadgeDirective: ObjectDirective;

export default BadgeDirective;
