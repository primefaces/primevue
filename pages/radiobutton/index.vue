<template>
    <DocComponent
        title="Vue RadioButton Component"
        header="RadioButton"
        description="RadioButton is an extension to standard radio button element with theming."
        :componentDocs="docs"
        :apiDocs="['RadioButton']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/radiobutton/AccessibilityDoc.vue';
import DisabledDoc from '@/doc/radiobutton/DisabledDoc.vue';
import DynamicDoc from '@/doc/radiobutton/DynamicDoc.vue';
import FilledDoc from '@/doc/radiobutton/FilledDoc.vue';
import GroupDoc from '@/doc/radiobutton/GroupDoc.vue';
import ImportDoc from '@/doc/radiobutton/ImportDoc.vue';
import InvalidDoc from '@/doc/radiobutton/InvalidDoc.vue';
import PTComponent from '@/doc/radiobutton/pt/index.vue';
import ThemingDoc from '@/doc/radiobutton/theming/index.vue';

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
                    id: 'group',
                    label: 'Group',
                    component: GroupDoc
                },
                {
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
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
