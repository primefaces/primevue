<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>showClear</i> is enabled, a clear icon is added to reset the Password.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value" :feedback="false" showClear inputClass="w-56" />
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
<Password v-model="value" :feedback="false" showClear inputClass="w-56" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Password v-model="value" :feedback="false" showClear inputClass="w-56" />
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
        <Password v-model="value" :feedback="false" showClear inputClass="w-56" />
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
