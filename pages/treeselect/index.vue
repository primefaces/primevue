<template>
    <DocComponent title="Vue TreeSelect Component" header="TreeSelect" description="TreeSelect is a form component to choose from hierarchical data." :componentDocs="docs" :apiDocs="['TreeSelect']" />
</template>

<script>
import AccessibilityDoc from '@/doc/treeselect/AccessibilityDoc';
import BasicDoc from '@/doc/treeselect/BasicDoc';
import CheckboxDoc from '@/doc/treeselect/CheckboxDoc';
import DisabledDoc from '@/doc/treeselect/DisabledDoc';
import FloatLabelDoc from '@/doc/treeselect/FloatLabelDoc';
import VeeValidateDoc from '@/doc/treeselect/form/VeeValidateDoc.vue';
import ImportDoc from '@/doc/treeselect/ImportDoc';
import InvalidDoc from '@/doc/treeselect/InvalidDoc';
import MultipleDoc from '@/doc/treeselect/MultipleDoc';
import StyleDoc from '@/doc/treeselect/StyleDoc';
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
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'checkbox',
                    label: 'Checkbox',
                    component: CheckboxDoc
                },
                {
                    id: 'float-label',
                    label: 'Float Label',
                    component: FloatLabelDoc
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
