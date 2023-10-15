<template>
    <DocSectionText v-bind="$attrs">
        <p>Number of stars to display is defined with <i>stars</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Rating v-model="value" :stars="10" />
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
<Rating v-model="value" :stars="10" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" :stars="10" />
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
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" :stars="10" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
