<template>
    <Head>
        <Title>Theming PrimeVue with Tailwind CSS in a Nuxt project.</Title>
        <Meta name="description" content="Theming PrimeVue with Tailwind CSS in a Nuxt project." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation with Nuxt</h1>
                <p>Theming PrimeVue with Tailwind CSS in a Nuxt project.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import CSSVariablesDoc from '@/doc/nuxt/CSSVariablesDoc.vue';
import DownloadDoc from '@/doc/nuxt/DownloadDoc.vue';
import ExampleDoc from '@/doc/nuxt/ExampleDoc.vue';
import NuxtConfigDoc from '@/doc/nuxt/NuxtConfigDoc.vue';
import StylesDoc from '@/doc/nuxt/StylesDoc.vue';
import TailwindDoc from '@/doc/nuxt/TailwindDoc.vue';
import ImportStylesDoc from '@/doc/nuxt/tailwind/ImportStylesDoc.vue';
import PostCSSImportDoc from '@/doc/nuxt/tailwind/PostCSSImportDoc.vue';
import PrimeUIPluginDoc from '@/doc/nuxt/tailwind/PrimeUIPluginDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'tailwind',
                    label: 'Tailwind CSS',
                    component: TailwindDoc
                },
                {
                    id: 'download',
                    label: 'Download',
                    component: DownloadDoc
                },
                {
                    id: 'nuxtconfig',
                    label: 'Nuxt Config',
                    component: NuxtConfigDoc
                },
                {
                    id: 'styles',
                    label: 'Styles',
                    component: StylesDoc
                },
                {
                    id: 'tailwind-config',
                    label: 'Tailwind Config',
                    children: [
                        {
                            id: 'primeuiplugin',
                            label: 'PrimeUI Plugin',
                            component: PrimeUIPluginDoc
                        },
                        {
                            id: 'postcssimport',
                            label: 'PostCSS Import',
                            component: PostCSSImportDoc
                        },
                        {
                            id: 'importstyles',
                            label: 'Import Styles',
                            component: ImportStylesDoc
                        }
                    ]
                },
                {
                    id: 'css-variables',
                    label: 'CSS Variables',
                    component: CSSVariablesDoc
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
