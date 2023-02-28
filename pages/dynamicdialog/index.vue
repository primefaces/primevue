<template>
    <DocComponent title="Vue Dynamic Dialog Component" header="Dialog" description="Dynamic Dialog is a Dialog container to display content in an overlay window." :componentDocs="docs" :apiDocs="['DynamicDialog', 'Dialog']" />
</template>

<script>
import AccessibilityDoc from '@/doc/dynamicdialog/AccessibilityDoc';
import BasicDoc from '@/doc/dynamicdialog/BasicDoc';
import CloseDialogDoc from '@/doc/dynamicdialog/CloseDialogDoc';
import CustomizingDialogDoc from '@/doc/dynamicdialog/CustomizingDialogDoc';
import DialogServiceDoc from '@/doc/dynamicdialog/DialogServiceDoc';
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
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'opendialog',
                    label: 'Opening a Dialog',
                    component: OpenDialogDoc
                },
                {
                    id: 'closedialog',
                    label: 'Closing a Dialog',
                    component: CloseDialogDoc
                },
                {
                    id: 'passingdata',
                    label: 'Passing Data',
                    component: PassingDataDoc
                },
                {
                    id: 'customizingdata',
                    label: 'Customizing Dialog',
                    component: CustomizingDialogDoc
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
