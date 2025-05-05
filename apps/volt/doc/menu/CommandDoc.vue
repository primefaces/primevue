<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>command</i> property defines the callback to run when an item is activated by click or a key event.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Menu from '@/volt/Menu.vue';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

const toast = useToast();
const items = ref([
    {
        label: 'New',
        icon: 'pi pi-plus',
        command: () => {
            toast.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
        }
    },
    {
        label: 'Search',
        icon: 'pi pi-search',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
        }
    }
]);

const code = ref(`
<template>
    <Toast />
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script setup lang="ts">
import Menu from '@/volt/Menu.vue';
import Toast from '@/volt/Toast.vue';
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const items = ref([
    {
        label: 'New',
        icon: 'pi pi-plus',
        command: () => {
            toast.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
        }
    },
    {
        label: 'Search',
        icon: 'pi pi-search',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
        }
    }
]);
<\/script>
`);
</script>
