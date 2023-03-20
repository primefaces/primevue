<template>
    <DocComponent title="Vue SelectButton Component" header="SelectButton" description="Slider is a component to provide input with a drag handle." :componentDocs="docs" :apiDocs="['SelectButton']" />
</template>

<script>
import AccessibilityDoc from '@/doc/selectbutton/AccessibilityDoc';
import BasicDoc from '@/doc/selectbutton/BasicDoc';
import DisabledDoc from '@/doc/selectbutton/DisabledDoc';
import VeeValidateDoc from '@/doc/selectbutton/form/VeeValidateDoc';
import ImportDoc from '@/doc/selectbutton/ImportDoc';
import InvalidDoc from '@/doc/selectbutton/InvalidDoc';
import MultipleDoc from '@/doc/selectbutton/MultipleDoc';
import TemplateDoc from '@/doc/selectbutton/TemplateDoc';
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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
