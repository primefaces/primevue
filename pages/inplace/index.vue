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
import AccessibilityDoc from '@/doc/inplace/AccessibilityDoc';
import BasicDoc from '@/doc/inplace/BasicDoc';
import ImageDoc from '@/doc/inplace/ImageDoc';
import ImportDoc from '@/doc/inplace/ImportDoc';
import InputDoc from '@/doc/inplace/InputDoc';
import LazyDoc from '@/doc/inplace/LazyDoc';
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
