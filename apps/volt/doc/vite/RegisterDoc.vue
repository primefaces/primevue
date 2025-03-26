<template>
    <DocSectionText v-bind="$attrs">
        <p>Register the Volt components locally or globally. Visit the <a href="https://vuejs.org/guide/components/registration">component registration</a> to learn more.</p>
    </DocSectionText>
    <DocSectionCode :code="code" />
    <div class="card flex justify-center">
        <Button label="Hello World" />
    </div>
</template>

<script setup>
import Button from '@/volt/Button.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div>
        <h1>Your Application</h1>
        <Button label="Hello World" />
    </div>
</template>

<script setup>
import Button from '@/volt/Button.vue'; // local registration
<\/script>
`);
</script>
