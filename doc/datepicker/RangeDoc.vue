<template>
    <DocSectionText v-bind="$attrs">
        <p>A range of dates can be selected by defining <i>selectionMode</i> as <i>range</i>, in this case the bound value would be an array with two values where first date is the start of the range and second date is the end.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            dates: null,
            code: {
                basic: `
<DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            dates: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const dates = ref();
<\/script>
`
            }
        };
    }
};
</script>
