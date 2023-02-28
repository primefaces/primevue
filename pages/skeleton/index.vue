<template>
    <DocComponent title="Vue Skeleton Component" header="Skeleton" description="Skeleton is a placeholder to display instead of the actual content." :componentDocs="docs" :apiDocs="['Skeleton']" />
</template>

<script>
import Accessibility from '@/doc/skeleton/AccessibilityDoc.vue';
import CardDoc from '@/doc/skeleton/CardDoc.vue';
import DataTableDoc from '@/doc/skeleton/DataTableDoc.vue';
import ImportDoc from '@/doc/skeleton/ImportDoc.vue';
import ListDoc from '@/doc/skeleton/ListDoc.vue';
import ShapesDoc from '@/doc/skeleton/ShapesDoc.vue';
import StyleDoc from '@/doc/skeleton/StyleDoc.vue';

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
                    label: 'Datatable',
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
                    component: Accessibility
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.custom-skeleton {
    border: 1px solid var(--surface-border);
    border-radius: 4px;

    ul {
        list-style: none;
    }
}
</style>
