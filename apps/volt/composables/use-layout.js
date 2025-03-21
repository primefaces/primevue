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

    const darkModeToggleListener = (event) => {
        if (!document.startViewTransition) {
            toggleDarkMode(event);

            return;
        }

        document.startViewTransition(() => toggleDarkMode(event));
    };

    return { layoutState, darkModeToggleListener };
}
