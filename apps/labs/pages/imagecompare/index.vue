<template>
    <DocComponent title="Vue ImageCompare Component" header="ImageCompare" description="Compare two images side by side with a slider." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/imagecompare/#api" ptLink="/imagecompare/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/imagecompare/AccessibilityDoc.vue';
import BasicDoc from '@/doc/imagecompare/BasicDoc.vue';
import ImportDoc from '@/doc/imagecompare/ImportDoc.vue';
import ResponsiveDoc from '@/doc/imagecompare/ResponsiveDoc.vue';

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
                    id: 'responsive',
                    label: 'Responsive',
                    component: ResponsiveDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'imagecompare'
            }
        };
    }
};
</script>
