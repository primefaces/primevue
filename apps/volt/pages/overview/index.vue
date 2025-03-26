<template>
    <div>
        <Head>
            <Title>Overview - Volt</Title>
            <Meta name="description" content="Volt is a UI component library crafted with Unstyled PrimeVue Core and Tailwind CSS." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Overview</h1>
                    <p>Volt is a UI component library crafted with Unstyled PrimeVue Core and Tailwind CSS.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script setup>
import ComparisonDoc from '@/doc/overview/ComparisonDoc.vue';
import CustomizationDoc from '@/doc/overview/CustomizationDoc.vue';
import WhatIsVoltDoc from '@/doc/overview/WhatIsVoltDoc.vue';
import TWMergeDoc from '@/doc/overview/TWMergeDoc.vue';
import { ref } from 'vue';

const docs = ref([
    {
        id: 'whatisvolt',
        label: 'What is Volt?',
        component: WhatIsVoltDoc
    },
    {
        id: 'comparison',
        label: 'Comparison',
        component: ComparisonDoc
    },
    {
        id: 'customization',
        label: 'Customization',
        component: CustomizationDoc
    },
    {
        id: 'twmerge',
        label: 'tw-merge',
        component: TWMergeDoc
    }
]);
</script>
