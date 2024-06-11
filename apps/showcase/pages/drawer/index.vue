<template>
    <DocComponent title="Vue Drawer Component" header="Drawer" description="Drawer is a container component displayed as an overlay." :componentDocs="docs" :apiDocs="['Drawer']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/drawer/AccessibilityDoc.vue';
import BasicDoc from '@/doc/drawer/BasicDoc.vue';
import FullScreenDoc from '@/doc/drawer/FullScreenDoc.vue';
import HeadlessDoc from '@/doc/drawer/HeadlessDoc.vue';
import ImportDoc from '@/doc/drawer/ImportDoc.vue';
import PositionDoc from '@/doc/drawer/PositionDoc.vue';
import SizeDoc from '@/doc/drawer/SizeDoc.vue';
import TemplateDoc from '@/doc/drawer/TemplateDoc.vue';
import PTComponent from '@/doc/drawer/pt/index.vue';
import ThemingDoc from '@/doc/drawer/theming/index.vue';

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
