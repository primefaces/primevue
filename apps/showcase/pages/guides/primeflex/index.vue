<template>
    <Head>
        <Title>PrimeFlex - PrimeVue</Title>
        <Meta name="description" content="The PrimeFlex CSS library is being sunset and will no longer receive active development or maintenance." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Introduction</h1>
                <p>The PrimeFlex CSS library is being sunset and will no longer receive active development or maintenance.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import CompatibilityDoc from '@/doc/guides/primeflex/CompatibilityDoc.vue';
import MigrationDoc from '@/doc/guides/primeflex/MigrationDoc.vue';
import OverviewDoc from '@/doc/guides/primeflex/OverviewDoc.vue';
import PluginDoc from '@/doc/guides/primeflex/PluginDoc.vue';
import TailwindCSSDoc from '@/doc/guides/primeflex/TailwindCSSDoc.vue';

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
                    id: 'compatibility',
                    label: 'Compatibility',
                    component: CompatibilityDoc
                },
                {
                    id: 'tailwindcss',
                    label: 'Tailwind CSS',
                    component: TailwindCSSDoc
                },
                {
                    id: 'plugin',
                    label: 'Plugin',
                    component: PluginDoc
                },
                {
                    id: 'migration',
                    label: 'Migration',
                    component: MigrationDoc
                }
            ]
        };
    }
};
</script>
