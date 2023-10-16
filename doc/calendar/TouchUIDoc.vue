<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>touchUI</i> is enabled, overlay is displayed as optimized for touch devices.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" touchUI />
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
<Calendar v-model="date" touchUI />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" touchUI />
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
        <Calendar v-model="date" touchUI />
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
