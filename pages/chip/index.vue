<template>
    <DocComponent title="Vue Chip Component" header="Chip" description="Chip represents entities using icons, labels and images." :componentDocs="docs" :apiDocs="['Chip']" />
</template>

<script>
import AccessibilityDoc from '@/doc/chip/AccessibilityDoc';
import BasicDoc from '@/doc/chip/BasicDoc';
import IconDoc from '@/doc/chip/IconDoc';
import ImageDoc from '@/doc/chip/ImageDoc';
import ImportDoc from '@/doc/chip/ImportDoc';
import StyleDoc from '@/doc/chip/StyleDoc';
import TemplateDoc from '@/doc/chip/TemplateDoc';

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
