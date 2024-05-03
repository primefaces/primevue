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
import CaseStyleDoc from '@/doc/theming/styled/CaseStyleDoc.vue';
import ColorsDoc from '@/doc/theming/styled/ColorsDoc.vue';
import DarkModeToggleDoc from '@/doc/theming/styled/DarkModeToggleDoc.vue';
import PresetsDoc from '@/doc/theming/styled/PresetsDoc.vue';
import ReservedKeysDoc from '@/doc/theming/styled/ReservedKeysDoc.vue';
import ScaleDoc from '@/doc/theming/styled/ScaleDoc.vue';
import ScopedTokensDoc from '@/doc/theming/styled/ScopedTokensDoc.vue';
import OptionsDoc from '@/doc/theming/styled/configuration/OptionsDoc.vue';
import ThemeDoc from '@/doc/theming/styled/configuration/ThemeDoc.vue';
import LibrariesDoc from '@/doc/theming/styled/csslayer/LibrariesDoc.vue';
import ResetDoc from '@/doc/theming/styled/csslayer/ResetDoc.vue';
import SpecificityDoc from '@/doc/theming/styled/csslayer/SpecificityDoc.vue';
import ComponentDoc from '@/doc/theming/styled/customization/ComponentDoc.vue';
import DefinePresetDoc from '@/doc/theming/styled/customization/DefinePresetDoc.vue';
import FocusRingDoc from '@/doc/theming/styled/customization/FocusRingDoc.vue';
import FontDoc from '@/doc/theming/styled/customization/FontDoc.vue';
import FormsDoc from '@/doc/theming/styled/customization/FormsDoc.vue';
import NoirDoc from '@/doc/theming/styled/customization/NoirDoc.vue';
import PrimaryDoc from '@/doc/theming/styled/customization/PrimaryDoc.vue';
import SurfaceDoc from '@/doc/theming/styled/customization/SurfaceDoc.vue';
import DTDoc from '@/doc/theming/styled/utils/DTDoc.vue';
import PaletteDoc from '@/doc/theming/styled/utils/PaletteDoc.vue';
import UpdatePresetDoc from '@/doc/theming/styled/utils/UpdatePresetDoc.vue';
import UpdatePrimaryPaletteDoc from '@/doc/theming/styled/utils/UpdatePrimaryPaletteDoc.vue';
import UpdateSurfacePaletteDoc from '@/doc/theming/styled/utils/UpdateSurfacePaletteDoc.vue';
import UsePresetDoc from '@/doc/theming/styled/utils/UsePresetDoc.vue';

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
                    label: 'Configuration API',
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
                    id: 'presets',
                    label: 'Presets',
                    component: PresetsDoc
                },
                {
                    id: 'casestyle',
                    label: 'Case Style',
                    component: CaseStyleDoc
                },
                {
                    id: 'reserved',
                    label: 'Reserved Keys',
                    component: ReservedKeysDoc
                },
                {
                    id: 'customization',
                    label: 'Customization',
                    children: [
                        {
                            id: 'definepreset',
                            label: 'definePreset',
                            component: DefinePresetDoc
                        },
                        {
                            id: 'primary',
                            label: 'Primary',
                            component: PrimaryDoc
                        },
                        {
                            id: 'noir',
                            label: 'Noir',
                            component: NoirDoc
                        },
                        {
                            id: 'surface',
                            label: 'Surface',
                            component: SurfaceDoc
                        },
                        {
                            id: 'font',
                            label: 'Font',
                            component: FontDoc
                        },
                        {
                            id: 'forms',
                            label: 'Forms',
                            component: FormsDoc
                        },
                        {
                            id: 'focusring',
                            label: 'Focus Ring',
                            component: FocusRingDoc
                        },
                        {
                            id: 'component',
                            label: 'Component',
                            component: ComponentDoc
                        }
                    ]
                },
                {
                    id: 'scopedtokens',
                    label: 'Scoped Tokens',
                    component: ScopedTokensDoc
                },
                {
                    id: 'utils',
                    label: 'Utils',
                    children: [
                        {
                            id: 'usepreset',
                            label: 'usePreset',
                            component: UsePresetDoc
                        },
                        {
                            id: 'updatepreset',
                            label: 'updatePreset',
                            component: UpdatePresetDoc
                        },
                        {
                            id: 'updateprimarypalette',
                            label: 'updatePrimaryPalette',
                            component: UpdatePrimaryPaletteDoc
                        },
                        {
                            id: 'updatesurfacepalette',
                            label: 'updateSurfacePalette',
                            component: UpdateSurfacePaletteDoc
                        },
                        {
                            id: 'dt',
                            label: '$dt',
                            component: DTDoc
                        },
                        {
                            id: 'Palette',
                            label: 'palette',
                            component: PaletteDoc
                        }
                    ]
                },
                {
                    id: 'colors',
                    label: 'Colors',
                    component: ColorsDoc
                },
                {
                    id: 'darkmodetoggle',
                    label: 'Dark Mode Toggle',
                    component: DarkModeToggleDoc
                },
                {
                    id: 'csslayer',
                    label: 'CSS Layer',
                    description: 'The PrimeVue CSS layer only applies to styled mode when layering is enabled explicitly at theme configuration, in unstyled mode the built-in CSS classes are not included and as a result no layer is necessary.',
                    children: [
                        {
                            id: 'specificity',
                            label: 'Specificity',
                            component: SpecificityDoc
                        },
                        {
                            id: 'reset',
                            label: 'Reset',
                            component: ResetDoc
                        },
                        {
                            id: 'libraries',
                            label: 'Libraries',
                            component: LibrariesDoc
                        }
                    ]
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
