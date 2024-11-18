<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/app/AppEventBus';

export default {
    mounted() {
        const currentTheme = JSON.parse(localStorage.getItem('theme__primevue'));

        if (currentTheme) this.darkModeToggleListener({ dark: currentTheme });

        EventBus.on('dark-mode-toggle', this.darkModeToggleListener);
    },
    // beforeUnmount() {
    //     EventBus.off('dark-mode-toggle', this.darkModeToggleListener);
    // },
    methods: {
        darkModeToggleListener(event) {
            console.log('e', event);

            if (!document.startViewTransition) {
                this.toggleDarkMode(event);

                return;
            }

            document.startViewTransition(() => this.toggleDarkMode(event));
        },
        toggleDarkMode(event) {
            const isDark = event?.dark;

            console.log(event, 'aaaa');

            if (isDark) document.documentElement.classList.add('p-dark');
            else document.documentElement.classList.remove('p-dark');

            this.$appState.darkTheme = isDark;

            localStorage.setItem('theme__primevue', isDark);

            EventBus.emit('dark-mode-toggle-complete');
        }
    }
};
</script>
