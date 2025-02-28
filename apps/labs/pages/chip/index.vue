<template>
    <DocComponent title="Vue Chip Component" header="Chip" description="Chip represents entities using icons, labels and images." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/chip/#api" ptLink="/chip/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/chip/AccessibilityDoc.vue';
import BasicDoc from '@/doc/chip/BasicDoc.vue';
import IconDoc from '@/doc/chip/IconDoc.vue';
import ImageDoc from '@/doc/chip/ImageDoc.vue';
import ImportDoc from '@/doc/chip/ImportDoc.vue';
import TemplateDoc from '@/doc/chip/TemplateDoc.vue';

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
                    id: 'icon',
                    label: 'Icon',
                    component: IconDoc
                },
                {
                    id: 'image',
                    label: 'Image',
                    component: ImageDoc
                },
                {
                    id: 'templatedoc',
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
                key: 'chip'
            }
        };
    }
};
</script>
