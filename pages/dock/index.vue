<template>
    <DocComponent title="Vue Dock Component" header="Dock" description="Dock is a navigation component consisting of menuitems." :componentDocs="docs" :apiDocs="['Dock']" />
</template>

<script>
import AccessibilityDoc from '@/doc/dock/AccessibilityDoc';
import AdvancedDoc from '@/doc/dock/AdvancedDoc';
import BasicDoc from '@/doc/dock/BasicDoc';
import ImportDoc from '@/doc/dock/ImportDoc';
import StyleDoc from '@/doc/dock/StyleDoc';

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
                    id: 'advance',
                    label: 'Advanced',
                    component: AdvancedDoc
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
