<template>
    <DocComponent title="Vue Navbar Component" header="Navbar" description="Menubar also known as Navbar, is a horizontal menu component." :componentDocs="docs" :apiDocs="['Menubar', 'MenuItem']" />
</template>

<script>
import AccessibilityDoc from '@/doc/menubar/accessibilitydoc';
import BasicDoc from '@/doc/menubar/basicdoc';
import ImportDoc from '@/doc/menubar/importdoc';
import StyleDoc from '@/doc/menubar/styledoc';
import TemplateDoc from '@/doc/menubar/templatedoc';

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
