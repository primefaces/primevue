<template>
    <DocSectionText v-bind="$attrs">
        <p>Rows can be fixed during scrolling by enabling the <i>frozenValue</i> property.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable
                :value="customers"
                :frozenValue="lockedCustomers"
                scrollable
                scrollHeight="400px"
                :pt="{
                    table: { style: 'min-width: 50rem' },
                    bodyrow: ({ props }) => ({
                        class: [{ 'font-bold': props.frozenRow }]
                    })
                }"
            >
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="status" header="Status"></Column>
                <Column style="flex: 0 0 4rem">
                    <template #body="{ data, frozenRow, index }">
                        <Button type="button" :icon="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" :disabled="frozenRow ? false : lockedCustomers.length >= 2" text size="small" @click="toggleLock(data, frozenRow, index)" />
                    </template>
                </Column>
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
            lockedCustomers: [
                {
                    id: 5135,
                    name: 'Geraldine Bisset',
                    country: {
                        name: 'France',
                        code: 'fr'
                    },
                    company: 'Bisset Group',
                    status: 'proposal',
                    date: '2019-05-05',
                    activity: 0,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png'
                    }
                }
            ],
            code: {
                basic: `
<DataTable
    :value="customers"
    :frozenValue="lockedCustomers"
    scrollable
    scrollHeight="400px"
    :pt="{
        table: { style: 'min-width: 50rem' },
        bodyrow: ({ props }) => ({
            class: [{ 'font-bold': props.frozenRow }]
        })
    }"
>
    <Column field="name" header="Name"></Column>
    <Column field="country.name" header="Country"></Column>
    <Column field="representative.name" header="Representative"></Column>
    <Column field="status" header="Status"></Column>
    <Column style="flex: 0 0 4rem">
        <template #body="{ data, frozenRow, index }">
            <Button type="button" :icon="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" :disabled="frozenRow ? false : lockedCustomers.length >= 2" text size="small" @click="toggleLock(data, frozenRow, index)" />
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable
            :value="customers"
            :frozenValue="lockedCustomers"
            scrollable
            scrollHeight="400px"
            :pt="{
                table: { style: 'min-width: 50rem' },
                bodyrow: ({ props }) => ({
                    class: [{ 'font-bold': props.frozenRow }]
                })
            }"
        >
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="status" header="Status"></Column>
            <Column style="flex: 0 0 4rem">
                <template #body="{ data, frozenRow, index }">
                    <Button type="button" :icon="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" :disabled="frozenRow ? false : lockedCustomers.length >= 2" text size="small" @click="toggleLock(data, frozenRow, index)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            lockedCustomers: [
                {
                    id: 5135,
                    name: 'Geraldine Bisset',
                    country: {
                        name: 'France',
                        code: 'fr'
                    },
                    company: 'Bisset Group',
                    status: 'proposal',
                    date: '2019-05-05',
                    activity: 0,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png'
                    }
                }
            ]
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    },
    methods: {
        toggleLock(data, frozen, index) {
            if (frozen) {
                this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
                this.customers.push(data);
            } else {
                this.customers = this.customers.filter((c, i) => i !== index);
                this.lockedCustomers.push(data);
            }

            this.customers.sort((val1, val2) => {
                return val1.id < val2.id ? -1 : 1;
            });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable
            :value="customers"
            :frozenValue="lockedCustomers"
            scrollable
            scrollHeight="400px"
            :pt="{
                table: { style: 'min-width: 50rem' },
                bodyrow: ({ props }) => ({
                    class: [{ 'font-bold': props.frozenRow }]
                })
            }"
        >
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="status" header="Status"></Column>
            <Column style="flex: 0 0 4rem">
                <template #body="{ data, frozenRow, index }">
                    <Button type="button" :icon="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" :disabled="frozenRow ? false : lockedCustomers.length >= 2" text size="small" @click="toggleLock(data, frozenRow, index)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();
const lockedCustomers = ref([
    {
        id: 5135,
        name: 'Geraldine Bisset',
        country: {
            name: 'France',
            code: 'fr'
        },
        company: 'Bisset Group',
        status: 'proposal',
        date: '2019-05-05',
        activity: 0,
        representative: {
            name: 'Amy Elsner',
            image: 'amyelsner.png'
        }
    }
]);
const toggleLock = (data, frozen, index) => {
    if (frozen) {
        lockedCustomers.value = lockedCustomers.value.filter((c, i) => i !== index);
        customers.value.push(data);
    }
    else {
        customers.value = customers.value.filter((c, i) => i !== index);
        lockedCustomers.value.push(data);
    }

    customers.value.sort((val1, val2) => {
        return val1.id < val2.id ? -1 : 1;
    });
};

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = data;
    });
});

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
        toggleLock(data, frozen, index) {
            if (frozen) {
                this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
                this.customers.push(data);
            } else {
                this.customers = this.customers.filter((c, i) => i !== index);
                this.lockedCustomers.push(data);
            }

            this.customers.sort((val1, val2) => {
                return val1.id < val2.id ? -1 : 1;
            });
        }
    }
};
</script>
