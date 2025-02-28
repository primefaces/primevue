<template>
    <DocComponent title="Vue Image Component" header="Image" description="Displays a single image with preview and tranformation options." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/image/#api" ptLink="/image/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/image/AccessibilityDoc.vue';
import BasicDoc from '@/doc/image/BasicDoc.vue';
import ImportDoc from '@/doc/image/ImportDoc.vue';
import PreviewDoc from '@/doc/image/PreviewDoc.vue';
import TemplateDoc from '@/doc/image/TemplateDoc.vue';

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
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'image'
            }
        };
    }
};
</script>
