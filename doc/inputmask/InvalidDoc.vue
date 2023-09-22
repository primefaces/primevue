<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" class="p-invalid" />
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
<InputMask v-model="value" mask="99-999999" placeholder="99-999999" class="p-invalid"/>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" class="p-invalid"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>
        `,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" class="p-invalid"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
        `
            }
        };
    }
};
</script>
