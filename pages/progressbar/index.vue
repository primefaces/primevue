<template>
    <DocComponent title="Vue ProgressBar Component" header="ProgressBar" description="ProgressBar is a process status indicator." :componentDocs="docs" :apiDocs="['ProgressBar']" />
</template>

<script>
import AccessibilityDoc from '@/doc/progressbar/AccessibilityDoc';
import BasicDoc from '@/doc/progressbar/BasicDoc';
import DynamicDoc from '@/doc/progressbar/DynamicDoc';
import ImportDoc from '@/doc/progressbar/ImportDoc';
import IndeterminateDoc from '@/doc/progressbar/IndeterminateDoc';
import StyleDoc from '@/doc/progressbar/StyleDoc';
import TemplateDoc from '@/doc/progressbar/TemplateDoc';

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
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'indeterminate',
                    label: 'Indeterminate',
                    component: IndeterminateDoc
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
