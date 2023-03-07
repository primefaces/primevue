<template>
    <DocComponent
        title="Vue Confirmation Dialog Component"
        header="ConfirmDialog"
        description="ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API."
        :componentDocs="docs"
        :apiDocs="['ConfirmDialog', 'ConfirmationService-UseConfirm', 'ConfirmationOptions']"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/confirmdialog/AccessibilityDoc.vue';
import BasicDoc from '@/doc/confirmdialog/BasicDoc.vue';
import ConfirmationServiceDoc from '@/doc/confirmdialog/ConfirmationServiceDoc.vue';
import ImportDoc from '@/doc/confirmdialog/ImportDoc.vue';
import PositionDoc from '@/doc/confirmdialog/PositionDoc.vue';
import StyleDoc from '@/doc/confirmdialog/StyleDoc.vue';
import TemplateDoc from '@/doc/confirmdialog/TemplateDoc.vue';
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
                    id: 'confirmation-service',
                    label: 'Confirmation Service',
                    component: ConfirmationServiceDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'position',
                    label: 'Position',
                    component: PositionDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
