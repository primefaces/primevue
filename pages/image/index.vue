<template>
    <DocComponent title="Vue Image Component" header="Image" description="Displays a single image with preview and tranformation options." :componentDocs="docs" :apiDocs="['Image']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import ThemingDoc from '@/doc/Image/theming/index.vue';
import AccessibilityDoc from '@/doc/image/AccessibilityDoc';
import BasicDoc from '@/doc/image/BasicDoc';
import ImportDoc from '@/doc/image/ImportDoc';
import PreviewDoc from '@/doc/image/PreviewDoc';
import TemplateDoc from '@/doc/image/TemplateDoc';
import PTComponent from '@/doc/image/pt/index.vue';

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
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
