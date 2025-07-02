<template>
    <Head>
        <Title>Tailwind CSS - PrimeVue</Title>
        <Meta name="description" content="Integration between PrimeVue and Tailwind CSS both in styled and unstyled modes" />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Tailwind CSS</h1>
                <p>Integration between PrimeVue and Tailwind CSS both in styled and unstyled modes.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import AnimationsDoc from '@/doc/tailwind/AnimationsDoc.vue';
import DarkModeDoc from '@/doc/tailwind/DarkModeDoc.vue';
import ExtensionsDoc from '@/doc/tailwind/ExtensionsDoc.vue';
import OverrideDoc from '@/doc/tailwind/OverrideDoc.vue';
import OverviewDoc from '@/doc/tailwind/OverviewDoc.vue';
import PluginDoc from '@/doc/tailwind/PluginDoc.vue';
import VoltDoc from '@/doc/tailwind/VoltDoc.vue';
import ColorPaletteDoc from '@/doc/tailwind/samples/ColorPaletteDoc.vue';
import FormDoc from '@/doc/tailwind/samples/FormDoc.vue';
import HeadlessDoc from '@/doc/tailwind/samples/HeadlessDoc.vue';
import StarterDoc from '@/doc/tailwind/samples/StarterDoc.vue';

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
                    id: 'volt',
                    label: 'Volt UI',
                    component: VoltDoc
                },
                {
                    id: 'plugin',
                    label: 'Plugin',
                    component: PluginDoc
                },
                {
                    id: 'extensions',
                    label: 'Extensions',
                    component: ExtensionsDoc
                },
                {
                    id: 'darkmode',
                    label: 'Dark Mode',
                    component: DarkModeDoc
                },
                {
                    id: 'override',
                    label: 'Override',
                    component: OverrideDoc
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
                        },
                        {
                            id: 'starter',
                            label: 'Starter',
                            component: StarterDoc
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
