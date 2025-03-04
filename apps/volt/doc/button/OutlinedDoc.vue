<template>
    <DocSectionText v-bind="$attrs">
        <p>Outlined buttons display a border without a transparent background.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="outlined" />
        <SecondaryButton label="Secondary" variant="outlined" />
        <ContrastButton label="Contrast" variant="outlined" />
        <DangerButton label="Danger" variant="outlined" />
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
        <Button label="Primary" variant="outlined" />
        <SecondaryButton label="Secondary" variant="outlined" />
        <ContrastButton label="Contrast" variant="outlined" />
        <DangerButton label="Danger" variant="outlined" />
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
