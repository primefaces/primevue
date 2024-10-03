<template>
    <DocComponent title="Vue ImageDiff Component" header="ImageDiff" description="ImageDiff" :componentDocs="docs" :apiDocs="['ImageDiff']" />
</template>
<!-- :ptTabComponent="ptComponent"
    :themingDocs="themingDoc" -->

<script>
import AccessibilityDoc from '@/doc/imagediff/AccessibilityDoc.vue';
import BasicDoc from '@/doc/imagediff/BasicDoc.vue';
import ImportDoc from '@/doc/imagediff/ImportDoc.vue';
// import PTComponent from '@/doc/imagediff/pt/index.vue';
// import ThemingDoc from '@/doc/imagediff/theming/index.vue';

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
            ]
            // ptComponent: PTComponent,
            // themingDoc: ThemingDoc
        };
    }
};
</script>
