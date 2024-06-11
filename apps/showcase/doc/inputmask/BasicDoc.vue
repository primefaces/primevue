<template>
    <DocSectionText v-bind="$attrs">
        <p>InputMask is used as a controlled input with <i>v-model</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code: {
                basic: `
<InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
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
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
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
