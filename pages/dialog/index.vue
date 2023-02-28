<template>
    <DocComponent title="Vue Dialog Component" header="Dialog" description="Dialog is a container to display content in an overlay window" :componentDocs="docs" :apiDocs="['Dialog']" />
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
import StyleDoc from '@/doc/dialog/StyleDoc';
import WithoutModalDoc from '@/doc/dialog/WithoutModalDoc';

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
