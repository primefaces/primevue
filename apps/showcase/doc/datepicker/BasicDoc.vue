<template>
    <DocSectionText v-bind="$attrs">
        <p>DatePicker is used a controlled input component with <i>v-model</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" />
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
<DatePicker v-model="date" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" />
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
        <DatePicker v-model="date" />
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
