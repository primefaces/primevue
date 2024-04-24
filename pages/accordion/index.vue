<template>
    <DocComponent
        title="Vue Accordion Component"
        header="Accordion"
        description="Accordion groups a collection of contents in panels."
        :componentDocs="docs"
        :apiDocs="['Accordion', 'AccordionPanel', 'AccordionHeader', 'AccordionContent']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/accordion/AccessibilityDoc.vue';
import BasicDoc from '@/doc/accordion/BasicDoc.vue';
import ControlledDoc from '@/doc/accordion/ControlledDoc.vue';
import Disabled from '@/doc/accordion/DisabledDoc.vue';
import DynamicDoc from '@/doc/accordion/DynamicDoc.vue';
import ImportDoc from '@/doc/accordion/ImportDoc.vue';
import MultipleDoc from '@/doc/accordion/MultipleDoc.vue';
import TemplateDoc from '@/doc/accordion/TemplateDoc.vue';
import PTComponent from '@/doc/accordion/pt/index.vue';
import ThemingDoc from '@/doc/accordion/theming/index.vue';

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
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: Disabled
                },
                {
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
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
