import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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

export interface TerminalSlots {
}

export declare type TerminalEmits = {
}

declare class Terminal extends ClassComponent<TerminalProps, TerminalSlots, TerminalEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Terminal: GlobalComponentConstructor<Terminal>
    }
}

/**
 *
 * Terminal is a text based user interface.
 *
 * Helper API:
 *
 * - TerminalService
 *
 * Demos:
 *
 * - [Terminal](https://www.primefaces.org/primevue/showcase/#/terminal)
 *
 */
export default Terminal;
