<template>
    <DocSectionText v-bind="$attrs">
        <p>DatePicker is displayed as a popup by default, add <i>inline</i> property to customize this behavior.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" inline showWeek class="w-full sm:w-[30rem]" />
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
        <DatePicker v-model="date" inline showWeek class="w-full sm:w-[30rem]" />
    </div>
</template>

<script setup>
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

const date = ref(null);
<\/script>
`);
</script>
