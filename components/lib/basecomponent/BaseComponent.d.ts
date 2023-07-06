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
