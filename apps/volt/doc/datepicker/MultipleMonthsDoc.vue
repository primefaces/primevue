<template>
    <DocSectionText v-bind="$attrs">
        <p>Number of months to display is configured with the <i>numberOfMonths</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" :numberOfMonths="2" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

const date = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" :numberOfMonths="2" />
    </div>
</template>

<script setup lang="ts">
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

const date = ref(null);
<\/script>
`);
</script>
