<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-1">
            <InputText v-model="value" :invalid="!value" placeholder="Name" />
            <Message v-if="!value" size="small" severity="error" variant="simple">Name is required.</Message>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputText from '@/volt/InputText.vue';
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

const value = ref('');

const code = ref(`
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-1">
            <InputText v-model="value" :invalid="!value" placeholder="Name" />
            <Message v-if="!value" size="small" severity="error" variant="simple">Name is required.</Message>
        </div>
    </div>
</template>

<script setup>
import InputText from '@/volt/InputText.vue';
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
