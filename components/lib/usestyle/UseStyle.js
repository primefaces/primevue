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
    const { document = defaultDocument, immediate = true, manual = false, id = `primevue_style_${++_id}` } = options;

    const cssRef = ref(css);

    let stop = () => {};

    const load = () => {
        if (!document) return;

        const el = document.getElementById(id) || document.createElement('style');

        if (!el.isConnected) {
            el.type = 'text/css';
            el.id = id;
            if (options.media) el.media = options.media;
            document.head.appendChild(el);
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
