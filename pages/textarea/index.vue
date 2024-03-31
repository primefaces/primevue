<template>
    <DocComponent
        title="Vue Textarea Component"
        header="Textarea"
        description="Textarea adds styling, key filtering and autoResize functionality to standard textarea element."
        :componentDocs="docs"
        :apiDocs="['Textarea']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/textarea/AccessibilityDoc.vue';
import AutoResizeDoc from '@/doc/textarea/AutoResizeDoc.vue';
import BasicDoc from '@/doc/textarea/BasicDoc.vue';
import DisabledDoc from '@/doc/textarea/DisabledDoc.vue';
import FilledDoc from '@/doc/textarea/FilledDoc.vue';
import FloatLabelDoc from '@/doc/textarea/FloatLabelDoc.vue';
import ImportDoc from '@/doc/textarea/ImportDoc.vue';
import InvalidDoc from '@/doc/textarea/InvalidDoc.vue';
import PTComponent from '@/doc/textarea/pt/index.vue';
import ThemingDoc from '@/doc/textarea/theming/index.vue';

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
                    id: 'auto-resize',
                    label: 'Auto Resize',
                    component: AutoResizeDoc
                },
                {
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
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
