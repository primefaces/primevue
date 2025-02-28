<template>
    <div :class="landingClass">
        <AppNews />
        <AppTopBar :showMenuButton="false" />
        <HeroSection />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
});
</script>

<script>
import HeroSection from '/components/landing/HeroSection.vue';

export default {
    layout: 'custom',
    props: {
        theme: {
            type: String,
            default: null
        }
    },
    mounted() {
        let afId = this.$route.query['af_id'];

        if (afId) {
            let today = new Date();
            let expire = new Date();

            expire.setTime(today.getTime() + 3600000 * 24 * 7);
            document.cookie = 'primeaffiliateid=' + afId + ';expires=' + expire.toUTCString() + ';path=/; domain:primefaces.org';
        }
    },
    computed: {
        landingClass() {
            return ['landing bg-surface-0 dark:bg-surface-900', { 'layout-news-active': this.$appState?.newsActive, 'layout-ripple-disabled': this.$primevue.config.ripple === false }];
        }
    },
    components: {
        HeroSection
    }
};
</script>
