<template>
    <DocComponent title="Vue Fieldset Component" header="Fieldset" description="Fieldset is a grouping component with a content toggle feature." :componentDocs="docs" :apiDocs="['Fieldset']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/fieldset/AccessibilityDoc.vue';
import BasicDoc from '@/doc/fieldset/BasicDoc.vue';
import ImportDoc from '@/doc/fieldset/ImportDoc.vue';
import TemplateDoc from '@/doc/fieldset/TemplateDoc.vue';
import ToggleableDoc from '@/doc/fieldset/ToggleableDoc.vue';
import PTComponent from '@/doc/fieldset/pt/index.vue';
import ThemingDoc from '@/doc/fieldset/theming/index.vue';

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
                    id: 'toggleable',
                    label: 'Toggleable',
                    component: ToggleableDoc
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
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
