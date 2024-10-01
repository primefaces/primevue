<template>
    <DocSectionText v-bind="$attrs">
        <p>KeyFilter provides various presets configured with the <i>v-keyfilter</i> directive.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap gap-3 mb-4">
            <div class="flex-auto">
                <label for="integer" class="font-bold block mb-2"> Integer </label>
                <InputText id="integer" v-model="integer" v-keyfilter.int fluid />
            </div>
            <div class="flex-auto">
                <label for="number" class="font-bold block mb-2"> Number </label>
                <InputText id="number" v-model="number" v-keyfilter.num fluid />
            </div>
            <div class="flex-auto">
                <label for="money" class="font-bold block mb-2"> Money </label>
                <InputText id="money" v-model="money" v-keyfilter.money fluid />
            </div>
        </div>
        <div class="flex flex-wrap gap-3">
            <div class="flex-auto">
                <label for="hex" class="font-bold block mb-2"> Hex </label>
                <InputText id="hex" v-model="hex" v-keyfilter.hex fluid />
            </div>
            <div class="flex-auto">
                <label for="alphabetic" class="font-bold block mb-2"> Alphabetic </label>
                <InputText id="alphabetic" v-model="alphabetic" v-keyfilter.alpha fluid />
            </div>
            <div class="flex-auto">
                <label for="alphanumeric" class="font-bold block mb-2"> Alphanumeric </label>
                <InputText id="alphanumeric" v-model="alphanumeric" v-keyfilter.alphanum fluid />
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            integer: null,
            number: null,
            money: null,
            hex: null,
            alphabetic: null,
            alphanumeric: null,
            code: {
                basic: `
<InputText v-keyfilter.int />
<InputText v-keyfilter.num />
<InputText v-keyfilter.money />
<InputText v-keyfilter.hex />
<InputText v-keyfilter.alpha />
<InputText v-keyfilter.alphanum />
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-3 mb-4">
            <div class="flex-auto">
                <label for="integer" class="font-bold block mb-2"> Integer </label>
                <InputText id="integer" v-model="integer" v-keyfilter.int fluid />
            </div>
            <div class="flex-auto">
                <label for="number" class="font-bold block mb-2"> Number </label>
                <InputText id="number" v-model="number" v-keyfilter.num fluid />
            </div>
            <div class="flex-auto">
                <label for="money" class="font-bold block mb-2"> Money </label>
                <InputText id="money" v-model="money" v-keyfilter.money fluid />
            </div>
        </div>
        <div class="flex flex-wrap gap-3">
            <div class="flex-auto">
                <label for="hex" class="font-bold block mb-2"> Hex </label>
                <InputText id="hex" v-model="hex" v-keyfilter.hex fluid />
            </div>
            <div class="flex-auto">
                <label for="alphabetic" class="font-bold block mb-2"> Alphabetic </label>
                <InputText id="alphabetic" v-model="alphabetic" v-keyfilter.alpha fluid />
            </div>
            <div class="flex-auto">
                <label for="alphanumeric" class="font-bold block mb-2"> Alphanumeric </label>
                <InputText id="alphanumeric" v-model="alphanumeric" v-keyfilter.alphanum fluid />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            integer: null,
            number: null,
            money: null,
            hex: null,
            alphabetic: null,
            alphanumeric: null
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-3 mb-4">
            <div class="flex-auto">
                <label for="integer" class="font-bold block mb-2"> Integer </label>
                <InputText id="integer" v-model="integer" v-keyfilter.int fluid />
            </div>
            <div class="flex-auto">
                <label for="number" class="font-bold block mb-2"> Number </label>
                <InputText id="number" v-model="number" v-keyfilter.num fluid />
            </div>
            <div class="flex-auto">
                <label for="money" class="font-bold block mb-2"> Money </label>
                <InputText id="money" v-model="money" v-keyfilter.money fluid />
            </div>
        </div>
        <div class="flex flex-wrap gap-3">
            <div class="flex-auto">
                <label for="hex" class="font-bold block mb-2"> Hex </label>
                <InputText id="hex" v-model="hex" v-keyfilter.hex fluid />
            </div>
            <div class="flex-auto">
                <label for="alphabetic" class="font-bold block mb-2"> Alphabetic </label>
                <InputText id="alphabetic" v-model="alphabetic" v-keyfilter.alpha fluid />
            </div>
            <div class="flex-auto">
                <label for="alphanumeric" class="font-bold block mb-2"> Alphanumeric </label>
                <InputText id="alphanumeric" v-model="alphanumeric" v-keyfilter.alphanum fluid />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const integer = ref(null);
const number = ref(null);
const money = ref(null);
const hex = ref(null);
const alphabetic = ref(null);
const alphanumeric = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
