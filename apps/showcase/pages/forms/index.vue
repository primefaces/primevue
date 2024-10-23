<template>
    <DocComponent title="Vue Form Component" header="Forms" description="Form provides validation functionality and manages form state." :componentDocs="docs" :apiDocs="['Form']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/forms/AccessibilityDoc.vue';
import BasicDoc from '@/doc/forms/BasicDoc.vue';
import DynamicDoc from '@/doc/forms/DynamicDoc.vue';
import ImportDoc from '@/doc/forms/ImportDoc.vue';
import RegisterDoc from '@/doc/forms/RegisterDoc.vue';
import ResolversDoc from '@/doc/forms/ResolversDoc.vue';
import StatesDoc from '@/doc/forms/StatesDoc.vue';
import SubmitDoc from '@/doc/forms/SubmitDoc.vue';
import ValidateOnDoc from '@/doc/forms/ValidateOnDoc.vue';
import PTComponent from '@/doc/forms/pt/index.vue';
import ThemingDoc from '@/doc/forms/theming/index.vue';

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
                    id: 'states',
                    label: 'States',
                    component: StatesDoc
                },
                {
                    id: 'resolvers',
                    label: 'Resolvers',
                    component: ResolversDoc
                },
                {
                    id: 'validateon',
                    label: 'ValidateOn',
                    component: ValidateOnDoc
                },
                {
                    id: 'register',
                    label: 'Register',
                    component: RegisterDoc
                },
                {
                    id: 'submit',
                    label: 'Submit',
                    component: SubmitDoc
                },
                {
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
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
