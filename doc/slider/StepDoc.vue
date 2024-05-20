<template>
    <DocSectionText v-bind="$attrs">
        <p>Size of each movement is defined with the <i>step</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Slider v-model="value" :step="20" class="w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 20,
            code: {
                basic: `
<Slider v-model="value" :step="20" class="w-56" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" :step="20" class="w-56" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 20
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" :step="20" class="w-56" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(20);
<\/script>
`
            }
        };
    }
};
</script>
