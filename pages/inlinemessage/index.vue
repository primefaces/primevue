<template>
    <DocComponent
        title="Vue InlineMessage Component"
        header="InlineMessage"
        description="Inline Message component displays information related to another element such as invalid input."
        :componentDocs="docs"
        :apiDocs="['InlineMessage']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/inlinemessage/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inlinemessage/BasicDoc.vue';
import FormDoc from '@/doc/inlinemessage/FormDoc.vue';
import ImportDoc from '@/doc/inlinemessage/ImportDoc.vue';
import SeverityDoc from '@/doc/inlinemessage/SeverityDoc.vue';
import PTComponent from '@/doc/inlinemessage/pt/index.vue';
import ThemingDoc from '@/doc/inlinemessage/theming/index.vue';

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
                    id: 'severity',
                    label: 'Severity',
                    component: SeverityDoc
                },
                {
                    id: 'form',
                    label: 'Form',
                    component: FormDoc
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
