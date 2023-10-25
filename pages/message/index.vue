<template>
    <DocComponent title="Vue Message Component" header="Message" description="Message component is used to display inline messages." :componentDocs="docs" :apiDocs="['Message']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/message/AccessibilityDoc.vue';
import BasicDoc from '@/doc/message/BasicDoc.vue';
import ClosabledDoc from '@/doc/message/ClosableDoc.vue';
import CustomIconDoc from '@/doc/message/CustomIconDoc.vue';
import DynamicDoc from '@/doc/message/DynamicDoc.vue';
import ImportDoc from '@/doc/message/ImportDoc.vue';
import SeverityDoc from '@/doc/message/SeverityDoc.vue';
import StickyDoc from '@/doc/message/StickyDoc.vue';
import PTComponent from '@/doc/message/pt/index.vue';
import ThemingDoc from '@/doc/message/theming/index.vue';

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
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
                },
                {
                    id: 'closable',
                    label: 'Closable',
                    component: ClosabledDoc
                },
                {
                    id: 'sticky',
                    label: 'Sticky',
                    component: StickyDoc
                },
                {
                    id: 'custom-icon',
                    label: 'Custom Icon',
                    component: CustomIconDoc
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
