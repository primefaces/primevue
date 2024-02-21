<template>
    <DocComponent
        title="Vue Stepper Component"
        header="Stepper"
        description="Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process."
        :componentDocs="docs"
        :themingDocs="themingDoc"
        :ptTabComponent="ptComponent"
        :apiDocs="['Stepper', 'StepperPanel']"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/stepper/AccessibilityDoc.vue';
import BasicDoc from '@/doc/stepper/BasicDoc.vue';
import ImportDoc from '@/doc/stepper/ImportDoc.vue';
import LinearDoc from '@/doc/stepper/LinearDoc.vue';
import TemplateDoc from '@/doc/stepper/TemplateDoc.vue';
import VerticalDoc from '@/doc/stepper/VerticalDoc.vue';
import PTComponent from '@/doc/stepper/pt/index.vue';
import ThemingDoc from '@/doc/stepper/theming/index.vue';

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
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'linear',
                    label: 'Linear',
                    component: LinearDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
