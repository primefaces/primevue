<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Slider
            v-model="value"
            :pt="{
                root: { class: 'w-14rem' },
                handle: { class: 'bg-orange-400 border-900' },
                range: { class: 'bg-orange-400' }
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
<Slider
    v-model="value"
    :pt="{
        root: { class: 'w-14rem' },
        handle: { class: 'bg-orange-400 border-900' },
        range: { class: 'bg-orange-400' }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Slider
            v-model="value"
            :pt="{
                root: { class: 'w-14rem' },
                handle: { class: 'bg-orange-400 border-900' },
                range: { class: 'bg-orange-400' }
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
        <Slider
            v-model="value"
            :pt="{
                root: { class: 'w-14rem' },
                handle: { class: 'bg-orange-400 border-900' },
                range: { class: 'bg-orange-400' }
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
