import { reactive } from 'vue';

const layoutState = reactive({
    primary: 'noir',
    surface: 'zinc',
    darkTheme: false,
    codeSandbox: false,
    sourceType: 'options-api',
    newsActive: false,
    announcement: null,
    storageKey: 'volt-vue'
});

export function useLayout() {
    return { layoutState };
}
