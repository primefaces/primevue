<template>
    <DocComponent title="Vue Carousel Component" header="Carousel" description="Carousel is a content slider featuring various customization options." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/carousel/#api" ptLink="/carousel/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/carousel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/carousel/BasicDoc.vue';
import CircularDoc from '@/doc/carousel/CircularDoc.vue';
import ImportDoc from '@/doc/carousel/ImportDoc.vue';
import ResponsiveDoc from '@/doc/carousel/ResponsiveDoc.vue';
import VerticalDoc from '@/doc/carousel/VerticalDoc.vue';

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
                    id: 'circular',
                    label: 'Circular',
                    component: CircularDoc
                },
                {
                    id: 'responsive',
                    label: 'Responsive',
                    component: ResponsiveDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'carousel'
            }
        };
    }
};
</script>
