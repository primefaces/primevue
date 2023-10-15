<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <InputSwitch
            v-model="checked"
            :pt="{
                slider: ({ props }) => ({
                    class: props.modelValue ? 'bg-teal-400' : 'bg-red-400'
                })
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<InputSwitch
    v-model="checked"
    :pt="{
        slider: ({ props }) => ({
            class: props.modelValue ? 'bg-teal-400' : 'bg-red-400'
        })
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InputSwitch
            v-model="checked"
            :pt="{
                slider: ({ props }) => ({
                    class: props.modelValue ? 'bg-teal-400' : 'bg-red-400'
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <InputSwitch
            v-model="checked"
            :pt="{
                slider: ({ props }) => ({
                    class: props.modelValue ? 'bg-teal-400' : 'bg-red-400'
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
