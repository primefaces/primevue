<template>
    <DocSectionText v-bind="$attrs">
        <p>Messages can disappear automatically by defined the <i>life</i> in milliseconds.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center justify-center">
        <Button label="Show" @click="showMessage" :disabled="visible" class="mb-4" />
        <Message v-if="visible" severity="success" :life="3000">Auto Disappear Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/Button.vue';
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

let visible = ref(false);

const showMessage = () => {
    visible.value = true;

    setTimeout(() => {
        visible.value = false;
    }, 3500);
};

const code = ref(`
<template>
    <div class="card flex flex-col items-center justify-center">
        <Button label="Show" @click="showMessage" :disabled="visible" class="mb-4" />
        <Message v-if="visible" severity="success" :life="3000">Auto Disappear Message</Message>
    </div>
</template>

<script setup>
import Button from '@/volt/Button.vue';
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

let visible = ref(false);

const showMessage() {
    visible.value = true;

    setTimeout(() => {
        visible.value = false;
    }, 3500);
}
<\/script>
`);
</script>
