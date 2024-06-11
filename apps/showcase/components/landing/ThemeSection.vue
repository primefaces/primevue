<template>
    <section class="landing-themes py-20">
        <div class="section-header">Components</div>
        <p class="section-detail">The most complete UI component library for Vue.js based on a design-agnostic infrastructure.</p>
        <div class="themes-main flex mt-16 justify-center px-8 lg:px-20">
            <div class="box overflow-hidden z-10 p-8 table-container">
                <DataTable
                    v-model:selection="selectedCustomers"
                    v-model:filters="filters"
                    :value="customers"
                    :paginator="true"
                    :rows="5"
                    dataKey="id"
                    :rowHover="true"
                    filterDisplay="menu"
                    :loading="loading"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                    :globalFilterFields="['name', 'country.name', 'representative.name', 'status']"
                >
                    <template #header>
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <span class="text-xl font-bold">Customers</span>
                            <IconField class="mt-4 sm:mt-0 w-full sm:w-auto">
                                <InputIcon>
                                    <i class="pi pi-search" />
                                </InputIcon>
                                <InputText v-model="filters['global'].value" placeholder="Search" class="w-full" />
                            </IconField>
                        </div>
                    </template>
                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>
                    <Column selectionMode="multiple" style="width: 3rem"></Column>
                    <Column field="name" header="Name" sortable style="min-width: 14rem">
                        <template #body="{ data }">
                            {{ data.name }}
                        </template>
                    </Column>
                    <Column field="country.name" header="Country" sortable style="min-width: 14rem">
                        <template #body="{ data }">
                            <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${data.country.code}`" style="width: 24px" />
                            <span>{{ data.country.name }}</span>
                        </template>
                    </Column>
                    <Column header="Agent" sortable sortField="representative.name" style="min-width: 14rem">
                        <template #body="{ data }">
                            <div class="flex items-center gap-2">
                                <img :alt="data.representative.name" :src="'https://primefaces.org/cdn/primevue/images/avatar/' + data.representative.image" width="32" />
                                <span>{{ data.representative.name }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="date" header="Date" sortable dataType="date" style="min-width: 8rem">
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                    </Column>
                    <Column field="balance" header="Balance" sortable dataType="numeric" style="min-width: 8rem">
                        <template #body="{ data }">
                            {{ formatCurrency(data.balance) }}
                        </template>
                    </Column>
                    <Column field="status" header="Status" sortable style="min-width: 10rem">
                        <template #body="{ data }">
                            <Tag :value="data.status" :severity="getSeverity(data.status)" class="text-sm font-bold" />
                        </template>
                    </Column>
                    <Column field="activity" header="Activity" sortable style="min-width: 6rem">
                        <template #body="{ data }">
                            <ProgressBar :value="data.activity" :showValue="false" style="height: 7px" />
                        </template>
                    </Column>
                    <Column headerStyle="min-width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                        <template #body>
                            <Button type="button" icon="pi pi-cog" text></Button>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </section>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';

export default {
    data() {
        return {
            customers: null,
            selectedCustomers: null,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
                balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            },
            loading: true
        };
    },
    mounted() {
        CustomerService.getCustomersLarge().then((data) => {
            this.customers = data;
            this.customers.forEach((customer) => (customer.date = new Date(customer.date)));
            this.loading = false;
        });
    },
    methods: {
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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
