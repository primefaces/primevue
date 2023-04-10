<template>
    <DocComponent
        title="Vue Deferred Content Component"
        header="DeferredContent"
        description="DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll."
        :componentDocs="docs"
        :apiDocs="['DeferredContent']"
        :ptTabComponent="ptComponent"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/deferredcontent/AccessibilityDoc.vue';
import BasicDoc from '@/doc/deferredcontent/BasicDoc.vue';
import DataTableDoc from '@/doc/deferredcontent/DataTableDoc.vue';
import ImportDoc from '@/doc/deferredcontent/ImportDoc.vue';
import StyleDoc from '@/doc/deferredcontent/StyleDoc.vue';
import PTComponent from '@/doc/deferredcontent/pt/index.vue';

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
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent
        };
    }
};
</script>
