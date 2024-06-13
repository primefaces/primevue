<template>
    <DocComponent
        title="Vue AutoComplete Component"
        header="AutoComplete"
        description="AutoComplete is an input component that provides real-time suggestions when being typed."
        :componentDocs="docs"
        :apiDocs="['AutoComplete']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/autocomplete/AccessibilityDoc.vue';
import BasicDoc from '@/doc/autocomplete/BasicDoc.vue';
import DisabledDoc from '@/doc/autocomplete/DisabledDoc.vue';
import DropdownDoc from '@/doc/autocomplete/DropdownDoc.vue';
import FilledDoc from '@/doc/autocomplete/FilledDoc.vue';
import FloatLabelDoc from '@/doc/autocomplete/FloatLabelDoc.vue';
import ForceSelectionDoc from '@/doc/autocomplete/ForceSelectionDoc.vue';
import GroupDoc from '@/doc/autocomplete/GroupDoc.vue';
import ImportDoc from '@/doc/autocomplete/ImportDoc.vue';
import InvalidDoc from '@/doc/autocomplete/InvalidDoc.vue';
import MultipleDoc from '@/doc/autocomplete/MultipleDoc.vue';
import ObjectsDoc from '@/doc/autocomplete/ObjectsDoc.vue';
import TemplateDoc from '@/doc/autocomplete/TemplateDoc.vue';
import VirtualScrollDoc from '@/doc/autocomplete/VirtualScrollDoc.vue';
import PTComponent from '@/doc/autocomplete/pt/index.vue';
import ThemingDoc from '@/doc/autocomplete/theming/index.vue';

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
                    id: 'dropdown',
                    label: 'Dropdown',
                    component: DropdownDoc
                },
                {
                    id: 'objects',
                    label: 'Objects',
                    component: ObjectsDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'group',
                    label: 'Group',
                    component: GroupDoc
                },
                {
                    id: 'forceselection',
                    label: 'Force Selection',
                    component: ForceSelectionDoc
                },
                {
                    id: 'virtualscroll',
                    label: 'Virtual Scroll',
                    component: VirtualScrollDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
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
