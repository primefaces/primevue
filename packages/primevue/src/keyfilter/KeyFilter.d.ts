/**
 *
 * A keyfilter is a directive used to block individual keystrokes based on a pattern.
 *
 * [Live Demo](https://primevue.org/keyfilter)
 *
 * @module keyfilter
 *
 */
import type { DesignToken, PassThrough } from '@primevue/core';
import type { DirectiveHooks } from '@primevue/core/basedirective';
import type { PassThroughOptions } from 'primevue/passthrough';
import { DirectiveBinding, ObjectDirective } from 'vue';

export declare type KeyFilterDirectivePassThroughOptionType = KeyFilterDirectivePassThroughAttributes | null | undefined;

/**
 * Defines options of KeyFilter.
 */
export interface KeyFilterOptions {
    /**
     * Sets the pattern for key filtering.
     * @defaultValue null
     */
    pattern?: RegExp | undefined;
    /**
     * When enabled, instead of blocking keys, input is validated internally to test against the regular expression.
     * @defaultValue false
     */
    validateOnly?: boolean;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {KeyFilterDirectivePassThroughOptions}
     */
    pt?: PassThrough<KeyFilterDirectivePassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link KeyFilterOptions.pt}
 */
export interface KeyFilterDirectivePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: KeyFilterDirectivePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface KeyFilterDirectivePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines modifiers of KeyFilter directive.
 */
export interface KeyFilterModifiers {
    /**
     * Positive integer pattern for KeyFilter directive.
     *  @defaultValue false
     */
    pint?: RegExp | undefined;
    /**
     * Integer pattern for KeyFilter directive.
     *  @defaultValue false
     */
    int?: RegExp | undefined;
    /**
     * Positive number pattern for KeyFilter directive.
     *  @defaultValue false
     */
    pnum?: RegExp | undefined;
    /**
     * Money pattern for KeyFilter directive.
     *  @defaultValue false
     */
    money?: RegExp | undefined;
    /**
     * Number pattern for KeyFilter directive.
     *  @defaultValue false
     */
    num?: RegExp | undefined;
    /**
     * Hexadecimal pattern for KeyFilter directive.
     *  @defaultValue false
     */
    hex?: RegExp | undefined;
    /**
     * Email pattern for KeyFilter directive.
     *  @defaultValue false
     */
    email?: RegExp | undefined;
    /**
     * Alphabetic pattern for KeyFilter directive.
     *  @defaultValue false
     */
    alpha?: RegExp | undefined;
    /**
     * Alphanumeric pattern for KeyFilter directive.
     *  @defaultValue false
     */
    alphanum?: RegExp | undefined;
}

/**
 * Binding of KeyFilter directive.
 */
export interface KeyFilterDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the KeyFilter.
     */
    value?: string | KeyFilterOptions | undefined;
    /**
     * Modifiers of the KeyFilter.
     * @type {KeyFilterModifiers}
     */
    modifiers?: KeyFilterModifiers | undefined;
}

/**
 * **PrimeVue - KeyFilter**
 *
 * _A keyfilter is a directive used to block individual keystrokes based on a pattern._
 *
 * [Live Demo](https://www.primevue.org/keyfilter/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare const KeyFilter: ObjectDirective;

export default KeyFilter;
