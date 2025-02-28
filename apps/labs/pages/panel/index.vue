<template>
    <DocComponent title="Vue Panel Component" header="Panel" description="Panel is a grouping component providing with content toggle feature." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/panel/#api" ptLink="/panel/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/panel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/panel/BasicDoc.vue';
import ImportDoc from '@/doc/panel/ImportDoc.vue';
import TemplateDoc from '@/doc/panel/TemplateDoc.vue';
import ToggleableDoc from '@/doc/panel/ToggleableDoc.vue';
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
                    id: 'toggleable',
                    label: 'Toggleable',
                    component: ToggleableDoc
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
            presetDoc: {
                key: 'panel'
            }
        };
    }
};
</script>
