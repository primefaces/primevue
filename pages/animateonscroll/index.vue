<template>
    <DocComponent
        title="Vue AnimateOnScroll Directive"
        header="Animate"
        description="AnimateOnScroll manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load."
        :componentDocs="docs"
        :apiDocs="['Animate']"
    />
</template>

<script>
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
                }
            ]
        };
    }
};
</script>
