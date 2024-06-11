<template>
    <DocComponent
        title="Vue SelectButton Component"
        header="SelectButton"
        description="SelectButton is used to choose single or multiple items from a list using buttons."
        :componentDocs="docs"
        :apiDocs="['SelectButton']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/selectbutton/AccessibilityDoc.vue';
import BasicDoc from '@/doc/selectbutton/BasicDoc.vue';
import DisabledDoc from '@/doc/selectbutton/DisabledDoc.vue';
import ImportDoc from '@/doc/selectbutton/ImportDoc.vue';
import InvalidDoc from '@/doc/selectbutton/InvalidDoc.vue';
import MultipleDoc from '@/doc/selectbutton/MultipleDoc.vue';
import TemplateDoc from '@/doc/selectbutton/TemplateDoc.vue';
import PTComponent from '@/doc/selectbutton/pt/index.vue';
import ThemingDoc from '@/doc/selectbutton/theming/index.vue';

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
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
