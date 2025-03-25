<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport
            adjusts itself according to the size changes.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />

        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" class="md:w-2/4 w-9/10" maximizable modal pt:content:class="h-80" @show="onShow">
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
    <DocSectionCode :code="code" />
</template>

<script setup>
import { CustomerService } from '@/service/CustomerService';
import Button from '@/volt/button';
import DataTable from '@/volt/datatable';
import Dialog from '@/volt/dialog';
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);
const dialogVisible = ref(false);

const onShow = () => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
};

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />

        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" class="md:w-2/4 w-9/10" maximizable modal pt:content:class="h-80" @show="onShow">
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
import { CustomerService } from '@/service/CustomerService';
import Button from '@/volt/button';
import DataTable from '@/volt/datatable';
import Dialog from '@/volt/dialog';
import Column from 'primevue/column';
import { ref } from 'vue';

const customers = ref(null);
const dialogVisible = ref(false);

const onShow = () => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
};
<\/script>
`);
</script>
