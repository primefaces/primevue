<template>
    <DocComponent
        title="Vue TriStateCheckbox Component"
        header="TriStateCheckbox"
        description="TriStateCheckbox is used to select either true, false or null as the value."
        :componentDocs="docs"
        :apiDocs="['TriStateCheckbox']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/tristatecheckbox/AccessibilityDoc.vue';
import BasicDoc from '@/doc/tristatecheckbox/BasicDoc.vue';
import DisabledDoc from '@/doc/tristatecheckbox/DisabledDoc.vue';
import ImportDoc from '@/doc/tristatecheckbox/ImportDoc.vue';
import InvalidDoc from '@/doc/tristatecheckbox/InvalidDoc.vue';
import VeeValidateDoc from '@/doc/tristatecheckbox/form/VeeValidateDoc.vue';
import PTComponent from '@/doc/tristatecheckbox/pt/index.vue';
import ThemingDoc from '@/doc/tristatecheckbox/theming/index.vue';

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
