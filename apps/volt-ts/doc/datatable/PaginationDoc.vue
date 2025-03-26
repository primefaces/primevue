<template>
    <DocSectionText v-bind="$attrs">
        <p>Pagination is enabled by adding <i>paginator</i> property and defining <i>rows</i> per page. Refer to the <PrimeVueNuxtLink to="/paginator">Paginator</PrimeVueNuxtLink> for more information about customizing the paginator.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="customers" paginator :rows="5" pt:table="min-w-200">
                <Column field="name" header="Name" style="width: 25%"></Column>
                <Column field="country.name" header="Country" style="width: 25%">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code}`" style="width: 24px" />
                            <span>{{ data.country.name }}</span>
                        </div>
                    </template>
                </Column>
                <Column field="company" header="Company" style="width: 25%"></Column>
                <Column field="representative.name" header="Representative" style="width: 25%">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                            <span>{{ data.representative.name }}</span>
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref } from 'vue';
import { CustomerService } from '~/service/CustomerService';

const customers = ref(null);

const loadDemoData = () => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="customers" paginator :rows="5" pt:table="min-w-200">
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="country.name" header="Country" style="width: 25%">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="width: 25%"></Column>
            <Column field="representative.name" header="Representative" style="width: 25%">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { CustomerService } from '@/service/CustomerService';
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const customers = ref(null);

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});
<\/script>
`);
</script>
