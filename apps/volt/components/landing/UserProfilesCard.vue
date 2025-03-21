<template>
    <div class="rounded-lg p-4 shadow-md border border-transparent dark:border-surface-800 bg-surface-0 dark:bg-surface-900">
        <span class="block font-medium text-surface-900 dark:text-surface-0 mb-3">User Profiles</span>
        <SelectButton v-model="mode" :options="options" optionLabel="label" optionValue="value" size="small" class="w-full" />
        <ul class="flex flex-col gap-2 mt-4">
            <li v-for="setting in settings" :key="setting.label" class="flex items-center gap-2">
                <i :class="[setting.icon, 'text-muted-color']"></i>
                <span class="text-color">{{ setting.label }}</span>
                <ToggleSwitch v-model="setting.value[mode]" class="ms-auto" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import SelectButton from '@/volt/selectbutton';
import ToggleSwitch from '@/volt/toggleswitch';
import { ref } from 'vue';

const mode = ref(0);
const options = ref([
    { label: 'General', value: 0 },
    { label: 'Focus', value: 1 }
]);
const settings = ref([
    { label: 'Sound', icon: 'pi pi-volume-down', value: [false, true] },
    { label: 'WiFi', icon: 'pi pi-wifi', value: [true, false] },
    { label: 'Dark Mode', icon: 'pi pi-moon', value: [false, false] },
    { label: 'Location', icon: 'pi pi-map-marker', value: [true, false] },
    { label: 'Privacy', icon: 'pi pi-shield', value: [true, true] },
    { label: 'Auto Update', icon: 'pi pi-refresh', value: [false, true] }
]);
</script>
