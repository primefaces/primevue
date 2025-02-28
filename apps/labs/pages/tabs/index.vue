<template>
    <DocComponent title="Vue Tabs Component" header="Tabs" description="Tabs is a container component to group content with tabs." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/tabs/#api" ptLink="/tabs/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/tabs/AccessibilityDoc.vue';
import BasicDoc from '@/doc/tabs/BasicDoc.vue';
import ControlledDoc from '@/doc/tabs/ControlledDoc.vue';
import DisabledDoc from '@/doc/tabs/DisabledDoc.vue';
import DynamicDoc from '@/doc/tabs/DynamicDoc.vue';
import ImportDoc from '@/doc/tabs/ImportDoc.vue';
import ScrollableDoc from '@/doc/tabs/ScrollableDoc.vue';
import TabMenuDoc from '@/doc/tabs/TabMenuDoc.vue';
import TemplateDoc from '@/doc/tabs/TemplateDoc.vue';

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
                    id: 'tabmenu',
                    label: 'Tab Menu',
                    component: TabMenuDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: ['tabs', 'tablist', 'tabpanels', 'tabpanel', 'tab']
            }
        };
    }
};
</script>
