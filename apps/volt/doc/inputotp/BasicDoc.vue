<template>
    <DocSectionText v-bind="$attrs">
        <p>InputOtp is used with the <i>v-model</i> property for two-way value binding. The number of characters is defined with the <i>length</i> option, which is set to 4 by default.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputOtp v-model="value" />
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
        <InputOtp v-model="value" />
    </div>
</template>

<script setup>
import InputOtp from '@/volt/inputotp';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
