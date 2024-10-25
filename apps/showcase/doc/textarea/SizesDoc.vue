<template>
    <DocSectionText v-bind="$attrs">
        <p>Textarea provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <Textarea v-model="value1" size="small" placeholder="Small" rows="3" />
        <Textarea v-model="value2" placeholder="Normal" rows="3" />
        <Textarea v-model="value3" size="large" placeholder="Large" rows="3" />
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
<Textarea v-model="value1" size="small" placeholder="Small" rows="3" />
<Textarea v-model="value2" placeholder="Normal" rows="3" />
<Textarea v-model="value3" size="large" placeholder="Large" rows="3" />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <Textarea v-model="value1" size="small" placeholder="Small" rows="3" />
        <Textarea v-model="value2" placeholder="Normal" rows="3" />
        <Textarea v-model="value3" size="large" placeholder="Large" rows="3" />
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
        <Textarea v-model="value1" size="small" placeholder="Small" rows="3" />
        <Textarea v-model="value2" placeholder="Normal" rows="3" />
        <Textarea v-model="value3" size="large" placeholder="Large" rows="3" />
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
