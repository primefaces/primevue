<template>
    <DocSectionText v-bind="$attrs">
        <p>An additional icon is displayed next to the input field when <i>showIcon</i> is present.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
            <DatePicker v-model="buttondisplay" showIcon :showOnFocus="false" inputId="buttondisplay" />
        </div>
        <div class="flex-auto">
            <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
            <DatePicker v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
        </div>
        <div class="flex-auto">
            <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
            <DatePicker v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                <template #inputicon="slotProps">
                    <i class="pi pi-clock" @click="slotProps.clickCallback" />
                </template>
            </DatePicker>
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
<DatePicker v-model="buttondisplay" showIcon :showOnFocus="false" />
<DatePicker v-model="icondisplay" showIcon iconDisplay="input" />
<DatePicker v-model="templatedisplay" showIcon iconDisplay="input" timeOnly>
    <template #inputicon="slotProps">
        <i class="pi pi-clock" @click="slotProps.clickCallback" />
    </template>
</DatePicker>
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
            <DatePicker v-model="buttondisplay" showIcon :showOnFocus="false" inputId="buttondisplay" />
        </div>
        <div class="flex-auto">
            <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
            <DatePicker v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
        </div>
        <div class="flex-auto">
            <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
            <DatePicker v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                <template #inputicon="slotProps">
                    <i class="pi pi-clock" @click="slotProps.clickCallback" />
                </template>
            </DatePicker>
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
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
            <DatePicker v-model="buttondisplay" showIcon :showOnFocus="false" inputId="buttondisplay" />
        </div>
        <div class="flex-auto">
            <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
            <DatePicker v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
        </div>
        <div class="flex-auto">
            <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
            <DatePicker v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                <template #inputicon="slotProps">
                    <i class="pi pi-clock" @click="slotProps.clickCallback" />
                </template>
            </DatePicker>
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
