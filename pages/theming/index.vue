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
import ArchitectureDoc from '@/doc/theming/ArchitectureDoc';
import CSSVariablesDoc from '@/doc/theming/CSSVariablesDoc';
import DesignerDoc from '@/doc/theming/DesignerDoc';
import PrimeFlexDoc from '@/doc/theming/PrimeFlexDoc';
import ScaleDoc from '@/doc/theming/ScaleDoc';
import ScopedStylingDoc from '@/doc/theming/ScopedStylingDoc';
import ThemesDoc from '@/doc/theming/ThemesDoc';
import UtilsDoc from '@/doc/theming/UtilsDoc';

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
                    id: 'themes',
                    label: 'Themes',
                    component: ThemesDoc
                },
                {
                    id: 'designer',
                    label: 'Designer',
                    component: DesignerDoc
                },
                {
                    id: 'scopedstyling',
                    label: 'Scoped Styling',
                    component: ScopedStylingDoc
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
