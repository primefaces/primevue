<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>command</i> property defines the callback to run when an item is activated by click or a key event.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                    }
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
                    }
                }
            ],
            code: {
                basic: `
<Menu :model="items" />
<Toast />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                    }
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
                    }
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
        <Toast />
    </div>
</template>

<script setup>
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
`
            }
        };
    }
};
</script>
