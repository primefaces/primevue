<template>
    <DocComponent title="Vue Ifta Label" header="IftaLabel" description="IftaLabel visually integrates a label within its form element." :componentDocs="docs" :ptTabComponent="ptComponent" :apiDocs="['IftaLabel']" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/iftalabel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/iftalabel/BasicDoc.vue';
import ImportDoc from '@/doc/iftalabel/ImportDoc.vue';
import InvalidDoc from '@/doc/iftalabel/InvalidDoc.vue';
import PTComponent from '@/doc/iftalabel/pt/index.vue';
import ThemingDoc from '@/doc/iftalabel/theming/index.vue';

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
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
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
