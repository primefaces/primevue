<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons are displayed as textual elements.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="text" />
        <SecondaryButton label="Secondary" variant="text" />
        <ContrastButton label="Contrast" variant="text" />
        <DangerButton label="Danger" variant="text" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import ContrastButton from '@/volt/button/contrast';
import DangerButton from '@/volt/button/danger';
import SecondaryButton from '@/volt/button/secondary';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="text" />
        <SecondaryButton label="Secondary" variant="text" />
        <ContrastButton label="Contrast" variant="text" />
        <DangerButton label="Danger" variant="text" />
    </div>
</template>

<script setup>
import Button from '@/volt/button';
import ContrastButton from '@/volt/button/contrast';
import DangerButton from '@/volt/button/danger';
import SecondaryButton from '@/volt/button/secondary';
<\/script>
`);
</script>
