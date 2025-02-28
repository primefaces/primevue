<template>
    <DocComponent title="Vue PanelMenu Component" header="PanelMenu" description="PanelMenu is a hybrid of accordion-tree components." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/panelmenu/#api" ptLink="/panelmenu/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/panelmenu/AccessibilityDoc.vue';
import BasicDoc from '@/doc/panelmenu/BasicDoc.vue';
import CommandDoc from '@/doc/panelmenu/CommandDoc.vue';
import ControlledDoc from '@/doc/panelmenu/ControlledDoc.vue';
import ImportDoc from '@/doc/panelmenu/ImportDoc.vue';
import MultipleDoc from '@/doc/panelmenu/MultipleDoc.vue';
import RouterDoc from '@/doc/panelmenu/RouterDoc.vue';
import TemplateDoc from '@/doc/panelmenu/TemplateDoc.vue';
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
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
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
                key: 'panelmenu'
            }
        };
    }
};
</script>
