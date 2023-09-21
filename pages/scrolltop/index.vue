<template>
    <DocComponent
        title="Vue ScrollTop Component"
        header="ScrollTop"
        description="ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly."
        :componentDocs="docs"
        :apiDocs="['ScrollTop']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/scrolltop/AccessibilityDoc.vue';
import BasicDoc from '@/doc/scrolltop/BasicDoc.vue';
import ElementDoc from '@/doc/scrolltop/ElementDoc.vue';
import ImportDoc from '@/doc/scrolltop/ImportDoc.vue';
import PTComponent from '@/doc/scrolltop/pt/index.vue';
import ThemingDoc from '@/doc/scrolltop/theming/index.vue';

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
