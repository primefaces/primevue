/**
 *
 * Terminal is a text based user interface.
 *
 * [Live Demo](https://www.primevue.org/terminal)
 *
 * @module terminal
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';

export declare type TerminalPassThroughOptionType = TerminalPassThroughAttributes | ((options: TerminalPassThroughMethodOptions) => TerminalPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TerminalPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TerminalProps;
    /**
     * Defines current inline state.
     */
    state: TerminalState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TerminalProps.pt}
 */
export interface TerminalPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalPassThroughOptionType;
    /**
     * Used to pass attributes to the welcome message's DOM element.
     */
    welcomeMessage?: TerminalPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: TerminalPassThroughOptionType;
    /**
     * Used to pass attributes to the commands' DOM element.
     */
    commands?: TerminalPassThroughOptionType;
    /**
     * Used to pass attributes to the prompt's DOM element.
     */
    prompt?: TerminalPassThroughOptionType;
    /**
     * Used to pass attributes to the command's DOM element.
     */
    command?: TerminalPassThroughOptionType;
    /**
     * Used to pass attributes to the response's DOM element.
     */
    response?: TerminalPassThroughOptionType;
    /**
     * Used to pass attributes to the container's DOM element.
     */
    container?: TerminalPassThroughOptionType;
    /**
     * Used to pass attributes to the command text's DOM element.
     */
    commandText?: TerminalPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TerminalPassThroughOptions}
     */
    pt?: PassThrough<TerminalPassThroughOptions>;
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
 * Defines valid slots in Terminal component.
 */
export interface TerminalSlots {}

/**
 * Defines valid emits in Terminal component.
 */
export interface TerminalEmitsOptions {}

export declare type TerminalEmits = EmitFn<TerminalEmitsOptions>;

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
 *
 */
declare const Terminal: DefineComponent<TerminalProps, TerminalSlots, TerminalEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Terminal: GlobalComponentConstructor<TerminalProps, TerminalSlots, TerminalEmits>;
    }
}

export default Terminal;
