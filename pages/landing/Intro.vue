<template>
    <div class="landing-intro">
        <AppNews v-if="$appState.newsActive" />
        <HeaderSection @theme-toggle="onThemeToggle" />
        <HeroSection />
    </div>
</template>

<script>
import AppNews from '@/layouts/AppNews';
import HeaderSection from './HeaderSection';
import HeroSection from './HeroSection';
export default {
    methods: {
        onThemeToggle() {
            const newTheme = this.$appState.darkTheme ? 'lara-light-blue' : 'lara-dark-blue';
            const newTableTheme = this.$appState.darkTheme ? this.tableTheme.replace('dark', 'light') : this.tableTheme.replace('light', 'dark');

            EventBus.emit('theme-change', { theme: newTheme, dark: !this.$appState.darkTheme });
            this.replaceTableTheme(newTableTheme);
        }
    },
    components: {
        HeaderSection,
        HeroSection,
        AppNews
    }
};
</script>
