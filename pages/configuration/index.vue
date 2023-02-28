<template>
    <Head>
        <Title>Configuration - PrimeVue</Title>
        <Meta name="description" content="Global configuration options of the components." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Configuration</h1>
                <p>Global configuration options of the components.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import ImportDoc from '@/doc/configuration/ImportDoc';
import InputStyleDoc from '@/doc/configuration/InputStyleDoc';
import NuxtIntegrationDoc from '@/doc/configuration/NuxtIntegrationDoc';
import PropCasesDoc from '@/doc/configuration/PropCasesDoc';
import RippleDoc from '@/doc/configuration/RippleDoc';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'nuxtintegration',
                    label: 'Nuxt Integration',
                    component: NuxtIntegrationDoc
                },
                {
                    id: 'propcases',
                    label: 'Prop Cases',
                    component: PropCasesDoc
                },
                {
                    id: 'ripple',
                    label: 'Ripple',
                    component: RippleDoc
                },
                {
                    id: 'inputstyle',
                    label: 'InputStyle',
                    component: InputStyleDoc
                }
            ]
        };
    }
};
</script>
