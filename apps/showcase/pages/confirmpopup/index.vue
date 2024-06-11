<template>
    <DocComponent
        title="Vue Confirmation Popup Component"
        header="ConfirmPopup"
        description="ConfirmPopup displays a confirmation overlay displayed relatively to its target."
        :componentDocs="docs"
        :apiDocs="['ConfirmPopup', 'ConfirmationService-UseConfirm', 'ConfirmationOptions']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/confirmpopup/AccessibilityDoc.vue';
import BasicDoc from '@/doc/confirmpopup/BasicDoc.vue';
import ConfirmationServiceDoc from '@/doc/confirmpopup/ConfirmationServiceDoc.vue';
import HeadlessDoc from '@/doc/confirmpopup/HeadlessDoc.vue';
import ImportDoc from '@/doc/confirmpopup/ImportDoc.vue';
import TemplateDoc from '@/doc/confirmpopup/TemplateDoc.vue';
import PTComponent from '@/doc/confirmpopup/pt/index.vue';
import ThemingDoc from '@/doc/confirmpopup/theming/index.vue';

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
                    label: 'Service',
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
                    id: 'headless',
                    label: 'Headless',
                    component: HeadlessDoc
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
