<template>
    <DocComponent title="Vue Chips Component" header="Chips" description="Chips is used to enter multiple values on an input field." :componentDocs="docs" :apiDocs="['Chips']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/chips/AccessibilityDoc.vue';
import BasicDoc from '@/doc/chips/BasicDoc.vue';
import DisabledDoc from '@/doc/chips/DisabledDoc.vue';
import FilledDoc from '@/doc/chips/FilledDoc.vue';
import FloatLabelDoc from '@/doc/chips/FloatLabelDoc.vue';
import ImportDoc from '@/doc/chips/ImportDoc.vue';
import InvalidDoc from '@/doc/chips/InvalidDoc.vue';
import SeparatorDoc from '@/doc/chips/SeparatorDoc.vue';
import TemplateDoc from '@/doc/chips/TemplateDoc.vue';
import PTComponent from '@/doc/chips/pt/index.vue';
import ThemingDoc from '@/doc/chips/theming/index.vue';

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
                    id: 'separator',
                    label: 'Separator',
                    component: SeparatorDoc
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
