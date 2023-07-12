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
    const { document = defaultDocument, immediate = true, manual = false, name = `style_${++_id}`, id = undefined, media = undefined } = options;

    let stop = () => {};

    const load = () => {
        if (!document) return;

        styleRef.value = document.querySelector(`style[data-primevue-style-id="${name}"]`) || document.getElementById(id) || document.createElement('style');

        if (!styleRef.value.isConnected) {
            styleRef.value.type = 'text/css';
            id && (styleRef.value.id = id);
            media && (styleRef.value.media = media);
            document.head.appendChild(styleRef.value);
            name && styleRef.value.setAttribute('data-primevue-style-id', name);
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
