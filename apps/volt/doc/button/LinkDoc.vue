<template>
    <DocSectionText v-bind="$attrs">
        <p>An example of a router link styled as a Volt button.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <RouterLink
            to="/"
            class="bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast px-3 py-2 gap-2 rounded-md font-medium focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >Router</RouterLink
        >
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <RouterLink
            to="/"
            class="bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast px-3 py-2 gap-2 rounded-md font-medium focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >Router</RouterLink
        >
    </div>
</template>

<script setup>
<\/script>
`);
</script>
