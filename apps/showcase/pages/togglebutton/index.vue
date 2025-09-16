<template>
    <DocComponent
        title="Vue ToggleButton Component"
        header="ToggleButton"
        description="ToggleButton is used to select a boolean value using a button."
        :componentDocs="docs"
        :apiDocs="['ToggleButton']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/togglebutton/AccessibilityDoc.vue';
import BasicDoc from '@/doc/togglebutton/BasicDoc.vue';
import CustomizedDoc from '@/doc/togglebutton/CustomizedDoc.vue';
import DisabledDoc from '@/doc/togglebutton/DisabledDoc.vue';
import FluidDoc from '@/doc/togglebutton/FluidDoc.vue';
import FormsDoc from '@/doc/togglebutton/FormsDoc.vue';
import ImportDoc from '@/doc/togglebutton/ImportDoc.vue';
import InvalidDoc from '@/doc/togglebutton/InvalidDoc.vue';
import PTComponent from '@/doc/togglebutton/pt/index.vue';
import SizesDoc from '@/doc/togglebutton/SizesDoc.vue';
import ThemingDoc from '@/doc/togglebutton/theming/index.vue';

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
                    id: 'forms',
                    label: 'Forms',
                    component: FormsDoc
                },
                {
                    id: 'customized',
                    label: 'Customized',
                    component: CustomizedDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'fluid',
                    label: 'Fluid',
                    component: FluidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
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
