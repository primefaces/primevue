<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Rows are grouped with the <i>groupRowsBy</i> property. When <i>rowGroupMode</i> is set as <i>subheader</i>, a header and footer can be displayed for each group. The content of a group header is provided with <i>groupheader</i> and footer
            with <i>groupfooter</i> slots.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
                <template #groupheader="slotProps">
                    <div class="flex items-center gap-2">
                        <img :alt="slotProps.data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.data.representative.image}`" width="32" style="vertical-align: middle" />
                        <span>{{ slotProps.data.representative.name }}</span>
                    </div>
                </template>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="name" header="Name" style="min-width: 200px"></Column>
                <Column field="country" header="Country" style="min-width: 200px">
                    <template #body="slotProps">
                        <div class="flex items-center gap-2">
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
            code: {
                basic: `
<DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single"
        sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
    <Column field="representative.name" header="Representative"></Column>
    <Column field="name" header="Name" style="min-width: 200px"></Column>
    <Column field="country" header="Country" style="min-width: 200px">
        <template #body="slotProps">
            <div class="flex items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
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
        <div class="flex items-center gap-2">
            <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" />
            <span>{{ slotProps.data.representative.name }}</span>
        </div>
    </template>
    <template #groupfooter="slotProps">
        <div class="flex justify-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
    </template>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single"
                sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="representative.name" header="Representative"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country" header="Country" style="min-width: 200px">
                <template #body="slotProps">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
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
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" />
                    <span>{{ slotProps.data.representative.name }}</span>
                </div>
            </template>
            <template #groupfooter="slotProps">
                <div class="flex justify-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
            </template>
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
        CustomerService.getCustomersMedium().then((data) => (this.customers = data));
    },
    methods: {
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
        <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single"
                sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="representative.name" header="Representative"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country" header="Country" style="min-width: 200px">
                <template #body="slotProps">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
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
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" />
                    <span>{{ slotProps.data.representative.name }}</span>
                </div>
            </template>
            <template #groupfooter="slotProps">
                <div class="flex justify-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
            </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

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
