<template>
    <DocSectionText v-bind="$attrs">
        <p>
            When <i>expandableRowGroups</i> is present in subheader based row grouping, groups can be expanded and collapsed. State of the expansions are controlled using the <i>expandedRows</i> property and <i>rowgroup-expand</i> and
            <i>rowgroup-collapse</i> events.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable
                v-model:expandedRowGroups="expandedRowGroups"
                :value="customers"
                expandableRowGroups
                rowGroupMode="subheader"
                groupRowsBy="representative.name"
                sortMode="single"
                sortField="representative.name"
                :sortOrder="1"
                @rowgroup-expand="onRowGroupExpand"
                @rowgroup-collapse="onRowGroupCollapse"
                tableStyle="min-width: 50rem"
            >
                <template #groupheader="slotProps">
                    <img :alt="slotProps.data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.data.representative.image}`" width="32" style="vertical-align: middle" class="ml-2" />
                    <span class="align-middle ml-2 font-bold leading-normal">{{ slotProps.data.representative.name }}</span>
                </template>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="name" header="Name" style="width: 20%"></Column>
                <Column field="country" header="Country" style="width: 20%">
                    <template #body="slotProps">
                        <div class="flex items-center gap-2">
                            <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.data.country.code}`" style="width: 24px" />
                            <span>{{ slotProps.data.country.name }}</span>
                        </div>
                    </template>
                </Column>
                <Column field="company" header="Company" style="width: 20%"></Column>
                <Column field="status" header="Status" style="width: 20%">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                    </template>
                </Column>
                <Column field="date" header="Date" style="width: 20%"></Column>
                <template #groupfooter="slotProps">
                    <div class="flex justify-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
                </template>
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
            expandedRowGroups: null,
            code: {
                basic: `
<DataTable v-model:expandedRowGroups="expandedRowGroups" :value="customers" tableStyle="min-width: 50rem"
        expandableRowGroups rowGroupMode="subheader" groupRowsBy="representative.name" @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse"
        sortMode="single" sortField="representative.name" :sortOrder="1">
    <template #groupheader="slotProps">
        <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" class="ml-2" />
        <span class="align-middle ml-2 font-bold leading-normal">{{ slotProps.data.representative.name }}</span>
    </template>
    <Column field="representative.name" header="Representative"></Column>
    <Column field="name" header="Name" style="width: 20%"></Column>
    <Column field="country" header="Country" style="width: 20%">
        <template #body="slotProps">
            <div class="flex items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                <span>{{ slotProps.data.country.name }}</span>
            </div>
        </template>
    </Column>
    <Column field="company" header="Company" style="width: 20%"></Column>
    <Column field="status" header="Status" style="width: 20%">
        <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
    </Column>
    <Column field="date" header="Date" style="width: 20%"></Column>
    <template #groupfooter="slotProps">
        <div class="flex justify-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
    </template>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable v-model:expandedRowGroups="expandedRowGroups" :value="customers" tableStyle="min-width: 50rem"
                expandableRowGroups rowGroupMode="subheader" groupRowsBy="representative.name" @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse"
                sortMode="single" sortField="representative.name" :sortOrder="1">
            <template #groupheader="slotProps">
                <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" class="ml-2" />
                <span class="align-middle ml-2 font-bold leading-normal">{{ slotProps.data.representative.name }}</span>
            </template>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="name" header="Name" style="width: 20%"></Column>
            <Column field="country" header="Country" style="width: 20%">
                <template #body="slotProps">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                        <span>{{ slotProps.data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="width: 20%"></Column>
            <Column field="status" header="Status" style="width: 20%">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                </template>
            </Column>
            <Column field="date" header="Date" style="width: 20%"></Column>
            <template #groupfooter="slotProps">
                <div class="flex justify-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
            </template>
        </DataTable>
        <Toast />
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            expandedRowGroups: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => (this.customers = data));
    },
    methods: {
        onRowGroupExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000 });
        },
        onRowGroupCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000 });
        },
        calculateCustomerTotal(name) {
            let total = 0;

            if (this.customers) {
                for (let customer of this.customers) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        },
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warn';

                case 'renewal':
                    return null;
            }
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable v-model:expandedRowGroups="expandedRowGroups" :value="customers" tableStyle="min-width: 50rem"
                expandableRowGroups rowGroupMode="subheader" groupRowsBy="representative.name" @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse"
                sortMode="single" sortField="representative.name" :sortOrder="1">
            <template #groupheader="slotProps">
                <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" class="ml-2" />
                <span class="align-middle ml-2 font-bold leading-normal">{{ slotProps.data.representative.name }}</span>
            </template>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="name" header="Name" style="width: 20%"></Column>
            <Column field="country" header="Country" style="width: 20%">
                <template #body="slotProps">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                        <span>{{ slotProps.data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="width: 20%"></Column>
            <Column field="status" header="Status" style="width: 20%">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                </template>
            </Column>
            <Column field="date" header="Date" style="width: 20%"></Column>
            <template #groupfooter="slotProps">
                <div class="flex justify-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
            </template>
        </DataTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const customers = ref();
const expandedRowGroups = ref();
const toast = useToast();
const onRowGroupExpand = (event) => {
    toast.add({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000 });
};
const onRowGroupCollapse = (event) => {
    toast.add({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000 });
};
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
            return 'warn';

        case 'renewal':
            return null;
    }
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
...`
            }
        };
    },
    methods: {
        loadDemoData() {
            CustomerService.getCustomersMedium().then((data) => (this.customers = data));
        },
        onRowGroupExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000 });
        },
        onRowGroupCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000 });
        },
        calculateCustomerTotal(name) {
            let total = 0;

            if (this.customers) {
                for (let customer of this.customers) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        },
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warn';

                case 'renewal':
                    return null;
            }
        }
    }
};
</script>
