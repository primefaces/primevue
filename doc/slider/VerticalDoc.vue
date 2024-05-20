<template>
    <DocSectionText v-bind="$attrs">
        <p>Default layout of slider is <i>horizontal</i>, use <i>orientation</i> property for the alternative <i>vertical</i> mode.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Slider v-model="value" orientation="vertical" class="h-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 50,
            code: {
                basic: `
<Slider v-model="value" orientation="vertical" class="h-56" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" orientation="vertical" class="h-56" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" orientation="vertical" class="h-56" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>
`
            }
        };
    }
};
</script>
