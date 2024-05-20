<template>
    <DocSectionText v-bind="$attrs">
        <p>Two-way value binding is defined using v-model.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Rating v-model="value" />
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
<Rating v-model="value" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" />
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
    <div class="card flex justify-center">
        <Rating v-model="value" />
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
