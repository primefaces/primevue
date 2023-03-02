/**
 *
 * Ripple directive adds ripple effect to the host element.
 *
 * - [Live Demo](https://primevue.org/ripple)
 */
import { DirectiveBinding, ObjectDirective } from 'vue';

/**
 * Binding of Ripple directive.
 */
export interface RippleDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {}

/**
 * **PrimeVue - Ripple**
 *
 * _Ripple directive adds ripple effect to the host element._
 *
 * [Live Demo](https://www.primevue.org/ripple/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo.svg)
 *
 */
declare const Ripple: ObjectDirective;

export default Ripple;
