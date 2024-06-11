<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" :invalid="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" :invalid="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" :invalid="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" :invalid="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
