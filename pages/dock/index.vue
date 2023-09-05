<template>
    <DocComponent title="Vue Dock Component" header="Dock" description="Dock is a navigation component consisting of menuitems." :componentDocs="docs" :apiDocs="['Dock']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/dock/AccessibilityDoc';
import AdvancedDoc from '@/doc/dock/AdvancedDoc';
import BasicDoc from '@/doc/dock/BasicDoc';
import ImportDoc from '@/doc/dock/ImportDoc';
import RouterDoc from '@/doc/dock/RouterDoc';
import PTComponent from '@/doc/dock/pt/index.vue';
import ThemingDoc from '@/doc/dock/theming/index.vue';

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
                    id: 'router',
                    label: 'Router',
                    component: RouterDoc
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
