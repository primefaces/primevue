<template>
    <DocComponent
        title="Vue Deferred Content Component"
        header="DeferredContent"
        description="DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/deferredcontent/#api"
        ptLink="/deferredcontent/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/deferredcontent/AccessibilityDoc.vue';
import BasicDoc from '@/doc/deferredcontent/BasicDoc.vue';
import DataTableDoc from '@/doc/deferredcontent/DataTableDoc.vue';
import ImportDoc from '@/doc/deferredcontent/ImportDoc.vue';

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
                    id: 'datatable',
                    label: 'DataTable',
                    component: DataTableDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'deferred'
            }
        };
    }
};
</script>
