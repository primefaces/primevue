<template>
    <DocComponent title="Vue MultiSelect Component" header="MultiSelect" description="MultiSelect is used to select multiple items from a collection." :componentDocs="docs" :apiDocs="['MultiSelect']" />
</template>

<script>
import AccessibilityDoc from '@/doc/multiselect/AccessibilityDoc';
import BasicDoc from '@/doc/multiselect/BasicDoc';
import ChipsDoc from '@/doc/multiselect/ChipsDoc';
import DisabledDoc from '@/doc/multiselect/DisabledDoc';
import FilterDoc from '@/doc/multiselect/FilterDoc';
import FloatLabelDoc from '@/doc/multiselect/FloatLabelDoc';
import VeeValidateDoc from '@/doc/multiselect/form/VeeValidateDoc';
import GroupDoc from '@/doc/multiselect/GroupDoc';
import ImportDoc from '@/doc/multiselect/ImportDoc';
import InvalidDoc from '@/doc/multiselect/InvalidDoc';
import LoadingStateDoc from '@/doc/multiselect/LoadingStateDoc';
import StyleDoc from '@/doc/multiselect/StyleDoc';
import TemplateDoc from '@/doc/multiselect/TemplateDoc';
import VirtualScrollDoc from '@/doc/multiselect/VirtualScrollDoc';
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
                    id: 'form',
                    label: 'Form',
                    description: 'Compatibility with popular Vue form libraries.',
                    children: [
                        {
                            id: 'veevalidate',
                            label: 'VeeValidate',
                            component: VeeValidateDoc
                        }
                    ]
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
            ]
        };
    }
};
</script>
