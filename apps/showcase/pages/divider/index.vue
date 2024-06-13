<template>
    <DocComponent title="Vue Divider Component" header="Divider" description="Divider is used to separate contents." :componentDocs="docs" :apiDocs="['Divider']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/divider/AccessibilityDoc.vue';
import BasicDoc from '@/doc/divider/BasicDoc.vue';
import ContentDoc from '@/doc/divider/ContentDoc.vue';
import ImportDoc from '@/doc/divider/ImportDoc.vue';
import LoginDoc from '@/doc/divider/LoginDoc.vue';
import TypeDoc from '@/doc/divider/TypeDoc.vue';
import VerticalDoc from '@/doc/divider/VerticalDoc.vue';
import PTComponent from '@/doc/divider/pt/index.vue';
import ThemingDoc from '@/doc/divider/theming/index.vue';

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
                    id: 'type',
                    label: 'Type',
                    component: TypeDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'content',
                    label: 'Content',
                    component: ContentDoc
                },
                {
                    id: 'login',
                    label: 'Login',
                    component: LoginDoc
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
