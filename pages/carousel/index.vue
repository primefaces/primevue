<template>
    <DocComponent title="Vue Carousel Component" header="Carousel" description="Carousel is a content slider featuring various customization options." :componentDocs="docs" :apiDocs="['Carousel']" />
</template>

<script>
import AccessibilityDoc from '@/doc/carousel/AccessibilityDoc';
import BasicDoc from '@/doc/carousel/BasicDoc';
import CircularDoc from '@/doc/carousel/CircularDoc';
import ImportDoc from '@/doc/carousel/ImportDoc';
import NumScrollDoc from '@/doc/carousel/NumScrollDoc';
import ResponsiveDoc from '@/doc/carousel/ResponsiveDoc';
import StyleDoc from '@/doc/carousel/StyleDoc';
import VerticalDoc from '@/doc/carousel/VerticalDoc';
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
                    id: 'numscroll',
                    label: 'Num Scroll',
                    component: NumScrollDoc
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
