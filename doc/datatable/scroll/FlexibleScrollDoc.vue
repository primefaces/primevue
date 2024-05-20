<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport
            adjusts itself according to the size changes.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />

        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }" @show="onShow">
            <DataTable :value="customers" scrollable scrollHeight="flex" tableStyle="min-width: 50rem">
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
            </template>
        </Dialog>
    </div>
    <DocSectionCode :code="code" :service="['CustomerService']" />
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            dialogVisible: false,
            code: {
                basic: `
<Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />
<Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
    <DataTable :value="customers" scrollable scrollHeight="flex" tableStyle="min-width: 50rem">
        <Column field="name" header="Name"></Column>
        <Column field="country.name" header="Country"></Column>
        <Column field="representative.name" header="Representative"></Column>
        <Column field="company" header="Company"></Column>
    </DataTable>
    <template #footer>
        <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
    </template>
</Dialog>
`,
                options: `
<template>
    <div class="card">
        <Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />

        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
            <DataTable :value="customers" scrollable scrollHeight="flex" tableStyle="min-width: 50rem">
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            dialogVisible: false
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />

        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
            <DataTable :value="customers" scrollable scrollHeight="flex" tableStyle="min-width: 50rem">
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();
const dialogVisible = ref(false);

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
        onShow() {
            CustomerService.getCustomersMedium().then((data) => {
                this.customers = data;
            });
        }
    }
};
</script>
