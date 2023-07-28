<template>
    <DocComponent title="Vue Chip Component" header="Chip" description="Chip represents entities using icons, labels and images." :componentDocs="docs" :apiDocs="['Chip']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import ThemingDoc from '@/doc/Chip/theming/index.vue';
import AccessibilityDoc from '@/doc/chip/AccessibilityDoc';
import BasicDoc from '@/doc/chip/BasicDoc';
import IconDoc from '@/doc/chip/IconDoc';
import ImageDoc from '@/doc/chip/ImageDoc';
import ImportDoc from '@/doc/chip/ImportDoc';
import TemplateDoc from '@/doc/chip/TemplateDoc';
import PTComponent from '@/doc/chip/pt/index.vue';

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
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
