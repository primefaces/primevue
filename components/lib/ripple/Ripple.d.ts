/**
 *
 * Ripple directive adds ripple effect to the host element.
 *
 * [Live Demo](https://primevue.org/ripple)
 *
 * @module ripple
 */
import { DirectiveBinding, ObjectDirective } from 'vue';

/**
 * Defines options of Ripple.
 */
export interface RippleOptions {
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {RippleDirectivePassThroughOptions}
     */
    pt?: RippleDirectivePassThroughOptions;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link RippleOptions.pt}
 */
export interface RippleDirectivePassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     *  @see {@link RippleDirectivePassThroughOptions}
     */
    root?: RippleDirectivePassThroughOptions;
}

/**
 * Custom passthrough(pt) directive options.
 */
export interface RippleDirectivePassThroughOptions {
    /**
     * Uses to pass attributes to the life cycle hooks.
     * @see {@link RippleDirectivePassThroughHooksOptions}
     */
    hooks?: RippleDirectivePassThroughHooksOptions;
    /**
     * Uses to pass attributes to the styles.
     *  @see {@link RippleDirectivePassThroughCSSOptions}
     */
    css?: RippleDirectivePassThroughCSSOptions;
}

/**
 * Custom passthrough(pt) hooks options.
 */
export interface RippleDirectivePassThroughHooksOptions {
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
export interface RippleDirectivePassThroughCSSOptions {
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
 * Binding of Ripple directive.
 */
export interface RippleDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the Ripple.
     */
    value?: RippleOptions | undefined;
}

/**
 * **PrimeVue - Ripple**
 *
 * _Ripple directive adds ripple effect to the host element._
 *
 * [Live Demo](https://www.primevue.org/ripple/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare const Ripple: ObjectDirective;

export default Ripple;
