<template>
    <DocSectionText v-bind="$attrs">
        <p>Enable <i>closable</i> option to display an icon to remove a message.</p>
    </DocSectionText>
    <div class="card">
        <Message closable>Closable Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Message from '@/volt/message';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <Message closable>Closable Message</Message>
    </div>
</template>

<script setup>
import Message from '@/volt/message';
<\/script>
`);
</script>
