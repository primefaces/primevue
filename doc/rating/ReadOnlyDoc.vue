<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>readOnly</i> present, value cannot be edited.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Rating v-model="value" readonly />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 5,
            code: {
                basic: `
<Rating v-model="value" readonly />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" readonly />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" readonly />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`
            }
        };
    }
};
</script>
