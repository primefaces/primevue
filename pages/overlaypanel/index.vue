<template>
    <DocComponent
        title="Vue Popover Component"
        header="OverlayPanel"
        description="OverlayPanel, also known as Popover, is a container component that can overlay other components on page."
        :componentDocs="docs"
        :apiDocs="['OverlayPanel']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/overlaypanel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/overlaypanel/BasicDoc.vue';
import DataTableDoc from '@/doc/overlaypanel/DataTableDoc.vue';
import ImportDoc from '@/doc/overlaypanel/ImportDoc.vue';
import PTComponent from '@/doc/overlaypanel/pt/index.vue';
import ThemingDoc from '@/doc/overlaypanel/theming/index.vue';

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
