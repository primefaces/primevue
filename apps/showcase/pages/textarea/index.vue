<template>
    <DocComponent
        title="Vue Textarea Component"
        header="Textarea"
        description="Textarea adds styling and autoResize functionality to standard textarea element."
        :componentDocs="docs"
        :apiDocs="['Textarea']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/textarea/AccessibilityDoc.vue';
import AutoResizeDoc from '@/doc/textarea/AutoResizeDoc.vue';
import BasicDoc from '@/doc/textarea/BasicDoc.vue';
import DisabledDoc from '@/doc/textarea/DisabledDoc.vue';
import FilledDoc from '@/doc/textarea/FilledDoc.vue';
import FloatLabelDoc from '@/doc/textarea/FloatLabelDoc.vue';
import FluidDoc from '@/doc/textarea/FluidDoc.vue';
import FormsDoc from '@/doc/textarea/FormsDoc.vue';
import IftaLabelDoc from '@/doc/textarea/IftaLabelDoc.vue';
import ImportDoc from '@/doc/textarea/ImportDoc.vue';
import InvalidDoc from '@/doc/textarea/InvalidDoc.vue';
import PTComponent from '@/doc/textarea/pt/index.vue';
import SizesDoc from '@/doc/textarea/SizesDoc.vue';
import ThemingDoc from '@/doc/textarea/theming/index.vue';

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
                    id: 'forms',
                    label: 'Forms',
                    component: FormsDoc
                },
                {
                    id: 'auto-resize',
                    label: 'Auto Resize',
                    component: AutoResizeDoc
                },
                {
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'iftalabel',
                    label: 'Ifta Label',
                    component: IftaLabelDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                { id: 'fluid', label: 'Fluid', component: FluidDoc },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
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
