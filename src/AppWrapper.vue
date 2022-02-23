<template>
    <router-view></router-view>
</template>

<script>
import EventBus from '@/AppEventBus';

export default {
    themeChangeListener: null,
    mounted() {
        this.themeChangeListener = (event) => {
            const elementId = 'theme-link';
            const linkElement = document.getElementById(elementId);
            const cloneLinkElement = linkElement.cloneNode(true);
            const newThemeUrl = linkElement.getAttribute('href').replace(this.$appState.theme, event.theme);

            cloneLinkElement.setAttribute('id', elementId + '-clone');
            cloneLinkElement.setAttribute('href', newThemeUrl);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', elementId);
            });
            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
        
            this.$appState.theme = event.theme;
            this.$appState.darkTheme = event.dark;
        };

        EventBus.on('theme-change', this.themeChangeListener);
    },
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
    }
}
</script>
