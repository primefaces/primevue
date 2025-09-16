<template>
    <DocComponent
        title="Vue SelectButton Component"
        header="SelectButton"
        description="SelectButton is used to choose single or multiple items from a list using buttons."
        :componentDocs="docs"
        :apiDocs="['SelectButton']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/selectbutton/AccessibilityDoc.vue';
import BasicDoc from '@/doc/selectbutton/BasicDoc.vue';
import DisabledDoc from '@/doc/selectbutton/DisabledDoc.vue';
import FluidDoc from '@/doc/selectbutton/FluidDoc.vue';
import FormsDoc from '@/doc/selectbutton/FormsDoc.vue';
import ImportDoc from '@/doc/selectbutton/ImportDoc.vue';
import InvalidDoc from '@/doc/selectbutton/InvalidDoc.vue';
import MultipleDoc from '@/doc/selectbutton/MultipleDoc.vue';
import SizesDoc from '@/doc/selectbutton/SizesDoc.vue';
import TemplateDoc from '@/doc/selectbutton/TemplateDoc.vue';
import PTComponent from '@/doc/selectbutton/pt/index.vue';
import ThemingDoc from '@/doc/selectbutton/theming/index.vue';

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
                    id: 'forms',
                    label: 'Forms',
                    component: FormsDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'fluid',
                    label: 'Fluid',
                    component: FluidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
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
