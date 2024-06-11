<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputMask id="ssn" v-model="value" mask="999-99-9999" placeholder="999-99-9999" />
            <label for="ssn">SSN</label>
        </FloatLabel>
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
<FloatLabel>
    <InputMask id="ssn" v-model="value" mask="999-99-9999" placeholder="999-99-9999" />
    <label for="ssn">SSN</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputMask id="ssn" v-model="value" mask="999-99-9999" placeholder="999-99-9999" />
            <label for="ssn">SSN</label>
        </FloatLabel>
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
        <FloatLabel>
            <InputMask id="ssn" v-model="val2" mask="999-99-9999" placeholder="999-99-9999" />
            <label for="ssn">SSN</label>
        </FloatLabel>
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
