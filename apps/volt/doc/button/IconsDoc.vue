<template>
    <DocSectionText v-bind="$attrs">
        <p>Icon of a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <div class="flex flex-wrap gap-4 justify-center">
            <Button icon="pi pi-home" aria-label="Save" />
            <Button label="Profile" icon="pi pi-user" />
            <Button label="Save" icon="pi pi-check" iconPos="right" />
        </div>
        <div class="flex flex-wrap gap-4 justify-center">
            <Button label="Search" icon="pi pi-search" iconPos="top" />
            <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-col items-center gap-4">
        <div class="flex flex-wrap gap-4 justify-center">
            <Button icon="pi pi-home" aria-label="Save" />
            <Button label="Profile" icon="pi pi-user" />
            <Button label="Save" icon="pi pi-check" iconPos="right" />
        </div>
        <div class="flex flex-wrap gap-4 justify-center">
            <Button label="Search" icon="pi pi-search" iconPos="top" />
            <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
        </div>
    </div>
</template>

<script setup>
import Button from '@/volt/button';
<\/script>
`);
</script>
