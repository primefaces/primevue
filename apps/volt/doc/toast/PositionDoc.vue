<template>
    <DocSectionText v-bind="$attrs">
        <p>A message can be targeted to a certain Toast component by matching the <i>group</i> keys whereas location is customized with the <i>position</i>.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button label="Top Left" @click="showTopLeft" />
        <Button label="Bottom Left" @click="showBottomLeft" />
        <Button label="Bottom Right" @click="showBottomRight" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/Button.vue';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

const toast = useToast();

const showTopLeft = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
};

const showBottomLeft = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
};

const showBottomRight = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
};

const code = ref(`
<template>
    <Toast position="top-left" group="tl" />
    <Toast position="bottom-left" group="bl" />
    <Toast position="bottom-right" group="br" />
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button label="Top Left" @click="showTopLeft" />
        <Button label="Bottom Left" @click="showBottomLeft" />
        <Button label="Bottom Right" @click="showBottomRight" />
    </div>
</template>

<script setup>
import Toast from '@/volt/Toast.vue';
import Button from '@/volt/Button.vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const showTopLeft = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
};

const showBottomLeft = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
};

const showBottomRight = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
};
<\/script>
`);
</script>
