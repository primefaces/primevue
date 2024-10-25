<template>
    <DocSectionText v-bind="$attrs">
        <p>InputMask provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <InputMask v-model="value1" placeholder="Small" size="small" mask="99-999999" />
        <InputMask v-model="value2" placeholder="Normal" mask="99-999999" />
        <InputMask v-model="value3" placeholder="Large" size="large" mask="99-999999" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            code: {
                basic: `
<InputMask v-model="value1" placeholder="Small" size="small" mask="99-999999" />
<InputMask v-model="value2" placeholder="Normal" mask="99-999999" />
<InputMask v-model="value3" placeholder="Large" size="large" mask="99-999999" />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <InputMask v-model="value1" placeholder="Small" size="small" mask="99-999999" />
        <InputMask v-model="value2" placeholder="Normal" mask="99-999999" />
        <InputMask v-model="value3" placeholder="Large" size="large" mask="99-999999" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <InputMask v-model="value1" placeholder="Small" size="small" mask="99-999999" />
        <InputMask v-model="value2" placeholder="Normal" mask="99-999999" />
        <InputMask v-model="value3" placeholder="Large" size="large" mask="99-999999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
