<template>
    <DocComponent title="Vue BreadCrumb Component" header="BreadCrumb" description="Breadcrumb provides contextual information about page hierarchy." :componentDocs="docs" :apiDocs="['BreadCrumb', 'MenuItem']" />
</template>

<script>
import AccessibilityDoc from '@/doc/breadcrumb/AccessibilityDoc';
import BasicDoc from '@/doc/breadcrumb/BasicDoc';
import ImportDoc from '@/doc/breadcrumb/ImportDoc';
import StyleDoc from '@/doc/breadcrumb/StyleDoc';
import TemplateDoc from '@/doc/breadcrumb/TemplateDoc';

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
            ]
        };
    }
};
</script>
