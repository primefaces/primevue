<template>
    <DocSectionText v-bind="$attrs">
        <p>A new chip is added when <i>enter</i> key is pressed, <i>separator</i> property allows definining an additional key. Currently only valid value is <i>,</i> to create a new item when comma key is pressed.</p>
    </DocSectionText>
    <div class="card p-fluid">
        <Chips v-model="value" separator="," />
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
<Chips v-model="value" separator=","  />
`,
                options: `
<template>
    <div class="card p-fluid">
        <Chips v-model="value" separator="," />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card p-fluid">
        <Chips v-model="value" separator=","  />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>
`
            }
        };
    }
};
</script>
