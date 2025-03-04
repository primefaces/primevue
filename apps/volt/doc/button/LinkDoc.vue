<template>
    <DocSectionText v-bind="$attrs">
        <p>The button element can be displayed as a link element, and similarly a regular link can be styled as a button.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <Button label="Link" variant="link" />
        <RouterLink
            to="/"
            class="bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast px-3 py-2 gap-2 rounded-md font-medium focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >Router</RouterLink
        >
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center gap-4">
        <Button label="Link" variant="link" />
        <RouterLink
            to="/"
            class="bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast px-3 py-2 gap-2 rounded-md font-medium focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >Router</RouterLink
        >
    </div>
</template>

<script setup>
import Button from '@/volt/button';
<\/script>
`);
</script>
