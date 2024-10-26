<template>
    <DocSectionText v-bind="$attrs">
        <p>ToggleButton provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <ToggleButton v-model="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
        <ToggleButton v-model="value2" onLabel="On" offLabel="Off" class="min-w-20" />
        <ToggleButton v-model="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: false,
            value2: false,
            value3: false,
            code: {
                basic: `
<ToggleButton v-model="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
<ToggleButton v-model="value2" onLabel="On" offLabel="Off" class="min-w-20" />
<ToggleButton v-model="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <ToggleButton v-model="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
        <ToggleButton v-model="value2" onLabel="On" offLabel="Off" class="min-w-20" />
        <ToggleButton v-model="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: false,
            value2: false,
            value3: false
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <ToggleButton v-model="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
        <ToggleButton v-model="value2" onLabel="On" offLabel="Off" class="min-w-20" />
        <ToggleButton v-model="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
