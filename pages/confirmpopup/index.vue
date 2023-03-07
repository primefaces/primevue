<template>
    <DocComponent
        title="Vue Confirmation Popup Component"
        header="ConfirmPopup"
        description="ConfirmPopup displays a confirmation overlay displayed relatively to its target."
        :componentDocs="docs"
        :apiDocs="['ConfirmPopup', 'ConfirmationService-UseConfirm', 'ConfirmationOptions']"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/confirmpopup/AccessibilityDoc.vue';
import BasicDoc from '@/doc/confirmpopup/BasicDoc.vue';
import ConfirmationServiceDoc from '@/doc/confirmpopup/ConfirmationServiceDoc.vue';
import ImportDoc from '@/doc/confirmpopup/ImportDoc.vue';
import StyleDoc from '@/doc/confirmpopup/StyleDoc.vue';
import TemplateDoc from '@/doc/confirmpopup/TemplateDoc.vue';

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
