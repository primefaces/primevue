<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" variant="filled" />
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
        <DatePicker v-model="date" variant="filled" />
    </div>
</template>

<script setup>
import DatePicker from '@/volt/DatePicker.vue';
import { ref } from 'vue';

const date = ref(null);
<\/script>
`);
</script>
