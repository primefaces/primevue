<template>
    <DocComponent title="Vue Popover Component" header="OverlayPanel" description="OverlayPanel, also known as Popover, is a container component that can overlay other components on page." :componentDocs="docs" :apiDocs="['OverlayPanel']" />
</template>

<script>
import AccessibilityDoc from '@/doc/overlaypanel/AccessibilityDoc';
import BasicDoc from '@/doc/overlaypanel/BasicDoc';
import DataTableDoc from '@/doc/overlaypanel/DataTableDoc';
import ImportDoc from '@/doc/overlaypanel/ImportDoc';
import StyleDoc from '@/doc/overlaypanel/StyleDoc';

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
                    id: 'dataTable',
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
            ]
        };
    }
};
</script>
