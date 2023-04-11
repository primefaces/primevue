<template>
    <DocComponent title="Vue Accordion Component" header="Accordion" description="Accordion groups a collection of contents in tabs." :componentDocs="docs" :apiDocs="['Accordion', 'AccordionTab']" :ptTabComponent="ptComponent" />
</template>

<script>
import AccessibilityDoc from '@/doc/accordion/AccessibilityDoc';
import BasicDoc from '@/doc/accordion/BasicDoc';
import ControlledDoc from '@/doc/accordion/ControlledDoc.vue';
import Disabled from '@/doc/accordion/DisabledDoc.vue';
import DynamicDoc from '@/doc/accordion/DynamicDoc';
import ImportDoc from '@/doc/accordion/ImportDoc';
import MultipleDoc from '@/doc/accordion/MultipleDoc.vue';
import StyleDoc from '@/doc/accordion/StyleDoc';
import TemplateDoc from '@/doc/accordion/TemplateDoc.vue';
import PTComponent from '@/doc/accordion/pt/index.vue';

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
