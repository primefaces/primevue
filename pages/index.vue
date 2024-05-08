<template>
    <div :class="containerClass">
        <AppNews />
        <AppTopBar :showMenuButton="false" />
        <HeroSection />
        <FeaturesSection />
        <UsersSection />
        <ThemeSection />
        <BlockSection />
        <TemplateSection />
        <FooterSection />
    </div>
</template>

<script>
import BlockSection from '@/components/landing/BlockSection.vue';
import FeaturesSection from '@/components/landing/FeaturesSection.vue';
import FooterSection from '@/components/landing/FooterSection.vue';
import HeroSection from '@/components/landing/HeroSection.vue';
import TemplateSection from '@/components/landing/TemplateSection.vue';
import ThemeSection from '@/components/landing/ThemeSection.vue';
import UsersSection from '@/components/landing/UsersSection.vue';
import AppNews from '@/layouts/AppNews';
import AppTopBar from '@/layouts/AppTopBar.vue';

export default {
    setup() {
        definePageMeta({
            layout: 'custom'
        });
    },
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
        containerClass() {
            return ['landing', { 'layout-news-active': this.$appState?.newsActive }];
        }
    },
    components: {
        AppNews,
        AppTopBar,
        HeroSection,
        ThemeSection,
        BlockSection,
        TemplateSection,
        UsersSection,
        FeaturesSection,
        FooterSection
    }
};
</script>
