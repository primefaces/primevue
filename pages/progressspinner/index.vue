<template>
    <DocComponent title="Vue ProgressSpinner Component" header="ProgressSpinner" description="ProgressBar is a process status indicator." :componentDocs="docs" :apiDocs="['ProgressSpinner']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/progressspinner/AccessibilityDoc.vue';
import BasicDoc from '@/doc/progressspinner/BasicDoc.vue';
import CustomDoc from '@/doc/progressspinner/CustomDoc.vue';
import ImportDoc from '@/doc/progressspinner/ImportDoc.vue';
import PTComponent from '@/doc/progressspinner/pt/index.vue';
import ThemingDoc from '@/doc/progressspinner/theming/index.vue';
export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'import',
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
