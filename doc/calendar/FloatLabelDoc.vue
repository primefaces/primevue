<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Calendar v-model="date" inputId="birth_date" />
            <label for="birth_date">Birth Date</label>
        </span>
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
<span class="p-float-label">
    <Calendar v-model="date" inputId="birth_date" />
    <label for="birth_date">Birth Date</label>
</span>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Calendar v-model="date" inputId="birth_date" />
            <label for="birth_date">Birth Date</label>
        </span>
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
        <span class="p-float-label">
            <Calendar v-model="date" inputId="birth_date" />
            <label for="birth_date">Birth Date</label>
        </span>
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
