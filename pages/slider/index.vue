<template>
    <DocComponent title="Vue Slider Component" header="Slider" description="Slider is a component to provide input with a drag handle." :componentDocs="docs" :apiDocs="['Slider']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/slider/AccessibilityDoc';
import BasicDoc from '@/doc/slider/BasicDoc';
import ImportDoc from '@/doc/slider/ImportDoc';
import InputDoc from '@/doc/slider/InputDoc';
import RangeDoc from '@/doc/slider/RangeDoc';
import StepDoc from '@/doc/slider/StepDoc';
import VerticalDoc from '@/doc/slider/VerticalDoc';
import PTComponent from '@/doc/slider/pt/index.vue';
import ThemingDoc from '@/doc/slider/theming/index.vue';

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
                    id: 'input',
                    label: 'Input',
                    component: InputDoc
                },
                {
                    id: 'step',
                    label: 'Step',
                    component: StepDoc
                },
                {
                    id: 'range',
                    label: 'Range',
                    component: RangeDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
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
