<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>severity</i> option specifies the type of the message.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-2 justify-center">
        <SecondaryButton label="Success" @click="showSuccess" />
        <SecondaryButton label="Info" @click="showInfo" />
        <SecondaryButton label="Warn" @click="showWarn" />
        <SecondaryButton label="Error" @click="showError" />
        <SecondaryButton label="Secondary" @click="showSecondary" />
        <SecondaryButton label="Contrast" @click="showContrast" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import SecondaryButton from '@/volt/SecondaryButton.vue';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};

const showSecondary = () => {
    toast.add({ severity: 'secondary', summary: 'Secondary Message', detail: 'Message Content', life: 3000 });
};

const showContrast = () => {
    toast.add({ severity: 'contrast', summary: 'Contrast Message', detail: 'Message Content', life: 3000 });
};

const code = ref(`
<template>
    <Toast />
     <div class="card flex flex-wrap gap-2 justify-center">
        <SecondaryButton label="Success" @click="showSuccess" />
        <SecondaryButton label="Info" @click="showInfo" />
        <SecondaryButton label="Warn" @click="showWarn" />
        <SecondaryButton label="Error" @click="showError" />
        <SecondaryButton label="Secondary" @click="showSecondary" />
        <SecondaryButton label="Contrast" @click="showContrast" />
    </div>
</template>

<script setup lang="ts">
import Toast from '@/volt/Toast.vue';
import SecondaryButton from '@/volt/Button.vue';
import { useToast } from "primevue/usetoast";

const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};

const showSecondary = () => {
    toast.add({ severity: 'secondary', summary: 'Secondary Message', detail: 'Message Content', life: 3000 });
};

const showContrast = () => {
    toast.add({ severity: 'contrast', summary: 'Contrast Message', detail: 'Message Content', life: 3000 });
};
<\/script>
`);
</script>
