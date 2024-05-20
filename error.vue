<template>
    <div>
        <NuxtLayout name="default">
            <div class="flex card flex-col items-center gap-8 sm:p-20">
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary">
                    <span class="font-bold" style="font-size: 144px"> 4 </span>
                    <div class="flex items-center justify-center bg-primary text-primary-contrast rounded-full w-32 h-32">
                        <i class="pi pi-prime" style="font-size: 4.5rem"></i>
                    </div>
                    <span class="font-bold" style="font-size: 144px"> 4 </span>
                </div>
                <div class="font-bold text-surface-900 text-center text-6xl border-t border-surface-200 dark:border-surface-700 pt-8">PAGE NOT FOUND</div>
            </div>
        </NuxtLayout>
    </div>
</template>
<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    watch: {
        $route: {
            handler(to) {
                if (to.name === 'index') {
                    this.themeChangeListener({ theme: this.$appState.darkTheme ? 'aura-dark-green' : 'aura-light-green', dark: this.$appState.darkTheme });
                }
            }
        }
    },
    created() {
        useServerHead({
            link: [
                {
                    id: 'theme-link',
                    rel: 'stylesheet',
                    href: '/themes/aura-light-green/theme.css'
                }
            ]
        });
    },
    mounted() {
        EventBus.on('theme-change', this.themeChangeListener);
    },
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
    },
    methods: {
        themeChangeListener(event) {
            if (!document.startViewTransition) {
                this.applyTheme(event);

                return;
            }

            document.startViewTransition(() => this.applyTheme(event));
        },
        applyTheme(event) {
            // @todo
            /*this.$primevue.changeTheme(this.$appState.theme, event.theme, 'theme-link', () => {
                this.$appState.theme = event.theme;
                this.$appState.darkTheme = event.dark;

                EventBus.emit('dark-mode-toggle', { theme: event.theme, dark: event.dark });
            });*/
        }
    }
};
</script>
