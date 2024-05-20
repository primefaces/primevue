<template>
    <DocSectionText v-bind="$attrs">
        <p>Checkbox and RadioButton components can be combined with an input element under the same group.</p>
    </DocSectionText>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <InputText placeholder="Price" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <Checkbox v-model="checked1" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Username" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <Checkbox v-model="checked2" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Website" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </InputGroupAddon>
        </InputGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: false,
            radioValue1: '',
            radioValue2: '',
            code: {
                basic: `
<InputGroup>
    <InputText placeholder="Price" />
    <InputGroupAddon>
        <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
    </InputGroupAddon>
</InputGroup>

<InputGroup>
    <InputGroupAddon>
        <Checkbox v-model="checked1" :binary="true" />
    </InputGroupAddon>
    <InputText placeholder="Username" />
</InputGroup>

<InputGroup>
    <InputGroupAddon>
        <Checkbox v-model="checked2" :binary="true" />
    </InputGroupAddon>
    <InputText placeholder="Website" />
    <InputGroupAddon>
        <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
    </InputGroupAddon>
</InputGroup>
`,
                options: `
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <InputText placeholder="Price" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <Checkbox v-model="checked1" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Username" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <Checkbox v-model="checked2" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Website" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </InputGroupAddon>
        </InputGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: false,
            radioValue1: '',
            radioValue2: ''
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <InputText placeholder="Price" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <Checkbox v-model="checked1" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Username" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <Checkbox v-model="checked2" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Website" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </InputGroupAddon>
        </InputGroup>
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(false);
const radioValue1 = ref('');
const radioValue2 = ref('');
<\/script>
`
            }
        };
    }
};
</script>
