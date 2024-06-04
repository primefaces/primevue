<template>
    <DocComponent
        title="Vue Stepper Component"
        header="Stepper"
        description="The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression."
        :componentDocs="docs"
        :themingDocs="themingDoc"
        :ptTabComponent="ptComponent"
        :apiDocs="['Stepper', 'StepList', 'StepPanels', 'StepItem', 'Step', 'StepPanel']"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/stepper/AccessibilityDoc.vue';
import HorizontalDoc from '@/doc/stepper/HorizontalDoc.vue';
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
                    id: 'horizontal',
                    label: 'Horizontal',
                    component: HorizontalDoc
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
