<template>
    <DocComponent title="Vue FocusTrap Directive" header="Focus Trap" description="Focus Trap keeps focus within a certain DOM element while tabbing." :componentDocs="docs" :apiDocs="['FocusTrap']" />
</template>

<script>
import BasicDoc from '@/doc/focustrap/BasicDoc.vue';
import ImportDoc from '@/doc/focustrap/ImportDoc.vue';

export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            accept: null,
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
