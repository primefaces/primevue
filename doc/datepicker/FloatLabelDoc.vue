<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FloatLabel>
            <DatePicker v-model="date" inputId="birth_date" />
            <label for="birth_date">Birth Date</label>
        </FloatLabel>
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
<FloatLabel>
    <DatePicker v-model="date" inputId="birth_date" />
    <label for="birth_date">Birth Date</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <FloatLabel>
            <DatePicker v-model="date" inputId="birth_date" />
            <label for="birth_date">Birth Date</label>
        </FloatLabel>
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
        <FloatLabel>
            <DatePicker v-model="date" inputId="birth_date" />
            <label for="birth_date">Birth Date</label>
        </FloatLabel>
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
