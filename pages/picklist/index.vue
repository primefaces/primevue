<template>
    <DocComponent title="Vue PickList Component" header="PickList" description="PickList is used to reorder items between different lists." :componentDocs="docs" :apiDocs="['PickList']" />
</template>

<script>
import AccessibilityDoc from '@/doc/picklist/AccessibilityDoc.vue';
import BasicDoc from '@/doc/picklist/BasicDoc.vue';
import ImportDoc from '@/doc/picklist/ImportDoc.vue';
import StyleDoc from '@/doc/picklist/StyleDoc.vue';

export default {
    data() {
        return {
            docs: [
                { id: 'import', label: 'Import', component: ImportDoc },
                { id: 'basic', label: 'Basic', component: BasicDoc },
                { id: 'style', label: 'Style', component: StyleDoc },
                { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
            ]
        };
    }
};
</script>
