<template>
    <DocComponent
        title="PrimeVue PassThrough"
        header="PassThrough"
        description="The Pass Through feature enables direct implementation of all relevant attributes (e.g., style, class) within the respective HTML tag."
        :componentDocs="docs"
        :apiDocs="['Config']"
    />
</template>

<script>
import BasicDoc from '@/doc/passthrough/BasicDoc.vue';
import GlobalPTDoc from '@/doc/passthrough/GlobalPTDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'globalpt',
                    label: 'Global PassThrough Options',
                    component: GlobalPTDoc
                }
            ]
        };
    }
};
</script>
