<template>
    <DocComponent title="Vue ProgressBar Component" header="ProgressBar" description="ProgressBar is a process status indicator." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/progressbar/#api" ptLink="/progressbar/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/progressbar/AccessibilityDoc.vue';
import BasicDoc from '@/doc/progressbar/BasicDoc.vue';
import DynamicDoc from '@/doc/progressbar/DynamicDoc.vue';
import ImportDoc from '@/doc/progressbar/ImportDoc.vue';
import IndeterminateDoc from '@/doc/progressbar/IndeterminateDoc.vue';
import TemplateDoc from '@/doc/progressbar/TemplateDoc.vue';

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
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'progressbar'
            }
        };
    }
};
</script>
