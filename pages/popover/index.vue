<template>
    <DocComponent
        title="Vue Popover Component"
        header="Popover"
        description="Popover is a container component that can overlay other components on page."
        :componentDocs="docs"
        :apiDocs="['Popover']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/popover/AccessibilityDoc.vue';
import BasicDoc from '@/doc/popover/BasicDoc.vue';
import DataTableDoc from '@/doc/popover/DataTableDoc.vue';
import ImportDoc from '@/doc/popover/ImportDoc.vue';
import PTComponent from '@/doc/popover/pt/index.vue';
import ThemingDoc from '@/doc/popover/theming/index.vue';

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
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
