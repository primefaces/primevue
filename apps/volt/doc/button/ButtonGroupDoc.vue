<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple buttons are grouped when wrapped inside an element with <i>ButtonGroup</i> component.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ButtonGroup>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </ButtonGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import ButtonGroup from '@/volt/buttongroup';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <ButtonGroup>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </ButtonGroup>
    </div>
</template>

<script setup>
import Button from '@/volt/button';
import ButtonGroup from '@/volt/buttongroup';
<\/script>
`);
</script>
