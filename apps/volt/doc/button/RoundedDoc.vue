<template>
    <DocSectionText v-bind="$attrs">
        <p>Rounded buttons have a circular border radius.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" rounded />
        <SecondaryButton label="Secondary" rounded />
        <ContrastButton label="Contrast" rounded />
        <DangerButton label="Danger" rounded />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import ContrastButton from '@/volt/ContrastButton.vue';
import DangerButton from '@/volt/DangerButton.vue';
import SecondaryButton from '@/volt/SecondaryButton.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" rounded />
        <SecondaryButton label="Secondary" rounded />
        <ContrastButton label="Contrast" rounded />
        <DangerButton label="Danger" rounded />
    </div>
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import ContrastButton from '@/volt/ContrastButton.vue';
import DangerButton from '@/volt/DangerButton.vue';
import SecondaryButton from '@/volt/SecondaryButton.vue';
<\/script>
`);
</script>
