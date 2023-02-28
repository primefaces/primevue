<template>
    <DocComponent title="Vue ContextMenu Component" header="ContextMenu" description="ContextMenu displays an overlay menu on right click of its target." :componentDocs="docs" :apiDocs="['ContextMenu', 'MenuItem']" />
</template>

<script>
import AccessibilityDoc from '@/doc/contextmenu/AccessibilityDoc';
import BasicDoc from '@/doc/contextmenu/BasicDoc';
import DocumentDoc from '@/doc/contextmenu/DocumentDoc';
import ImportDoc from '@/doc/contextmenu/ImportDoc';
import StyleDoc from '@/doc/contextmenu/StyleDoc';

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
                    id: 'document',
                    label: 'Document',
                    component: DocumentDoc
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
