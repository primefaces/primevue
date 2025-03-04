<template>
    <DocSectionText v-bind="$attrs">
        <p>Raised buttons display a shadow to indicate elevation.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" raised />
        <SecondaryButton label="Secondary" raised />
        <ContrastButton label="Contrast" raised />
        <DangerButton label="Danger" raised />
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
        <Button label="Primary" raised />
        <SecondaryButton label="Secondary" raised />
        <ContrastButton label="Contrast" raised />
        <DangerButton label="Danger" raised />
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
