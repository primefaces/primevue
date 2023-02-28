<template>
    <DocComponent title="Vue ScrollTop Component" header="ScrollTop" description="ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly." :componentDocs="docs" :apiDocs="['ScrollTop']" />
</template>

<script>
import AccessibilityDoc from '@/doc/scrolltop/AccessibilityDoc';
import BasicDoc from '@/doc/scrolltop/BasicDoc';
import ElementDoc from '@/doc/scrolltop/ElementDoc';
import ImportDoc from '@/doc/scrolltop/ImportDoc';
import StyleDoc from '@/doc/scrolltop/StyleDoc';

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
                    id: 'element',
                    label: 'Element',
                    component: ElementDoc
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
