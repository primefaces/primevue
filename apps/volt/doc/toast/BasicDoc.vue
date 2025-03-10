<template>
    <DocSectionText v-bind="$attrs">
        <p>A single message is represented by the Message interface that defines properties such as severity, summary and detail.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Show" @click="show()" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};

const code = ref(`
<template>
    <Toast />
    <div class="card flex justify-center">
        <Button label="Show" @click="show()" />
    </div>
</template>

<script setup>
import Toast from '@/volt/toast';
import Button from '@/volt/button';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
<\/script>
`);
</script>
