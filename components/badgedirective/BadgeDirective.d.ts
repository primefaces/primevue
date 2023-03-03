/**
 *
 * Badge directive is a small status indicator for another element.
 *
 * [Live Demo](https://primevue.org/badge)
 *
 * @module badgedirective
 */
import { DirectiveBinding, ObjectDirective } from 'vue';

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
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare const BadgeDirective: ObjectDirective;

export default BadgeDirective;
