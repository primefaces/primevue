<template>
    <DocSectionText v-bind="$attrs">
        <p>Checkbox and RadioButton components can be combined with an input element under the same group.</p>
    </DocSectionText>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <InputText placeholder="Price" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked1" :binary="true" />
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked2" :binary="true" />
            </span>
            <InputText placeholder="Website" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </span>
        </div>
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
<div class="p-inputgroup flex-1">
    <InputText placeholder="Price" />
    <span class="p-inputgroup-addon">
        <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
    </span>
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">
        <Checkbox v-model="checked1" :binary="true" />
    </span>
    <InputText placeholder="Username" />
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">
        <Checkbox v-model="checked2" :binary="true" />
    </span>
    <InputText placeholder="Website" />
    <span class="p-inputgroup-addon">
        <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
    </span>
</div>`,
                options: `
<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <InputText placeholder="Price" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked1" :binary="true" />
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked2" :binary="true" />
            </span>
            <InputText placeholder="Website" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </span>
        </div>
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
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <InputText placeholder="Price" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked1" :binary="true" />
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked2" :binary="true" />
            </span>
            <InputText placeholder="Website" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(false);
const radioValue1 = ref('');
const radioValue2 = ref('');
<\/script>`
            }
        };
    }
};
</script>
