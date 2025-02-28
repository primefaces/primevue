<template>
    <DocComponent title="Vue Card Component" header="Card" description="Card is a flexible container component." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/card/#api" ptLink="/card/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/card/AccessibilityDoc.vue';
import AdvancedDoc from '@/doc/card/AdvancedDoc.vue';
import BasicDoc from '@/doc/card/BasicDoc.vue';
import ImportDoc from '@/doc/card/ImportDoc.vue';

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
                    id: 'advanced',
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
                key: 'card'
            }
        };
    }
};
</script>
