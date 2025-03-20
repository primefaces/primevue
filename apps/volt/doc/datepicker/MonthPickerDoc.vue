<template>
    <DocSectionText v-bind="$attrs">
        <p>Month only picker is enabled by specifying <i>view</i> as <i>month</i> in addition to a suitable <i>dateFormat</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" view="month" dateFormat="mm/yy" />
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
        <DatePicker v-model="date" view="month" dateFormat="mm/yy" />
    </div>
</template>

<script setup>
import DatePicker from '@/volt/datepicker';
import { ref } from 'vue';

const date = ref(null);
<\/script>
`);
</script>
