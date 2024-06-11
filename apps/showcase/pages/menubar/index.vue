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
import AccessibilityDoc from '@/doc/menubar/AccessibilityDoc.vue';
import BasicDoc from '@/doc/menubar/BasicDoc.vue';
import CommandDoc from '@/doc/menubar/CommandDoc.vue';
import ImportDoc from '@/doc/menubar/ImportDoc.vue';
import RouterDoc from '@/doc/menubar/RouterDoc.vue';
import TemplateDoc from '@/doc/menubar/TemplateDoc.vue';
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
                    id: 'command',
                    label: 'Command',
                    component: CommandDoc
                },
                {
                    id: 'router',
                    label: 'Router',
                    component: RouterDoc
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
