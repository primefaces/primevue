<template>
    <DocComponent
        title="Vue Dynamic Dialog Component"
        header="Dynamic Dialog"
        description="Dialogs can be created dynamically with any component as the content using a DialogService."
        :componentDocs="docs"
        :apiDocs="['DynamicDialog', 'Dialog', 'DialogService-UseDialog', 'DynamicDialogOptions']"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/dynamicdialog/AccessibilityDoc';
import CloseDialogDoc from '@/doc/dynamicdialog/CloseDialogDoc';
import CustomizationDoc from '@/doc/dynamicdialog/CustomizationDoc';
import DialogServiceDoc from '@/doc/dynamicdialog/DialogServiceDoc';
import EmitsDoc from '@/doc/dynamicdialog/EmitsDoc';
import ImportDoc from '@/doc/dynamicdialog/ImportDoc';
import OpenDialogDoc from '@/doc/dynamicdialog/OpenDialogDoc';
import PassingDataDoc from '@/doc/dynamicdialog/PassingDataDoc';
import UsageDoc from '@/doc/dynamicdialog/UsageDoc';

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
                    id: 'dialogservice',
                    label: 'Dialog Service',
                    component: DialogServiceDoc
                },
                {
                    id: 'usage',
                    label: 'Usage',
                    component: UsageDoc
                },
                {
                    id: 'open',
                    label: 'Open',
                    component: OpenDialogDoc
                },
                {
                    id: 'close',
                    label: 'Close',
                    component: CloseDialogDoc
                },
                {
                    id: 'passingdata',
                    label: 'Passing Data',
                    component: PassingDataDoc
                },
                {
                    id: 'emits',
                    label: 'Emits',
                    component: EmitsDoc
                },
                {
                    id: 'customization',
                    label: 'Customization',
                    component: CustomizationDoc
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
