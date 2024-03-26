<template>
    <DocComponent
        title="Vue Skeleton Component"
        header="Skeleton"
        description="Skeleton is a placeholder to display instead of the actual content."
        :componentDocs="docs"
        :apiDocs="['Skeleton']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import Accessibility from '@/doc/skeleton/AccessibilityDoc.vue';
import CardDoc from '@/doc/skeleton/CardDoc.vue';
import DataTableDoc from '@/doc/skeleton/DataTableDoc.vue';
import ImportDoc from '@/doc/skeleton/ImportDoc.vue';
import ListDoc from '@/doc/skeleton/ListDoc.vue';
import ShapesDoc from '@/doc/skeleton/ShapesDoc.vue';
import PTComponent from '@/doc/skeleton/pt/index.vue';
import ThemingDoc from '@/doc/skeleton/theming/index.vue';

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
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: Accessibility
                }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
