/**
 *
 *  Animate manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load.
 *
 * [Live Demo](https://primevue.org/animate)
 *
 * @module animate
 */
import { DirectiveBinding, ObjectDirective } from 'vue';
import { DirectiveHooks } from '../basedirective/BaseDirective';
import { PassThroughOptions } from '../passthrough';
import { PassThrough } from '../ts-helpers';

/**
 * Defines options of Animate.
 */
export interface AnimateOptions {
    /**
     * Animate scroll to add when item begins to get displayed.
     */
    enterClass?: string | undefined;
    /**
     * Animate scroll to add when item begins to get hidden.
     */
    leaveClass?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AnimateDirectivePassThroughOptions}
     */
    pt?: PassThrough<AnimateDirectivePassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Custom passthrough(pt) directive options.
 */
export interface AnimateDirectivePassThroughOptions {
    /**
     * Used to manage all lifecycle hooks
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Binding of Animate directive.
 */
export interface AnimateDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the Animate.
     */
    value?: AnimateOptions | undefined;
}

/**
 * **PrimeVue - Animate**
 *
 * _Animate manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load._
 *
 * [Live Demo](https://www.primevue.org/animate/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare const Animate: ObjectDirective;

export default Animate;
