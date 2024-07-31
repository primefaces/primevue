<template>
    <DocSectionText v-bind="$attrs">
        <p>DatePicker is displayed as a popup by default, add <i>inline</i> property to customize this behavior.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" inline showWeek />
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
<DatePicker v-model="date" inline showWeek />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" inline showWeek />
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
        <DatePicker v-model="date" inline showWeek />
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
