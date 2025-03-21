<template>
    <div :class="landingClass">
        <AppNews />
        <AppTopBar :showMenuButton="false" />
        <LandingHero />
        <LandingComponents />
        <LandingFeatures />
        <LandingFooter />
    </div>
</template>

<script setup>
import { computed } from 'vue';

definePageMeta({
    layout: 'landing'
});

const { layoutState } = useLayout();

const landingClass = computed(() => {
    return [
        'layout-wrapper pt-16',
        {
            'layout-news-active': layoutState.newsActive
        }
    ];
});
</script>
