<template>
    <DocSectionText v-bind="$attrs">
        <p>Two-way value binding is defined using v-model.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" />
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
<InputSwitch v-model="checked" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" />
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
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" />
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
