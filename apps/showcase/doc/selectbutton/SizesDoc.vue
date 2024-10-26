<template>
    <DocSectionText v-bind="$attrs">
        <p>SelectButton provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <SelectButton v-model="value1" :options="options" size="small" />
        <SelectButton v-model="value2" :options="options" />
        <SelectButton v-model="value3" :options="options" size="large" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: 'Beginner',
            value3: 'Expert',
            options: ['Beginner', 'Expert'],
            code: {
                basic: `
<SelectButton v-model="value1" :options="options" size="small" />
<SelectButton v-model="value2" :options="options" />
<SelectButton v-model="value3" :options="options" size="large" />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <SelectButton v-model="value1" :options="options" size="small" />
        <SelectButton v-model="value2" :options="options" />
        <SelectButton v-model="value3" :options="options" size="large" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: 'Beginner',
            value3: 'Expert',
            options: ['Beginner', 'Expert'],
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <SelectButton v-model="value1" :options="options" size="small" />
        <SelectButton v-model="value2" :options="options" />
        <SelectButton v-model="value3" :options="options" size="large" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref('Beginner');
const value3 = ref('Expert');
const options = ref(['Beginner', 'Expert']);
<\/script>
`
            }
        };
    }
};
</script>
