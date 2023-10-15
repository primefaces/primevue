<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Calendar
            v-model="date"
            showIcon
            :pt="{
                input: { class: 'w-16rem' },
                dropdownButton: {
                    root: { class: 'bg-teal-500 border-teal-500' }
                }
            }"
        />
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
<Calendar
    v-model="date"
    showIcon
    :pt="{
        input: { class: 'w-16rem' },
        dropdownButton: {
            root: { class: 'bg-teal-500 border-teal-500' }
        }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Calendar
            v-model="date"
            showIcon
            :pt="{
                input: { class: 'w-16rem' },
                dropdownButton: {
                    root: { class: 'bg-teal-500 border-teal-500' }
                }
            }"
        />
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
        <Calendar
            v-model="date"
            showIcon
            :pt="{
                input: { class: 'w-16rem' },
                dropdownButton: {
                    root: { class: 'bg-teal-500 border-teal-500' }
                }
            }"
        />
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
