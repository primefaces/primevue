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

    const defaultDocument = DomHandler.isClient() ? window.document : undefined;
    const { document = defaultDocument, immediate = true, manual = false, name = `style_${++_id}`, id = undefined, media = undefined } = options;

    const cssRef = ref(css);

    let stop = () => {};

    const load = () => {
        if (!document) return;

        const el = document.querySelector(`style[data-primevue-style-id="${name}"]`) || document.getElementById(id) || document.createElement('style');

        if (!el.isConnected) {
            el.type = 'text/css';
            id && (el.id = id);
            media && (el.media = media);
            document.head.appendChild(el);
            name && el.setAttribute('data-primevue-style-id', name);
        }

        if (isLoaded.value) return;

        stop = watch(
            cssRef,
            (value) => {
                el.textContent = value;
            },
            { immediate: true }
        );

        isLoaded.value = true;
    };

    const unload = () => {
        if (!document || !isLoaded.value) return;
        stop();
        document.head.removeChild(document.getElementById(id));
        isLoaded.value = false;
    };

    if (immediate && !manual) tryOnMounted(load);

    /*if (!manual)
      tryOnScopeDispose(unload)*/

    return {
        id,
        css: cssRef,
        unload,
        load,
        isLoaded: readonly(isLoaded)
    };
}
