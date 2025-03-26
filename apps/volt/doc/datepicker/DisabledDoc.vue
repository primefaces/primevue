<template>
    <DocSectionText v-bind="$attrs">
        <p>DatePicker is used a controlled input component with <i>v-model</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

const date = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" disabled />
    </div>
</template>

<script setup>
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

const date = ref(null);
<\/script>
`);
</script>
