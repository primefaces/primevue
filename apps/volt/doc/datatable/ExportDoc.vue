<template>
    <DocSectionText v-bind="$attrs">
        <p>DataTable can export its data to CSV format.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable ref="dt" :value="products" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="text-end pb-4">
                        <Button icon="pi pi-external-link" label="Export" @click="exportCSV()" />
                    </div>
                </template>
                <Column field="code" header="Code" exportHeader="Product Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import Button from '@/volt/button';
import DataTable from '@/volt/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

const products = ref(null);
const dt = ref();
const exportCSV = () => {
    dt.value.exportCSV();
};

const loadDemoData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable ref="dt" :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="text-end pb-4">
                    <Button icon="pi pi-external-link" label="Export" @click="exportCSV()" />
                </div>
            </template>
            <Column field="code" header="Code" exportHeader="Product Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import Button from '@/volt/button';
import DataTable from '@/volt/datatable';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const products = ref(null);
const dt = ref();
const exportCSV = () => {
    dt.value.exportCSV();
};

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
