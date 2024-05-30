<template>
    <Head>
        <Title>Tailwind CSS - PrimeVue</Title>
        <Meta name="description" content="Integration between PrimeVue and Tailwind CSS" />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Tailwind CSS</h1>
                <p>Integration between PrimeVue and Tailwind CSS.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import AnimationsDoc from '@/doc/tailwind/AnimationsDoc.vue';
import ExtensionsDoc from '@/doc/tailwind/ExtensionsDoc.vue';
import OverviewDoc from '@/doc/tailwind/OverviewDoc.vue';
import PluginDoc from '@/doc/tailwind/PluginDoc.vue';
import PresetsDoc from '@/doc/tailwind/PresetsDoc.vue';
import ColorPaletteDoc from '@/doc/tailwind/samples/ColorPaletteDoc.vue';
import FormDoc from '@/doc/tailwind/samples/FormDoc.vue';
import HeadlessDoc from '@/doc/tailwind/samples/HeadlessDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'overview',
                    label: 'Overview',
                    component: OverviewDoc
                },
                {
                    id: 'presets',
                    label: 'Presets',
                    component: PresetsDoc
                },
                {
                    id: 'plugin',
                    label: 'PluginDoc',
                    component: PluginDoc
                },
                {
                    id: 'extensions',
                    label: 'Extensions',
                    component: ExtensionsDoc
                },
                {
                    id: 'samples',
                    label: 'Samples',
                    description: 'Example uses cases with PrimeVue and Tailwind CSS.',
                    children: [
                        {
                            id: 'colorpalette',
                            label: 'Color Palette',
                            component: ColorPaletteDoc
                        },
                        {
                            id: 'form',
                            label: 'Form',
                            component: FormDoc
                        },
                        {
                            id: 'headless',
                            label: 'Headless',
                            component: HeadlessDoc
                        }
                    ]
                },
                {
                    id: 'animations',
                    label: 'Animations',
                    component: AnimationsDoc
                }
            ]
        };
    }
};
</script>
