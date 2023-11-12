/**
 *
 * Focus Trap keeps focus within a certain DOM element while tabbing.
 *
 * [Live Demo](https://primevue.org/focustrap)
 *
 * @module focustrap
 */
import { DirectiveBinding, ObjectDirective } from 'vue';
import { DirectiveHooks } from '../basedirective';
import { PassThroughOptions } from '../passthrough';
import { PassThrough } from '../ts-helpers';

export declare type FocusTrapDirectivePassThroughOptionType = FocusTrapDirectivePassThroughAttributes | null | undefined;

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
     * Used to pass attributes to DOM elements inside the component.
     * @type {FocusTrapDirectivePassThroughOptions}
     */
    pt?: PassThrough<FocusTrapDirectivePassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link FocusTrapOptions.pt}
 */
export interface FocusTrapDirectivePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FocusTrapDirectivePassThroughOptionType;
    /**
     * Used to pass attributes to the first focusable element's DOM element.
     */
    firstFocusableElement?: FocusTrapDirectivePassThroughOptionType;
    /**
     * Used to pass attributes to the last focusable element's DOM element.
     */
    lastFocusableElement?: FocusTrapDirectivePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FocusTrapDirectivePassThroughAttributes {
    [key: string]: any;
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
