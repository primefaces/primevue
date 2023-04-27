<template>
    <DocComponent title="Vue Breadcrumb Component" header="Breadcrumb" description="Breadcrumb provides contextual information about page hierarchy." :componentDocs="docs" :apiDocs="['Breadcrumb', 'MenuItem']" :ptTabComponent="ptComponent" />
</template>

<script>
import AccessibilityDoc from '@/doc/breadcrumb/AccessibilityDoc';
import BasicDoc from '@/doc/breadcrumb/BasicDoc';
import ImportDoc from '@/doc/breadcrumb/ImportDoc';
import StyleDoc from '@/doc/breadcrumb/StyleDoc';
import TemplateDoc from '@/doc/breadcrumb/TemplateDoc';
import PTComponent from '@/doc/breadcrumb/pt/index.vue';

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
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent
        };
    }
};
</script>
