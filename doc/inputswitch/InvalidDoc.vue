<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" class="p-invalid" />
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
<InputSwitch v-model="checked" class="p-invalid" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" class="p-invalid" />
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
        <InputSwitch v-model="checked" class="p-invalid" />
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
