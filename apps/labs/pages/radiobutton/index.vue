<template>
    <DocComponent
        title="Vue RadioButton Component"
        header="RadioButton"
        description="RadioButton is an extension to standard radio button element with theming."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/radiobutton/#api"
        ptLink="/radiobutton/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/radiobutton/AccessibilityDoc.vue';
import DisabledDoc from '@/doc/radiobutton/DisabledDoc.vue';
import DynamicDoc from '@/doc/radiobutton/DynamicDoc.vue';
import FilledDoc from '@/doc/radiobutton/FilledDoc.vue';
import FormsDoc from '@/doc/radiobutton/FormsDoc.vue';
import GroupDoc from '@/doc/radiobutton/GroupDoc.vue';
import ImportDoc from '@/doc/radiobutton/ImportDoc.vue';
import InvalidDoc from '@/doc/radiobutton/InvalidDoc.vue';
import SizesDoc from '@/doc/radiobutton/SizesDoc.vue';

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
                    id: 'forms',
                    label: 'Forms',
                    component: FormsDoc
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
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
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
            presetDoc: {
                key: 'radiobutton'
            }
        };
    }
};
</script>
