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
 * Defines options of Badge.
 */
export interface BadgeDirectiveOptions {
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {BadgeDirectivePassThroughOptions}
     */
    pt?: BadgeDirectivePassThroughOptions;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link BadgeDirectiveOptions.pt}
 */
export interface BadgeDirectivePassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     *  @see {@link BadgeDirectivePassThroughDirectiveOptions}
     */
    root?: BadgeDirectivePassThroughDirectiveOptions;
}

/**
 * Custom passthrough(pt) directive options.
 */
export interface BadgeDirectivePassThroughDirectiveOptions {
    /**
     * Uses to pass attributes to the life cycle hooks.
     * @see {@link BadgeDirectivePassThroughHooksOptions}
     */
    hooks?: BadgeDirectivePassThroughHooksOptions;
    /**
     * Uses to pass attributes to the styles.
     *  @see {@link BadgeDirectivePassThroughCSSOptions}
     */
    css?: BadgeDirectivePassThroughCSSOptions;
}

/**
 * Custom passthrough(pt) hooks options.
 */
export interface BadgeDirectivePassThroughHooksOptions {
    /**
     * Called before bound element's attributes or event listeners are applied.
     */
    created?: DirectiveBinding;
    /**
     * Called right before the element is inserted into the DOM.
     */
    beforeMount?: DirectiveBinding;
    /**
     * Called when the bound element's parent component and all its children are mounted.
     */
    mounted?: DirectiveBinding;
    /**
     * Called before the parent component is updated.
     */
    beforeUpdate?: DirectiveBinding;
    /**
     * Called after the parent component and all of its children have updated all of its children have updated.
     */
    updated?: DirectiveBinding;
    /**
     * Called before the parent component is unmounted.
     */
    beforeUnmount?: DirectiveBinding;
    /**
     * Called when the parent component is unmounted.
     */
    unmounted?: DirectiveBinding;
}

/**
 * Custom passthrough(pt) css options.
 */
export interface BadgeDirectivePassThroughCSSOptions {
    /**
     * Style class of the element.
     */
    class?: any;
    /**
     * Inline style of the element.
     */
    style?: any;
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
