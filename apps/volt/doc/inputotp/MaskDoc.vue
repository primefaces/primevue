<template>
    <DocSectionText v-bind="$attrs">
        <p>Enable the <i>mask</i> option to hide the values in the input fields.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputOtp v-model="value" mask />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import InputOtp from '@/volt/InputOtp.vue';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value" mask />
    </div>
</template>

<script setup lang="ts">
import InputOtp from '@/volt/InputOtp.vue';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
