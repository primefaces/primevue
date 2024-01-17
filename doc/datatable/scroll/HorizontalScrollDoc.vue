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
    <DocSectionCode :code="code" :service="['CustomerService']" />
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            code: {
                basic: `
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
`,
                options: `
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

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
};
<\/script>
`,
                composition: `
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
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = data;
    });
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
<\/script>
`,
                data: `
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`
            }
        };
    },
    methods: {
        loadDemoData() {
            CustomerService.getCustomersMedium().then((data) => {
                this.customers = data;
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
};
</script>
