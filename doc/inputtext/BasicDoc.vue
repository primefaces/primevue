<template>
    <DocSectionText v-bind="$attrs">
        <p>InputText is used as a controlled input with <i>v-model</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputText v-model="value" type="text" />
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
<InputText type="text" v-model="value" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputText type="text" v-model="value" />
    </div>
</template>

<script>
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
        <InputText type="text" v-model="value" />
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
