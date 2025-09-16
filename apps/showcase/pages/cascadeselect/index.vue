<template>
    <DocComponent
        title="Vue CascadeSelect Component"
        header="CascadeSelect"
        description="CascadeSelect is a form component to select a value from a nested structure of options."
        :componentDocs="docs"
        :apiDocs="['CascadeSelect']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/cascadeselect/AccessibilityDoc.vue';
import BasicDoc from '@/doc/cascadeselect/BasicDoc.vue';
import ClearIconDoc from '@/doc/cascadeselect/ClearIconDoc.vue';
import DisabledDoc from '@/doc/cascadeselect/DisabledDoc.vue';
import FilledDoc from '@/doc/cascadeselect/FilledDoc.vue';
import FloatLabelDoc from '@/doc/cascadeselect/FloatLabelDoc.vue';
import FluidDoc from '@/doc/cascadeselect/FluidDoc.vue';
import FormsDoc from '@/doc/cascadeselect/FormsDoc.vue';
import IftaLabelDoc from '@/doc/cascadeselect/IftaLabelDoc.vue';
import ImportDoc from '@/doc/cascadeselect/ImportDoc.vue';
import InvalidDoc from '@/doc/cascadeselect/InvalidDoc.vue';
import LoadingStateDoc from '@/doc/cascadeselect/LoadingStateDoc.vue';
import SizesDoc from '@/doc/cascadeselect/SizesDoc.vue';
import TemplateDoc from '@/doc/cascadeselect/TemplateDoc.vue';
import PTComponent from '@/doc/cascadeselect/pt/index.vue';
import ThemingDoc from '@/doc/cascadeselect/theming/index.vue';

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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'loadingstate',
                    label: 'Loading State',
                    component: LoadingStateDoc
                },
                {
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'iftalabel',
                    label: 'Ifta Label',
                    component: IftaLabelDoc
                },
                {
                    id: 'clearicon',
                    label: 'Clear Icon',
                    component: ClearIconDoc
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
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
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
