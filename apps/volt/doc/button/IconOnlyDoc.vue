<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons can have icons without labels.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex justify-center mb-8">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" rounded />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" rounded />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" rounded />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" rounded />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" variant="outlined" rounded />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" variant="outlined" rounded />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" variant="outlined" rounded />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" variant="outlined" rounded />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" variant="text" rounded />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" variant="text" rounded />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" variant="text" rounded />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" variant="text" rounded />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" variant="text" raised rounded />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" variant="text" raised rounded />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" variant="text" raised rounded />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" variant="text" raised rounded />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import ContrastButton from '@/volt/button/contrast';
import DangerButton from '@/volt/button/danger';
import SecondaryButton from '@/volt/button/secondary';
import SelectButton from '@/volt/selectbutton';
import { ref } from 'vue';

const size = ref('normal');
const sizeOptions = ref([
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' }
]);

const code = ref(`
<template>
    <div class="card">
        <div class="flex justify-center mb-8">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" rounded />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" rounded />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" rounded />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" rounded />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" variant="outlined" rounded />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" variant="outlined" rounded />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" variant="outlined" rounded />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" variant="outlined" rounded />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" variant="text" rounded />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" variant="text" rounded />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" variant="text" rounded />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" variant="text" rounded />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" variant="text" raised rounded />
            <SecondaryButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" variant="text" raised rounded />
            <ContrastButton icon="pi pi-search" severity="success" aria-label="Search" :size="size" variant="text" raised rounded />
            <DangerButton icon="pi pi-times" severity="info" aria-label="User" :size="size" variant="text" raised rounded />
        </div>
    </div>
</template>

<script setup>
import Button from '@/volt/button';
import ContrastButton from '@/volt/button/contrast';
import DangerButton from '@/volt/button/danger';
import SecondaryButton from '@/volt/button/secondary';
import SelectButton from '@/volt/selectbutton';
import { ref } from 'vue';

const size = ref('normal');
const sizeOptions = ref([
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' }
]);
<\/script>
`);
</script>
