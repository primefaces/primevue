import { reactive } from 'vue';

const layoutState = reactive({
    primary: 'violet',
    surface: 'zinc',
    darkTheme: false,
    codeSandbox: false,
    sourceType: 'options-api',
    newsActive: false,
    announcement: null,
    storageKey: 'volt-vue'
});

export function useLayout() {
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('p-dark');
        layoutState.darkTheme = !layoutState.darkTheme;
    };

    const darkModeToggleListener = () => {
        if (!document.startViewTransition) {
            toggleDarkMode();

            return;
        }

        document.startViewTransition(() => toggleDarkMode());
    };

    return { layoutState, darkModeToggleListener };
}
