<template>
    <DocSectionText v-bind="$attrs">
        <p>A column can be fixed during horizontal scrolling by enabling the <i>frozen</i> property. The location is defined with the <i>alignFrozen</i> that can be <i>left</i> or <i>right</i>.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <ToggleButton v-model="balanceFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />

            <DataTable :value="customers" scrollable scrollHeight="400px" class="mt-6">
                <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
                <Column field="id" header="Id" style="min-width: 100px"></Column>
                <Column field="name" header="Name" style="min-width: 200px"></Column>
                <Column field="country.name" header="Country" style="min-width: 200px"></Column>
                <Column field="date" header="Date" style="min-width: 200px"></Column>
                <Column field="company" header="Company" style="min-width: 200px"></Column>
                <Column field="status" header="Status" style="min-width: 200px"></Column>
                <Column field="activity" header="Activity" style="min-width: 200px"></Column>
                <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
                <Column field="balance" header="Balance" style="min-width: 200px" alignFrozen="right" :frozen="balanceFrozen">
                    <template #body="{ data }">
                        <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import DataTable from '@/volt/DataTable.vue';
import ToggleButton from '@/volt/ToggleButton.vue';
import Column from 'primevue/column';
import { ref } from 'vue';
import { CustomerService } from '~/service/CustomerService';

const customers = ref(null);
const balanceFrozen = ref(false);
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const loadDemoData = () => {
    CustomerService.getCustomersLarge().then((data) => (customers.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <ToggleButton v-model="balanceFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />

        <DataTable :value="customers" scrollable scrollHeight="400px" class="mt-6">
            <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
            <Column field="id" header="Id" style="min-width: 100px"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country.name" header="Country" style="min-width: 200px"></Column>
            <Column field="date" header="Date" style="min-width: 200px"></Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 200px"></Column>
            <Column field="activity" header="Activity" style="min-width: 200px"></Column>
            <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
            <Column field="balance" header="Balance" style="min-width: 200px" alignFrozen="right" :frozen="balanceFrozen">
                <template #body="{ data }">
                    <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { CustomerService } from '@/service/CustomerService';
import DataTable from '@/volt/DataTable.vue';
import ToggleButton from '@/volt/ToggleButton.vue';
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);
const balanceFrozen = ref(false);
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

onMounted(() => {
    CustomerService.getCustomersLarge().then((data) => (customers.value = data));
});
<\/script>
`);
</script>
