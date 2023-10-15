<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <Password
            v-model="value"
            :pt="{
                info: { class: 'font-bold' }
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
<Password
    v-model="value"
    :pt="{
        info: { class: 'font-bold' }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Password
            v-model="value"
            :pt="{
                info: { class: 'font-bold' }
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
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Password
            v-model="value"
            :pt="{
                info: { class: 'font-bold' }
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
