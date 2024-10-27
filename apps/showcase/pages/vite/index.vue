<template>
    <Head>
        <Title>Install PrimeVue with Vite</Title>
        <Meta name="description" content="Setting up PrimeVue in a Vite project" />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Install PrimeVue with Vite</h1>
                <p>Setting up PrimeVue in a Vite project.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DownloadDoc from '@/doc/vite/DownloadDoc.vue';
import ExamplesDoc from '@/doc/vite/ExamplesDoc.vue';
import NextStepsDoc from '@/doc/vite/NextStepsDoc.vue';
import PluginDoc from '@/doc/vite/PluginDoc.vue';
import ThemeDoc from '@/doc/vite/ThemeDoc.vue';
import VerifyDoc from '@/doc/vite/VerifyDoc.vue';
import VideoDoc from '@/doc/vite/VideoDoc.vue';

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
