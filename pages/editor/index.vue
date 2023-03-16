<template>
    <DocComponent title="Vue Editor Component" header="Editor" description="Editor is rich text editor component based on Quill." :componentDocs="docs" :apiDocs="['Editor']" />
</template>

<script>
import AccessibilityDoc from '@/doc/editor/AccessibilityDoc.vue';
import BasicDoc from '@/doc/editor/BasicDoc.vue';
import VeeValidateDoc from '@/doc/editor/form/VeeValidateDoc.vue';
import ImportDoc from '@/doc/editor/ImportDoc.vue';
import QuillDoc from '@/doc/editor/QuillDoc.vue';
import ReadOnlyDoc from '@/doc/editor/ReadOnlyDoc.vue';
import StyleDoc from '@/doc/editor/StyleDoc.vue';
import TemplateDoc from '@/doc/editor/TemplateDoc.vue';

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
                    id: 'quill',
                    label: 'Quill',
                    component: QuillDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'readonly',
                    label: 'ReadOnly',
                    component: ReadOnlyDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
