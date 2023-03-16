<template>
    <DocComponent title="Vue Select Component" header="Dropdown" description="Dropdown also known as Select, is used to choose an item from a collection of options." :componentDocs="docs" :apiDocs="['Dropdown']" />
</template>

<script>
import AccessibilityDoc from '@/doc/dropdown/AccessibilityDoc';
import BasicDoc from '@/doc/dropdown/BasicDoc';
import ClearIconDoc from '@/doc/dropdown/ClearIconDoc';
import DisabledDoc from '@/doc/dropdown/DisabledDoc';
import EditableDoc from '@/doc/dropdown/EditableDoc';
import FilterDoc from '@/doc/dropdown/FilterDoc';
import FloatLabelDoc from '@/doc/dropdown/FloatLabelDoc';
import VeeValidateDoc from '@/doc/dropdown/form/VeeValidateDoc';
import GroupDoc from '@/doc/dropdown/GroupDoc';
import ImportDoc from '@/doc/dropdown/ImportDoc';
import InvalidDoc from '@/doc/dropdown/InvalidDoc';
import LazyVirtualScrollDoc from '@/doc/dropdown/LazyVirtualScrollDoc';
import LoadingStateDoc from '@/doc/dropdown/LoadingStateDoc';
import StyleDoc from '@/doc/dropdown/StyleDoc';
import TemplateDoc from '@/doc/dropdown/TemplateDoc';
import VirtualScrollDoc from '@/doc/dropdown/VirtualScrollDoc';

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
