<template>
    <DocSectionText v-bind="$attrs">
        <p>Message provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <Message size="small" icon="pi pi-send">Small Message</Message>
        <Message icon="pi pi-user">Normal Message</Message>
        <Message size="large" icon="pi pi-check">Large Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Message from '@/volt/message';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-col items-center gap-4">
        <Message size="small" icon="pi pi-send">Small Message</Message>
        <Message icon="pi pi-user">Normal Message</Message>
        <Message size="large" icon="pi pi-check">Large Message</Message>
    </div>
</template>

<script setup>
import Message from '@/volt/message';
<\/script>
`);
</script>
