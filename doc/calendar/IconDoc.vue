<template>
    <DocSectionText v-bind="$attrs">
        <p>An additional icon is displayed next to the input field when <i>showIcon</i> is present.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" showIcon />
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
<Calendar v-model="date" showIcon />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" showIcon />
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
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" showIcon />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`
            }
        };
    }
};
</script>
