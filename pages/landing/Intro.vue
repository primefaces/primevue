<template>
    <div class="landing-intro">
        <AppNews v-if="$appState.newsActive" />
        <HeaderSection @theme-toggle="$emit('change:theme')" />
        <HeroSection />
    </div>
</template>

<script>
import AppNews from '@/layouts/AppNews';
import HeaderSection from './HeaderSection';
import HeroSection from './HeroSection';

export default {
    emits: ['change:theme'],
    components: {
        HeaderSection,
        HeroSection,
        AppNews
    }
};
</script>
