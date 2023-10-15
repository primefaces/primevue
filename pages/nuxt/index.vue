<template>
    <div>
        <Head>
            <Title>Nuxt Module - PrimeVue</Title>
            <Meta name="description" content="PrimeVue has seamless integration with Nuxt using an exclusive module." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Nuxt</h1>
                    <p>PrimeVue has seamless integration with Nuxt using the official module.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import DownloadDoc from '@/doc/nuxt/DownloadDoc.vue';
import SetupDoc from '@/doc/nuxt/SetupDoc.vue';
import UsePrimeVueDoc from '@/doc/nuxt/configuration/UsePrimeVueDoc.vue';
import OptionsDoc from '@/doc/nuxt/configuration/OptionsDoc.vue';
import ComponentsDoc from '@/doc/nuxt/configuration/ComponentsDoc.vue';
import DirectivesDoc from '@/doc/nuxt/configuration/DirectivesDoc.vue';
import ComposablesDoc from '@/doc/nuxt/configuration/ComposablesDoc.vue';
import StyleDoc from '@/doc/nuxt/StyleDoc.vue';
import ExampleDoc from '@/doc/nuxt/ExampleDoc.vue';
import VideoDoc from '../../doc/nuxt/VideoDoc.vue';

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
                    id: 'setup',
                    label: 'Setup',
                    component: SetupDoc
                },
                {
                    id: 'configuration',
                    label: 'Configuration',
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
                        }
                    ]
                },
                {
                    id: 'styles',
                    label: 'Styles',
                    component: StyleDoc
                },
                {
                    id: 'video',
                    label: 'Video',
                    component: VideoDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                }
            ]
        };
    }
};
</script>
