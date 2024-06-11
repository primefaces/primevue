<template>
    <DocComponent title="Vue Otp Input Component" header="InputOtp" description="Input Otp is used to enter one time passwords." :componentDocs="docs" :apiDocs="['InputOtp']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/inputotp/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputotp/BasicDoc.vue';
import ImportDoc from '@/doc/inputotp/ImportDoc.vue';
import IntegerOnlyDoc from '@/doc/inputotp/IntegerOnlyDoc.vue';
import MaskDoc from '@/doc/inputotp/MaskDoc.vue';
import SampleDoc from '@/doc/inputotp/SampleDoc.vue';
import TemplateDoc from '@/doc/inputotp/TemplateDoc.vue';
import PTComponent from '@/doc/inputotp/pt/index.vue';
import ThemingDoc from '@/doc/inputotp/theming/index.vue';

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
                    id: 'integeronly',
                    label: 'Integer Only',
                    component: IntegerOnlyDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'sample',
                    label: 'Sample',
                    component: SampleDoc
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
