<template>
    <DocSectionText v-bind="$attrs">
        <p>InputText provides <i>small</i> and <i>large</i> sizes as alternatives to the standard.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <InputText v-model="value1" type="text" size="small" placeholder="Small" />
        <InputText v-model="value2" type="text" placeholder="Normal" />
        <InputText v-model="value3" type="text" size="large" placeholder="Large" />
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
<InputText v-model="value1" type="text" size="small" placeholder="Small" />
<InputText v-model="value2" type="text" placeholder="Normal" />
<InputText v-model="value3" type="text" size="large" placeholder="Large" />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <InputText v-model="value1" type="text" size="small" placeholder="Small" />
        <InputText v-model="value2" type="text" placeholder="Normal" />
        <InputText v-model="value3" type="text" size="large" placeholder="Large" />
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
        <InputText v-model="value1" type="text" size="small" placeholder="Small" />
        <InputText v-model="value2" type="text" placeholder="Normal" />
        <InputText v-model="value3" type="text" size="large" placeholder="Large" />
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
