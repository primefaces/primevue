<template>
    <DocComponent
        title="Vue InputNumber Component"
        header="InputNumber"
        description="InputNumber is an input component to provide numerical input."
        :componentDocs="docs"
        :apiDocs="['InputNumber']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/inputnumber/AccessibilityDoc.vue';
import ButtonsDoc from '@/doc/inputnumber/ButtonsDoc.vue';
import CurrencyDoc from '@/doc/inputnumber/CurrencyDoc.vue';
import DisabledDoc from '@/doc/inputnumber/DisabledDoc.vue';
import FilledDoc from '@/doc/inputnumber/FilledDoc.vue';
import FloatLabelDoc from '@/doc/inputnumber/FloatLabelDoc.vue';
import FormsDoc from '@/doc/inputnumber/FormsDoc.vue';
import IftaLabelDoc from '@/doc/inputnumber/IftaLabelDoc.vue';
import SizesDoc from '@/doc/inputnumber/SizesDoc.vue';
import ImportDoc from '@/doc/inputnumber/ImportDoc.vue';
import InvalidDoc from '@/doc/inputnumber/InvalidDoc.vue';
import LocaleDoc from '@/doc/inputnumber/LocaleDoc.vue';
import NumeralsDoc from '@/doc/inputnumber/NumeralsDoc.vue';
import PrefixSuffixDoc from '@/doc/inputnumber/PrefixSuffixDoc.vue';
import VerticalDoc from '@/doc/inputnumber/VerticalDoc.vue';
import PTComponent from '@/doc/inputnumber/pt/index.vue';
import ThemingDoc from '@/doc/inputnumber/theming/index.vue';

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
                    id: 'numerals',
                    label: 'Numerals',
                    component: NumeralsDoc
                },
                {
                    id: 'forms',
                    label: 'Forms',
                    component: FormsDoc
                },
                {
                    id: 'locale',
                    label: 'Locale',
                    component: LocaleDoc
                },
                {
                    id: 'currency',
                    label: 'Currency',
                    component: CurrencyDoc
                },
                {
                    id: 'prefixsuffix',
                    label: 'Prefix & Suffix',
                    component: PrefixSuffixDoc
                },
                {
                    id: 'buttons',
                    label: 'Buttons',
                    component: ButtonsDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
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
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
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
