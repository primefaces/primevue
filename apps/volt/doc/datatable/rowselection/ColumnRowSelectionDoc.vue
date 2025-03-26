<template>
    <DocSectionText v-bind="$attrs">
        <p>Row selection with an element inside a column is implemented with templating.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" pt:table="min-w-200">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column class="w-24">
                    <template #body="{ data }">
                        <Button icon="pi pi-search" @click="selectRow(data)" severity="secondary" rounded></Button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import { ProductService } from '~/service/ProductService';

const products = ref(null);
const toast = useToast();
const selectRow = (data) => {
    toast.add({ severity: 'info', summary: data.name, detail: data.inventoryStatus + ' | $' + data.price, life: 3000 });
};

const loadDemoData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="products" pt:table="min-w-200">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column class="w-24">
                <template #body="{ data }">
                    <Button icon="pi pi-search" @click="selectRow(data)" severity="secondary" rounded></Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/DataTable.vue';
import Button from '@/volt/Button.vue';
import Column from 'primevue/column';
import { useToast } from 'primevue/usetoast';
import { ref, onMounted } from 'vue';

const products = ref(null);
const toast = useToast();
const selectRow = (data) => {
    toast.add({ severity: 'info', summary: data.name, detail: data.inventoryStatus + ' | $' + data.price, life: 3000 });
};

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
