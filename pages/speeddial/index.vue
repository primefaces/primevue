<template>
    <DocComponent
        title="Vue Speed Dial Component"
        header="Speed Dial"
        description="When pressed, a floating action button can display multiple primary actions that can be performed on a page."
        :componentDocs="docs"
        :apiDocs="['SpeedDial']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/speeddial/AccessibilityDoc.vue';
import CircleDoc from '@/doc/speeddial/CircleDoc.vue';
import ImportDoc from '@/doc/speeddial/ImportDoc.vue';
import LinearDoc from '@/doc/speeddial/LinearDoc.vue';
import MaskDoc from '@/doc/speeddial/MaskDoc.vue';
import QuarterCircleDoc from '@/doc/speeddial/QuarterCircleDoc.vue';
import SemiCircleDoc from '@/doc/speeddial/SemiCircleDoc.vue';
import TemplateDoc from '@/doc/speeddial/TemplateDoc.vue';
import TooltipDoc from '@/doc/speeddial/TooltipDoc.vue';
import PTComponent from '@/doc/speeddial/pt/index.vue';
import ThemingDoc from '@/doc/speeddial/theming/index.vue';

export default {
    data() {
        return {
            docs: [
                { id: 'import', label: 'Import', component: ImportDoc },
                { id: 'linear', label: 'Linear', component: LinearDoc },
                { id: 'circle', label: 'Circle', component: CircleDoc },
                { id: 'semi-circle', label: 'Semi Circle', component: SemiCircleDoc },
                { id: 'quarter-circle', label: 'Quarter Circle', component: QuarterCircleDoc },
                { id: 'tooltip', label: 'Tooltip', component: TooltipDoc },
                { id: 'mask', label: 'Mask', component: MaskDoc },
                { id: 'template', label: 'Template', component: TemplateDoc },
                { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
