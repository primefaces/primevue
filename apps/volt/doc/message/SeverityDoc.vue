<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>severity</i> option specifies the type of the message.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4 justify-center">
        <Message severity="success">Success Message</Message>
        <Message severity="info">Info Message</Message>
        <Message severity="warn">Warn Message</Message>
        <Message severity="error">Error Message</Message>
        <Message severity="secondary">Secondary Message</Message>
        <Message severity="contrast">Contrast Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap gap-4 justify-center">
        <Message severity="success">Success Message</Message>
        <Message severity="info">Info Message</Message>
        <Message severity="warn">Warn Message</Message>
        <Message severity="error">Error Message</Message>
        <Message severity="secondary">Secondary Message</Message>
        <Message severity="contrast">Contrast Message</Message>
    </div>
</template>

<script setup lang="ts">
import Message from '@/volt/Message.vue';
<\/script>
`);
</script>
