<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Volt does not come with a standalone IconField component. Instead, it offers a sample implementation using Tailwind as a starting point. You can either directly incorporate this into your projects or use it as a basis to develop your own
            customized component.
        </p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <div class="relative">
            <i class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputText placeholder="Search" pt:root="ps-10" />
        </div>
        <div class="relative">
            <i class="pi pi-calendar absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputMask placeholder="mm/dd/yyyy" mask="99/99/99" slotChar="mm/dd/yyyy" pt:root="ps-10" />
        </div>
        <div class="relative">
            <i class="pi pi-shopping-cart absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputNumber inputClass="ps-10" placeholder="Add Items" />
            <i class="pi pi-arrow-right absolute top-1/2 -mt-2 text-surface-400 leading-none end-3 z-1" />
        </div>
        <div class="relative">
            <InputText placeholder="Loading..." disabled pt:root="pe-10" />
            <i class="pi pi-spin pi-spinner absolute top-1/2 -mt-2 text-surface-400 leading-none end-3 z-1" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import InputMask from '@/volt/InputMask.vue';
import InputNumber from '@/volt/InputNumber.vue';
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <div class="relative">
            <i class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputText placeholder="Search" pt:root="ps-10" />
        </div>
        <div class="relative">
            <i class="pi pi-calendar absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputMask placeholder="mm/dd/yyyy" mask="99/99/99" slotChar="mm/dd/yyyy" pt:root="ps-10" />
        </div>
        <div class="relative">
            <i class="pi pi-shopping-cart absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
            <InputNumber inputClass="ps-10" placeholder="Add Items" />
            <i class="pi pi-arrow-right absolute top-1/2 -mt-2 text-surface-400 leading-none end-3 z-1" />
        </div>
        <div class="relative">
            <InputText placeholder="Loading..." disabled pt:root="pe-10" />
            <i class="pi pi-spin pi-spinner absolute top-1/2 -mt-2 text-surface-400 leading-none end-3 z-1" />
        </div>
    </div>
</template>

<script setup lang="ts">
import InputMask from '@/volt/InputMask.vue';
import InputNumber from '@/volt/InputNumber.vue';
import InputText from '@/volt/InputText.vue';
<\/script>
`);
</script>
