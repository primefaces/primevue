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
import StyledModeDoc from '@/doc/vite/StyledModeDoc.vue';
import UnstyledModeDoc from '@/doc/vite/UnstyledModeDoc.vue';
import UsageDoc from '@/doc/vite/UsageDoc.vue';

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
                    description:
                        'PrimeVue plugin is required to be installed as an application plugin to set up the default configuration. The plugin is lightweight, only sets up the configuration object without affecting your application. PrimeVue has two styling modes; Styled and Unstyled. If you are just getting started, begin with the styled mode.',
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
                }
            ]
        };
    }
};
</script>
