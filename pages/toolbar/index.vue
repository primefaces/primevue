<template>
    <DocComponent title="Vue Toolbar Component" header="Toolbar" description="Toolbar is a grouping component for buttons and other content." :componentDocs="docs" :apiDocs="['Toolbar']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>
<script>
import AccessibilityDoc from '@/doc/toolbar/AccessibilityDoc.vue';
import BasicDoc from '@/doc/toolbar/BasicDoc.vue';
import CustomDoc from '@/doc/toolbar/CustomDoc.vue';
import ImportDoc from '@/doc/toolbar/ImportDoc.vue';
import PTComponent from '@/doc/toolbar/pt/index.vue';
import ThemingDoc from '@/doc/toolbar/theming/index.vue';

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
