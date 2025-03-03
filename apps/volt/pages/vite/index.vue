<template>
    <Head>
        <Title>Theming PrimeVue with Tailwind CSS in a Vite project.</Title>
        <Meta name="description" content="Theming PrimeVue with Tailwind CSS in a Vite project." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation with Vite</h1>
                <p>Theming PrimeVue with Tailwind CSS in a Vite project.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import CSSVariablesDoc from '@/doc/vite/CSSVariablesDoc.vue';
import DownloadDoc from '@/doc/vite/DownloadDoc.vue';
import ExampleDoc from '@/doc/vite/ExampleDoc.vue';
import PluginDoc from '@/doc/vite/PluginDoc.vue';
import StylesDoc from '@/doc/vite/StylesDoc.vue';
import TailwindDoc from '@/doc/vite/TailwindDoc.vue';
import ImportStylesDoc from '@/doc/vite/tailwind/ImportStylesDoc.vue';
import PostCSSImportDoc from '@/doc/vite/tailwind/PostCSSImportDoc.vue';
import PrimeUIPluginDoc from '@/doc/vite/tailwind/PrimeUIPluginDoc.vue';

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
                    id: 'plugin',
                    label: 'Plugin',
                    component: PluginDoc
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
