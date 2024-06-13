<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Mask format can be a combination of the following definitions; <i>a</i> for alphabetic characters, <i>9</i> for numeric characters and <i>*</i> for alphanumberic characters. In addition, formatting characters like <i>(</i>, <i>)</i> ,
            <i>-</i> are also accepted.
        </p>
    </DocSectionText>
    <div class="card p-fluid flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="ssn" class="font-bold block mb-2">SSN</label>
            <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" />
        </div>

        <div class="flex-auto">
            <label for="phone" class="font-bold block mb-2">Phone</label>
            <InputMask id="phone" v-model="value2" mask="(999) 999-9999" placeholder="(999) 999-9999" />
        </div>

        <div class="flex-auto">
            <label for="serial" class="font-bold block mb-2">Serial</label>
            <InputMask id="serial" v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            code: {
                basic: `
<div class="flex-auto">
    <label for="ssn" class="font-bold block mb-2">SSN</label>
    <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" />
</div>

<div class="flex-auto">
    <label for="phone" class="font-bold block mb-2">Phone</label>
    <InputMask id="phone" v-model="value2" mask="(999) 999-9999" placeholder="(999) 999-9999" />
</div>

<div class="flex-auto">
    <label for="serial" class="font-bold block mb-2">Serial</label>
    <InputMask id="serial" v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" />
</div>
`,
                options: `
<template>
    <div class="card p-fluid flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="ssn" class="font-bold block mb-2">SSN</label>
            <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" />
        </div>

        <div class="flex-auto">
            <label for="phone" class="font-bold block mb-2">Phone</label>
            <InputMask id="phone" v-model="value2" mask="(999) 999-9999" placeholder="(999) 999-9999" />
        </div>

        <div class="flex-auto">
            <label for="serial" class="font-bold block mb-2">Serial</label>
            <InputMask id="serial" v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: ''
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card p-fluid flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="ssn" class="font-bold block mb-2">SSN</label>
            <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" />
        </div>

        <div class="flex-auto">
            <label for="phone" class="font-bold block mb-2">Phone</label>
            <InputMask id="phone" v-model="value2" mask="(999) 999-9999" placeholder="(999) 999-9999" />
        </div>

        <div class="flex-auto">
            <label for="serial" class="font-bold block mb-2">Serial</label>
            <InputMask id="serial" v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
<\/script>
`
            }
        };
    }
};
</script>
