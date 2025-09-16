<template>
    <DocComponent title="Vue Select Component" header="Select" description="Select is used to choose an item from a collection of options." :componentDocs="docs" :apiDocs="['Select']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/select/AccessibilityDoc.vue';
import BasicDoc from '@/doc/select/BasicDoc.vue';
import CheckmarkDoc from '@/doc/select/CheckmarkDoc.vue';
import ClearIconDoc from '@/doc/select/ClearIconDoc.vue';
import DisabledDoc from '@/doc/select/DisabledDoc.vue';
import EditableDoc from '@/doc/select/EditableDoc.vue';
import FilledDoc from '@/doc/select/FilledDoc.vue';
import FilterDoc from '@/doc/select/FilterDoc.vue';
import FloatLabelDoc from '@/doc/select/FloatLabelDoc.vue';
import FluidDoc from '@/doc/select/FluidDoc.vue';
import FormsDoc from '@/doc/select/FormsDoc.vue';
import GroupDoc from '@/doc/select/GroupDoc.vue';
import IftaLabelDoc from '@/doc/select/IftaLabelDoc.vue';
import ImportDoc from '@/doc/select/ImportDoc.vue';
import InvalidDoc from '@/doc/select/InvalidDoc.vue';
import LazyVirtualScrollDoc from '@/doc/select/LazyVirtualScrollDoc.vue';
import LoadingStateDoc from '@/doc/select/LoadingStateDoc.vue';
import SizesDoc from '@/doc/select/SizesDoc.vue';
import TemplateDoc from '@/doc/select/TemplateDoc.vue';
import VirtualScrollDoc from '@/doc/select/VirtualScrollDoc.vue';
import PTComponent from '@/doc/select/pt/index.vue';
import ThemingDoc from '@/doc/select/theming/index.vue';

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
                    id: 'checkmark',
                    label: 'Checkmark',
                    component: CheckmarkDoc
                },
                {
                    id: 'editable',
                    label: 'Editable',
                    component: EditableDoc
                },
                {
                    id: 'group',
                    label: 'Group',
                    component: GroupDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'filter',
                    label: 'Filter',
                    component: FilterDoc
                },
                {
                    id: 'loadingstate',
                    label: 'Loading State',
                    component: LoadingStateDoc
                },
                {
                    id: 'virtualscroll',
                    label: 'Virtual Scroll',
                    component: VirtualScrollDoc
                },
                {
                    id: 'lazyvirtualscroll',
                    label: 'Lazy Virtual Scroll',
                    component: LazyVirtualScrollDoc
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
