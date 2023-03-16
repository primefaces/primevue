<template>
    <DocComponent title="Vue CascadeSelect Component" header="CascadeSelect" description="CascadeSelect is a form component to select a value from a nested structure of options." :componentDocs="docs" :apiDocs="['CascadeSelect']" />
</template>

<script>
import AccessibilityDoc from '@/doc/cascadeselect/AccessibilityDoc';
import BasicDoc from '@/doc/cascadeselect/BasicDoc';
import DisabledDoc from '@/doc/cascadeselect/DisabledDoc';
import FloatLabelDoc from '@/doc/cascadeselect/FloatLabelDoc';
import VeeValidateDoc from '@/doc/cascadeselect/form/VeeValidateDoc';
import ImportDoc from '@/doc/cascadeselect/ImportDoc';
import InvalidDoc from '@/doc/cascadeselect/InvalidDoc';
import LoadingStateDoc from '@/doc/cascadeselect/LoadingStateDoc';
import StyleDoc from '@/doc/cascadeselect/StyleDoc';
import TemplateDoc from '@/doc/cascadeselect/TemplateDoc';

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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'loadingstate',
                    label: 'Loading State',
                    component: LoadingStateDoc
                },
                {
                    id: 'floatlabel',
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
