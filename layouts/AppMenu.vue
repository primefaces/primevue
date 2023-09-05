<template>
    <aside class="layout-sidebar" :class="{ active: active }">
        <PrimeVueNuxtLink to="/" class="logo" aria-label="PrimeVue logo"> <img alt="logo" :src="`https://primefaces.org/cdn/primevue/images/primevue-logo${darkTheme ? '-light' : '-dark'}.svg`" /></PrimeVueNuxtLink>
        <nav>
            <ol class="layout-menu">
                <AppMenuItem :menu="menu"></AppMenuItem>
            </ol>
        </nav>
    </aside>
</template>

<script>
import menudata from '@/assets/menu/menu.json';
import AppMenuItem from './AppMenuItem.vue';
export default {
    props: {
        active: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            menu: menudata.data
        };
    },
    computed: {
        darkTheme() {
            return this.$appState.darkTheme === true;
        }
    },
    components: {
        AppMenuItem
    }
};
</script>
