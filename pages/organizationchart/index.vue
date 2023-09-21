<template>
    <DocComponent
        title="Vue Organization Chart Component"
        header="OrganizationChart"
        description="OrganizationChart visualizes hierarchical organization data."
        :componentDocs="docs"
        :apiDocs="['OrganizationChart']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/organizationchart/AccessibilityDoc.vue';
import BasicDoc from '@/doc/organizationchart/BasicDoc.vue';
import ColoredDoc from '@/doc/organizationchart/ColoredDoc.vue';
import ImportDoc from '@/doc/organizationchart/ImportDoc.vue';
import SelectionDoc from '@/doc/organizationchart/SelectionDoc.vue';
import TemplateDoc from '@/doc/organizationchart/TemplateDoc.vue';
import PTComponent from '@/doc/organizationchart/pt/index.vue';
import ThemingDoc from '@/doc/organizationchart/theming/index.vue';

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
                    id: 'selection',
                    label: 'Selection',
                    component: SelectionDoc
                },
                {
                    id: 'colored',
                    label: 'Colored',
                    component: ColoredDoc
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
