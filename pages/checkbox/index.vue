<template>
    <DocComponent title="Vue Checkbox Component" header="Checkbox" description="Checkbox is an extension to standard checkbox element with theming." :componentDocs="docs" :apiDocs="['Checkbox']" />
</template>

<script>
import AccessibilityDoc from '@/doc/checkbox/AccessibilityDoc';
import BasicDoc from '@/doc/checkbox/BasicDoc';
import DisabledDoc from '@/doc/checkbox/DisabledDoc';
import DynamicDoc from '@/doc/checkbox/DynamicDoc';
import VeeValidateDoc from '@/doc/checkbox/form/VeeValidateDoc';
import GroupDoc from '@/doc/checkbox/GroupDoc';
import ImportDoc from '@/doc/checkbox/ImportDoc';
import InvalidDoc from '@/doc/checkbox/InvalidDoc';
import StyleDoc from '@/doc/checkbox/StyleDoc';

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
                    id: 'group',
                    label: 'Group',
                    component: GroupDoc
                },
                {
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
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
