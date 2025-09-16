<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>fluid</i> prop makes the component take up the full width of its container when set to true.</p>
    </DocSectionText>
    <div class="card">
        <InputMask v-model="value" fluid mask="99-999999" placeholder="99-999999" />
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
<InputMask v-model="value" fluid mask="99-999999" placeholder="99-999999" />
`,
                options: `
<template>
    <div class="card">
        <InputMask v-model="value" fluid mask="99-999999" placeholder="99-999999" />
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
    <div class="card">
        <InputMask v-model="value" fluid mask="99-999999" placeholder="99-999999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
        `
            }
        };
    }
};
</script>
