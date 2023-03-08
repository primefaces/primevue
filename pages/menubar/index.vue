<template>
    <DocComponent title="Vue Navbar Component" header="Menubar" description="Menubar also known as Navbar, is a horizontal menu component." :componentDocs="docs" :apiDocs="['Menubar', 'MenuItem']" />
</template>

<script>
import AccessibilityDoc from '@/doc/menubar/AccessibilityDoc';
import BasicDoc from '@/doc/menubar/BasicDoc';
import ImportDoc from '@/doc/menubar/ImportDoc';
import StyleDoc from '@/doc/menubar/StyleDoc';
import TemplateDoc from '@/doc/menubar/TemplateDoc';

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
