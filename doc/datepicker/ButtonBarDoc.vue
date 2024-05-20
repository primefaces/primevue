<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>showButtonBar</i> is present, today and clear buttons are displayed at the footer.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" showButtonBar />
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
<DatePicker v-model="date" showButtonBar />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" showButtonBar />
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
        <DatePicker v-model="date" showButtonBar />
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
