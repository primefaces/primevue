<template>
    <DocComponent
        title="Vue TabMenu Component"
        header="TabMenu"
        description="TabMenu is a navigation/command component that displays items as tab headers."
        :componentDocs="docs"
        :apiDocs="['TabMenu', 'MenuItem']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import PTComponent from '@/doc/tabmenu/pt/index.vue';
import ThemingDoc from '@/doc/tabmenu/theming/index.vue';
import AccessibilityDoc from '../doc/tabmenu/AccessibilityDoc.vue';
import BasicDoc from '../doc/tabmenu/BasicDoc.vue';
import ControlledDoc from '../doc/tabmenu/ControlledDoc.vue';
import ImportDoc from '../doc/tabmenu/ImportDoc.vue';

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
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
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
