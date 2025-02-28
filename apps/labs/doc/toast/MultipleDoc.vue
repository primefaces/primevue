<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple messages are displayed by passing an array to the <i>show</i> method.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Multiple" @click="showMultiple()" />
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
<Button label="Multiple" @click="showMultiple()" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <Button label="Multiple" @click="showMultiple()" />
    </div>
</template>

<script>
export default {
    methods: {
        showMultiple() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 });
            this.$toast.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content', life: 3100 });
            this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <Button label="Multiple" @click="showMultiple()" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showMultiple = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 });
    toast.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content', life: 3100 });
    toast.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 });
};
<\/script>
`
            }
        };
    },
    methods: {
        showMultiple() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 });
            this.$toast.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content', life: 3100 });
            this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 });
        }
    }
};
</script>
