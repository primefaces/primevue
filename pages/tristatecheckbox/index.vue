<template>
    <DocComponent title="Vue TriStateCheckbox Component" header="TriStateCheckbox" description="TriStateCheckbox is used to select either true, false or null as the value." :componentDocs="docs" :apiDocs="['TriStateCheckbox']" />
</template>

<script>
import AccessibilityDoc from '@/doc/tristatecheckbox/AccessibilityDoc';
import BasicDoc from '@/doc/tristatecheckbox/BasicDoc';
import DisabledDoc from '@/doc/tristatecheckbox/DisabledDoc';
import VeeValidateDoc from '@/doc/tristatecheckbox/form/VeeValidateDoc.vue';
import ImportDoc from '@/doc/tristatecheckbox/ImportDoc';
import InvalidDoc from '@/doc/tristatecheckbox/InvalidDoc';
import StyleDoc from '@/doc/tristatecheckbox/StyleDoc';

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
