<template>
    <DocSectionText v-bind="$attrs">
        <p>Chips is used as a controlled input with <i>v-model</i> property where it should be an array.</p>
    </DocSectionText>
    <div class="card p-fluid">
        <Chips v-model="value" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<Chips v-model="value" />
`,
                options: `
<template>
    <div class="card p-fluid">
        <Chips v-model="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card p-fluid">
        <Chips v-model="value" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>
`
            }
        };
    }
};
</script>
