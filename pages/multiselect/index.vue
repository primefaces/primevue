<template>
    <DocComponent
        title="Vue MultiSelect Component"
        header="MultiSelect"
        description="MultiSelect is used to select multiple items from a collection."
        :componentDocs="docs"
        :apiDocs="['MultiSelect']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/multiselect/AccessibilityDoc.vue';
import BasicDoc from '@/doc/multiselect/BasicDoc.vue';
import ChipsDoc from '@/doc/multiselect/ChipsDoc.vue';
import DisabledDoc from '@/doc/multiselect/DisabledDoc.vue';
import FilledDoc from '@/doc/multiselect/FilledDoc.vue';
import FilterDoc from '@/doc/multiselect/FilterDoc.vue';
import FloatLabelDoc from '@/doc/multiselect/FloatLabelDoc.vue';
import GroupDoc from '@/doc/multiselect/GroupDoc.vue';
import ImportDoc from '@/doc/multiselect/ImportDoc.vue';
import InvalidDoc from '@/doc/multiselect/InvalidDoc.vue';
import LoadingStateDoc from '@/doc/multiselect/LoadingStateDoc.vue';
import TemplateDoc from '@/doc/multiselect/TemplateDoc.vue';
import VirtualScrollDoc from '@/doc/multiselect/VirtualScrollDoc.vue';
import PTComponent from '@/doc/multiselect/pt/index.vue';
import ThemingDoc from '@/doc/multiselect/theming/index.vue';

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
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
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
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
