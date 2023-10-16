<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <Checkbox
            v-model="checked"
            binary
            :pt="{
                input: ({ props, state }) => ({
                    class: state.focused ? 'border-orange-400' : undefined
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
<Checkbox
    v-model="checked"
    binary
    :pt="{
        input: ({ props, state }) => ({
            class: state.focused ? 'border-orange-400' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Checkbox
            v-model="checked"
            binary
            :pt="{
                input: ({ props, state }) => ({
                    class: state.focused ? 'border-orange-400' : undefined
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
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Checkbox
            v-model="checked"
            binary
            :pt="{
                input: ({ props, state }) => ({
                    class: state.focused ? 'border-orange-400' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
