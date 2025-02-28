<template>
    <DocComponent
        title="Vue DataView Component"
        header="DataView"
        description="DataView displays data in grid or list layout with pagination and sorting features."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/dataview/#api"
        ptLink="/dataview/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/dataview/AccessibilityDoc.vue';
import BasicDoc from '@/doc/dataview/BasicDoc.vue';
import ImportDoc from '@/doc/dataview/ImportDoc.vue';
import LayoutDoc from '@/doc/dataview/LayoutDoc.vue';
import LoadingDoc from '@/doc/dataview/LoadingDoc.vue';
import PaginationDoc from '@/doc/dataview/PaginationDoc.vue';
import SortingDoc from '@/doc/dataview/SortingDoc.vue';

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
                    id: 'pagination',
                    label: 'Pagination',
                    component: PaginationDoc
                },
                {
                    id: 'sorting',
                    label: 'Sorting',
                    component: SortingDoc
                },
                {
                    id: 'layout',
                    label: 'Layout',
                    component: LayoutDoc
                },
                {
                    id: 'loading',
                    label: 'Loading',
                    component: LoadingDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: ['dataview']
            }
        };
    }
};
</script>
