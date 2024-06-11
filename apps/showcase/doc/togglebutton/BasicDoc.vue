<template>
    <DocSectionText v-bind="$attrs">
        <p>Two-way binding to a boolean property is defined using the standard v-model directive.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" class="w-24" onLabel="On" offLabel="Off" />
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
<ToggleButton v-model="checked" onLabel="On" offLabel="Off" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" class="w-24" onLabel="On" offLabel="Off" />
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
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" class="w-24" onLabel="On" offLabel="Off" />
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
