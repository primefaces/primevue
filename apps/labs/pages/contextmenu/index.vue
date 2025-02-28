<template>
    <DocComponent
        title="Vue ContextMenu Component"
        header="ContextMenu"
        description="ContextMenu displays an overlay menu to display actions related to an element."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/contextmenu/#api"
        ptLink="/contextmenu/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/contextmenu/AccessibilityDoc.vue';
import BasicDoc from '@/doc/contextmenu/BasicDoc.vue';
import CommandDoc from '@/doc/contextmenu/CommandDoc.vue';
import DataTableDoc from '@/doc/contextmenu/DataTableDoc.vue';
import DocumentDoc from '@/doc/contextmenu/DocumentDoc.vue';
import ImportDoc from '@/doc/contextmenu/ImportDoc.vue';
import RouterDoc from '@/doc/contextmenu/RouterDoc.vue';
import TemplateDoc from '@/doc/contextmenu/TemplateDoc.vue';

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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'command',
                    label: 'Command',
                    component: CommandDoc
                },
                {
                    id: 'router',
                    label: 'Router',
                    component: RouterDoc
                },
                {
                    id: 'datatable',
                    label: 'DataTable',
                    component: DataTableDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'contextmenu'
            }
        };
    }
};
</script>
