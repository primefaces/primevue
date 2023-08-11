/*
 * Ported from useStyleTag in @vueuse/core
 * https://github.com/vueuse
 */
import { DomHandler } from 'primevue/utils';
import { getCurrentInstance, nextTick, onMounted, readonly, ref, watch } from 'vue';

function tryOnMounted(fn, sync = true) {
    if (getCurrentInstance()) onMounted(fn);
    else if (sync) fn();
    else nextTick(fn);
}

let _id = 0;

export function useStyle(css, options = {}) {
    const isLoaded = ref(false);
    const cssRef = ref(css);
    const styleRef = ref(null);

    const defaultDocument = DomHandler.isClient() ? window.document : undefined;
    const { document = defaultDocument, immediate = true, manual = false, name = `style_${++_id}`, id = undefined, media = undefined, nonce = undefined } = options;

    let stop = () => {};

    /* @todo: Improve _options params */
    const load = (_css, _options = {}) => {
        if (!document) return;

        const [_name, _id, _nonce] = [_options.name || name, _options.id || id, _options.nonce || nonce];

        styleRef.value = document.querySelector(`style[data-primevue-style-id="${_name}"]`) || document.getElementById(_id) || document.createElement('style');

        if (!styleRef.value.isConnected) {
            cssRef.value = _css || css;

            DomHandler.setAttributes(styleRef.value, {
                type: 'text/css',
                id: _id,
                media,
                nonce: _nonce
            });
            document.head.appendChild(styleRef.value);
            DomHandler.setAttribute(styleRef.value, 'data-primevue-style-id', name);
            DomHandler.setAttributes(styleRef.value, _options);
        }

        if (isLoaded.value) return;

        stop = watch(
            cssRef,
            (value) => {
                styleRef.value.textContent = value;
            },
            { immediate: true }
        );

        isLoaded.value = true;
    };

    const unload = () => {
        if (!document || !isLoaded.value) return;
        stop();
        DomHandler.isExist(styleRef.value) && document.head.removeChild(styleRef.value);
        isLoaded.value = false;
    };

    if (immediate && !manual) tryOnMounted(load);

    /*if (!manual)
      tryOnScopeDispose(unload)*/

    return {
        id,
        name,
        css: cssRef,
        unload,
        load,
        isLoaded: readonly(isLoaded)
    };
}
