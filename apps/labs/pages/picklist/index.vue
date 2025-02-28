<template>
    <DocComponent title="Vue PickList Component" header="PickList" description="PickList is used to reorder items between different lists." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/picklist/#api" ptLink="/picklist/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/picklist/AccessibilityDoc.vue';
import BasicDoc from '@/doc/picklist/BasicDoc.vue';
import ImportDoc from '@/doc/picklist/ImportDoc.vue';
import TemplateDoc from '@/doc/picklist/TemplateDoc.vue';

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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'picklist'
            }
        };
    }
};
</script>
