<template>
    <DocComponent title="Vue Dialog Component" header="Dialog" description="Dialog is a container to display content in an overlay window" :componentDocs="docs" :apiDocs="['Dialog']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/dialog/AccessibilityDoc';
import BasicDoc from '@/doc/dialog/BasicDoc';
import FooterDoc from '@/doc/dialog/FooterDoc';
import ImportDoc from '@/doc/dialog/ImportDoc';
import LongContentDoc from '@/doc/dialog/LongContentDoc';
import MaximizableDoc from '@/doc/dialog/MaximizableDoc';
import PositionDoc from '@/doc/dialog/PositionDoc';
import ResponsiveDoc from '@/doc/dialog/ResponsiveDoc';
import WithoutModalDoc from '@/doc/dialog/WithoutModalDoc';
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
                    id: 'footer',
                    label: 'Footer',
                    component: FooterDoc
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
