<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" :invalid="value === ''" />
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
<InputMask v-model="value" mask="99-999999" placeholder="99-999999" :invalid="value ===''"  />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" :invalid="value ===''"  />
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
    <div class="card flex justify-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" :invalid="value ===''"  />
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
