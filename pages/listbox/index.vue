<template>
    <DocComponent title="Vue Listbox Component" header="Listbox" description="Listbox is used to select one or more values from a list of items." :componentDocs="docs" :apiDocs="['Listbox']" />
</template>

<script>
import AccessibilityDoc from '@/doc/listbox/AccessibilityDoc';
import BasicDoc from '@/doc/listbox/BasicDoc';
import DisabledDoc from '@/doc/listbox/DisabledDoc';
import FilterDoc from '@/doc/listbox/FilterDoc';
import VeeValidateDoc from '@/doc/listbox/form/VeeValidateDoc';
import GroupDoc from '@/doc/listbox/GroupDoc';
import ImportDoc from '@/doc/listbox/ImportDoc';
import InvalidDoc from '@/doc/listbox/InvalidDoc';
import MultipleDoc from '@/doc/listbox/MultipleDoc';
import StyleDoc from '@/doc/listbox/StyleDoc';
import TemplateDoc from '@/doc/listbox/TemplateDoc';
import VirtualScrollDoc from '@/doc/listbox/VirtualScrollDoc';
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
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'group',
                    label: 'Group',
                    component: GroupDoc
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
                    id: 'virtualscroll',
                    label: 'Virtual Scroll',
                    component: VirtualScrollDoc
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
