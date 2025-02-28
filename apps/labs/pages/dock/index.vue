<template>
    <DocComponent title="Vue Dock Component" header="Dock" description="Dock is a navigation component consisting of menuitems." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/dock/#api" ptLink="/dock/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/dock/AccessibilityDoc.vue';
import AdvancedDoc from '@/doc/dock/AdvancedDoc.vue';
import BasicDoc from '@/doc/dock/BasicDoc.vue';
import ImportDoc from '@/doc/dock/ImportDoc.vue';

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
                    id: 'advance',
                    label: 'Advanced',
                    component: AdvancedDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'dock'
            }
        };
    }
};
</script>
