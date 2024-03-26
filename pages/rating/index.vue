<template>
    <DocComponent title="Vue Rating Component" header="Rating" description="Rating component is a star based selection input." :componentDocs="docs" :apiDocs="['Rating']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/rating/AccessibilityDoc.vue';
import BasicDoc from '@/doc/rating/BasicDoc.vue';
import DisabledDoc from '@/doc/rating/DisabledDoc.vue';
import ImportDoc from '@/doc/rating/ImportDoc.vue';
import NumberOfStarsDoc from '@/doc/rating/NumberOfStarsDoc.vue';
import ReadOnlyDoc from '@/doc/rating/ReadOnlyDoc.vue';
import TemplateDoc from '@/doc/rating/TemplateDoc.vue';
import PTComponent from '@/doc/rating/pt/index.vue';
import ThemingDoc from '@/doc/rating/theming/index.vue';

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
                    id: 'numberofstars',
                    label: 'Number of Stars',
                    component: NumberOfStarsDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'readonly',
                    label: 'ReadOnly',
                    component: ReadOnlyDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
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
