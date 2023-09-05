<template>
    <DocComponent title="Vue Timeline Component" header="Timeline" description="Timeline visualizes a series of chained events." :componentDocs="docs" :apiDocs="['Timeline']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/timeline/AccessibilityDoc';
import AlignmentDoc from '@/doc/timeline/AlignmentDoc';
import BasicDoc from '@/doc/timeline/BasicDoc';
import HorizontalDoc from '@/doc/timeline/HorizontalDoc';
import ImportDoc from '@/doc/timeline/ImportDoc';
import OppositeDoc from '@/doc/timeline/OppositeDoc';
import TemplateDoc from '@/doc/timeline/TemplateDoc';
import PTComponent from '@/doc/timeline/pt/index.vue';
import ThemingDoc from '@/doc/timeline/theming/index.vue';

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
                    id: 'alignment',
                    label: 'Alignment',
                    component: AlignmentDoc
                },
                {
                    id: 'opposite',
                    label: 'Opposite',
                    component: OppositeDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'horizontal',
                    label: 'Horizontal',
                    component: HorizontalDoc
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
