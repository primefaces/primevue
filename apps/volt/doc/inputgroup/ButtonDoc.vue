<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons can be placed at either side of an input element.</p>
    </DocSectionText>
    <div class="card flex flex-col md:flex-row gap-4">
        <div class="flex items-stretch w-full">
            <Button label="Search" pt:root="rounded-e-none" />
            <InputText placeholder="Keyword" pt:root="flex-1 rounded-s-none rounded-e-md" />
        </div>

        <div class="flex items-stretch w-full">
            <InputText placeholder="Keyword" pt:root="flex-1 rounded-s-md rounded-e-none" />
            <span class="flex items-center justify-center border-y border-e border-surface-300 dark:border-surface-700 rounded-e-md">
                <SecondaryButton icon="pi pi-search" variant="text" />
            </span>
        </div>

        <div class="flex items-stretch w-full">
            <span class="flex items-center justify-center border-y border-s border-surface-300 dark:border-surface-700 rounded-s-md overflow-hidden">
                <SecondaryButton icon="pi pi-check" severity="secondary" pt:root="rounded-none" />
            </span>
            <InputText placeholder="Vote" pt:root="flex-1 rounded-none" />
            <span class="flex items-center justify-center border-y border-e border-surface-300 dark:border-surface-700 rounded-e-md overflow-hidden">
                <SecondaryButton icon="pi pi-times" severity="secondary" pt:root="rounded-none" />
            </span>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <div class="flex items-stretch w-full">
            <Button label="Search" pt:root="rounded-e-none" />
            <InputText placeholder="Keyword" pt:root="flex-1 rounded-s-none rounded-e-md" />
        </div>

        <div class="flex items-stretch w-full">
            <InputText placeholder="Keyword" pt:root="flex-1 rounded-s-md rounded-e-none" />
            <span class="flex items-center justify-center border-y border-e border-surface-300 dark:border-surface-700 rounded-e-md">
                <SecondaryButton icon="pi pi-search" variant="text" />
            </span>
        </div>

        <div class="flex items-stretch w-full">
            <span class="flex items-center justify-center border-y border-s border-surface-300 dark:border-surface-700 rounded-s-md overflow-hidden">
                <SecondaryButton icon="pi pi-check" severity="secondary" pt:root="rounded-none" />
            </span>
            <InputText placeholder="Vote" pt:root="flex-1 rounded-none" />
            <span class="flex items-center justify-center border-y border-e border-surface-300 dark:border-surface-700 rounded-e-md overflow-hidden">
                <SecondaryButton icon="pi pi-times" severity="secondary" pt:root="rounded-none" />
            </span>
        </div>
    </div>
</template>

<script setup>
import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import InputText from '@/volt/inputtext';
<\/script>
`);
</script>
