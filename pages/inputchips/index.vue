<template>
    <DocComponent
        title="Vue InputChips Component"
        header="InputChips"
        description="InputChips is used to enter multiple values on an input field."
        :componentDocs="docs"
        :apiDocs="['InputChips']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/inputchips/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputchips/BasicDoc.vue';
import DisabledDoc from '@/doc/inputchips/DisabledDoc.vue';
import FilledDoc from '@/doc/inputchips/FilledDoc.vue';
import FloatLabelDoc from '@/doc/inputchips/FloatLabelDoc.vue';
import ImportDoc from '@/doc/inputchips/ImportDoc.vue';
import InvalidDoc from '@/doc/inputchips/InvalidDoc.vue';
import SeparatorDoc from '@/doc/inputchips/SeparatorDoc.vue';
import TemplateDoc from '@/doc/inputchips/TemplateDoc.vue';
import PTComponent from '@/doc/inputchips/pt/index.vue';
import ThemingDoc from '@/doc/inputchips/theming/index.vue';

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
