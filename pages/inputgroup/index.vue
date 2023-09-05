<template>
    <DocComponent title="Vue InputGroup Component" header="InputGroup" description="Text, icon, buttons and other content can be grouped next to an input." :componentDocs="docs" />
</template>

<script>
import BasicDoc from '@/doc/inputgroup/BasicDoc';
import ButtonDoc from '@/doc/inputgroup/ButtonDoc';
import CheckboxDoc from '@/doc/inputgroup/CheckboxDoc';
import MultipleDoc from '@/doc/inputgroup/MultipleDoc';

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
                    label: 'Checkbox & RadioButton',
                    component: CheckboxDoc
                }
            ]
        };
    }
};
</script>
