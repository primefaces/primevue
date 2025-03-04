<template>
    <DocSectionText v-bind="$attrs">
        <p>Button provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-wrap items-center justify-center gap-4">
        <Button label="Small" icon="pi pi-check" size="small" />
        <Button label="Normal" icon="pi pi-check" />
        <Button label="Large" icon="pi pi-check" size="large" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap items-center justify-center gap-4">
        <Button label="Small" icon="pi pi-check" size="small" />
        <Button label="Normal" icon="pi pi-check" />
        <Button label="Large" icon="pi pi-check" size="large" />
    </div>
</template>

<script setup>
import Button from '@/volt/button';
<\/script>
`);
</script>
