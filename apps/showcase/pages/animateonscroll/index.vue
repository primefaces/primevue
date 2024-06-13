<template>
    <DocComponent
        title="Vue AnimateOnScroll Directive"
        header="AnimateOnScroll"
        description="AnimateOnScroll is used to apply animations to elements when entering or leaving the viewport during scrolling."
        :componentDocs="docs"
        :apiDocs="['AnimateOnScroll']"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/animateonscroll/AccessibilityDoc.vue';
import BasicDoc from '@/doc/animateonscroll/BasicDoc.vue';
import ImportDoc from '@/doc/animateonscroll/ImportDoc.vue';

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
        };
    }
};
</script>
