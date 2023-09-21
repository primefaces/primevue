<template>
    <DocComponent
        title="Vue StyleClass Directive"
        header="StyleClass"
        description="StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element."
        :componentDocs="docs"
        :apiDocs="['StyleClass']"
    />
</template>

<script>
import AnimationDoc from '@/doc/styleclass/AnimationDoc.vue';
import ImportDoc from '@/doc/styleclass/ImportDoc.vue';
import ToggleClass from '@/doc/styleclass/ToggleClassDoc.vue';

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
                    id: 'toggleClass',
                    label: 'Toggle Class',
                    component: ToggleClass
                },
                {
                    id: 'animation',
                    label: 'Animation',
                    component: AnimationDoc
                }
            ]
        };
    }
};
</script>
