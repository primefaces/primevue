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
    <div class="card">
        <Chips v-model="value" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`
            }
        };
    }
};
</script>
