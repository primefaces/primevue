<template>
    <DocSectionText v-bind="$attrs">
        <p>FloatLabel is used by wrapping the input and its label.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </FloatLabel>
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
<FloatLabel>
    <InputText id="username" v-model="value" />
    <label for="username">Username</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </FloatLabel>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </FloatLabel>
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
