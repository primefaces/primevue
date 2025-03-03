<template>
    <div :class="landingClass">
        <AppNews />
        <AppTopBar :showMenuButton="false" />
        <h1>Hello World</h1>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
});
</script>

<script>
export default {
    layout: 'custom',
    props: {
        theme: {
            type: String,
            default: null
        }
    },
    computed: {
        landingClass() {
            return ['landing bg-surface-0 dark:bg-surface-900', { 'layout-news-active': this.$appState?.newsActive, 'layout-ripple-disabled': this.$primevue.config.ripple === false }];
        }
    }
};
</script>
