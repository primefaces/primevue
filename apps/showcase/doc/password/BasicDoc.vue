<template>
    <DocSectionText v-bind="$attrs">
        <p>Two-way value binding is defined using <i>v-model</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value" :feedback="false" />
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
<Password v-model="value" :feedback="false" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Password v-model="value" :feedback="false" />
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
        <Password v-model="value" :feedback="false" />
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
