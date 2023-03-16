<template>
    <DocComponent title="Vue InputNumber Component" header="InputNumber" description="InputNumber is an input component to provide numerical input." :componentDocs="docs" :apiDocs="['InputNumber']" />
</template>

<script>
import AccessibilityDoc from '@/doc/inputnumber/AccessibilityDoc';
import ButtonsDoc from '@/doc/inputnumber/ButtonsDoc';
import CurrencyDoc from '@/doc/inputnumber/CurrencyDoc';
import DisabledDoc from '@/doc/inputnumber/DisabledDoc';
import FloatLabelDoc from '@/doc/inputnumber/FloatLabelDoc';
import VeeValidateDoc from '@/doc/inputnumber/form/VeeValidateDoc';
import ImportDoc from '@/doc/inputnumber/ImportDoc';
import InvalidDoc from '@/doc/inputnumber/InvalidDoc';
import LocaleDoc from '@/doc/inputnumber/LocaleDoc';
import NumeralsDoc from '@/doc/inputnumber/NumeralsDoc';
import PrefixSuffixDoc from '@/doc/inputnumber/PrefixSuffixDoc';
import StyleDoc from '@/doc/inputnumber/StyleDoc';
import VerticalDoc from '@/doc/inputnumber/VerticalDoc';

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
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'form',
                    label: 'Form',
                    description: 'Compatibility with popular Vue form libraries.',
                    children: [
                        {
                            id: 'veevalidate',
                            label: 'VeeValidate',
                            component: VeeValidateDoc
                        }
                    ]
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
