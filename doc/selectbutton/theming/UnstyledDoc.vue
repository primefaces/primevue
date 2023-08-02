<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('off');
const options = ref(['Off', 'On']);
<\/script>`
            }
        };
    }
};
</script>
