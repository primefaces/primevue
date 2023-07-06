export interface ComponentHooks {
    beforeCreate?(): void;
    created?(): void;
    beforeMount?(): void;
    mounted?(): void;
    beforeUpdate?(): void;
    updated?(): void;
    beforeUnmount?(): void;
    unmounted?(): void;
}

export interface BaseComponentPassThroughOptions {
    hooks?: ComponentHooks;
}

/**
 * @todo Update all d.ts with it.
 */
export interface BaseComponentPassThroughMethodOptions<I = any, P = any, S = any> {
    instance?: I | undefined | null;
    props?: P | undefined | null;
    state?: S | undefined | null;
}
