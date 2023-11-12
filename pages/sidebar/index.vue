<template>
    <DocComponent
        title="Vue Sidebar Component"
        header="Sidebar"
        description="Sidebar, also known as Drawer, is a container component displayed as an overlay."
        :componentDocs="docs"
        :apiDocs="['Sidebar']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/sidebar/AccessibilityDoc.vue';
import BasicDoc from '@/doc/sidebar/BasicDoc.vue';
import FullScreenDoc from '@/doc/sidebar/FullScreenDoc.vue';
import HeadlessDoc from '@/doc/sidebar/HeadlessDoc.vue';
import ImportDoc from '@/doc/sidebar/ImportDoc.vue';
import PositionDoc from '@/doc/sidebar/PositionDoc.vue';
import SizeDoc from '@/doc/sidebar/SizeDoc.vue';
import TemplateDoc from '@/doc/sidebar/TemplateDoc.vue';
import PTComponent from '@/doc/sidebar/pt/index.vue';
import ThemingDoc from '@/doc/sidebar/theming/index.vue';

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
                    id: 'position',
                    label: 'Position',
                    component: PositionDoc
                },
                {
                    id: 'size',
                    label: 'Size',
                    component: SizeDoc
                },
                {
                    id: 'fullscreen',
                    label: 'Full Screen',
                    component: FullScreenDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
