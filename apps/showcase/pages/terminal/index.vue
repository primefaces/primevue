<template>
    <DocComponent title="Vue Terminal Component" header="Terminal" description="Terminal is a text based user interface." :componentDocs="docs" :apiDocs="['Terminal', 'TerminalService']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/terminal/AccessibilityDoc.vue';
import BasicDoc from '@/doc/terminal/BasicDoc.vue';
import ImportDoc from '@/doc/terminal/ImportDoc.vue';
import PTComponent from '@/doc/terminal/pt/index.vue';
import ThemingDoc from '@/doc/terminal/theming/index.vue';

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
