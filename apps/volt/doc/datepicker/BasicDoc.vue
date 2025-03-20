<template>
    <DocSectionText v-bind="$attrs">
        <p>DatePicker is used with the <i>v-model</i> property for two-way value binding.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import DatePicker from '@/volt/datepicker';
import { ref } from 'vue';

const date = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" />
    </div>
</template>

<script setup>
import DatePicker from '@/volt/datepicker';
import { ref } from 'vue';

const date = ref(null);
<\/script>
`);
</script>
