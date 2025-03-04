<template>
    <DocComponent title="Vue InputNumber Component" header="InputNumber" description="InputNumber is an input component to provide numerical input." :componentDocs="docs" />
</template>

<script setup>
import ButtonsDoc from '@/doc/inputnumber/ButtonsDoc.vue';
import CurrencyDoc from '@/doc/inputnumber/CurrencyDoc.vue';
import DisabledDoc from '@/doc/inputnumber/DisabledDoc.vue';
import FilledDoc from '@/doc/inputnumber/FilledDoc.vue';
import ImportDoc from '@/doc/inputnumber/ImportDoc.vue';
import InvalidDoc from '@/doc/inputnumber/InvalidDoc.vue';
import LocaleDoc from '@/doc/inputnumber/LocaleDoc.vue';
import NumeralsDoc from '@/doc/inputnumber/NumeralsDoc.vue';
import PrefixSuffixDoc from '@/doc/inputnumber/PrefixSuffixDoc.vue';
import SizesDoc from '@/doc/inputnumber/SizesDoc.vue';
import VerticalDoc from '@/doc/inputnumber/VerticalDoc.vue';
import { ref } from 'vue';

const docs = ref([
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
        id: 'filled',
        label: 'Filled',
        component: FilledDoc
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
    }
]);
</script>
