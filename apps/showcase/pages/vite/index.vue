<template>
    <Head>
        <Title>Install PrimeVue with Vite</Title>
        <Meta name="description" content="Setting up PrimeVue in a Vite project" />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div class="flex-1">
                        <h1>Install PrimeVue with Vite</h1>
                        <p>Setting up PrimeVue in a Vite project.</p>
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
import DownloadDoc from '@/doc/vite/DownloadDoc.vue';
import ExamplesDoc from '@/doc/vite/ExamplesDoc.vue';
import NextStepsDoc from '@/doc/vite/NextStepsDoc.vue';
import PluginDoc from '@/doc/vite/PluginDoc.vue';
import ThemeDoc from '@/doc/vite/ThemeDoc.vue';
import VerifyDoc from '@/doc/vite/VerifyDoc.vue';
import VideoDoc from '@/doc/vite/VideoDoc.vue';

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
                    id: 'video',
                    label: 'Video',
                    component: VideoDoc
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
