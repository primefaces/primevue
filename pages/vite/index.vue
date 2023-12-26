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
import PluginDoc from '@/doc/vite/PluginDoc.vue';
import StyledModeDoc from '@/doc/vite/StyledModeDoc.vue';
import UnstyledModeDoc from '@/doc/vite/UnstyledModeDoc.vue';
import UsageDoc from '@/doc/vite/UsageDoc.vue';
import CreateVueDoc from '@/doc/vite/videos/CreateVueDoc.vue';

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
                    id: 'plugin',
                    label: 'Plugin',
                    component: PluginDoc
                },
                {
                    id: 'theming',
                    label: 'Theming',
                    description: 'PrimeVue has two theming modes; styled or unstyled.',
                    children: [
                        {
                            id: 'styled',
                            label: 'Styled Mode',
                            component: StyledModeDoc
                        },
                        {
                            id: 'unstyled',
                            label: 'Unstyled Mode',
                            component: UnstyledModeDoc
                        }
                    ]
                },
                {
                    id: 'usage',
                    label: 'Usage',
                    component: UsageDoc
                },
                {
                    id: 'examples',
                    label: 'Examples',
                    component: ExamplesDoc
                },
                {
                    id: 'videos',
                    label: 'Video Tutorial',
                    component: CreateVueDoc
                }
            ]
        };
    }
};
</script>
