<template>
    <DocSectionText v-bind="$attrs">
        <p>In order to choose multiple dates, set <i>selectionMode</i> as <i>multiple</i>. In this mode, the value binding should be an array.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="dates" selectionMode="multiple" :manualInput="false" />
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
<DatePicker v-model="dates" selectionMode="multiple" :manualInput="false" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="dates" selectionMode="multiple" :manualInput="false" />
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
        <DatePicker v-model="dates" selectionMode="multiple" :manualInput="false" />
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
