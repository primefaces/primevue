<template>
    <DocSectionText v-bind="$attrs">
        <p>Boundaries for the permitted dates that can be entered are defined with <i>minDate</i> and <i>maxDate</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let prevMonth = month === 0 ? 11 : month - 1;
let prevYear = prevMonth === 11 ? year - 1 : year;
let nextMonth = month === 11 ? 0 : month + 1;
let nextYear = nextMonth === 0 ? year + 1 : year;

const date = ref(null);
const minDate = ref(new Date());
const maxDate = ref(new Date());

minDate.value.setMonth(prevMonth);
minDate.value.setFullYear(prevYear);
maxDate.value.setMonth(nextMonth);
maxDate.value.setFullYear(nextYear);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
    </div>
</template>

<script setup lang="ts">
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let prevMonth = (month === 0) ? 11 : month -1;
let prevYear = (prevMonth === 11) ? year - 1 : year;
let nextMonth = (month === 11) ? 0 : month + 1;
let nextYear = (nextMonth === 0) ? year + 1 : year;

const date = ref(null);
const minDate = ref(new Date());
const maxDate = ref(new Date());

minDate.value.setMonth(prevMonth);
minDate.value.setFullYear(prevYear);
maxDate.value.setMonth(nextMonth);
maxDate.value.setFullYear(nextYear);
<\/script>
`);
</script>
