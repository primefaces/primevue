<template>
    <Head>
        <Title>Introduction - PrimeVue</Title>
        <Meta name="description" content="Next-generation UI Component suite for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div style="border-radius: 20px; max-height: 640px" class="overflow-hidden mb-8 flex items-center">
                    <img alt="PrimeVue Designer" :src="introDesktopImg" class="w-full hidden md:block" />
                    <img alt="PrimeVue Designer" :src="introMobileImg" class="w-full md:hidden" />
                </div>
                <h1>Introduction</h1>
                <p>Next-generation UI Component suite for Vue.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import AccessibilityDoc from '@/doc/introduction/AccessibilityDoc.vue';
import AddOnsDoc from '@/doc/introduction/AddOnsDoc.vue';
import OverviewDoc from '@/doc/introduction/OverviewDoc.vue';
import PassThroughDoc from '@/doc/introduction/PassThroughDoc.vue';
import ThemingDoc from '@/doc/introduction/ThemingDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'overview',
                    label: 'Overview',
                    component: OverviewDoc
                },
                {
                    id: 'theming',
                    label: 'Theming',
                    component: ThemingDoc
                },
                {
                    id: 'passthrough',
                    label: 'Pass Through',
                    component: PassThroughDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                },
                {
                    id: 'add-ons',
                    label: 'Add-Ons',
                    component: AddOnsDoc
                }
            ]
        };
    },
    computed: {
        introDesktopImg() {
            return `https://primefaces.org/cdn/primevue/images/overview${this.$appState.darkTheme ? '-dark' : ''}.png`;
        },
        introMobileImg() {
            return `https://primefaces.org/cdn/primevue/images/overview${this.$appState.darkTheme ? '-dark' : ''}-mobile.png`;
        }
    }
};
</script>
