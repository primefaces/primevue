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

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import ContrastButton from '@/volt/ContrastButton.vue';
import DangerButton from '@/volt/DangerButton.vue';
import SecondaryButton from '@/volt/SecondaryButton';
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

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import ContrastButton from '@/volt/ContrastButton.vue';
import DangerButton from '@/volt/DangerButton.vue';
import SecondaryButton from '@/volt/SecondaryButton';
<\/script>
`);
</script>
