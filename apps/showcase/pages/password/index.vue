<template>
    <DocComponent title="Vue Password Component" header="Password" description="Password displays strength indicator for password fields." :componentDocs="docs" :apiDocs="['Password']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/password/AccessibilityDoc.vue';
import BasicDoc from '@/doc/password/BasicDoc.vue';
import ClearIconDoc from '@/doc/password/ClearIconDoc.vue';
import DisabledDoc from '@/doc/password/DisabledDoc.vue';
import FilledDoc from '@/doc/password/FilledDoc.vue';
import FloatLabelDoc from '@/doc/password/FloatLabelDoc.vue';
import FluidDoc from '@/doc/password/FluidDoc.vue';
import FormsDoc from '@/doc/password/FormsDoc.vue';
import IftaLabelDoc from '@/doc/password/IftaLabelDoc.vue';
import ImportDoc from '@/doc/password/ImportDoc.vue';
import InvalidDoc from '@/doc/password/InvalidDoc.vue';
import LocaleDoc from '@/doc/password/LocaleDoc.vue';
import MeterDoc from '@/doc/password/MeterDoc.vue';
import PTComponent from '@/doc/password/pt/index.vue';
import SizesDoc from '@/doc/password/SizesDoc.vue';
import TemplateDoc from '@/doc/password/TemplateDoc.vue';
import ThemingDoc from '@/doc/password/theming/index.vue';
import ToggleMaskDoc from '@/doc/password/ToggleMaskDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'forms',
                    label: 'Forms',
                    component: FormsDoc
                },
                {
                    id: 'meter',
                    label: 'Meter',
                    component: MeterDoc
                },
                {
                    id: 'locale',
                    label: 'Locale',
                    component: LocaleDoc
                },
                {
                    id: 'togglemask',
                    label: 'ToggleMask',
                    component: ToggleMaskDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'iftalabel',
                    label: 'Ifta Label',
                    component: IftaLabelDoc
                },
                {
                    id: 'clearicon',
                    label: 'Clear Icon',
                    component: ClearIconDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'fluid',
                    label: 'Fluid',
                    component: FluidDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
