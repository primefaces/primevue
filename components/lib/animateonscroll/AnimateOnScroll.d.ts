/**
 *
 *  AnimateOnScroll manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load.
 *
 * [Live Demo](https://primevue.org/animateonscroll)
 *
 * @module animateonscroll
 */
import { DirectiveBinding, ObjectDirective } from 'vue';
import { DirectiveHooks } from '../basedirective/BaseDirective';
import { PassThroughOptions } from '../passthrough';
import { PassThrough } from '../ts-helpers';

/**
 * Defines options of AnimateOnScroll.
 */
export interface AnimateOnScrollOptions {
    /**
     * AnimateOnScroll scroll to add when item begins to get displayed.
     */
    enterClass?: string | undefined;
    /**
     * AnimateOnScroll scroll to add when item begins to get hidden.
     */
    leaveClass?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AnimateOnScrollDirectivePassThroughOptions}
     */
    pt?: PassThrough<AnimateOnScrollDirectivePassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Custom passthrough(pt) directive options.
 */
export interface AnimateOnScrollDirectivePassThroughOptions {
    /**
     * Used to manage all lifecycle hooks
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Defines modifiers of AnimateOnScroll.
 */
export interface AnimateOnScrollDirectiveModifiers {
    /**
     * Whether the animation will be repeated
     *  @defaultValue true
     */
    once?: boolean | undefined;
}

/**
 * Binding of AnimateOnScroll directive.
 */
export interface AnimateOnScrollDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the AnimateOnScroll.
     */
    value?: AnimateOnScrollOptions | undefined;
    /**
     * Modifiers of the tooltip.
     * @type {AnimateOnScrollDirectiveModifiers}
     */
    modifiers?: AnimateOnScrollDirectiveModifiers | undefined;
}

/**
 * **PrimeVue - AnimateOnScroll**
 *
 * _AnimateOnScroll manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load._
 *
 * [Live Demo](https://www.primevue.org/animateonscroll/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare const AnimateOnScroll: ObjectDirective;

export default AnimateOnScroll;
