<template>
    <DocComponent title="Vue Listbox Component" header="Listbox" description="Listbox is used to select one or more values from a list of items." :componentDocs="docs" :apiDocs="['Listbox']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/listbox/AccessibilityDoc';
import BasicDoc from '@/doc/listbox/BasicDoc';
import DisabledDoc from '@/doc/listbox/DisabledDoc';
import FilterDoc from '@/doc/listbox/FilterDoc';
import GroupDoc from '@/doc/listbox/GroupDoc';
import ImportDoc from '@/doc/listbox/ImportDoc';
import InvalidDoc from '@/doc/listbox/InvalidDoc';
import MultipleDoc from '@/doc/listbox/MultipleDoc';
import TemplateDoc from '@/doc/listbox/TemplateDoc';
import VirtualScrollDoc from '@/doc/listbox/VirtualScrollDoc';
import VeeValidateDoc from '@/doc/listbox/form/VeeValidateDoc';
import PTComponent from '@/doc/listbox/pt/index.vue';
import ThemingDoc from '@/doc/listbox/theming/index.vue';

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
