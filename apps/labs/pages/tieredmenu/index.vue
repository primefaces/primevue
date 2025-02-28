<template>
    <DocComponent title="Vue TieredMenu Component" header="TieredMenu" description="TieredMenu displays submenus in nested overlays." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/tieredmenu/#api" ptLink="/tieredmenu/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/tieredmenu/AccessibilityDoc.vue';
import BasicDoc from '@/doc/tieredmenu/BasicDoc.vue';
import CommandDoc from '@/doc/tieredmenu/CommandDoc.vue';
import ImportDoc from '@/doc/tieredmenu/ImportDoc.vue';
import PopupDoc from '@/doc/tieredmenu/PopupDoc.vue';
import RouterDoc from '@/doc/tieredmenu/RouterDoc.vue';
import TemplateDoc from '@/doc/tieredmenu/TemplateDoc.vue';

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
                    id: 'popup',
                    label: 'Popup',
                    component: PopupDoc
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
            presetDoc: {
                key: 'tieredmenu'
            }
        };
    }
};
</script>
