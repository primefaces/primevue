<template>
    <DocSectionText v-bind="$attrs">
        <p>Adding <i>scrollable</i> property along with a <i>scrollHeight</i> for the data viewport enables vertical scrolling with fixed headers.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="customers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { CustomerService } from '@/service/CustomerService';
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);

const loadDemoData = () => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="customers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="company" header="Company"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { CustomerService } from '@/service/CustomerService';
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});
<\/script>
`);
</script>
