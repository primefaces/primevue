<template>
    <DocSectionText v-bind="$attrs">
        <p>A custom equals filter that checks for exact case sensitive value is registered and defined as a match mode of a column filter.</p>
    </DocSectionText>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading">
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    <img :alt="data.country.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code} mr-2`" width="18" />
                    <span>{{ data.country.name }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by country - ${filterModel.matchMode}`" />
                </template>
            </Column>
        </DataTable>
    </div>
    <DocSectionCode :code="code" :service="['CustomerService']" />
</template>

<script>
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterService } from 'primevue/api';

const YOUR_FILTER = 'YOUR FILTER';

export default {
    data() {
        return {
            customers: null,
            filters: {
                name: { value: null, matchMode: YOUR_FILTER },
                'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH }
            },
            matchModeOptions: [
                { label: 'Your Equals', value: YOUR_FILTER },
                { label: 'Starts With', value: FilterMatchMode.STARTS_WITH }
            ],
            loading: true,
            code: {
                basic: `
<DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading">
    <template #empty> No customers found. </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
        <template #body="{ data }">
            {{ data.name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`" />
        </template>
    </Column>
    <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
        <template #body="{ data }">
            <img :alt="data.country.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code} mr-2\`" width="18" />
            <span>{{ data.country.name }}</span>
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`" />
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading">
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    <img :alt="data.country.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code} mr-2\`" width="18" />
                    <span>{{ data.country.name }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterService } from 'primevue/api';

const YOUR_FILTER = 'YOUR FILTER';

export default {
    data() {
        return {
            customers: null,
            filters: {
                name: { value: null, matchMode: YOUR_FILTER },
                'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH }
            },
            matchModeOptions: [
                { label: 'Your Equals', value: YOUR_FILTER },
                { label: 'Starts With', value: FilterMatchMode.STARTS_WITH }
            ],
            loading: true
        };
    },
    mounted() {
        CustomerService.getCustomersLarge().then((data) => {
            this.customers = data;
            this.loading = false;
        });

        FilterService.register(YOUR_FILTER, (value, filter) => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString() === filter.toString();
        });
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading">
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    <img :alt="data.country.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code} mr-2\`" width="18" />
                    <span>{{ data.country.name }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterService } from 'primevue/api';


onMounted(() => {
    CustomerService.getCustomersLarge().then((data) => {
        customers.value = data; 
        loading.value = false;
    });

    FilterService.register(YOUR_FILTER.value, (value, filter) => {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value.toString() === filter.toString();
    });
});

const YOUR_FILTER = ref('YOUR FILTER');
const customers = ref();
const filters = ref({
    'name': {value: null, matchMode: YOUR_FILTER.value},
    'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
});
const matchModeOptions = ref([
    {label: 'Your Equals', value: YOUR_FILTER.value},
    {label: 'Starts With', value: FilterMatchMode.STARTS_WITH}
]);
const loading = ref(true);

<\/script>
`
            }
        };
    },
    mounted() {
        CustomerService.getCustomersLarge().then((data) => {
            this.customers = data;
            this.loading = false;
        });

        FilterService.register(YOUR_FILTER, (value, filter) => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString() === filter.toString();
        });
    }
};
</script>
