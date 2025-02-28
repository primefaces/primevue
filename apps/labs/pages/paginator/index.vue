<template>
    <DocComponent
        title="Vue Paginator Component"
        header="Paginator"
        description="Paginator displays data in paged format and provides navigation between pages."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/paginator/#api"
        ptLink="/paginator/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/paginator/AccessibilityDoc.vue';
import BasicDoc from '@/doc/paginator/BasicDoc.vue';
import CurrentPageReportDoc from '@/doc/paginator/CurrentPageReportDoc.vue';
import CustomContentDoc from '@/doc/paginator/CustomContentDoc.vue';
import HeadlessDoc from '@/doc/paginator/HeadlessDoc.vue';
import ImportDoc from '@/doc/paginator/ImportDoc.vue';
import TemplateDoc from '@/doc/paginator/TemplateDoc.vue';

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
                    id: 'currentpagereport',
                    label: 'Current Page Report',
                    component: CurrentPageReportDoc
                },
                {
                    id: 'customcontent',
                    label: 'Custom Content',
                    component: CustomContentDoc
                },
                {
                    id: 'headless',
                    label: 'Headless',
                    component: HeadlessDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'paginator'
            }
        };
    }
};
</script>
