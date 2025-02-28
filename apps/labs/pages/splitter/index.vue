<template>
    <DocComponent title="Vue Splitter Component" header="Splitter" description="Splitter is utilized to separate and resize panels." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/splitter/#api" ptLink="/splitter/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/splitter/AccessibilityDoc.vue';
import HorizontalDoc from '@/doc/splitter/HorizontalDoc.vue';
import ImportDoc from '@/doc/splitter/ImportDoc.vue';
import NestedDoc from '@/doc/splitter/NestedDoc.vue';
import SizeDoc from '@/doc/splitter/SizeDoc.vue';
import VerticalDoc from '@/doc/splitter/VerticalDoc.vue';
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
            presetDoc: {
                key: ['splitter', 'splitterpanel']
            }
        };
    }
};
</script>
