/**
 *
 * Badge directive is a small status indicator for another element.
 *
 * - [Live Demo](https://primevue.org/badge)
 */
import { DirectiveBinding, ObjectDirective } from 'vue';

/**
 * Defines modifiers of Badge directive.
 */
export declare type BadgeDirectiveModifiers = {
    /**
     * Success severity for Badge directive.
     */
    success?: string | undefined;
    /**
     * Info severity for Badge directive.
     */
    info?: string | undefined;
    /**
     * Warning severity for Badge directive.
     */
    warning?: string | undefined;
    /**
     * Danger severity for Badge directive.
     */
    danger?: string | undefined;
};

/**
 * Binding of Badge directive.
 */
export interface BadgeDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the Badge.
     */
    value?: string | undefined;
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
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo.svg)
 *
 */
declare const BadgeDirective: ObjectDirective;

export default BadgeDirective;
