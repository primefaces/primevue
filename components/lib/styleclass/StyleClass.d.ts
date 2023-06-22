/**
 *
 * StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.
 *
 * [Live Demo](https://primevue.org/styleclass)
 *
 * @module styleclass
 */
import { DirectiveBinding, ObjectDirective } from 'vue';

/**
 * Custom passthrough(pt) hooks options.
 */
export interface StyleClassPassThroughHooksOptions {
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
 * Defines passthrough(pt) options.
 */
export interface StyleClassPassThroughDirectiveOptions {
    /**
     * Uses to pass attributes to the life cycle hooks.
     * @see {@link StyleClassPassThroughHooksOptions}
     */
    hooks?: StyleClassPassThroughHooksOptions;
}

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
