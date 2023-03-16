<template>
    <DocComponent title="Vue Chips Component" header="Chips" description="Chips is used to enter multiple values on an input field." :componentDocs="docs" :apiDocs="['Chips']" />
</template>

<script>
import AccessibilityDoc from '@/doc/chips/AccessibilityDoc';
import BasicDoc from '@/doc/chips/BasicDoc';
import DisabledDoc from '@/doc/chips/DisabledDoc';
import FloatLabelDoc from '@/doc/chips/FloatLabelDoc';
import VeeValidateDoc from '@/doc/chips/form/VeeValidateDoc';
import ImportDoc from '@/doc/chips/ImportDoc';
import InvalidDoc from '@/doc/chips/InvalidDoc';
import SeparatorDoc from '@/doc/chips/SeparatorDoc';
import StyleDoc from '@/doc/chips/StyleDoc';
import TemplateDoc from '@/doc/chips/TemplateDoc';

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
                    id: 'separator',
                    label: 'Separator',
                    component: SeparatorDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
