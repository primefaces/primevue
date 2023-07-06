/**
 *
 * Badge directive is a small status indicator for another element.
 *
 * [Live Demo](https://primevue.org/badge)
 *
 * @module badgedirective
 */
import { DirectiveBinding, ObjectDirective } from 'vue';
import { DirectiveHooks } from '../basedirective';

export declare type BadgeDirectivePassThroughOptionType = BadgeDirectivePassThroughAttributes | null | undefined;

/**
 * Defines options of Badge.
 */
export interface BadgeDirectiveOptions {
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {BadgeDirectivePassThroughOptions}
     */
    pt?: BadgeDirectivePassThroughOptions;
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
     * Uses to pass attributes to the root's DOM element.
     */
    root?: BadgeDirectivePassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
     * Warning severity for Badge directive.
     *  @defaultValue false
     */
    warning?: boolean | undefined;
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
