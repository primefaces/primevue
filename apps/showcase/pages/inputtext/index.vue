<template>
    <DocComponent title="Vue Input Component" header="InputText" description="InputText is an extension to standard input element with theming." :componentDocs="docs" :apiDocs="['InputText']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/inputtext/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputtext/BasicDoc.vue';
import DisabledDoc from '@/doc/inputtext/DisabledDoc.vue';
import FilledDoc from '@/doc/inputtext/FilledDoc.vue';
import FloatLabelDoc from '@/doc/inputtext/FloatLabelDoc.vue';
import HelpTextDoc from '@/doc/inputtext/HelpTextDoc.vue';
import ImportDoc from '@/doc/inputtext/ImportDoc.vue';
import InvalidDoc from '@/doc/inputtext/InvalidDoc.vue';
import PTComponent from '@/doc/inputtext/pt/index.vue';
import ThemingDoc from '@/doc/inputtext/theming/index.vue';

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
                /*{
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },*/
                {
                    id: 'helptext',
                    label: 'HelpText',
                    component: HelpTextDoc
                },
                {
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
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
