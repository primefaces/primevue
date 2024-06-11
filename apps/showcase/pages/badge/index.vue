<template>
    <DocComponent title="Vue Badge Component" header="Badge" description="Badge is a small status indicator for another element." :componentDocs="docs" :apiDocs="['Badge', 'OverlayBadge']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/badge/AccessibilityDoc.vue';
import BasicDoc from '@/doc/badge/BasicDoc.vue';
import ButtonDoc from '@/doc/badge/ButtonDoc.vue';
import ImportDoc from '@/doc/badge/ImportDoc.vue';
import OverlayDoc from '@/doc/badge/OverlayDoc.vue';
import SeverityDoc from '@/doc/badge/SeverityDoc.vue';
import SizeDoc from '@/doc/badge/SizeDoc.vue';
import PTComponent from '@/doc/badge/pt/index.vue';
import ThemingDoc from '@/doc/badge/theming/index.vue';

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
                    id: 'size',
                    label: 'Size',
                    component: SizeDoc
                },
                {
                    id: 'overlay',
                    label: 'Overlay',
                    component: OverlayDoc
                },
                {
                    id: 'button',
                    label: 'Button',
                    component: ButtonDoc
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
