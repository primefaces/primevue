<template>
    <DocComponent title="Vue ProgressBar Component" header="ProgressBar" description="ProgressBar is a process status indicator." :componentDocs="docs" :apiDocs="['ProgressBar']" />
</template>

<script>
import AccessibilityDoc from '@/doc/progressspinner/AccessibilityDoc';
import BasicDoc from '@/doc/progressspinner/BasicDoc';
import CustomDoc from '@/doc/progressspinner/customDoc';
import ImportDoc from '@/doc/progressspinner/ImportDoc';
import StyleDoc from '@/doc/progressspinner/StyleDoc';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'custom',
                    label: 'Custom',
                    component: CustomDoc
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
