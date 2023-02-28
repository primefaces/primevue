<template>
    <DocComponent title="Vue TabMenu Component" header="TabMenu" description="TabMenu is a navigation/command component that displays items as tab headers." :componentDocs="docs" :apiDocs="['TabMenu', 'MenuItem']" />
</template>

<script>
import AccessibilityDoc from '../doc/tabmenu/AccessibilityDoc.vue';
import BasicDoc from '../doc/tabmenu/BasicDoc.vue';
import ControlledDoc from '../doc/tabmenu/ControlledDoc.vue';
import ImportDoc from '../doc/tabmenu/ImportDoc.vue';
import StyleDoc from '../doc/tabmenu/StyleDoc.vue';

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

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
    padding: 2rem 1rem;
}
</style>
