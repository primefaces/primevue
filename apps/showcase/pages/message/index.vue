<template>
    <DocComponent title="Vue Message Component" header="Message" description="Message component is used to display inline messages." :componentDocs="docs" :apiDocs="['Message']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/message/AccessibilityDoc.vue';
import BasicDoc from '@/doc/message/BasicDoc.vue';
import ClosabledDoc from '@/doc/message/ClosableDoc.vue';
import DynamicDoc from '@/doc/message/DynamicDoc.vue';
import FormsDoc from '@/doc/message/FormsDoc.vue';
import IconDoc from '@/doc/message/IconDoc.vue';
import ImportDoc from '@/doc/message/ImportDoc.vue';
import LifeDoc from '@/doc/message/LifeDoc.vue';
import OutlinedDoc from '@/doc/message/OutlinedDoc.vue';
import SimpleDoc from '@/doc/message/SimpleDoc.vue';
import PTComponent from '@/doc/message/pt/index.vue';
import SeverityDoc from '@/doc/message/SeverityDoc.vue';
import SizesDoc from '@/doc/message/SizesDoc.vue';
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
                    id: 'icon',
                    label: 'Icon',
                    component: IconDoc
                },
                {
                    id: 'outlined',
                    label: 'Outlined',
                    component: OutlinedDoc
                },
                {
                    id: 'simple',
                    label: 'Simple',
                    component: SimpleDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'forms',
                    label: 'Forms',
                    component: FormsDoc
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
                    id: 'life',
                    label: 'Life',
                    component: LifeDoc
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
