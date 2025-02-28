<template>
    <DocComponent
        title="Vue Dynamic Dialog Component"
        header="Dynamic Dialog"
        description="Dialogs can be created dynamically with any component as the content using a DialogService."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/dynamicdialog/#api"
        ptLink="/dynamicdialog/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/dynamicdialog/AccessibilityDoc.vue';
import CloseDialogDoc from '@/doc/dynamicdialog/CloseDialogDoc.vue';
import CustomizationDoc from '@/doc/dynamicdialog/CustomizationDoc.vue';
import DialogServiceDoc from '@/doc/dynamicdialog/DialogServiceDoc.vue';
import EventsDoc from '@/doc/dynamicdialog/EventsDoc.vue';
import ExampleDoc from '@/doc/dynamicdialog/ExampleDoc.vue';
import ImportDoc from '@/doc/dynamicdialog/ImportDoc.vue';
import OpenDialogDoc from '@/doc/dynamicdialog/OpenDialogDoc.vue';
import PassingDataDoc from '@/doc/dynamicdialog/PassingDataDoc.vue';

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
                    id: 'open',
                    label: 'Open',
                    component: OpenDialogDoc
                },
                {
                    id: 'customization',
                    label: 'Customization',
                    component: CustomizationDoc
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
                    id: 'events',
                    label: 'Events',
                    component: EventsDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'dialog'
            }
        };
    }
};
</script>
