/**
 *
 * [Live Demo](https://primevue.org/)
 *
 * @module basecomponent
 *
 */
export interface ComponentHooks {
    onBeforeCreate?(): void;
    onCreated?(): void;
    onBeforeMount?(): void;
    onMounted?(): void;
    onBeforeUpdate?(): void;
    onUpdated?(): void;
    onBeforeUnmount?(): void;
    onUnmounted?(): void;
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
