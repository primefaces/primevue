<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" class="p-invalid" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code: {
                basic: `
<Textarea v-model="value" rows="5" cols="30" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" class="p-invalid" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30"   class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`
            }
        };
    }
};
</script>
