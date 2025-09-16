<template>
    <DocComponent
        title="Vue TreeSelect Component"
        header="TreeSelect"
        description="TreeSelect is a form component to choose from hierarchical data."
        :componentDocs="docs"
        :apiDocs="['TreeSelect', 'TreeNode']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/treeselect/AccessibilityDoc.vue';
import BasicDoc from '@/doc/treeselect/BasicDoc.vue';
import CheckboxDoc from '@/doc/treeselect/CheckboxDoc.vue';
import ClearIconDoc from '@/doc/treeselect/ClearIconDoc.vue';
import DisabledDoc from '@/doc/treeselect/DisabledDoc.vue';
import FilledDoc from '@/doc/treeselect/FilledDoc.vue';
import FilterDoc from '@/doc/treeselect/FilterDoc.vue';
import FloatLabelDoc from '@/doc/treeselect/FloatLabelDoc.vue';
import FluidDoc from '@/doc/treeselect/FluidDoc.vue';
import FormsDoc from '@/doc/treeselect/FormsDoc.vue';
import IftaLabelDoc from '@/doc/treeselect/IftaLabelDoc.vue';
import ImportDoc from '@/doc/treeselect/ImportDoc.vue';
import InvalidDoc from '@/doc/treeselect/InvalidDoc.vue';
import LazyDoc from '@/doc/treeselect/LazyDoc.vue';
import MultipleDoc from '@/doc/treeselect/MultipleDoc.vue';
import PTComponent from '@/doc/treeselect/pt/index.vue';
import SizesDoc from '@/doc/treeselect/SizesDoc.vue';
import TemplateDoc from '@/doc/treeselect/TemplateDoc.vue';
import ThemingDoc from '@/doc/treeselect/theming/index.vue';

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
                    id: 'checkbox',
                    label: 'Checkbox',
                    component: CheckboxDoc
                },
                {
                    id: 'lazy',
                    label: 'Lazy',
                    component: LazyDoc
                },
                {
                    id: 'filter',
                    label: 'Filter',
                    component: FilterDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
