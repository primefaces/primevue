<template>
    <DocComponent title="Vue OrderList Component" header="OrderList" description="OrderList is used to sort a collection." :componentDocs="docs" :apiDocs="['OrderList']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/orderlist/AccessibilityDoc.vue';
import BasicDoc from '@/doc/orderlist/BasicDoc.vue';
import ImportDoc from '@/doc/orderlist/ImportDoc.vue';
import TemplateDoc from '@/doc/orderlist/TemplateDoc.vue';
import PTComponent from '@/doc/orderlist/pt/index.vue';
import ThemingDoc from '@/doc/orderlist/theming/index.vue';

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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
