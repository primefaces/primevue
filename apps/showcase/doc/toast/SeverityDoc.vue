<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>severity</i> option specifies the type of the message.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warn" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
            <Button label="Secondary" severity="secondary" @click="showSecondary" />
            <Button label="Contrast" severity="contrast" @click="showContrast" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Toast />
<Button label="Success" severity="success" @click="showSuccess" />
<Button label="Info" severity="info" @click="showInfo" />
<Button label="Warn" severity="warn" @click="showWarn" />
<Button label="Error" severity="danger" @click="showError" />
<Button label="Secondary" severity="secondary" @click="showSecondary" />
<Button label="Contrast" severity="contrast" @click="showContrast" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warn" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
            <Button label="Secondary" severity="secondary" @click="showSecondary" />
            <Button label="Contrast" severity="contrast" @click="showContrast" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showSuccess() {
            this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
        },
        showInfo() {
            this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
        },
        showWarn() {
            this.$toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
        },
        showError() {
            this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
        },
        showSecondary() {
            this.$toast.add({ severity: 'secondary', summary: 'Secondary Message', detail: 'Message Content', life: 3000 });
        },
        showContrast() {
            this.$toast.add({ severity: 'contrast', summary: 'Contrast Message', detail: 'Message Content', life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warn" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
            <Button label="Secondary" severity="secondary" @click="showSecondary" />
            <Button label="Contrast" severity="contrast" @click="showContrast" />
        </div>
    </div>
</template>

<script setup>
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
`
            }
        };
    },
    methods: {
        showSuccess() {
            this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
        },
        showInfo() {
            this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
        },
        showWarn() {
            this.$toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
        },
        showError() {
            this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
        },
        showSecondary() {
            this.$toast.add({ severity: 'secondary', summary: 'Secondary Message', detail: 'Message Content', life: 3000 });
        },
        showContrast() {
            this.$toast.add({ severity: 'contrast', summary: 'Contrast Message', detail: 'Message Content', life: 3000 });
        }
    }
};
</script>
