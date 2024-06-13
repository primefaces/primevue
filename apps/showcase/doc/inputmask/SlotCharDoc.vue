<template>
    <DocSectionText v-bind="$attrs">
        <p>Default placeholder for a mask is underscore that can be customized using <i>slotChar</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" placeholder="99/99/9999" mask="99/99/9999" slotChar="mm/dd/yyyy" />
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
<InputMask id="basic" v-model="value" placeholder="99/99/9999" mask="99/99/9999" slotChar="mm/dd/yyyy" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" placeholder="99/99/9999" mask="99/99/9999" slotChar="mm/dd/yyyy" />
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
        <InputMask id="basic" v-model="value" placeholder="99/99/9999" mask="99/99/9999" slotChar="mm/dd/yyyy" />
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
