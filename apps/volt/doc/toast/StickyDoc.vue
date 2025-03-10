<template>
    <DocSectionText v-bind="$attrs">
        <p>A message disappears after the number of milliseconds defined in the <i>life</i> option. Omit the <i>life</i> option to make the message sticky.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="showSticky" label="Sticky" />
        <SecondaryButton label="Clear" @click="clear()" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

const toast = useToast();

const showSticky = () => {
    toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content' });
};

const clear = () => {
    toast.removeAllGroups();
};

const code = ref(`
<template>
    <Toast />
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="showSticky" label="Sticky" />
        <SecondaryButton label="Clear" @click="clear()" />
    </div>
</template>

<script setup>
import Toast from '@/volt/toast';
import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const showSticky = () => {
    toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
}

const clear = () => {
    toast.removeAllGroups();
}
<\/script>
`);
</script>
