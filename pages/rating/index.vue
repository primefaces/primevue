<template>
    <DocComponent title="Vue Rating Component" header="Rating" description="Rating component is a star based selection input." :componentDocs="docs" :apiDocs="['Rating']" />
</template>

<script>
import AccessibilityDoc from '@/doc/rating/AccessibilityDoc.vue';
import BasicDoc from '@/doc/rating/BasicDoc.vue';
import DisabledDoc from '@/doc/rating/DisabledDoc.vue';
import ImportDoc from '@/doc/rating/ImportDoc.vue';
import NumberOfStarsDoc from '@/doc/rating/NumberOfStarsDoc.vue';
import ReadOnlyDoc from '@/doc/rating/ReadOnlyDoc.vue';
import StyleDoc from '@/doc/rating/StyleDoc.vue';
import TemplateDoc from '@/doc/rating/TemplateDoc.vue';
import WithoutCancelDoc from '@/doc/rating/WithoutCancelDoc.vue';

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
                    id: 'withoutcancel',
                    label: 'Without Cancel',
                    component: WithoutCancelDoc
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
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
