<template>
    <DocSectionText v-bind="$attrs">
        <p>Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputOtp v-model="value">
            <template #default="{ attrs, events }">
                <input type="text" v-bind="attrs" v-on="events" class="w-12 text-3xl border-x-0 border-y-0 text-center bg-transparent border-b-2 border-surface-300 dark:border-surface-700 focus:border-primary outline-none" />
            </template>
        </InputOtp>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputOtp from '@/volt/inputotp';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value">
            <template #default="{ attrs, events }">
                <input type="text" v-bind="attrs" v-on="events" class="w-12 text-3xl border-x-0 border-y-0 text-center bg-transparent border-b-2 border-surface-300 dark:border-surface-700 focus:border-primary outline-none" />
            </template>
        </InputOtp>
    </div>
</template>

<script setup>
import InputOtp from '@/volt/inputotp';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
