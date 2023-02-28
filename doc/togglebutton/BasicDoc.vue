<template>
    <DocSectionText v-bind="$attrs">
        <p>Two-way binding to a boolean property is defined using the standard v-model directive.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" class="w-8rem" />
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
<ToggleButton v-model="checked" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" class="w-8rem" />
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
        <ToggleButton v-model="checked" class="w-8rem" />
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
