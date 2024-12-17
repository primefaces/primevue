<template>
    <DocSectionText v-bind="$attrs">
        <p>IconField is compatible with the size setting of the input field.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Small" size="small" />
        </IconField>

        <IconField>
            <InputText v-model="value2" placeholder="Normal" />
            <InputIcon class="pi pi-user" />
        </IconField>

        <IconField>
            <InputIcon class="pi pi-lock" />
            <InputText v-model="value3" placeholder="Large" size="large" />
            <InputIcon class="pi pi-spin pi-spinner" />
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
            value3: null,
            code: {
                basic: `
<IconField>
    <InputIcon class="pi pi-search" />
    <InputText v-model="value1" placeholder="Small" size="small" />
</IconField>

<IconField>
    <InputIcon class="pi pi-search" />
    <InputText v-model="value2" placeholder="Normal" />
</IconField>

<IconField>
    <InputText v-model="value3" placeholder="Large" size="large" />
    <InputIcon class="pi pi-spin pi-spinner" />
</IconField>
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Small" size="small" />
        </IconField>

        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value2" placeholder="Normal" />
        </IconField>

        <IconField>
            <InputText v-model="value3" placeholder="Large" size="large" />
            <InputIcon class="pi pi-spin pi-spinner" />
        </IconField>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Small" size="small" />
        </IconField>

        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value2" placeholder="Normal" />
        </IconField>

        <IconField>
            <InputText v-model="value3" placeholder="Large" size="large" />
            <InputIcon class="pi pi-spin pi-spinner" />
        </IconField>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
