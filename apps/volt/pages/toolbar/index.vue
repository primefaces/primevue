<template>
    <DocComponent title="Vue Toolbar Component" header="Toolbar" description="Toolbar is a grouping component for buttons and other content." :componentDocs="docs" />
</template>
<script>
import BasicDoc from '@/doc/toolbar/BasicDoc.vue';
import CustomDoc from '@/doc/toolbar/CustomDoc.vue';
import ImportDoc from '@/doc/toolbar/ImportDoc.vue';

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
                    id: 'custom',
                    label: 'Custom',
                    component: CustomDoc
                }
            ]
        };
    }
};
</script>
