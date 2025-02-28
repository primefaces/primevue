<template>
    <DocComponent title="Vue Float Label" header="FloatLabel" description="FloatLabel appears on top of the input field when focused." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/floatlabel/#api" ptLink="/floatlabel/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/floatlabel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/floatlabel/BasicDoc.vue';
import ImportDoc from '@/doc/floatlabel/ImportDoc.vue';
import InvalidDoc from '@/doc/floatlabel/InvalidDoc.vue';
import VariantsDoc from '@/doc/floatlabel/VariantsDoc.vue';

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
                    id: 'variants',
                    label: 'Variants',
                    component: VariantsDoc
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
                key: 'floatlabel'
            }
        };
    }
};
</script>
