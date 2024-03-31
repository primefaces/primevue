<template>
    <DocSectionText v-bind="$attrs">
        <p>
            A group is created by wrapping the input and icon with the <i>IconField</i> component. Each icon is defined as a child of <i>InputIcon</i> component. In addition, position of the icon can be changed using <i>iconPosition</i> property that
            the default value is <i>right</i> and also <i>left</i> option is available.
        </p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <IconField iconPosition="left">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText v-model="value1" placeholder="Search" />
        </IconField>

        <IconField>
            <InputIcon class="pi pi-spin pi-spinner"> </InputIcon>
            <InputText v-model="value2" />
        </IconField>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            code: {
                basic: `
<IconField iconPosition="left">
    <InputIcon class="pi pi-search"> </InputIcon>
    <InputText v-model="value1" placeholder="Search" />
</IconField>

<IconField>
    <InputIcon class="pi pi-spin pi-spinner"> </InputIcon>
    <InputText v-model="value2" />
</IconField>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <IconField iconPosition="left">
            <IconField iconPosition="left">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText v-model="value1" placeholder="Search" />
        </IconField>

        <IconField>
            <InputIcon class="pi pi-spin pi-spinner"> </InputIcon>
            <InputText v-model="value2" />
        </IconField>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value1: null,
            value2: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <IconField iconPosition="left">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText v-model="value1" placeholder="Search" />
        </IconField>

        <IconField>
            <InputIcon class="pi pi-spin pi-spinner"> </InputIcon>
            <InputText v-model="value2" />
        </IconField>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
