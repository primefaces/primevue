<template>
    <DocSectionText v-bind="$attrs">
        <p>Number of months to display is configured with the <i>numberOfMonths</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" :numberOfMonths="2" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            date: null,
            code: {
                basic: `
<DatePicker v-model="date" :numberOfMonths="2" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" :numberOfMonths="2" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" :numberOfMonths="2" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
`
            }
        };
    }
};
</script>
