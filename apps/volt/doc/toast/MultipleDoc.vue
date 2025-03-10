<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple messages are displayed by passing an array to the <i>show</i> method.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Multiple" @click="showMultiple()" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

const toast = useToast();

const showMultiple = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 });
    toast.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content', life: 3100 });
    toast.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 });
};

const code = ref(`
<template>
    <Toast />
    <div class="card flex justify-center">
        <Button label="Multiple" @click="showMultiple()" />
    </div>
</template>

<script setup>
import Toast from '@/volt/toast';
import Button from '@/volt/button';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const showMultiple = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 });
    toast.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content', life: 3100 });
    toast.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 });
};
<\/script>
`);
</script>
