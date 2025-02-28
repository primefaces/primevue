<template>
    <DocComponent title="Vue Ifta Label" header="IftaLabel" description="IftaLabel is used to create infield top aligned labels" :componentDocs="docs" :presetDoc="presetDoc" apiLink="/iftalabel/#api" ptLink="/iftalabel/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/iftalabel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/iftalabel/BasicDoc.vue';
import ImportDoc from '@/doc/iftalabel/ImportDoc.vue';
import InvalidDoc from '@/doc/iftalabel/InvalidDoc.vue';

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
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'iftalabel'
            }
        };
    }
};
</script>
