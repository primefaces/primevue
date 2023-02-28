<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <span className="p-float-label">
            <label for="ssn">SSN</label>
            <InputMask id="ssn" v-model="value" mask="999-99-9999" placeholder="999-99-9999" />
        </span>
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
<span className="p-float-label">
    <label for="ssn">SSN</label>
    <InputMask id="ssn" v-model="value" mask="999-99-9999" placeholder="999-99-9999" />
</span>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <span className="p-float-label">
            <label for="ssn">SSN</label>
            <InputMask id="ssn" v-model="value" mask="999-99-9999" placeholder="999-99-9999" />
        </span>
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
        <span className="p-float-label">
            <label for="ssn">SSN</label>
            <InputMask id="ssn" v-model="val2" mask="999-99-9999" placeholder="999-99-9999" />
        </span>
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
