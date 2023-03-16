<template>
    <DocComponent title="Vue Tabs Component" header="TabView" description="TabView is a container component to group content with tabs." :componentDocs="docs" :apiDocs="['TabView', 'TabPanel']" />
</template>

<script>
import AccessibilityDoc from '@/doc/tabview/AccessibilityDoc.vue';
import BasicDoc from '@/doc/tabview/BasicDoc.vue';
import ControlledDoc from '@/doc/tabview/ControlledDoc.vue';
import DisabledDoc from '@/doc/tabview/DisabledDoc.vue';
import DynamicDoc from '@/doc/tabview/DynamicDoc.vue';
import ImportDoc from '@/doc/tabview/ImportDoc.vue';
import ScrollableDoc from '@/doc/tabview/ScrollableDoc.vue';
import StyleDoc from '@/doc/tabview/StyleDoc.vue';
import TemplateDoc from '@/doc/tabview/TemplateDoc.vue';
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
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
                },
                {
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
                },
                {
                    id: 'scrollable',
                    label: 'Scrollable',
                    component: ScrollableDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
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
