<template>
    <DocComponent title="Vue InputSwitch Component" header="InputSwitch" description="InputSwitch is used to select a boolean value." :componentDocs="docs" :apiDocs="['InputSwitch']" />
</template>

<script>
import AccessibilityDoc from '@/doc/inputswitch/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputswitch/BasicDoc.vue';
import DisabledDoc from '@/doc/inputswitch/DisabledDoc.vue';
import VeeValidateDoc from '@/doc/inputswitch/form/VeeValidateDoc.vue';
import ImportDoc from '@/doc/inputswitch/ImportDoc.vue';
import InvalidDoc from '@/doc/inputswitch/InvalidDoc.vue';
import PreselectionDoc from '@/doc/inputswitch/PreselectionDoc.vue';
import StyleDoc from '@/doc/inputswitch/StyleDoc.vue';

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
                    id: 'preselection',
                    label: 'Preselection',
                    component: PreselectionDoc
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
