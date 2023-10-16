<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <SelectButton
            v-model="value"
            :options="options"
            aria-labelledby="basic"
            :pt="{
                button: ({ context }) => ({
                    class: context.active ? 'bg-cyan-400 border-cyan-400' : undefined
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
            value: 'Off',
            options: ['Off', 'On'],
            code: {
                basic: `
<SelectButton
    v-model="value"
    :options="options"
    aria-labelledby="basic"
    :pt="{
        button: ({ context }) => ({
            class: context.active ? 'bg-cyan-400 border-cyan-400' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <SelectButton
            v-model="value"
            :options="options"
            aria-labelledby="basic"
            :pt="{
                button: ({ context }) => ({
                    class: context.active ? 'bg-cyan-400 border-cyan-400' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'off',
            options: ['Off', 'On']
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <SelectButton
            v-model="value"
            :options="options"
            aria-labelledby="basic"
            :pt="{
                button: ({ context }) => ({
                    class: context.active ? 'bg-cyan-400 border-cyan-400' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('off');
const options = ref(['Off', 'On']);
<\/script>
`
            }
        };
    }
};
</script>
