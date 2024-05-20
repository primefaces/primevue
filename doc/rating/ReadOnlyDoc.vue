<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>readOnly</i> present, value cannot be edited.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Rating v-model="value" readonly :cancel="false" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 3,
            code: {
                basic: `
<Rating v-model="value" readonly :cancel="false" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" readonly :cancel="false" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 3
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" readonly :cancel="false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
<\/script>
`
            }
        };
    }
};
</script>
