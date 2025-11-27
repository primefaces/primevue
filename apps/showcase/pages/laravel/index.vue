<template>
    <Head>
        <Title>Install PrimeVue with Laravel</Title>
        <Meta name="description" content="Setting up PrimeVue in a Laravel project" />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div class="flex-1">
                        <h1>Install PrimeVue with Laravel</h1>
                        <p>Setting up PrimeVue in a Laravel project.</p>
                    </div>
                    <DocCopyMarkdown docType="page" class="flex-shrink-0" />
                </div>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DocCopyMarkdown from '@/components/doc/DocCopyMarkdown.vue';
import DownloadDoc from '@/doc/laravel/DownloadDoc.vue';
import ExamplesDoc from '@/doc/laravel/ExamplesDoc.vue';
import NextStepsDoc from '@/doc/laravel/NextStepsDoc.vue';
import PluginDoc from '@/doc/laravel/PluginDoc.vue';
import ThemeDoc from '@/doc/laravel/ThemeDoc.vue';
import VerifyDoc from '@/doc/laravel/VerifyDoc.vue';

export default {
    components: { DocCopyMarkdown },
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
