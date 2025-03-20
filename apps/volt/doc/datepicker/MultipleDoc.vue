<template>
    <DocSectionText v-bind="$attrs">
        <p>In order to choose multiple dates, set <i>selectionMode</i> as <i>multiple</i>. In this mode, the value binding should be an array.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="dates" selectionMode="multiple" :manualInput="false" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import DatePicker from '@/volt/datepicker';
import { ref } from 'vue';

const dates = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="dates" selectionMode="multiple" :manualInput="false" />
    </div>
</template>

<script setup>
import DatePicker from '@/volt/datepicker';
import { ref } from 'vue';

const dates = ref(null);
<\/script>
`);
</script>
