<template>
    <DocComponent title="Vue RadioButton Component" header="RadioButton" description="RadioButton is an extension to standard radio button element with theming." :componentDocs="docs" :apiDocs="['RadioButton']" />
</template>

<script>
import AccessibilityDoc from '@/doc/radiobutton/AccessibilityDoc.vue';
import DisabledDoc from '@/doc/radiobutton/DisabledDoc.vue';
import DynamicDoc from '@/doc/radiobutton/DynamicDoc.vue';
import GroupDoc from '@/doc/radiobutton/GroupDoc.vue';
import ImportDoc from '@/doc/radiobutton/ImportDoc.vue';
import InvalidDoc from '@/doc/radiobutton/InvalidDoc.vue';
import StyleDoc from '@/doc/radiobutton/StyleDoc.vue';

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
