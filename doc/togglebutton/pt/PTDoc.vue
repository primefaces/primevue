<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <ToggleButton
            v-model="checked"
            class="w-8rem"
            :pt="{
                root: () => ({
                    class: checked ? 'bg-green-500 border-white' : undefined
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
<ToggleButton
    v-model="checked"
    class="w-8rem"
    :pt="{
        root: () => ({
            class: checked ? 'bg-green-500 border-white' : undefined
        })
    }"
/>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton
            v-model="checked"
            class="w-8rem"
            :pt="{
                root: () => ({
                    class: checked ? 'bg-green-500 border-white' : undefined
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
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton
            v-model="checked"
            class="w-8rem"
            :pt="{
                root: () => ({
                    class: checked ? 'bg-green-500 border-white' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`
            }
        };
    }
};
</script>
