<template>
    <div>
        <NuxtLayout name="default">
            <div class="flex card flex-column align-items-center gap-5 sm:p-8">
                <div class="flex flex-column sm:flex-row align-items-center justify-content-center gap-3 text-primary">
                    <span class="font-bold" :style="{ fontSize: '144px' }"> 4 </span>
                    <div class="flex align-items-center justify-content-center bg-primary border-circle w-8rem h-8rem">
                        <i class="pi pi-prime text-7xl"></i>
                    </div>
                    <span class="font-bold" :style="{ fontSize: '144px' }"> 4 </span>
                </div>
                <div class="font-bold text-900 text-center text-6xl border-top-1 surface-border pt-5">PAGE NOT FOUND</div>
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
            this.$primevue.changeTheme(this.$appState.theme, event.theme, 'theme-link', () => {
                this.$appState.theme = event.theme;
                this.$appState.darkTheme = event.dark;

                EventBus.emit('theme-change-complete', { theme: event.theme, dark: event.dark });
            });
        }
    }
};
</script>
