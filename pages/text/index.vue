<template>
    <DocComponent title="Vue Text Component" header="Text" description="...." :componentDocs="docs" :apiDocs="['Text']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/text/AccessibilityDoc.vue';
import BasicDoc from '@/doc/text/BasicDoc.vue';
import ImportDoc from '@/doc/text/ImportDoc.vue';

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
            ptComponent: [], //PTComponent,
            themingDoc: [] //ThemingDoc*/
        };
    }
};
</script>
