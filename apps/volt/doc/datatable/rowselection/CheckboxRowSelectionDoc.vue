<template>
    <DocSectionText v-bind="$attrs">
        <p>Specifying <i>selectionMode</i> as <i>multiple</i> on a Column, displays a checkbox inside that column for selection.</p>
        <p>The header checkbox toggles the selection state of the whole dataset by default, when paginator is enabled you may add <i>selectAll</i> property and <i>select-all-change</i> event to only control the selection of visible rows.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable v-model:selection="selectedProducts" :value="products" dataKey="id" pt:table="min-w-200">
                <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
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
const selectedProducts = ref(null);

const loadDemoData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable v-model:selection="selectedProducts" :value="products" dataKey="id" pt:table="min-w-200">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
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
const selectedProducts = ref(null);

onMounted(() => {
     ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
