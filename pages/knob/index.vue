<template>
    <DocComponent title="Vue Knob Component" header="Knob" description="Knob is a form component to define number inputs with a dial." :componentDocs="docs" :apiDocs="['Knob']" />
</template>

<script>
import AccessibilityDoc from '@/doc/knob/AccessibilityDoc.vue';
import BasicDoc from '@/doc/knob/BasicDoc.vue';
import ColorDoc from '@/doc/knob/ColorDoc.vue';
import DisabledDoc from '@/doc/knob/DisabledDoc.vue';
import VeeValidateDoc from '@/doc/knob/form/VeeValidateDoc.vue';
import ImportDoc from '@/doc/knob/ImportDoc.vue';
import MinMaxDoc from '@/doc/knob/MinMaxDoc.vue';
import ReactiveDoc from '@/doc/knob/ReactiveDoc.vue';
import ReadOnlyDoc from '@/doc/knob/ReadOnlyDoc.vue';
import SizeDoc from '@/doc/knob/SizeDoc.vue';
import StepDoc from '@/doc/knob/StepDoc.vue';
import StrokeDoc from '@/doc/knob/StrokeDoc.vue';
import StyleDoc from '@/doc/knob/StyleDoc.vue';
import TemplateDoc from '@/doc/knob/TemplateDoc.vue';
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
                    id: 'form',
                    label: 'Form',
                    description: 'Compatibility with popular Vue form libraries.',
                    children: [
                        {
                            id: 'veevalidate',
                            label: 'VeeValidate',
                            component: VeeValidateDoc
                        }
                    ]
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
