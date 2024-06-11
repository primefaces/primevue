<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>command</i> property defines the callback to run when an item is activated by click or a key event.</p>
    </DocSectionText>
    <div class="card">
        <TabMenu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-home',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
                    }
                },
                {
                    label: 'Transactions',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
                    }
                },
                {
                    label: 'Products',
                    icon: 'pi pi-list',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
                    }
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
                    }
                }
            ],
            code: {
                basic: `
<TabMenu :model="items" />
<Toast />
`,
                options: `
<template>
    <div class="card">
        <TabMenu :model="items" />
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-home',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
                    }
                },
                {
                    label: 'Transactions',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
                    }
                },
                {
                    label: 'Products',
                    icon: 'pi pi-list',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
                    }
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
                    }
                }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TabMenu :model="items" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => {
            toast.add({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
        }
    },
    {
        label: 'Transactions',
        icon: 'pi pi-chart-line',
        command: () => {
            toast.add({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
        }
    },
    {
        label: 'Products',
        icon: 'pi pi-list',
        command: () => {
            toast.add({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
        }
    },
    {
        label: 'Messages',
        icon: 'pi pi-inbox',
        command: () => {
            toast.add({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
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
