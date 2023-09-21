<template>
    <DocComponent
        title="Vue Splitter Component"
        header="Splitter"
        description="Splitter is utilized to separate and resize panels."
        :componentDocs="docs"
        :apiDocs="['Splitter', 'SplitterPanel']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/splitter/AccessibilityDoc.vue';
import HorizontalDoc from '@/doc/splitter/HorizontalDoc.vue';
import ImportDoc from '@/doc/splitter/ImportDoc.vue';
import NestedDoc from '@/doc/splitter/NestedDoc.vue';
import SizeDoc from '@/doc/splitter/SizeDoc.vue';
import VerticalDoc from '@/doc/splitter/VerticalDoc.vue';
import PTComponent from '@/doc/splitter/pt/index.vue';
import ThemingDoc from '@/doc/splitter/theming/index.vue';

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
                    id: 'horizontal',
                    label: 'Horizontal',
                    component: HorizontalDoc
                },
                {
                    id: 'size',
                    label: 'Size',
                    component: SizeDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'nested',
                    label: 'Nested',
                    component: NestedDoc
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
