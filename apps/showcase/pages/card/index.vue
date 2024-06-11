<template>
    <DocComponent title="Vue Card Component" header="Card" description="Card is a flexible container component." :componentDocs="docs" :apiDocs="['Card']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/card/AccessibilityDoc.vue';
import AdvancedDoc from '@/doc/card/AdvancedDoc.vue';
import BasicDoc from '@/doc/card/BasicDoc.vue';
import ImportDoc from '@/doc/card/ImportDoc.vue';
import PTComponent from '@/doc/card/pt/index.vue';
import ThemingDoc from '@/doc/card/theming/index.vue';
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
                    id: 'advanced',
                    label: 'Advanced',
                    component: AdvancedDoc
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
