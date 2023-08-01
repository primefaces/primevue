<template>
    <DocComponent title="Vue BlockUI Component" header="BlockUI" description="BlockUI can either block other components or the whole page." :componentDocs="docs" :apiDocs="['BlockUI']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/blockui/AccessibilityDoc.vue';
import BasicDoc from '@/doc/blockui/BasicDoc.vue';
import DocumentDoc from '@/doc/blockui/DocumentDoc.vue';
import ImportDoc from '@/doc/blockui/ImportDoc.vue';
import PTComponent from '@/doc/blockui/pt/index.vue';
import ThemingDoc from '@/doc/blockui/theming/index.vue';

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

<style lang="scss" scoped>
.p-panel p {
    line-height: 1.5;
    margin: 0;
}

button {
    margin-right: 0.5rem;
}
</style>
