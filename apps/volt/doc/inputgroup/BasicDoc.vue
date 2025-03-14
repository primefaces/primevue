<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Volt does not come with a standalone InputGroup component. Instead, it offers a sample implementation using Tailwind as a starting point. You can either directly incorporate this into your projects or use it as a basis to develop your own
            customized component.
        </p>
    </DocSectionText>
    <div class="card grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-stretch w-full">
            <span class="flex items-center justify-center w-10 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" pt:root="flex-1 rounded-s-none rounded-e-md" />
        </div>

        <div class="flex items-stretch w-full">
            <span class="flex items-center justify-center min-w-10 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md">
                <i class="pi pi-user"></i>
            </span>
            <InputNumber placeholder="Price" pt:root="flex-1" inputClass="rounded-none" />
            <span class="flex items-center justify-center min-w-10 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md"> .00 </span>
        </div>

        <div class="flex items-stretch w-full">
            <span class="flex items-center justify-center px-2 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md text-sm">www</span>
            <InputText placeholder="Website" pt:root="flex-1 rounded-s-none rounded-e-md" />
        </div>

        <div class="flex items-stretch w-full">
            <InputMask mask="99/99/9999" placeholder="mm/dd/yyyy" pt:root="flex-1 rounded-e-none rounded-s-md" />
            <span class="flex items-center justify-center w-10 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md">
                <i class="pi pi-calendar"></i>
            </span>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputMask from '@/volt/inputmask';
import InputNumber from '@/volt/InputNumber';
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const code = ref(`
<template>
   <div class="card grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-stretch w-full">
            <span class="flex items-center justify-center w-10 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" pt:root="flex-1 rounded-s-none rounded-e-md" />
        </div>

        <div class="flex items-stretch w-full">
            <span class="flex items-center justify-center min-w-10 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md">
                <i class="pi pi-user"></i>
            </span>
            <InputNumber placeholder="Price" pt:root="flex-1" inputClass="rounded-none" />
            <span class="flex items-center justify-center min-w-10 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md"> .00 </span>
        </div>

        <div class="flex items-stretch w-full">
            <span class="flex items-center justify-center px-2 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md text-sm">www</span>
            <InputText placeholder="Website" pt:root="flex-1 rounded-s-none rounded-e-md" />
        </div>

        <div class="flex items-stretch w-full">
            <InputMask mask="99/99/9999" placeholder="mm/dd/yyyy" pt:root="flex-1 rounded-e-none rounded-s-md" />
            <span class="flex items-center justify-center w-10 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md">
                <i class="pi pi-calendar"></i>
            </span>
        </div>
    </div>
</template>

<script setup>
import InputMask from '@/volt/inputmask';
import InputNumber from '@/volt/InputNumber';
import InputText from '@/volt/inputtext';
<\/script>
`);
</script>
