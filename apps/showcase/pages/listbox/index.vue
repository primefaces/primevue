<template>
    <DocComponent title="Vue Listbox Component" header="Listbox" description="Listbox is used to select one or more values from a list of items." :componentDocs="docs" :apiDocs="['Listbox']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/listbox/AccessibilityDoc.vue';
import BasicDoc from '@/doc/listbox/BasicDoc.vue';
import CheckmarkDoc from '@/doc/listbox/CheckmarkDoc.vue';
import DisabledDoc from '@/doc/listbox/DisabledDoc.vue';
import FilterDoc from '@/doc/listbox/FilterDoc.vue';
import GroupDoc from '@/doc/listbox/GroupDoc.vue';
import ImportDoc from '@/doc/listbox/ImportDoc.vue';
import InvalidDoc from '@/doc/listbox/InvalidDoc.vue';
import MultipleDoc from '@/doc/listbox/MultipleDoc.vue';
import TemplateDoc from '@/doc/listbox/TemplateDoc.vue';
import VirtualScrollDoc from '@/doc/listbox/VirtualScrollDoc.vue';
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
                    id: 'checkmark',
                    label: 'Checkmark',
                    component: CheckmarkDoc
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
