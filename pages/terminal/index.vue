<template>
    <DocComponent title="Vue Terminal Component" header="Terminal" description="Terminal is a text based user interface." :componentDocs="docs" :apiDocs="['Terminal', 'TerminalService']" />
</template>

<script>
import AccessibilityDoc from '@/doc/terminal/AccessibilityDoc';
import BasicDoc from '@/doc/terminal/BasicDoc';
import ImportDoc from '@/doc/terminal/ImportDoc';
import StyleDoc from '@/doc/terminal/StyleDoc';

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
