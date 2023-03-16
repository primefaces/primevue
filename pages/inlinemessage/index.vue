<template>
    <DocComponent title="Vue InlineMessage Component" header="InlineMessage" description="Inline Message component displays information related to another element such as invalid input." :componentDocs="docs" :apiDocs="['InlineMessage']" />
</template>

<script>
import AccessibilityDoc from '@/doc/inlinemessage/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inlinemessage/BasicDoc.vue';
import FormDoc from '@/doc/inlinemessage/FormDoc.vue';
import ImportDoc from '@/doc/inlinemessage/ImportDoc.vue';
import SeverityDoc from '@/doc/inlinemessage/SeverityDoc.vue';
import StyleDoc from '@/doc/inlinemessage/StyleDoc.vue';
import TemplateDoc from '@/doc/inlinemessage/TemplateDoc.vue';

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
                    id: 'severity',
                    label: 'Severity',
                    component: SeverityDoc
                },
                {
                    id: 'form',
                    label: 'Form',
                    component: FormDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
