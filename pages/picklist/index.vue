<template>
    <DocComponent title="Vue PickList Component" header="PickList" description="PickList is used to reorder items between different lists." :componentDocs="docs" :apiDocs="['PickList']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/picklist/AccessibilityDoc.vue';
import BasicDoc from '@/doc/picklist/BasicDoc.vue';
import ImportDoc from '@/doc/picklist/ImportDoc.vue';
import PTComponent from '@/doc/picklist/pt/index.vue';
import ThemingDoc from '@/doc/picklist/theming/index.vue';

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
