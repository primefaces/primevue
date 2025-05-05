<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>removableSort</i> is present, the third click removes the sorting from the column.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" removableSort pt:table="min-w-200">
                <Column field="code" header="Code" sortable style="width: 25%"></Column>
                <Column field="name" header="Name" sortable style="width: 25%"></Column>
                <Column field="category" header="Category" sortable style="width: 25%"></Column>
                <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
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

const loadDemoData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="products" removableSort pt:table="min-w-200">
            <Column field="code" header="Code" sortable style="width: 25%"></Column>
            <Column field="name" header="Name" sortable style="width: 25%"></Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const products = ref(null);

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
