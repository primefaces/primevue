<template>
    <DocComponent title="Vue Knob Component" header="Knob" description="Knob is a form component to define number inputs with a dial." :componentDocs="docs" :apiDocs="['Knob']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/knob/AccessibilityDoc.vue';
import BasicDoc from '@/doc/knob/BasicDoc.vue';
import ColorDoc from '@/doc/knob/ColorDoc.vue';
import DisabledDoc from '@/doc/knob/DisabledDoc.vue';
import ImportDoc from '@/doc/knob/ImportDoc.vue';
import MinMaxDoc from '@/doc/knob/MinMaxDoc.vue';
import ReactiveDoc from '@/doc/knob/ReactiveDoc.vue';
import ReadOnlyDoc from '@/doc/knob/ReadOnlyDoc.vue';
import SizeDoc from '@/doc/knob/SizeDoc.vue';
import StepDoc from '@/doc/knob/StepDoc.vue';
import StrokeDoc from '@/doc/knob/StrokeDoc.vue';
import TemplateDoc from '@/doc/knob/TemplateDoc.vue';
import PTComponent from '@/doc/knob/pt/index.vue';
import ThemingDoc from '@/doc/knob/theming/index.vue';

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
                    id: 'minmax',
                    label: 'Min/Max',
                    component: MinMaxDoc
                },
                {
                    id: 'step',
                    label: 'Step',
                    component: StepDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'stroke',
                    label: 'Stroke',
                    component: StrokeDoc
                },
                {
                    id: 'size',
                    label: 'Size',
                    component: SizeDoc
                },
                {
                    id: 'color',
                    label: 'Color',
                    component: ColorDoc
                },
                {
                    id: 'reactive',
                    label: 'Reactive',
                    component: ReactiveDoc
                },
                {
                    id: 'readonly',
                    label: 'ReadOnly',
                    component: ReadOnlyDoc
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
