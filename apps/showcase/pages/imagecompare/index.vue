<template>
    <DocComponent title="Vue ImageCompare Component" header="ImageCompare" description="Compare two images side by side with a slider." :componentDocs="docs" :apiDocs="['ImageCompare']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/imagecompare/AccessibilityDoc.vue';
import BasicDoc from '@/doc/imagecompare/BasicDoc.vue';
import ImportDoc from '@/doc/imagecompare/ImportDoc.vue';
import ResponsiveDoc from '@/doc/imagecompare/ResponsiveDoc.vue';
import PTComponent from '@/doc/imagecompare/pt/index.vue';
import ThemingDoc from '@/doc/imagecompare/theming/index.vue';

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
                    id: 'responsive',
                    label: 'Responsive',
                    component: ResponsiveDoc
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
