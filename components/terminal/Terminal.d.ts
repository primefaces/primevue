/**
 *
 * Terminal is a text based user interface.
 *
 * [Live Demo](https://www.primevue.org/terminal)
 *
 * @module terminal
 *
 */
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Terminal component.
 */
export interface TerminalProps {
    /**
     * Initial text to display on terminal.
     */
    welcomeMessage?: string | undefined;
    /**
     * Prompt text for each command.
     */
    prompt?: string | undefined;
}

/**
 * Defines valid slots in Terminal component.
 */
export interface TerminalSlots {}

/**
 * Defines valid emits in Terminal component.
 */
export interface TerminalEmits {}

/**
 * **PrimeVue - Terminal**
 *
 * _Terminal is a text based user interface._
 *
 * [Live Demo](https://www.primevue.org/terminal/)
 * --- ---
 * ![Primevue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Terminal extends ClassComponent<TerminalProps, TerminalSlots, TerminalEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Terminal: GlobalComponentConstructor<Terminal>;
    }
}

export default Terminal;
