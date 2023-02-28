<template>
    <DocComponent title="Vue Image Component" header="Image" description="Displays a single image with preview and tranformation options." :componentDocs="docs" :apiDocs="['Image']" />
</template>

<script>
import AccessibilityDoc from '@/doc/image/AccessibilityDoc';
import BasicDoc from '@/doc/image/BasicDoc';
import ImportDoc from '@/doc/image/ImportDoc';
import PreviewDoc from '@/doc/image/PreviewDoc';
import StyleDoc from '@/doc/image/StyleDoc';
import TemplateDoc from '@/doc/image/TemplateDoc';

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
                    id: 'preview',
                    label: 'Preview',
                    component: PreviewDoc
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
