<template>
    <div>
        <Head>
            <Title>Theming - PrimeVue</Title>
            <Meta name="description" content="Choose from a variety of themes or develop your own theme easily." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Theming</h1>
                    <p>Choose from a variety of themes or develop your own theme easily.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ArchitectureDoc from '@/doc/theming/ArchitectureDoc.vue';
import BuiltInThemesDoc from '@/doc/theming/BuiltInThemesDoc.vue';
import CSSModulesDoc from '@/doc/theming/CSSModulesDoc.vue';
import CSSVariablesDoc from '@/doc/theming/CSSVariablesDoc.vue';
import CustomThemeDoc from '@/doc/theming/CustomThemeDoc.vue';
import PrimeFlexDoc from '@/doc/theming/PrimeFlexDoc.vue';
import ScaleDoc from '@/doc/theming/ScaleDoc.vue';
import ScopedCSSDoc from '@/doc/theming/ScopedCSSDoc.vue';
import SwitchThemesDoc from '@/doc/theming/SwitchThemesDoc.vue';
import UtilsDoc from '@/doc/theming/UtilsDoc.vue';

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
                    id: 'builtinthemes',
                    label: 'Built-in Themes',
                    component: BuiltInThemesDoc
                },
                {
                    id: 'switchthemes',
                    label: 'Switch Themes',
                    component: SwitchThemesDoc
                },
                {
                    id: 'customtheme',
                    label: 'Custom Theme',
                    component: CustomThemeDoc
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
                },
                {
                    id: 'primeflex',
                    label: 'PrimeFlex',
                    component: PrimeFlexDoc
                },
                {
                    id: 'utils',
                    label: 'Utils',
                    component: UtilsDoc
                },
                {
                    id: 'cssvariables',
                    label: 'CSS Variables',
                    component: CSSVariablesDoc
                }
            ]
        };
    }
};
</script>
