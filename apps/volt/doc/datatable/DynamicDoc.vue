<template>
    <DocSectionText v-bind="$attrs">
        <p>Columns can be created programmatically.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" pt:table="min-w-200">
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
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
const columns = ref([
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
]);

const loadDemoData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="products" pt:table="min-w-200">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const products = ref(null);
const columns = ref([
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
]);

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
