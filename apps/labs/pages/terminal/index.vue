<template>
    <DocComponent title="Vue Terminal Component" header="Terminal" description="Terminal is a text based user interface." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/terminal/#api" ptLink="/terminal/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/terminal/AccessibilityDoc.vue';
import BasicDoc from '@/doc/terminal/BasicDoc.vue';
import ImportDoc from '@/doc/terminal/ImportDoc.vue';
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
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'terminal'
            }
        };
    }
};
</script>
