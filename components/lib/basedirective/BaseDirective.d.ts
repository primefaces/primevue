import { ObjectDirective } from 'vue';

export interface DirectiveHooks extends Omit<ObjectDirective, 'getSSRProps' | 'deep'> {}

export interface BaseDirectivePassThroughOptions {
    hooks?: DirectiveHooks;
}
