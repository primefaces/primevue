<template>
    <DocComponent
        title="Vue ScrollPanel Component"
        header="ScrollPanel"
        description="ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/scrollpanel/#api"
        ptLink="/scrollpanel/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/scrollpanel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/scrollpanel/BasicDoc.vue';
import CustomDoc from '@/doc/scrollpanel/CustomDoc.vue';
import ImportDoc from '@/doc/scrollpanel/ImportDoc.vue';

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
                    id: 'custom',
                    label: 'Custom',
                    component: CustomDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'scrollpanel'
            }
        };
    }
};
</script>
