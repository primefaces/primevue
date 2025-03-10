<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple messages can be displayed using the standard v-for directive.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center justify-center gap-4">
        <div class="flex gap-2">
            <Button label="Show" @click="addMessages()" />
            <SecondaryButton label="Clear" @click="clearMessages()" />
        </div>
        <div class="flex flex-col gap-4">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import Message from '@/volt/message';
import { ref } from 'vue';

const messages = ref([]);
let count = ref(0);

const addMessages = () => {
    messages.value = [
        { severity: 'info', content: 'Dynamic Info Message', id: count.value++ },
        { severity: 'success', content: 'Dynamic Success Message', id: count.value++ },
        { severity: 'warn', content: 'Dynamic Warn Message', id: count.value++ }
    ];
};

const clearMessages = () => {
    messages.value = [];
};

const code = ref(`
<template>
    <div class="card flex flex-col items-center justify-center gap-4">
        <div class="flex gap-2">
            <Button label="Show" @click="addMessages()" />
            <SecondaryButton label="Clear" @click="clearMessages()" />
        </div>
        <div class="flex flex-col gap-4">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </div>
    </div>
</template>

<script setup>
import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import Message from '@/volt/message';
import { ref } from 'vue';

const messages = ref([]);
let count = ref(0);

const addMessages = () => {
    messages.value = [
        { severity: 'info', content: 'Dynamic Info Message', id: count.value++ },
        { severity: 'success', content: 'Dynamic Success Message', id: count.value++ },
        { severity: 'warn', content: 'Dynamic Warn Message', id: count.value++ }
    ];
};

const clearMessages = () => {
    messages.value = [];
};
<\/script>
`);
</script>
