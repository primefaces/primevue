<template>
    <DocComponent
        title="Vue Tabs Component"
        header="Tabs"
        description="Tabs facilitates seamless switching between different views."
        :componentDocs="docs"
        :apiDocs="['Tabs', 'TabList', 'Tab', 'TabPanels', 'TabPanel']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
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
import PTComponent from '@/doc/tabs/pt/index.vue';
import ThemingDoc from '@/doc/tabs/theming/index.vue';

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
                    label: 'TabMenu',
                    component: TabMenuDoc
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
