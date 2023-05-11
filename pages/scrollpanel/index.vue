<template>
    <DocComponent
        title="Vue ScrollPanel Component"
        header="ScrollPanel"
        description="ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar."
        :componentDocs="docs"
        :apiDocs="['ScrollPanel']"
        :ptTabComponent="ptComponent"
    />
</template>
<script>
import AccessibilityDoc from '@/doc/scrollpanel/AccessibilityDoc';
import BasicDoc from '@/doc/scrollpanel/BasicDoc';
import CustomDoc from '@/doc/scrollpanel/CustomDoc';
import ImportDoc from '@/doc/scrollpanel/ImportDoc';
import StyleDoc from '@/doc/scrollpanel/StyleDoc';
import PTComponent from '@/doc/scrollpanel/pt/index.vue';

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
                    id: 'custom',
                    label: 'Custom',
                    component: CustomDoc
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent
        };
    }
};
</script>
