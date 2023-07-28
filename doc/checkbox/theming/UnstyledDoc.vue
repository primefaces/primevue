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
            checked: false,
            code: {
                composition: `
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" :binary="true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>`
            }
        };
    }
};
</script>
