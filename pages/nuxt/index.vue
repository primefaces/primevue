<template>
    <div>
        <Head>
            <Title>Install PrimeVue with Nuxt</Title>
            <Meta name="description" content="Setting up PrimeVue in a Nuxt project" />
        </Head>
        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Install PrimeVue with Nuxt</h1>
                    <p>Setting up PrimeVue in a Nuxt project.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import DownloadDoc from '@/doc/nuxt/DownloadDoc.vue';
import ExamplesDoc from '@/doc/nuxt/ExamplesDoc.vue';
import ModuleSetupDoc from '@/doc/nuxt/ModuleSetupDoc.vue';
import StyledModeDoc from '@/doc/nuxt/StyledModeDoc.vue';
import UnstyledModeDoc from '@/doc/nuxt/UnstyledModeDoc.vue';
import UsageDoc from '@/doc/nuxt/UsageDoc.vue';
import VideoDoc from '@/doc/nuxt/VideoDoc.vue';
import CSSLayerOrderDoc from '@/doc/nuxt/configuration/CSSLayerOrderDoc.vue';
import ComponentsDoc from '@/doc/nuxt/configuration/ComponentsDoc.vue';
import ComposablesDoc from '@/doc/nuxt/configuration/ComposablesDoc.vue';
import DirectivesDoc from '@/doc/nuxt/configuration/DirectivesDoc.vue';
import ImportPTDoc from '@/doc/nuxt/configuration/ImportPTDoc.vue';
import OptionsDoc from '@/doc/nuxt/configuration/OptionsDoc.vue';
import UsePrimeVueDoc from '@/doc/nuxt/configuration/UsePrimeVueDoc.vue';

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
                    id: 'module-setup',
                    label: 'Module Setup',
                    component: ModuleSetupDoc
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
                    id: 'configuration',
                    label: 'Module Configuration',
                    children: [
                        {
                            id: 'useprimevue',
                            label: 'usePrimeVue',
                            component: UsePrimeVueDoc
                        },
                        {
                            id: 'options',
                            label: 'options',
                            component: OptionsDoc
                        },
                        {
                            id: 'components',
                            label: 'components',
                            component: ComponentsDoc
                        },
                        {
                            id: 'directives',
                            label: 'directives',
                            component: DirectivesDoc
                        },
                        {
                            id: 'composables',
                            label: 'composables',
                            component: ComposablesDoc
                        },
                        {
                            id: 'importpt',
                            label: 'importPT',
                            component: ImportPTDoc
                        },
                        {
                            id: 'layerorder',
                            label: 'cssLayerOrder',
                            component: CSSLayerOrderDoc
                        }
                    ]
                },
                {
                    id: 'examples',
                    label: 'Examples',
                    component: ExamplesDoc
                },
                {
                    id: 'video',
                    label: 'Video Tutorial',
                    component: VideoDoc
                }
            ]
        };
    }
};
</script>
