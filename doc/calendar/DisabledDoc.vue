<template>
    <DocSectionText v-bind="$attrs">
        <p>Calendar is used a controlled input component with <i>v-model</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" disabled />
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
<Calendar v-model="date" disabled />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" disabled />
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
    <div class="card flex justify-content-center">
        <Calendar v-model="date" disabled />
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
