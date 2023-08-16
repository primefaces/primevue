<template>
    <DocComponent
        title="Vue Stepper Component"
        header="Steps"
        description="Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design."
        :componentDocs="docs"
        :apiDocs="['Steps', 'MenuItem']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/steps/AccessibilityDoc';
import BasicDoc from '@/doc/steps/BasicDoc';
import ImportDoc from '@/doc/steps/ImportDoc';
import InteractiveDoc from '@/doc/steps/InteractiveDoc';
import PTComponent from '@/doc/steps/pt/index.vue';
import ThemingDoc from '@/doc/steps/theming/index.vue';

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
                    id: 'interactive',
                    label: 'Interactive',
                    component: InteractiveDoc
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
