<template>
    <div>
        <Head>
            <Title>Install PrimeVue with Nuxt</Title>
            <Meta name="description" content="Setting up PrimeVue in a Nuxt project" />
        </Head>
        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div class="flex-1">
                            <h1>Install PrimeVue with Nuxt</h1>
                            <p>Setting up PrimeVue in a Nuxt project.</p>
                        </div>
                        <DocCopyMarkdown docType="page" class="flex-shrink-0" />
                    </div>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import DocCopyMarkdown from '@/components/doc/DocCopyMarkdown.vue';
import AutoImportDoc from '@/doc/nuxt/AutoImportDoc.vue';
import DownloadDoc from '@/doc/nuxt/DownloadDoc.vue';
import ExamplesDoc from '@/doc/nuxt/ExamplesDoc.vue';
import ModuleDoc from '@/doc/nuxt/ModuleDoc.vue';
import NextStepsDoc from '@/doc/nuxt/NextStepsDoc.vue';
import ThemeDoc from '@/doc/nuxt/ThemeDoc.vue';
import VerifyDoc from '@/doc/nuxt/VerifyDoc.vue';
import ComponentsDoc from '@/doc/nuxt/configuration/ComponentsDoc.vue';
import ComposablesDoc from '@/doc/nuxt/configuration/ComposablesDoc.vue';
import DirectivesDoc from '@/doc/nuxt/configuration/DirectivesDoc.vue';
import ImportPTDoc from '@/doc/nuxt/configuration/ImportPTDoc.vue';
import ImportThemeDoc from '@/doc/nuxt/configuration/ImportThemeDoc.vue';
import OptionsDoc from '@/doc/nuxt/configuration/OptionsDoc.vue';
import UsePrimeVueDoc from '@/doc/nuxt/configuration/UsePrimeVueDoc.vue';

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
                    id: 'module',
                    label: 'Module',
                    component: ModuleDoc
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
                            id: 'autoimport',
                            label: 'autoImport',
                            component: AutoImportDoc
                        },
                        {
                            id: 'importpt',
                            label: 'importPT',
                            component: ImportPTDoc
                        },
                        {
                            id: 'importtheme',
                            label: 'importTheme',
                            component: ImportThemeDoc
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
                    id: 'examples',
                    label: 'Examples',
                    component: ExamplesDoc
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
