<template>
    <DocComponent
        title="Vue Navbar Component"
        header="Menubar"
        description="Menubar also known as Navbar, is a horizontal menu component."
        :componentDocs="docs"
        :apiDocs="['Menubar', 'MenuItem']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/menubar/AccessibilityDoc';
import BasicDoc from '@/doc/menubar/BasicDoc';
import ImportDoc from '@/doc/menubar/ImportDoc';
import TemplateDoc from '@/doc/menubar/TemplateDoc';
import PTComponent from '@/doc/menubar/pt/index.vue';
import ThemingDoc from '@/doc/menubar/theming/index.vue';

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
