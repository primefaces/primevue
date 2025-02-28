<template>
    <DocComponent
        title="Vue MultiSelect Component"
        header="MultiSelect"
        description="MultiSelect is used to select multiple items from a collection."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/multiselect/#api"
        ptLink="/multiselect/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/multiselect/AccessibilityDoc.vue';
import BasicDoc from '@/doc/multiselect/BasicDoc.vue';
import ChipsDoc from '@/doc/multiselect/ChipsDoc.vue';
import ClearIconDoc from '@/doc/multiselect/ClearIconDoc.vue';
import DisabledDoc from '@/doc/multiselect/DisabledDoc.vue';
import FilledDoc from '@/doc/multiselect/FilledDoc.vue';
import FilterDoc from '@/doc/multiselect/FilterDoc.vue';
import FloatLabelDoc from '@/doc/multiselect/FloatLabelDoc.vue';
import FormsDoc from '@/doc/multiselect/FormsDoc.vue';
import GroupDoc from '@/doc/multiselect/GroupDoc.vue';
import IftaLabelDoc from '@/doc/multiselect/IftaLabelDoc.vue';
import ImportDoc from '@/doc/multiselect/ImportDoc.vue';
import InvalidDoc from '@/doc/multiselect/InvalidDoc.vue';
import LoadingStateDoc from '@/doc/multiselect/LoadingStateDoc.vue';
import SizesDoc from '@/doc/multiselect/SizesDoc.vue';
import TemplateDoc from '@/doc/multiselect/TemplateDoc.vue';
import VirtualScrollDoc from '@/doc/multiselect/VirtualScrollDoc.vue';

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
                    id: 'chips',
                    label: 'Chips',
                    component: ChipsDoc
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
                    id: 'clearicon',
                    label: 'Clear Icon',
                    component: ClearIconDoc
                },
                {
                    id: 'loadingstate',
                    label: 'Loading State',
                    component: LoadingStateDoc
                },
                {
                    id: 'virtualscroll',
                    label: 'VirtualScroll',
                    component: VirtualScrollDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
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
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'multiselect'
            }
        };
    }
};
</script>
