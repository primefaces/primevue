<template>
    <DocComponent title="Vue Sidebar Component" header="Sidebar" description="Sidebar, also known as Drawer, is a container component displayed as an overlay." :componentDocs="docs" :apiDocs="['Sidebar']" />
</template>

<script>
import AccessibilityDoc from '@/doc/sidebar/AccessibilityDoc';
import BasicDoc from '@/doc/sidebar/BasicDoc';
import FullScreenDoc from '@/doc/sidebar/FullScreenDoc';
import ImportDoc from '@/doc/sidebar/ImportDoc';
import PositionDoc from '@/doc/sidebar/PositionDoc';
import SizeDoc from '@/doc/sidebar/SizeDoc';
import StyleDoc from '@/doc/sidebar/StyleDoc';
import TemplateDoc from '@/doc/sidebar/TemplateDoc';

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
