<template>
    <DocComponent
        title="Vue Mask Component"
        header="InputMask"
        description="InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone."
        :componentDocs="docs"
        :apiDocs="['InputMask']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/inputmask/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputmask/BasicDoc.vue';
import DisabledDoc from '@/doc/inputmask/DisabledDoc.vue';
import FilledDoc from '@/doc/inputmask/FilledDoc.vue';
import FloatLabelDoc from '@/doc/inputmask/FloatLabelDoc.vue';
import ImportDoc from '@/doc/inputmask/ImportDoc.vue';
import InvalidDoc from '@/doc/inputmask/InvalidDoc.vue';
import MaskDoc from '@/doc/inputmask/MaskDoc.vue';
import OptionalDoc from '@/doc/inputmask/OptionalDoc.vue';
import SlotCharDoc from '@/doc/inputmask/SlotCharDoc.vue';
import PTComponent from '@/doc/inputmask/pt/index.vue';
import ThemingDoc from '@/doc/inputmask/theming/index.vue';

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
                    id: 'mask',
                    label: 'Mask',
                    component: MaskDoc
                },
                {
                    id: 'optional',
                    label: 'Optional',
                    component: OptionalDoc
                },
                {
                    id: 'slotchar',
                    label: 'SlotChar',
                    component: SlotCharDoc
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

<style></style>
