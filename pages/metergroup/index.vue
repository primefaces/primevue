<template>
    <DocComponent title="Vue MeterGroup Component" header="MeterGroup" description="MeterGroup is a group of process status indicators." :componentDocs="docs" :apiDocs="['MeterGroup']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/metergroup/AccessibilityDoc.vue';
import BasicDoc from '@/doc/metergroup/BasicDoc.vue';
import MultipleDoc from '@/doc/metergroup/MultipleDoc.vue';
import ImportDoc from '@/doc/metergroup/ImportDoc.vue';
import VerticalDoc from '@/doc/metergroup/VerticalDoc.vue';
import LabelDoc from '@/doc/metergroup/LabelDoc.vue';
import TemplatingDoc from '@/doc/metergroup/TemplatingDoc.vue';
import MinMaxDoc from '@/doc/metergroup/MinMaxDoc.vue';
import PTComponent from '@/doc/metergroup/pt/index.vue';
import ThemingDoc from '@/doc/metergroup/theming/index.vue';

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
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'label',
                    label: 'Label',
                    component: LabelDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'minmax',
                    label: 'Min-Max',
                    component: MinMaxDoc
                },
                {
                    id: 'templating',
                    label: 'Templating',
                    component: TemplatingDoc
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
