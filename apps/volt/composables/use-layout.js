import { reactive } from 'vue';

const layoutState = reactive({
    primary: 'emerald',
    surface: 'zinc',
    darkTheme: false,
    codeSandbox: false,
    sourceType: 'options-api',
    newsActive: false,
    announcement: null,
    storageKey: 'primevue-tailwind'
});

export function useLayout() {
    return { layoutState };
}
