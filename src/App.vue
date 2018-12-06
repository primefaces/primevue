<template>
    <div class="layout-wrapper">
        <app-topbar />
        <app-menu />
        <div class="layout-content">
            <router-view/>
            <app-footer />
        </div>
    </div>
</template>

<script>
import AppTopBar from '@/AppTopBar.vue';
import AppMenu from '@/AppMenu.vue';
import AppFooter from '@/AppFooter.vue';

export default {
    components: {
        'app-topbar': AppTopBar,
        'app-menu': AppMenu,
        'app-footer': AppFooter
    }
}
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>
