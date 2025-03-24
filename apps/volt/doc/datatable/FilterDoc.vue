<template>
    <DocSectionText v-bind="$attrs">
        <p>The global filtering searches the data against a single value that is bound to the <i>global</i> key of the <i>filters</i> object. The fields to search against are defined with the <i>globalFilterFields</i>.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
                <template #header>
                    <div class="flex justify-end">
                        <div class="relative">
                            <i class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none end-3 z-1" />
                            <InputText v-model="filters['global'].value" placeholder="Search" />
                        </div>
                    </div>
                </template>
                <template #empty>
                    <div class="p-4">No customers found.</div>
                </template>
                <Column field="name" header="Name" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.name }}
                    </template>
                </Column>
                <Column header="Country" filterField="country.name" style="min-width: 12rem">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code}`" style="width: 24px" />
                            <span>{{ data.country.name }}</span>
                        </div>
                    </template>
                </Column>
                <Column header="Agent" filterField="representative" :showFilterMenu="false" style="min-width: 14rem">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                            <span>{{ data.representative.name }}</span>
                        </div>
                    </template>
                </Column>
                <Column field="status" header="Status" :showFilterMenu="false" style="min-width: 12rem">
                    <template #body="{ data }">
                        <Tag :value="data.status" :severity="getSeverity(data.status)" />
                    </template>
                </Column>
                <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
                    <template #body="{ data }">
                        <i class="pi" :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-400': !data.verified }"></i>
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { CustomerService } from '@/service/CustomerService';
import DataTable from '@/volt/datatable';
import InputText from '@/volt/inputtext';
import Tag from '@/volt/tag';
import { FilterMatchMode } from '@primevue/core/api';
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

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

const loadDemoData = () => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
            <template #header>
                <div class="flex justify-end">
                    <div class="relative">
                        <i class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none end-3 z-1" />
                        <InputText v-model="filters['global'].value" placeholder="Search" />
                    </div>
                </div>
            </template>
            <template #empty>
                <div class="p-4">No customers found.</div>
            </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMenu="false" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="status" header="Status" :showFilterMenu="false" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
            </Column>
            <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
                <template #body="{ data }">
                    <i class="pi" :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-400': !data.verified }"></i>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { CustomerService } from '@/service/CustomerService';
import DataTable from '@/volt/datatable';
import InputText from '@/volt/inputtext';
import Tag from '@/volt/tag';
import { FilterMatchMode } from '@primevue/core/api';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const customers = ref(null);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

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

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});
<\/script>
`);
</script>
