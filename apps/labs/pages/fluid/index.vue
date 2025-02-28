<template>
    <DocComponent
        title="Vue Fluid Component"
        header="Fluid"
        description="Fluid is a layout component to make descendant components span full width of their container."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/fluid/#api"
        ptLink="/fluid/#pt"
    />
    />
</template>

<script>
import AccessibilityDoc from '@/doc/fluid/AccessibilityDoc.vue';
import BasicDoc from '@/doc/fluid/BasicDoc.vue';
import ImportDoc from '@/doc/fluid/ImportDoc.vue';

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
                key: 'fluid'
            }
        };
    }
};
</script>
