<template>
    <DocComponent title="Vue RadioButton Component" header="RadioButton" description="RadioButton is an extension to standard radio button element with theming." :componentDocs="docs" />
</template>

<script>
import DisabledDoc from '@/doc/radiobutton/DisabledDoc.vue';
import DynamicDoc from '@/doc/radiobutton/DynamicDoc.vue';
import FilledDoc from '@/doc/radiobutton/FilledDoc.vue';
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
                }
            ]
        };
    }
};
</script>
