<template>
    <DocSectionText v-bind="$attrs">
        <p>InputOtp provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <InputOtp v-model="value1" size="small" />
        <InputOtp v-model="value2" />
        <InputOtp v-model="value3" size="large" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputOtp from '@/volt/inputotp';
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);

const code = ref(`
<template>
    <div class="card flex flex-col items-center gap-4">
        <InputOtp v-model="value1" size="small" />
        <InputOtp v-model="value2" />
        <InputOtp v-model="value3" size="large" />
    </div>
</template>

<script setup>
import InputOtp from '@/volt/inputotp';
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
`);
</script>
