<template>
    <DocComponent title="Vue Tag Component" header="Tag" description="Tag component is used to categorize content." :componentDocs="docs" :apiDocs="['Tag']" />
</template>

<script>
import AccessibilityDoc from '@/doc/tag/AccessibilityDoc';
import BasicDoc from '@/doc/tag/BasicDoc';
import IconDoc from '@/doc/tag/IconDoc';
import ImportDoc from '@/doc/tag/ImportDoc';
import PillDoc from '@/doc/tag/PillDoc';
import SeverityDoc from '@/doc/tag/SeverityDoc';
import StyleDoc from '@/doc/tag/StyleDoc';
import TemplateDoc from '@/doc/tag/TemplateDoc';

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
