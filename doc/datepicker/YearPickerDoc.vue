<template>
    <DocSectionText v-bind="$attrs">
        <p>Specifying <i>view</i> as <i>year</i> in addition to a suitable <i>dateFormat</i> enables the year picker.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" view="year" dateFormat="yy" />
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
<DatePicker v-model="date" view="year" dateFormat="yy" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" view="year" dateFormat="yy" />
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
        <DatePicker v-model="date" view="year" dateFormat="yy" />
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
