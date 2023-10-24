<template>
    <DocComponent
        title="Vue AnimateOnScroll Directive"
        header="AnimateOnScroll"
        description="AnimateOnScroll manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load."
        :componentDocs="docs"
        :apiDocs="['AnimateOnScroll']"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/animateonscroll/AccessibilityDoc.vue';
import BasicDoc from '@/doc/animateonscroll/BasicDoc.vue';
import ImportDoc from '@/doc/animateonscroll/ImportDoc.vue';
import OnceDoc from '@/doc/animateonscroll/OnceDoc.vue';

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
                    id: 'once',
                    label: 'Once',
                    component: OnceDoc
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
