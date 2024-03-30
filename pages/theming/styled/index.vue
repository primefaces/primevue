<template>
    <div>
        <Head>
            <Title>Styled Mode - PrimeVue</Title>
            <Meta name="description" content="Choose from a variety of pre-styled themes or develop your own." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Styled Mode</h1>
                    <p>Choose from a variety of pre-styled themes or develop your own..</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ArchitectureDoc from '@/doc/theming/styled/ArchitectureDoc.vue';
import CSSModulesDoc from '@/doc/theming/styled/CSSModulesDoc.vue';
import ScaleDoc from '@/doc/theming/styled/ScaleDoc.vue';
import ScopedCSSDoc from '@/doc/theming/styled/ScopedCSSDoc.vue';
import CSSLayerDoc from '@/doc/theming/styled/CSSLayerDoc.vue';
import DarkModeToggleDoc from '@/doc/theming/styled/DarkModeToggleDoc.vue';
import OptionsDoc from '@/doc/theming/styled/configuration/OptionsDoc.vue';
import ThemeDoc from '@/doc/theming/styled/configuration/ThemeDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'architecture',
                    label: 'Architecture',
                    component: ArchitectureDoc
                },
                {
                    id: 'configuration',
                    label: 'Configuration',
                    children: [
                        {
                            id: 'theme',
                            label: 'Theme',
                            component: ThemeDoc
                        },
                        {
                            id: 'options',
                            label: 'Options',
                            component: OptionsDoc
                        }
                    ]
                },
                {
                    id: 'darkmodetoggle',
                    label: 'Dark Mode Toggle',
                    component: DarkModeToggleDoc
                },
                {
                    id: 'csslayer',
                    label: 'CSS Layer',
                    component: CSSLayerDoc
                },
                {
                    id: 'scopedcss',
                    label: 'Scoped CSS',
                    component: ScopedCSSDoc
                },
                {
                    id: 'cssmodules',
                    label: 'CSS Modules',
                    component: CSSModulesDoc
                },
                {
                    id: 'scale',
                    label: 'Scale',
                    component: ScaleDoc
                }
            ]
        };
    }
};
</script>
