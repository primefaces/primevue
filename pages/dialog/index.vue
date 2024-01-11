<template>
    <DocComponent title="Vue Dialog Component" header="Dialog" description="Dialog is a container to display content in an overlay window." :componentDocs="docs" :apiDocs="['Dialog']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/dialog/AccessibilityDoc.vue';
import BasicDoc from '@/doc/dialog/BasicDoc.vue';
import HeadlessDoc from '@/doc/dialog/HeadlessDoc.vue';
import ImportDoc from '@/doc/dialog/ImportDoc.vue';
import LongContentDoc from '@/doc/dialog/LongContentDoc.vue';
import MaximizableDoc from '@/doc/dialog/MaximizableDoc.vue';
import PositionDoc from '@/doc/dialog/PositionDoc.vue';
import ResponsiveDoc from '@/doc/dialog/ResponsiveDoc.vue';
import TemplateDoc from '@/doc/dialog/TemplateDoc.vue';
import WithoutModalDoc from '@/doc/dialog/WithoutModalDoc.vue';
import PTComponent from '@/doc/dialog/pt/index.vue';
import ThemingDoc from '@/doc/dialog/theming/index.vue';

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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'position',
                    label: 'Position',
                    component: PositionDoc
                },
                {
                    id: 'maximizable',
                    label: 'Maximizable',
                    component: MaximizableDoc
                },
                {
                    id: 'longcontent',
                    label: 'Long Content',
                    component: LongContentDoc
                },
                {
                    id: 'modal',
                    label: 'Without Modal',
                    component: WithoutModalDoc
                },
                {
                    id: 'responsive',
                    label: 'Responsive',
                    component: ResponsiveDoc
                },
                {
                    id: 'headless',
                    label: 'Headless',
                    component: HeadlessDoc
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
