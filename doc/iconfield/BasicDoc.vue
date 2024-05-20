<template>
    <DocSectionText v-bind="$attrs">
        <p><i>IconField</i> wraps the <i>InputIcon</i> and the input field component.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
        </IconField>

        <IconField>
            <InputText v-model="value2" />
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
            code: {
                basic: `
<IconField>
    <InputIcon class="pi pi-search" />
    <InputText v-model="value1" placeholder="Search" />
</IconField>

<IconField>
    <InputText v-model="value2" />
    <InputIcon class="pi pi-spin pi-spinner" />
</IconField>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
        </IconField>

        <IconField>
            <InputText v-model="value2" />
            <InputIcon class="pi pi-spin pi-spinner" />
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
    <div class="card flex flex-wrap justify-center gap-4">
        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
        </IconField>

        <IconField>
            <InputText v-model="value2" />
            <InputIcon class="pi pi-spin pi-spinner" />
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
