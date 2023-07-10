import { DirectiveBinding, VNode } from 'vue';

export interface DirectiveInstance<T = any, V = any> {
    $name: string | undefined;
    $host: T;
    $binding: DirectiveBinding<V>;
    $el: HTMLElement | undefined;
    $css?: {
        classes?: undefined;
        inlineStyles?: undefined;
        loadStyle?: () => void;
    };
    defaultPT: any;
    isUnstyled: boolean;
    [key: string]: any;
}

/* All parameters passed by the directive of Vue.js */
export interface DirectiveOptions<T = any, Prev = VNode<any, T> | null, V = any> {
    el: T;
    binding: DirectiveBinding<V>;
    vnode: VNode<any, T>;
    prevVNode: Prev;
}

export interface DirectiveHooks<T = any, V = any> {
    onCreated?: (instance: DirectiveInstance<T, V> | undefined, options: DirectiveOptions<T, null, V>) => void;
    onBeforeMount?: (instance: DirectiveInstance<T, V> | undefined, options: DirectiveOptions<T, null, V>) => void;
    onMounted?: (instance: DirectiveInstance<T, V> | undefined, options: DirectiveOptions<T, null, V>) => void;
    onBeforeUpdate?: (instance: DirectiveInstance<T, V> | undefined, options: DirectiveOptions<T, VNode<any, T>, V>) => void;
    onUpdated?: (instance: DirectiveInstance<T, V> | undefined, options: DirectiveOptions<T, VNode<any, T>, V>) => void;
    onBeforeUnmount?: (instance: DirectiveInstance<T, V> | undefined, options: DirectiveOptions<T, null, V>) => void;
    onUnmounted?: (instance: DirectiveInstance<T, V> | undefined, options: DirectiveOptions<T, null, V>) => void;
}

export interface BaseDirectivePassThroughOptions {
    hooks?: DirectiveHooks;
}
