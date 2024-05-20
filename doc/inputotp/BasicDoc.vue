<template>
    <DocSectionText v-bind="$attrs">
        <p>Two-way value binding is defined using <i>v-model</i>. The number of characters is defined with the <i>length</i> property, which is set to 4 by default.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputOtp v-model="value" />
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
<InputOtp v-model="value" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value" />
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
        <InputOtp v-model="value" />
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
