<template>
    <Head>
        <Title>Install PrimeVue with Laravel</Title>
        <Meta name="description" content="Setting up PrimeVue in a Laravel project" />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Install PrimeVue with Laravel</h1>
                <p>Setting up PrimeVue in a Laravel project.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DownloadDoc from '@/doc/laravel/DownloadDoc.vue';
import ExamplesDoc from '@/doc/laravel/ExamplesDoc.vue';
import NextStepsDoc from '@/doc/laravel/NextStepsDoc.vue';
import PluginDoc from '@/doc/laravel/PluginDoc.vue';
import ThemeDoc from '@/doc/laravel/ThemeDoc.vue';
import VerifyDoc from '@/doc/laravel/VerifyDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'download',
                    label: 'Download',
                    component: DownloadDoc
                },
                {
                    id: 'theme',
                    label: 'Plugin',
                    component: PluginDoc
                },
                {
                    id: 'theme',
                    label: 'Theme',
                    component: ThemeDoc
                },
                {
                    id: 'verify',
                    label: 'Verify',
                    component: VerifyDoc
                },
                {
                    id: 'examples',
                    label: 'Examples',
                    component: ExamplesDoc
                },
                {
                    id: 'nextsteps',
                    label: 'Next Steps',
                    component: NextStepsDoc
                }
            ]
        };
    }
};
</script>
