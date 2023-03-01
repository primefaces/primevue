<template>
    <DocComponent title="Vue ProgressSpinner Component" header="ProgressSpinner" description="ProgressBar is a process status indicator." :componentDocs="docs" :apiDocs="['ProgressSpinner']" />
</template>

<script>
import AccessibilityDoc from '@/doc/progressspinner/AccessibilityDoc';
import BasicDoc from '@/doc/progressspinner/BasicDoc';
import CustomDoc from '@/doc/progressspinner/CustomDoc';
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
