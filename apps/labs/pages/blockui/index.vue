<template>
    <DocComponent title="Vue BlockUI Component" header="BlockUI" description="BlockUI can either block other components or the whole page." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/blockui/#api" ptLink="/blockui/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/blockui/AccessibilityDoc.vue';
import BasicDoc from '@/doc/blockui/BasicDoc.vue';
import DocumentDoc from '@/doc/blockui/DocumentDoc.vue';
import ImportDoc from '@/doc/blockui/ImportDoc.vue';
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
                    id: 'document',
                    label: 'Document',
                    component: DocumentDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'blockui'
            }
        };
    }
};
</script>
