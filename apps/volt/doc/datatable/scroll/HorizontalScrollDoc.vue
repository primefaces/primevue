<template>
    <DocSectionText v-bind="$attrs">
        <p>Horizontal scrollbar is displayed when table width exceeds the parent width.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="customers" scrollable scrollHeight="400px">
                <Column field="id" header="Id" footer="Id" style="min-width: 100px"></Column>
                <Column field="name" header="Name" footer="Name" style="min-width: 200px"></Column>
                <Column field="country.name" header="Country" footer="Country" style="min-width: 200px"></Column>
                <Column field="date" header="Date" footer="Date" style="min-width: 200px"></Column>
                <Column field="balance" header="Balance" footer="Balance" style="min-width: 200px">
                    <template #body="{ data }">
                        {{ formatCurrency(data.balance) }}
                    </template>
                </Column>
                <Column field="company" header="Company" footer="Company" style="min-width: 200px"></Column>
                <Column field="status" header="Status" footer="Status" style="min-width: 200px"></Column>
                <Column field="activity" header="Activity" footer="Activity" style="min-width: 200px"></Column>
                <Column field="representative.name" header="Representative" footer="Representative" style="min-width: 200px"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { CustomerService } from '@/service/CustomerService';
import DataTable from '@/volt/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);

const loadDemoData = () => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
};

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="customers" scrollable scrollHeight="400px">
            <Column field="id" header="Id" footer="Id" style="min-width: 100px"></Column>
            <Column field="name" header="Name" footer="Name" style="min-width: 200px"></Column>
            <Column field="country.name" header="Country" footer="Country" style="min-width: 200px"></Column>
            <Column field="date" header="Date" footer="Date" style="min-width: 200px"></Column>
            <Column field="balance" header="Balance" footer="Balance" style="min-width: 200px">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
            </Column>
            <Column field="company" header="Company" footer="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" footer="Status" style="min-width: 200px"></Column>
            <Column field="activity" header="Activity" footer="Activity" style="min-width: 200px"></Column>
            <Column field="representative.name" header="Representative" footer="Representative" style="min-width: 200px"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { CustomerService } from '@/service/CustomerService';
import DataTable from '@/volt/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});
<\/script>
`);
</script>
