<template>
    <DocComponent
        title="Vue Confirmation Dialog Component"
        header="ConfirmDialog"
        description="ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API."
        :componentDocs="docs"
        :apiDocs="['ConfirmDialog', 'ConfirmationService-UseConfirm', 'ConfirmationOptions']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/confirmdialog/AccessibilityDoc.vue';
import BasicDoc from '@/doc/confirmdialog/BasicDoc.vue';
import ConfirmationServiceDoc from '@/doc/confirmdialog/ConfirmationServiceDoc.vue';
import HeadlessDoc from '@/doc/confirmdialog/HeadlessDoc.vue';
import ImportDoc from '@/doc/confirmdialog/ImportDoc.vue';
import PositionDoc from '@/doc/confirmdialog/PositionDoc.vue';
import TemplateDoc from '@/doc/confirmdialog/TemplateDoc.vue';
import PTComponent from '@/doc/confirmdialog/pt/index.vue';
import ThemingDoc from '@/doc/confirmdialog/theming/index.vue';

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
