<template>
    <DocComponent title="Vue AutoComplete Component" header="AutoComplete" description="AutoComplete is an input component that provides real-time suggestions when being typed." :componentDocs="docs" :apiDocs="['AutoComplete']" />
</template>

<script>
import AccessibilityDoc from '@/doc/autocomplete/AccessibilityDoc';
import BasicDoc from '@/doc/autocomplete/BasicDoc';
import DisabledDoc from '@/doc/autocomplete/DisabledDoc';
import DropdownDoc from '@/doc/autocomplete/DropdownDoc';
import FloatLabelDoc from '@/doc/autocomplete/FloatLabelDoc';
import ForceSelectionDoc from '@/doc/autocomplete/ForceSelectionDoc';
import VeeValidateDoc from '@/doc/autocomplete/form/VeeValidateDoc.vue';
import GroupDoc from '@/doc/autocomplete/GroupDoc';
import ImportDoc from '@/doc/autocomplete/ImportDoc';
import InvalidDoc from '@/doc/autocomplete/InvalidDoc';
import MultipleDoc from '@/doc/autocomplete/MultipleDoc';
import ObjectsDoc from '@/doc/autocomplete/ObjectsDoc';
import StyleDoc from '@/doc/autocomplete/StyleDoc';
import TemplateDoc from '@/doc/autocomplete/TemplateDoc';
import VirtualScrollDoc from '@/doc/autocomplete/VirtualScrollDoc';

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
