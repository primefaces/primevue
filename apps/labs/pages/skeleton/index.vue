<template>
    <DocComponent title="Vue Skeleton Component" header="Skeleton" description="Skeleton is a placeholder to display instead of the actual content." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/skeleton/#api" ptLink="/skeleton/#pt" />
</template>

<script>
import Accessibility from '@/doc/skeleton/AccessibilityDoc.vue';
import CardDoc from '@/doc/skeleton/CardDoc.vue';
import DataTableDoc from '@/doc/skeleton/DataTableDoc.vue';
import ImportDoc from '@/doc/skeleton/ImportDoc.vue';
import ListDoc from '@/doc/skeleton/ListDoc.vue';
import ShapesDoc from '@/doc/skeleton/ShapesDoc.vue';

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
                    id: 'shapes',
                    label: 'Shapes',
                    component: ShapesDoc
                },
                {
                    id: 'card',
                    label: 'Card',
                    component: CardDoc
                },
                {
                    id: 'list',
                    label: 'List',
                    component: ListDoc
                },
                {
                    id: 'datatable',
                    label: 'DataTable',
                    component: DataTableDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: Accessibility
                }
            ],
            presetDoc: {
                key: 'skeleton'
            }
        };
    }
};
</script>
