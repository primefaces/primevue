<template>
    <DocComponent title="Vue Input Icon" header="Input Icon" description="InputIcon displays an icon." :componentDocs="docs" :apiDocs="['InputIcon', 'IconField']" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/inputicon/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputicon/BasicDoc.vue';
import ImportDoc from '@/doc/inputicon/ImportDoc.vue';
import ThemingDoc from '@/doc/inputicon/theming/index.vue';

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
            themingDoc: ThemingDoc
        };
    }
};
</script>
