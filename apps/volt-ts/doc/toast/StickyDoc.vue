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

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import SecondaryButton from '@/volt/SecondaryButton';
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

<script setup lang="ts">
import Toast from '@/volt/Toast.vue';
import Button from '@/volt/Button.vue';
import SecondaryButton from '@/volt/SecondaryButton';
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
