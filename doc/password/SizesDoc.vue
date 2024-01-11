<template>
    <DocSectionText v-bind="$attrs">
        <p>InputText provides small and large sizes as alternatives to the standard.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center gap-3">
        <Password v-model="value" :feedback="false" size="small" />
        <Password v-model="value" :feedback="false" />
        <Password v-model="value" :feedback="false" size="large" />
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
        <Password v-model="value" :feedback="false" size="small" />
        <Password v-model="value" :feedback="false" />
        <Password v-model="value" :feedback="false" size="large" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Password v-model="value" :feedback="false" size="small" />
        <Password v-model="value" :feedback="false" />
        <Password v-model="value" :feedback="false" size="large" />
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
        <Password v-model="value" :feedback="false" size="small" />
        <Password v-model="value" :feedback="false" />
        <Password v-model="value" :feedback="false" size="large" />
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
