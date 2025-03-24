<template>
    <DocSectionText v-bind="$attrs">
        <p>Particular rows and cells can be styled based on conditions. The <i>rowClass</i> receives a row data as a parameter to return a style class for a row whereas cells are customized using the <i>body</i> template.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" pt:table="min-w-200">
                <Column field="code" header="Code"></Column>
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
import DataTable from '@/volt/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

const products = ref(null);

const rowClass = (data) => {
    return [{ '!bg-primary !text-primary-contrast': data.category === 'Fitness' }];
};

const rowStyle = (data) => {
    if (data.quantity === 0) {
        return { fontWeight: 'bold', fontStyle: 'italic' };
    }
};

const loadDemoData = () => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" pt:table="min-w-200">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/datatable';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const products = ref(null);

const rowClass = (data) => {
    return [{ '!bg-primary !text-primary-contrast': data.category === 'Fitness' }];
};

const rowStyle = (data) => {
    if (data.quantity === 0) {
        return { fontWeight: 'bold', fontStyle: 'italic' };
    }
};

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
