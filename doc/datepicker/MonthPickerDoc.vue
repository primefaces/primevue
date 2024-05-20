<template>
    <DocSectionText v-bind="$attrs">
        <p>Month only picker is enabled by specifying <i>view</i> as <i>month</i> in addition to a suitable <i>dateFormat</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" view="month" dateFormat="mm/yy" />
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
<DatePicker v-model="date" view="month" dateFormat="mm/yy" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" view="month" dateFormat="mm/yy" />
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
        <DatePicker v-model="date" view="month" dateFormat="mm/yy" />
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
