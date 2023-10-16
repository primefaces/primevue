<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <InputText
            v-model="value"
            type="text"
            :pt="{
                root: { class: 'border-teal-400' }
            }"
        />
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
<InputText
    v-model="value"
    type="text"
    :pt="{
        root: { class: 'border-teal-400' }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InputText
            v-model="value"
            type="text"
            :pt="{
                root: { class: 'border-teal-400' }
            }"
        />
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
    <div class="card flex justify-content-center">
        <InputText
            v-model="value"
            type="text"
            :pt="{
                root: { class: 'border-teal-400' }
            }"
        />
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
