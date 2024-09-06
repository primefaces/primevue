<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>integerOnly</i> is present, only integers can be accepted as input.</p>
    </DocSectionText>
    <DocSectionCardWithValue :value="value" value-class="w-28">
        <InputOtp v-model="value" integerOnly />
    </DocSectionCardWithValue>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<InputOtp v-model="value" integerOnly />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value" integerOnly />
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
        <InputOtp v-model="value" integerOnly />
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
