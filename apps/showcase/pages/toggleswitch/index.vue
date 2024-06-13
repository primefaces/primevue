<template>
    <DocComponent title="Vue ToggleSwitch Component" header="ToggleSwitch" description="ToggleSwitch is used to select a boolean value." :componentDocs="docs" :apiDocs="['ToggleSwitch']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/toggleswitch/AccessibilityDoc.vue';
import BasicDoc from '@/doc/toggleswitch/BasicDoc.vue';
import DisabledDoc from '@/doc/toggleswitch/DisabledDoc.vue';
import ImportDoc from '@/doc/toggleswitch/ImportDoc.vue';
import InvalidDoc from '@/doc/toggleswitch/InvalidDoc.vue';
import PreselectionDoc from '@/doc/toggleswitch/PreselectionDoc.vue';
import PTComponent from '@/doc/toggleswitch/pt/index.vue';
import ThemingDoc from '@/doc/toggleswitch/theming/index.vue';

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
