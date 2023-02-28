<template>
    <DocComponent title="Vue OrderList Component" header="OrderList" description="OrderList is used to sort a collection." :componentDocs="docs" :apiDocs="['OrderList']" />
</template>

<script>
import AccessibilityDoc from '@/doc/orderlist/AccessibilityDoc.vue';
import BasicDoc from '@/doc/orderlist/BasicDoc.vue';
import ImportDoc from '@/doc/orderlist/ImportDoc.vue';
import StyleDoc from '@/doc/orderlist/StyleDoc.vue';
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
