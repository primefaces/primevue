<template>
    <DocComponent
        title="Vue DataView Component"
        header="DataView"
        description="DataView displays data in grid or list layout with pagination and sorting features."
        :componentDocs="docs"
        :apiDocs="['DataView', 'DataViewLayoutOptions']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/dataview/AccessibilityDoc';
import BasicDoc from '@/doc/dataview/BasicDoc';
import ImportDoc from '@/doc/dataview/ImportDoc';
import LayoutDoc from '@/doc/dataview/LayoutDoc';
import LoadingDoc from '@/doc/dataview/LoadingDoc';
import PaginationDoc from '@/doc/dataview/PaginationDoc';
import PrimeFlexDoc from '@/doc/dataview/PrimeFlexDoc';
import SortingDoc from '@/doc/dataview/SortingDoc';
import PTComponent from '@/doc/dataview/pt/index.vue';
import ThemingDoc from '@/doc/dataview/theming/index.vue';

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
                    id: 'primeflex',
                    label: 'PrimeFlex',
                    component: PrimeFlexDoc
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
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
