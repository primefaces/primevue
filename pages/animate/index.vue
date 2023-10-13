<template>
    <DocComponent title="Vue Animate Directive" header="Animate" description="Animate manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load." :componentDocs="docs" />
</template>

<script>
import BasicDoc from '@/doc/animate/BasicDoc.vue';
import ImportDoc from '@/doc/animate/ImportDoc.vue';

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
