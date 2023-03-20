<template>
    <DocComponent title="Vue ToggleButton Component" header="ToggleButton" description="ToggleButton is used to select a boolean value using a button." :componentDocs="docs" :apiDocs="['ToggleButton']" />
</template>

<script>
import AccessibilityDoc from '@/doc/togglebutton/AccessibilityDoc.vue';
import BasicDoc from '@/doc/togglebutton/BasicDoc.vue';
import CustomizedDoc from '@/doc/togglebutton/CustomizedDoc.vue';
import DisabledDoc from '@/doc/togglebutton/DisabledDoc.vue';
import VeeValidateDoc from '@/doc/togglebutton/form/VeeValidateDoc.vue';
import ImportDoc from '@/doc/togglebutton/ImportDoc.vue';
import StyleDoc from '@/doc/togglebutton/StyleDoc.vue';

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
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'customized',
                    label: 'Customized',
                    component: CustomizedDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'form',
                    label: 'Form',
                    description: 'Compatibility with popular Vue form libraries.',
                    children: [
                        {
                            id: 'veevalidate',
                            label: 'VeeValidate',
                            component: VeeValidateDoc
                        }
                    ]
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
