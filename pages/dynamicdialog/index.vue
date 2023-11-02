<template>
    <DocComponent
        title="Vue Dynamic Dialog Component"
        header="Dynamic Dialog"
        description="Dialogs can be created dynamically with any component as the content using a DialogService."
        :componentDocs="docs"
        :apiDocs="['DynamicDialog', 'Dialog', 'DialogService-UseDialog', 'DynamicDialogOptions']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
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
import PTComponent from '@/doc/dynamicdialog/pt/index.vue';
import ThemingDoc from '@/doc/dynamicdialog/theming/index.vue';

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
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
