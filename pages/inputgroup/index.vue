<template>
    <DocComponent
        title="Vue InputGroup Component"
        header="InputGroup"
        description="Text, icon, buttons and other content can be grouped next to an input."
        :componentDocs="docs"
        :apiDocs="['InputGroup', 'InputGroupAddon']"
        :ptTabComponent="ptComponent"
    />
</template>

<script>
import BasicDoc from '@/doc/inputgroup/BasicDoc.vue';
import ButtonDoc from '@/doc/inputgroup/ButtonDoc.vue';
import CheckboxDoc from '@/doc/inputgroup/CheckboxDoc.vue';
import MultipleDoc from '@/doc/inputgroup/MultipleDoc.vue';
import PTComponent from '@/doc/inputgroup/pt/index.vue';
import AccessibilityDoc from '@/doc/inputgroup/AccessibilityDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'button',
                    label: 'Button',
                    component: ButtonDoc
                },
                {
                    id: 'checkbox',
                    label: 'Check & Radio',
                    component: CheckboxDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent
        };
    }
};
</script>
