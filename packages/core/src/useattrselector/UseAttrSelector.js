import { useId } from 'vue';

export function useAttrSelector(prefix = 'pc') {
    const idx = useId();

    return `${prefix}${idx.replace('v-', '').replaceAll('-', '_')}`;
}
