<template>
    <DocSectionText v-bind="$attrs">
        <p>Different size options for the input and the icon.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <div class="relative">
            <i class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputText placeholder="Small" pt:root="p-small:ps-10" size="small" />
        </div>

        <div class="relative">
            <InputText placeholder="Normal" pt:root="pe-10" />
            <i class="pi pi-user absolute top-1/2 -mt-2 text-surface-400 leading-none end-3 z-1" />
        </div>

        <div class="relative">
            <i class="pi pi-lock absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputText placeholder="Large" pt:root="p-large:ps-10" size="large " />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-col items-center gap-4">
        <div class="relative">
            <i class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputText placeholder="Small" pt:root="p-small:ps-10" size="small" />
        </div>

        <div class="relative">
            <InputText placeholder="Normal" pt:root="pe-10" />
            <i class="pi pi-user absolute top-1/2 -mt-2 text-surface-400 leading-none end-3 z-1" />
        </div>

        <div class="relative">
            <i class="pi pi-lock absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputText placeholder="Large" pt:root="p-large:ps-10" size="large " />
        </div>
    </div>
</template>

<script setup>
import InputText from '@/volt/InputText.vue';
<\/script>
`);
</script>
