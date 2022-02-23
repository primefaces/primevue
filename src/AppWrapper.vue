<template>
    <Home v-if="$route.path === '/'" :theme="theme" @change-theme="changeTheme" />
    <App v-else :theme="theme" @change-theme="changeTheme" />
</template>

<script>
import Home from './Home.vue';
import App from './App.vue';
import EventBus from '@/AppEventBus';

export default {
    data() {
        return {
            theme: 'lara-light-indigo'
        }
    },
    methods: {
        changeTheme(event) {
            let themeLink = document.getElementById('theme-link');
            let href = 'themes/' + event.theme + '/theme.css';
            this.theme = event.theme;

            this.replaceLink(themeLink, href);

            this.activeMenuIndex = null;

            EventBus.emit('change-theme', event);
            this.$appState.darkTheme = event.dark;

            if (event.theme.startsWith('md')) {
                this.$primevue.config.ripple = true;
            }
        },
        replaceLink(linkElement, href) {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        },
    },
    components: {
        'App': App,
        'Home': Home
    }
}
</script>

<style scoped>
</style>
