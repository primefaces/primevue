<template>
    <DocSectionText v-bind="$attrs">
        <p>An additional button is displayed next to the input field when <i>showIcon</i> is present. Also adding <i>iconDisplay</i> as <i>input</i> an icon will be displayed.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> Button Display </label>
            <Calendar v-model="buttondisplay" showIcon inputId="buttondisplay" />
        </div>
        <div class="flex-auto">
            <label for="icondisplay" class="font-bold block mb-2"> Icon Display </label>
            <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
        </div>
        <div class="flex-auto">
            <label for="templatedisplay" class="font-bold block mb-2"> Icon Template </label>
            <Calendar v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                <template #inputicon="{ clickCallback }">
                    <i class="pi pi-clock" @click="clickCallback" />
                </template>
            </Calendar>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            buttondisplay: null,
            icondisplay: null,
            templatedisplay: null,
            code: {
                basic: `
<Calendar v-model="buttondisplay" showIcon />
<Calendar v-model="icondisplay" showIcon iconDisplay="input" />
<Calendar v-model="templatedisplay" showIcon iconDisplay="input" timeOnly>
    <template #inputicon="{ clickCallback }">
        <i class="pi pi-clock" @click="clickCallback" />
    </template>
</Calendar>
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> Button Display </label>
            <Calendar v-model="buttondisplay" showIcon inputId="buttondisplay" />
        </div>
        <div class="flex-auto">
            <label for="icondisplay" class="font-bold block mb-2"> Icon Display </label>
            <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
        </div>
        <div class="flex-auto">
            <label for="templatedisplay" class="font-bold block mb-2"> Icon Template </label>
            <Calendar v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                <template #inputicon="{ clickCallback }">
                    <i class="pi pi-clock" @click="clickCallback" />
                </template>
            </Calendar>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttondisplay: null,
            icondisplay: null,
            templatedisplay: null,
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> Button Display </label>
            <Calendar v-model="buttondisplay" showIcon inputId="buttondisplay" />
        </div>
        <div class="flex-auto">
            <label for="icondisplay" class="font-bold block mb-2"> Icon Display </label>
            <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
        </div>
        <div class="flex-auto">
            <label for="templatedisplay" class="font-bold block mb-2"> Icon Template </label>
            <Calendar v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                <template #inputicon="{ clickCallback }">
                    <i class="pi pi-clock" @click="clickCallback" />
                </template>
            </Calendar>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const buttondisplay = ref();
const icondisplay = ref();
const templatedisplay = ref();
<\/script>
`
            }
        };
    }
};
</script>
