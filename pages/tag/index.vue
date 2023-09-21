<template>
    <DocComponent title="Vue Tag Component" header="Tag" description="Tag component is used to categorize content." :componentDocs="docs" :apiDocs="['Tag']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/tag/AccessibilityDoc.vue';
import BasicDoc from '@/doc/tag/BasicDoc.vue';
import IconDoc from '@/doc/tag/IconDoc.vue';
import ImportDoc from '@/doc/tag/ImportDoc.vue';
import PillDoc from '@/doc/tag/PillDoc.vue';
import SeverityDoc from '@/doc/tag/SeverityDoc.vue';
import TemplateDoc from '@/doc/tag/TemplateDoc.vue';
import PTComponent from '@/doc/tag/pt/index.vue';
import ThemingDoc from '@/doc/tag/theming/index.vue';

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
                    id: 'pill',
                    label: 'Pill',
                    component: PillDoc
                },
                {
                    id: 'icons',
                    label: 'Icon',
                    component: IconDoc
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
