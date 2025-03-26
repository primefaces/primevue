<template>
    <DocSectionText v-bind="$attrs">
        <p>Configure the <i>variant</i> value as <i>simple</i> for messages without borders, backgrounds and paddings.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-8 justify-center">
        <Message severity="success" variant="simple">Success Message</Message>
        <Message severity="info" variant="simple">Info Message</Message>
        <Message severity="warn" variant="simple">Warn Message</Message>
        <Message severity="error" variant="simple">Error Message</Message>
        <Message severity="secondary" variant="simple">Secondary Message</Message>
        <Message severity="contrast" variant="simple">Contrast Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap gap-8 justify-center">
        <Message severity="success" variant="simple">Success Message</Message>
        <Message severity="info" variant="simple">Info Message</Message>
        <Message severity="warn" variant="simple">Warn Message</Message>
        <Message severity="error" variant="simple">Error Message</Message>
        <Message severity="secondary" variant="simple">Secondary Message</Message>
        <Message severity="contrast" variant="simple">Contrast Message</Message>
    </div>
</template>

<script setup>
import Message from '@/volt/Message.vue';
<\/script>
`);
</script>
