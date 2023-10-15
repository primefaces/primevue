<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <ToggleButton
            v-model="checked"
            :pt="{
                root: {
                    class: ['w-8rem', { 'bg-teal-400 border-white': checked }]
                }
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
    :pt="{
        root: {
            class: ['w-8rem', { 'bg-teal-400 border-white': checked }]
        }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton
            v-model="checked"
            :pt="{
                root: {
                    class: ['w-8rem', { 'bg-teal-400 border-white': checked }]
                }
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
        <ToggleButton
            v-model="checked"
            :pt="{
                root: {
                    class: ['w-8rem', { 'bg-teal-400 border-white': checked }]
                }
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
