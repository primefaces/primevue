<template>
    <DocComponent
        title="Vue Select Component"
        header="Dropdown"
        description="Dropdown also known as Select, is used to choose an item from a collection of options."
        :componentDocs="docs"
        :apiDocs="['Dropdown']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/dropdown/AccessibilityDoc.vue';
import BasicDoc from '@/doc/dropdown/BasicDoc.vue';
import ClearIconDoc from '@/doc/dropdown/ClearIconDoc.vue';
import DisabledDoc from '@/doc/dropdown/DisabledDoc.vue';
import EditableDoc from '@/doc/dropdown/EditableDoc.vue';
import FilterDoc from '@/doc/dropdown/FilterDoc.vue';
import FloatLabelDoc from '@/doc/dropdown/FloatLabelDoc.vue';
import GroupDoc from '@/doc/dropdown/GroupDoc.vue';
import ImportDoc from '@/doc/dropdown/ImportDoc.vue';
import InvalidDoc from '@/doc/dropdown/InvalidDoc.vue';
import LazyVirtualScrollDoc from '@/doc/dropdown/LazyVirtualScrollDoc.vue';
import LoadingStateDoc from '@/doc/dropdown/LoadingStateDoc.vue';
import TemplateDoc from '@/doc/dropdown/TemplateDoc.vue';
import VirtualScrollDoc from '@/doc/dropdown/VirtualScrollDoc.vue';
import VeeValidateDoc from '@/doc/dropdown/form/VeeValidateDoc.vue';
import PTComponent from '@/doc/dropdown/pt/index.vue';
import ThemingDoc from '@/doc/dropdown/theming/index.vue';

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
