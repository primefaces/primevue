<template>
    <DocComponent
        title="Vue MeterGroup Component"
        header="MeterGroup"
        description="MeterGroup displays scalar measurements within a known range."
        :componentDocs="docs"
        :apiDocs="['MeterGroup']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/metergroup/AccessibilityDoc.vue';
import BasicDoc from '@/doc/metergroup/BasicDoc.vue';
import IconDoc from '@/doc/metergroup/IconDoc.vue';
import ImportDoc from '@/doc/metergroup/ImportDoc.vue';
import LabelDoc from '@/doc/metergroup/LabelDoc.vue';
import MinMaxDoc from '@/doc/metergroup/MinMaxDoc.vue';
import MultipleDoc from '@/doc/metergroup/MultipleDoc.vue';
import TemplateDoc from '@/doc/metergroup/TemplateDoc.vue';
import VerticalDoc from '@/doc/metergroup/VerticalDoc.vue';
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
                    id: 'icon',
                    label: 'Icon',
                    component: IconDoc
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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
