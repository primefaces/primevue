<template>
    <DocSectionText v-bind="$attrs">
        <p>Rows can be fixed during scrolling by enabling the <i>frozenValue</i> property.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="customers" :frozenValue="lockedCustomers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="status" header="Status"></Column>
                <Column style="flex: 0 0 4rem">
                    <template #body="{ data, frozenRow, index }">
                        <button type="button" :disabled="frozenRow ? null : lockedCustomers.length >= 2" @click="toggleLock(data, frozenRow, index)" class="disabled:opacity-50 enabled:cursor-pointer">
                            <i :class="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" />
                        </button>
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
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);
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
    } else {
        customers.value = customers.value.filter((c, i) => i !== index);
        lockedCustomers.value.push(data);
    }

    customers.value.sort((val1, val2) => {
        return val1.id < val2.id ? -1 : 1;
    });
};

const loadDemoData = () => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="customers" :frozenValue="lockedCustomers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="status" header="Status"></Column>
            <Column style="flex: 0 0 4rem">
                <template #body="{ data, frozenRow, index }">
                    <button type="button" :disabled="frozenRow ? null : lockedCustomers.length >= 2" @click="toggleLock(data, frozenRow, index)" class="disabled:opacity-50 enabled:cursor-pointer">
                        <i :class="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" />
                    </button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { CustomerService } from '@/service/CustomerService';
import Button from '@/volt/button';
import DataTable from '@/volt/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);
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
    } else {
        customers.value = customers.value.filter((c, i) => i !== index);
        lockedCustomers.value.push(data);
    }

    customers.value.sort((val1, val2) => {
        return val1.id < val2.id ? -1 : 1;
    });
};

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});
<\/script>
`);
</script>
