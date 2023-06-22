/**
 *
 * Focus Trap keeps focus within a certain DOM element while tabbing.
 *
 * [Live Demo](https://primevue.org/focustrap)
 *
 * @module focustrap
 */
import { DirectiveBinding, ObjectDirective } from 'vue';

/**
 * Custom passthrough(pt) hooks options.
 */
export interface FocusTrapPassThroughHooksOptions {
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
export interface FocusTrapPassThroughCSSOptions {
    /**
     * Style class of the element.
     */
    class?: any;
    /**
     * Inline style of the element.
     */
    style?: any;
}

export interface FocusTrapPassThroughDirectiveOptions {
    /**
     * Uses to pass attributes to the life cycle hooks.
     * @see {@link FocusTrapPassThroughHooksOptions}
     */
    hooks?: FocusTrapPassThroughHooksOptions;
    /**
     * Uses to pass attributes to the styles.
     *  @see {@link FocusTrapPassThroughCSSOptions}
     */
    css?: FocusTrapPassThroughCSSOptions;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link FocusTrapOptions.pt}
 */
export interface FocusTrapPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     *  @see {@link FocusTrapPassThroughDirectiveOptions}
     */
    root?: FocusTrapPassThroughDirectiveOptions;
    /**
     * Uses to pass attributes to the first focusable element's DOM element.
     *  @see {@link FocusTrapPassThroughDirectiveOptions}
     */
    firstFocusableElement?: FocusTrapPassThroughDirectiveOptions;
    /**
     * Uses to pass attributes to the last focusable element's DOM element.
     *  @see {@link FocusTrapPassThroughDirectiveOptions}
     */
    lastFocusableElement?: FocusTrapPassThroughDirectiveOptions;
}

/**
 * Defines options of FocusTrap.
 */
export interface FocusTrapOptions {
    /**
     * When present, it specifies that the directive should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When When disabled, focustrap will not focus by default.
     * @defaultValue true
     */
    autoFocus?: boolean | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {FocusTrapPassThroughOptions}
     */
    pt?: FocusTrapPassThroughOptions;
}

/**
 * Binding of FocusTrap directive.
 */
export interface FocusTrapDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the FocusTrap.
     */
    value?: FocusTrapOptions | undefined;
}

/**
 * **PrimeVue - FocusTrap**
 *
 * _FocusTrap directive provides advisory information for a component._
 *
 * [Live Demo](https://www.primevue.org/focustrap/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare const FocusTrap: ObjectDirective;

export default FocusTrap;
