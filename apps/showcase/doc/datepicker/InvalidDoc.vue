<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <DatePicker v-model="date1" :invalid="!date1" placeholder="Date" />
        <DatePicker v-model="date2" :invalid="!date2" variant="filled" placeholder="Date" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            date1: null,
            date2: null,
            code: {
                basic: `
<DatePicker v-model="date1" :invalid="!date1" placeholder="Date" />
<DatePicker v-model="date2" :invalid="!date2" variant="filled" placeholder="Date" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <DatePicker v-model="date1" :invalid="!date1" placeholder="Date" />
        <DatePicker v-model="date2" :invalid="!date2" variant="filled" placeholder="Date" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date1: null,
            date2: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <DatePicker v-model="date1" :invalid="!date1" placeholder="Date" />
        <DatePicker v-model="date2" :invalid="!date2" variant="filled" placeholder="Date" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date1 = ref(null);
const date2 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
