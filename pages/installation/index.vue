<template>
    <Head>
        <Title>Getting Started - PrimeVue</Title>
        <Meta name="description" content="PrimeVue is a rich set of open source components for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation</h1>
                <p>PrimeVue is a rich set of open source UI components for Vue.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DownloadDoc from '@/doc/installation/DownloadDoc.vue';
import ExamplesDoc from '@/doc/installation/ExamplesDoc.vue';
import PluginDoc from '@/doc/installation/PluginDoc.vue';
import PropCasesDoc from '@/doc/installation/PropCasesDoc.vue';
import StyledModeDoc from '@/doc/installation/StyledModeDoc.vue';
import UnstyledModeDoc from '@/doc/installation/UnstyledModeDoc.vue';
import UsageDoc from '@/doc/installation/UsageDoc.vue';
import CreateVueDoc from '@/doc/installation/videos/CreateVueDoc.vue';

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
                    id: 'usage',
                    label: 'Usage',
                    component: UsageDoc
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
                    id: 'propcases',
                    label: 'Prop Cases',
                    component: PropCasesDoc
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
