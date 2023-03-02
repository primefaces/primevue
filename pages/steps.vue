<template>
    <DocComponent
        title="Vue Stepper Component"
        header="Steps"
        description="Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design."
        :componentDocs="docs"
        :apiDocs="['Steps', 'MenuItem']"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/steps/AccessibilityDoc';
import BasicDoc from '@/doc/steps/BasicDoc';
import ImportDoc from '@/doc/steps/ImportDoc';
import InteractiveDoc from '@/doc/steps/InteractiveDoc';
import StyleDoc from '@/doc/steps/StyleDoc';

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
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
