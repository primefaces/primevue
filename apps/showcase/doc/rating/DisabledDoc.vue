<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, a visual hint is applied to indicate that the Knob cannot be interacted with.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Rating v-model="value" disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 5,
            code: {
                basic: `
<Rating v-model="value" disabled />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 5
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(5);
<\/script>
`
            }
        };
    }
};
</script>
