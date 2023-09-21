<template>
    <DocComponent
        title="Vue Inplace Component"
        header="Inplace"
        description="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content."
        :componentDocs="docs"
        :apiDocs="['Inplace']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/inplace/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inplace/BasicDoc.vue';
import ImageDoc from '@/doc/inplace/ImageDoc.vue';
import ImportDoc from '@/doc/inplace/ImportDoc.vue';
import InputDoc from '@/doc/inplace/InputDoc.vue';
import LazyDoc from '@/doc/inplace/LazyDoc.vue';
import PTComponent from '@/doc/inplace/pt/index.vue';
import ThemingDoc from '@/doc/inplace/theming/index.vue';

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
                    id: 'input',
                    label: 'Input',
                    component: InputDoc
                },
                {
                    id: 'image',
                    label: 'Image',
                    component: ImageDoc
                },
                {
                    id: 'lazy',
                    label: 'Lazy',
                    component: LazyDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
