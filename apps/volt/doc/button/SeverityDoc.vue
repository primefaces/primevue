<template>
    <DocSectionText v-bind="$attrs">
        <p>Secondary, Contrast and Danger buttons are available as separate components for severity alternatives.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" />
        <SecondaryButton label="Secondary" />
        <ContrastButton label="Contrast" />
        <DangerButton label="Danger" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/Button.vue';
import ContrastButton from '@/volt/ContrastButton.vue';
import DangerButton from '@/volt/DangerButton.vue';
import SecondaryButton from '@/volt/SecondaryButton';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" />
        <SecondaryButton label="Secondary" />
        <ContrastButton label="Contrast" />
        <DangerButton label="Danger" />
    </div>
</template>

<script setup>
import Button from '@/volt/Button.vue';
import ContrastButton from '@/volt/ContrastButton.vue';
import DangerButton from '@/volt/DangerButton.vue';
import SecondaryButton from '@/volt/SecondaryButton';
<\/script>
`);
</script>
