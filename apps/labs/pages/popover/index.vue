<template>
    <DocComponent
        title="Vue Popover Component"
        header="Popover"
        description="Popover, also known as Popover, is a container component that can overlay other components on page."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/popover/#api"
        ptLink="/popover/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/popover/AccessibilityDoc.vue';
import BasicDoc from '@/doc/popover/BasicDoc.vue';
import DataTableDoc from '@/doc/popover/DataTableDoc.vue';
import ImportDoc from '@/doc/popover/ImportDoc.vue';
import SelectDataDoc from '@/doc/popover/SelectDataDoc.vue';

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
                    id: 'selectdata',
                    label: 'Select Data',
                    component: SelectDataDoc
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
                key: 'popover'
            }
        };
    }
};
</script>
