<template>
    <DocComponent title="Vue Message Component" header="Message" description="Message component is used to display inline messages." :componentDocs="docs" :apiDocs="['Message']" />
</template>

<script>
import AccessibilityDoc from '@/doc/message/AccessibilityDoc.vue';
import BasicDoc from '@/doc/message/BasicDoc.vue';
import ClosabledDoc from '@/doc/message/ClosableDoc.vue';
import CustomIconDoc from '@/doc/message/CustomIconDoc.vue';
import DynamicDoc from '@/doc/message/DynamicDoc.vue';
import ImportDoc from '@/doc/message/ImportDoc.vue';
import SeverityDoc from '@/doc/message/SeverityDoc.vue';
import StickyDoc from '@/doc/message/StickyDoc.vue';
import StyleDoc from '@/doc/message/StyleDoc.vue';
import TemplateDoc from '@/doc/message/TemplateDoc.vue';

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
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
                },
                {
                    id: 'closable',
                    label: 'Closable',
                    component: ClosabledDoc
                },
                {
                    id: 'sticky',
                    label: 'Sticky',
                    component: StickyDoc
                },
                {
                    id: 'custom-icon',
                    label: 'Custom Icon',
                    component: CustomIconDoc
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
