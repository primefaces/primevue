<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons are displayed as textual elements.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="text" />
        <Button label="Secondary" severity="secondary" variant="text" />
        <Button label="Success" severity="success" variant="text" />
        <Button label="Info" severity="info" variant="text" />
        <Button label="Warn" severity="warn" variant="text" />
        <Button label="Help" severity="help" variant="text" />
        <Button label="Danger" severity="danger" variant="text" />
        <Button label="Contrast" severity="contrast" variant="text" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="text" />
        <Button label="Secondary" severity="secondary" variant="text" />
        <Button label="Success" severity="success" variant="text" />
        <Button label="Info" severity="info" variant="text" />
        <Button label="Warn" severity="warn" variant="text" />
        <Button label="Help" severity="help" variant="text" />
        <Button label="Danger" severity="danger" variant="text" />
        <Button label="Contrast" severity="contrast" variant="text" />
    </div>
</template>

<script setup>
import Button from '@/volt/button';
<\/script>
`);
</script>
