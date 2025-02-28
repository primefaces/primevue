<template>
    <DocSectionText v-bind="$attrs">
        <p>Strength meter is displayed as a popup while a value is being entered.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value" />
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
<Password v-model="value" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Password v-model="value" />
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
        <Password v-model="value" />
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
