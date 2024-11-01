<template>
    <Head>
        <Title>RTL - PrimeVue</Title>
        <Meta name="description" content="Right-to-Left direction support of PrimeVue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>RTL Support</h1>
                <p>Right-to-left direction support of PrimeVue.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import ConfigurationDoc from '@/doc/guides/rtl/ConfigurationDoc.vue';
import LimitationsDoc from '@/doc/guides/rtl/LimitationsDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'configuration',
                    label: 'Configuration',
                    component: ConfigurationDoc
                },
                {
                    id: 'tailwindcss',
                    label: 'Limitations',
                    component: LimitationsDoc
                }
            ]
        };
    }
};
</script>
