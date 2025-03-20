<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>showButtonBar</i> is present, today and clear buttons are displayed at the footer.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" showButtonBar />
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
        <DatePicker v-model="date" showButtonBar />
    </div>
</template>

<script setup>
import DatePicker from '@/volt/datepicker';
import { ref } from 'vue';

const date = ref(null);
<\/script>
`);
</script>
