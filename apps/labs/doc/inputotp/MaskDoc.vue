<template>
    <DocSectionText v-bind="$attrs">
        <p>Enable the <i>mask</i> option to hide the values in the input fields.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputOtp v-model="value" mask />
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
<InputOtp v-model="value" mask />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value" mask />
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
        <InputOtp v-model="value" mask />
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
