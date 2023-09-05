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
import DownloadDoc from '@/doc/installation/DownloadDoc';
import ExamplesDoc from '@/doc/installation/ExamplesDoc';
import NuxtIntegrationDoc from '@/doc/installation/NuxtIntegrationDoc';
import PluginDoc from '@/doc/installation/PluginDoc';
import PropCasesDoc from '@/doc/installation/PropCasesDoc';
import StyledModeDoc from '@/doc/installation/StyledModeDoc';
import UnstyledModeDoc from '@/doc/installation/UnstyledModeDoc';
import UsageDoc from '@/doc/installation/UsageDoc';
import CreateVueDoc from '@/doc/installation/videos/CreateVueDoc';
import NuxtDoc from '@/doc/installation/videos/NuxtDoc';

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
                    description: 'PrimeVue has two theming has modes; styled or unstyled.',
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
                    id: 'nuxtintegration',
                    label: 'Nuxt Integration',
                    component: NuxtIntegrationDoc
                },
                {
                    id: 'examples',
                    label: 'Examples',
                    component: ExamplesDoc
                },
                {
                    id: 'videos',
                    label: 'Videos',
                    description: 'Video tutorials to take you through step-by-step.',
                    children: [
                        {
                            id: 'createvue',
                            label: 'CreateVue',
                            component: CreateVueDoc
                        },
                        {
                            id: 'nuxt',
                            label: 'Nuxt',
                            component: NuxtDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>
