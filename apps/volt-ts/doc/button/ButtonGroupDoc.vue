<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple buttons are grouped when wrapped inside an element with <i>ButtonGroup</i> component.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-6">
        <ButtonGroup>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </ButtonGroup>

        <ButtonGroup>
            <Button label="Save" icon="pi pi-check" variant="outlined" />
            <Button label="Delete" icon="pi pi-trash" variant="outlined" />
            <Button label="Cancel" icon="pi pi-times" variant="outlined" />
        </ButtonGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import ButtonGroup from '@/volt/ButtonGroup';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-col items-center gap-6">
        <ButtonGroup>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </ButtonGroup>

        <ButtonGroup>
            <Button label="Save" icon="pi pi-check" variant="outlined" />
            <Button label="Delete" icon="pi pi-trash" variant="outlined" />
            <Button label="Cancel" icon="pi pi-times" variant="outlined" />
        </ButtonGroup>
    </div>
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import ButtonGroup from '@/volt/ButtonGroup';
<\/script>
`);
</script>
