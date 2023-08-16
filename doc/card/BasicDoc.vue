<template>
    <div class="card">
        <DataTable filterDisplay="row" :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="representative.name" header="Representative"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country" header="Country" style="min-width: 200px">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.data.country.code}`" style="width: 24px" />
                        <span>{{ slotProps.data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 200px">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                </template>
            </Column>
            <Column field="date" header="Date" style="min-width: 200px"></Column>
            <template #groupheader="slotProps">
                <div class="flex align-items-center gap-2">
                    <img :alt="slotProps.data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.data.representative.image}`" width="32" style="vertical-align: middle" />
                    <span>{{ slotProps.data.representative.name }}</span>
                </div>
            </template>
            <template #groupfooter="slotProps">
                <div class="flex justify-content-end font-bold w-full">
                    Total Customers:
                    {{ calculateCustomerTotal(slotProps.data.representative.name) }}
                </div>
            </template>
        </DataTable>
    </div>
</template>

<script setup>
import { CustomerService } from '@/service/CustomerService';
import { onMounted, ref } from 'vue';

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const customers = ref();

const calculateCustomerTotal = (name) => {
    let total = 0;

    if (customers.value) {
        for (let customer of customers.value) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }

    return total;
};

const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
</script>
