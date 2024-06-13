<template>
    <DocComponent
        title="Vue CascadeSelect Component"
        header="CascadeSelect"
        description="CascadeSelect is a form component to select a value from a nested structure of options."
        :componentDocs="docs"
        :apiDocs="['CascadeSelect']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/cascadeselect/AccessibilityDoc.vue';
import BasicDoc from '@/doc/cascadeselect/BasicDoc.vue';
import DisabledDoc from '@/doc/cascadeselect/DisabledDoc.vue';
import FilledDoc from '@/doc/cascadeselect/FilledDoc.vue';
import FloatLabelDoc from '@/doc/cascadeselect/FloatLabelDoc.vue';
import ImportDoc from '@/doc/cascadeselect/ImportDoc.vue';
import InvalidDoc from '@/doc/cascadeselect/InvalidDoc.vue';
import LoadingStateDoc from '@/doc/cascadeselect/LoadingStateDoc.vue';
import TemplateDoc from '@/doc/cascadeselect/TemplateDoc.vue';
import PTComponent from '@/doc/cascadeselect/pt/index.vue';
import ThemingDoc from '@/doc/cascadeselect/theming/index.vue';

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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'loadingstate',
                    label: 'Loading State',
                    component: LoadingStateDoc
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
