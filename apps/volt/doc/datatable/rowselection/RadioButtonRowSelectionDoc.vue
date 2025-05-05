<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Specifying <i>selectionMode</i> as <i>single</i> on a Column, displays a radio button inside that column for selection. By default, row clicks also trigger selection, set <i>selectionMode</i> of DataTable to <i>radiobutton</i> to only
            trigger selection using the radio buttons.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
                <Column selectionMode="single" headerStyle="width: 3rem"></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref } from 'vue';
import { ProductService } from '~/service/ProductService';

const products = ref(null);
const selectedProduct = ref(null);

const loadDemoData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="single" headerStyle="width: 3rem"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const products = ref(null);
const selectedProduct = ref(null);

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
