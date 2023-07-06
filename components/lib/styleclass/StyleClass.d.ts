/**
 *
 * StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.
 *
 * [Live Demo](https://primevue.org/styleclass)
 *
 * @module styleclass
 */
import { DirectiveBinding, ObjectDirective } from 'vue';
import { DirectiveHooks } from '../basedirective';

/**
 * Defines options of StyleClass.
 */
export interface StyleClassOptions {
    /**
     * Selector to define the target element. Available selectors are '@next', '@prev', '@parent' and '@grandparent'.
     */
    selector?: '@next' | '@prev' | '@parent' | '@grandparent' | string | undefined;
    /**
     * Style class to add when item begins to get displayed.
     */
    enterClassName?: string | undefined;
    /**
     * Style class to add during enter animation.
     */
    enterActiveClassName?: string | undefined;
    /**
     * Style class to add when item begins to get displayed.
     */
    enterToClassName?: string | undefined;
    /**
     * Style class to add when item begins to get hidden.
     */
    leaveClassName?: string | undefined;
    /**
     * Style class to add during leave animation.
     */
    leaveActiveClassName?: string | undefined;
    /**
     * Style class to add when leave animation is completed.
     */
    leaveToClassName?: string | undefined;
    /**
     * Whether to trigger leave animation when outside of the element is clicked.
     * @defaultValue false
     */
    hideOnOutsideClick?: boolean | undefined;
    /**
     * Adds or removes a class when no enter-leave animation is required.
     */
    toggleClass?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {StyleClassDirectivePassThroughOptions}
     */
    pt?: StyleClassDirectivePassThroughOptions;
}

/**
 * Custom passthrough(pt) directive options.
 */
export interface StyleClassDirectivePassThroughOptions {
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Binding of StyleClass directive.
 */
export interface StyleClassDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the StyleClass.
     */
    value?: StyleClassOptions | undefined;
}

/**
 * **PrimeVue - StyleClass**
 *
 * _StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element._
 *
 * [Live Demo](https://www.primevue.org/styleclass/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare const StyleClass: ObjectDirective;

export default StyleClass;
