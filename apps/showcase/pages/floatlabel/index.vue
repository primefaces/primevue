<template>
    <DocComponent title="Vue Float Label" header="FloatLabel" description="FloatLabel visually integrates a label with its form element." :componentDocs="docs" :ptTabComponent="ptComponent" :apiDocs="['FloatLabel']" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/floatlabel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/floatlabel/BasicDoc.vue';
import ImportDoc from '@/doc/floatlabel/ImportDoc.vue';
import InvalidDoc from '@/doc/floatlabel/InvalidDoc.vue';
import PTComponent from '@/doc/floatlabel/pt/index.vue';
import ThemingDoc from '@/doc/floatlabel/theming/index.vue';
import VariantsDoc from '@/doc/floatlabel/VariantsDoc.vue';

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
                    id: 'variants',
                    label: 'Variants',
                    component: VariantsDoc
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
