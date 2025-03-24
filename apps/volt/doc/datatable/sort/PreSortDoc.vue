<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Defining a default <i>sortField</i> and <i>sortOrder</i> displays data as sorted initially in single column sorting. In <i>multiple</i> sort mode, <i>multiSortMeta</i> should be used instead by providing an array of
            <i>DataTableSortMeta</i> objects.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" sortField="price" :sortOrder="-1" pt:table="min-w-200">
                <Column field="code" header="Code" sortable style="width: 20%"></Column>
                <Column field="name" header="Name" sortable style="width: 20%"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price) }}
                    </template>
                </Column>
                <Column field="category" header="Category" sortable style="width: 20%"></Column>
                <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column>
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

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const loadDemoData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="products" sortField="price" :sortOrder="-1" pt:table="min-w-200">
            <Column field="code" header="Code" sortable style="width: 20%"></Column>
            <Column field="name" header="Name" sortable style="width: 20%"></Column>
            <Column field="price" header="Price" :sortable="true">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category" sortable style="width: 20%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/datatable';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const products = ref(null);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
