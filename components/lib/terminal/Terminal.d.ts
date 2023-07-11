/**
 *
 * Terminal is a text based user interface.
 *
 * [Live Demo](https://www.primevue.org/terminal)
 *
 * @module terminal
 *
 */
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type TerminalPassThroughOptionType = TerminalPassThroughAttributes | ((options: TerminalPassThroughMethodOptions) => TerminalPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TerminalPassThroughMethodOptions {
    instance: any;
    props: TerminalProps;
    state: TerminalState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TerminalProps.pt}
 */
export interface TerminalPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: TerminalPassThroughOptionType;
    /**
     * Uses to pass attributes to the welcome message's DOM element.
     */
    welcomeMessage?: TerminalPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: TerminalPassThroughOptionType;
    /**
     * Uses to pass attributes to the commands' DOM element.
     */
    commands?: TerminalPassThroughOptionType;
    /**
     * Uses to pass attributes to the prompt's DOM element.
     */
    prompt?: TerminalPassThroughOptionType;
    /**
     * Uses to pass attributes to the command's DOM element.
     */
    command?: TerminalPassThroughOptionType;
    /**
     * Uses to pass attributes to the response's DOM element.
     */
    response?: TerminalPassThroughOptionType;
    /**
     * Uses to pass attributes to the container's DOM element.
     */
    container?: TerminalPassThroughOptionType;
    /**
     * Uses to pass attributes to the command text's DOM element.
     */
    commandText?: TerminalPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TerminalPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Terminal component.
 */
export interface TerminalState {
    /**
     * Current command text as a string.
     */
    commandText: string;
    /**
     * Current commands as an array.
     */
    commands: string[];
}

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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {TerminalPassThroughOptions}
     */
    pt?: TerminalPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
