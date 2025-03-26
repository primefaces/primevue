<template>
    <DocSectionText v-bind="$attrs">
        <p>A time picker is displayed when <i>showTime</i> is enabled where 12/24 hour format is configured with <i>hourFormat</i> property. In case, only time needs to be selected, add <i>timeOnly</i> to hide the date section.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="datepicker-12h" class="font-bold block mb-2"> 12h Format </label>
            <DatePicker id="datepicker-12h" v-model="datetime12h" showTime hourFormat="12" fluid />
        </div>
        <div class="flex-auto">
            <label for="datepicker-24h" class="font-bold block mb-2"> 24h Format </label>
            <DatePicker id="datepicker-24h" v-model="datetime24h" showTime hourFormat="24" fluid />
        </div>
        <div class="flex-auto">
            <label for="datepicker-timeonly" class="font-bold block mb-2"> Time Only </label>
            <DatePicker id="datepicker-timeonly" v-model="time" timeOnly fluid />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

const datetime12h = ref(null);
const datetime24h = ref(null);
const time = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" />
    </div>
</template>

<script setup>
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

const datetime12h = ref(null);
const datetime24h = ref(null);
const time = ref(null);
<\/script>
`);
</script>
