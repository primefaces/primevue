/*
 * Ported from useStyleTag in @vueuse/core
 * https://github.com/vueuse
 */
import { isClient, isExist, setAttribute, setAttributes } from '@primeuix/utils/dom';
import { getCurrentInstance, nextTick, onMounted, readonly, ref, watch } from 'vue';

function tryOnMounted(fn, sync = true) {
    if (getCurrentInstance() && getCurrentInstance().components) onMounted(fn);
    else if (sync) fn();
    else nextTick(fn);
}

let _id = 0;

export function useStyle(css, options = {}) {
    const isLoaded = ref(false);
    const cssRef = ref(css);
    const styleRef = ref(null);

    const defaultDocument = isClient() ? window.document : undefined;
    const {
        document = defaultDocument,
        prefix = undefined,
        immediate = true,
        manual = false,
        name = `style_${++_id}`,
        id = undefined,
        media = undefined,
        nonce = undefined,
        first = false,
        onMounted: onStyleMounted = undefined,
        onUpdated: onStyleUpdated = undefined,
        onLoad: onStyleLoaded = undefined,
        props = {}
    } = options;
    const root = options.root?.host ? options.root : defaultDocument;

    let stop = () => {};

    /* @todo: Improve _options params */
    const load = (_css, _props = {}) => {
        if (!document) return;

        const _styleProps = { ...props, ..._props };
        let [_name, _id, _nonce] = [_styleProps.name || name, _styleProps.id || id, _styleProps.nonce || nonce];

        if (prefix) {
            _name = _name ? `${prefix}_${_name}` : _name;
            _id = _id ? `${prefix}_${_id}` : _id;
        }

        styleRef.value = root.querySelector(`style[data-primevue-style-id="${_name}"]`) || root.getElementById(_id) || document.createElement('style');

        if (!styleRef.value.isConnected) {
            cssRef.value = _css || css;

            setAttributes(styleRef.value, {
                type: 'text/css',
                id: _id,
                media,
                nonce: _nonce
            });
            first ? (root.head || root).prepend(styleRef.value) : (root.head || root).appendChild(styleRef.value);
            setAttribute(styleRef.value, 'data-primevue-style-id', _name);
            setAttributes(styleRef.value, _styleProps);
            styleRef.value.onload = (event) => onStyleLoaded?.(event, { name: _name });
            onStyleMounted?.(_name);
        }

        if (isLoaded.value) return;

        stop = watch(
            cssRef,
            (value) => {
                styleRef.value.textContent = value;
                onStyleUpdated?.(_name);
            },
            { immediate: true }
        );

        isLoaded.value = true;
    };

    const unload = () => {
        if (!document || !isLoaded.value) return;
        stop();
        isExist(styleRef.value) && (root.head || root).removeChild(styleRef.value);
        isLoaded.value = false;
        styleRef.value = null;
    };

    if (immediate && !manual) tryOnMounted(load);

    /*if (!manual)
      tryOnScopeDispose(unload)*/

    return {
        id,
        name,
        el: styleRef,
        css: cssRef,
        unload,
        load,
        isLoaded: readonly(isLoaded)
    };
}
