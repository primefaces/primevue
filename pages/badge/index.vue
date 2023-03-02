<template>
    <DocComponent title="Vue Badge Component" header="Badge" description="Badge is a small status indicator for another element." :componentDocs="docs" :apiDocs="['Badge', 'BadgeDirective']" />
</template>

<script>
import AccessibilityDoc from '@/doc/badge/AccessibilityDoc.vue';
import BasicDoc from '@/doc/badge/BasicDoc.vue';
import ButtonDoc from '@/doc/badge/ButtonDoc.vue';
import ImportDoc from '@/doc/badge/ImportDoc.vue';
import PositionDoc from '@/doc/badge/PositionDoc.vue';
import SeverityDoc from '@/doc/badge/SeverityDoc.vue';
import SizeDoc from '@/doc/badge/SizeDoc.vue';
import StyleDoc from '@/doc/badge/StyleDoc.vue';

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
                    id: 'positioned',
                    label: 'Position',
                    component: PositionDoc
                },
                {
                    id: 'button',
                    label: 'Button',
                    component: ButtonDoc
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
