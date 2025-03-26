<template>
    <DocSectionText v-bind="$attrs">
        <p>Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" pt:table="min-w-200">
                <template #header>
                    <div style="text-align: left">
                        <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle" display="chip" placeholder="Select Columns" />
                    </div>
                </template>
                <Column field="code" header="Code" />
                <Column v-for="(col, index) of selectedColumns" :key="col.field + '_' + index" :field="col.field" :header="col.header"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/DataTable.vue';
import MultiSelect from '@/volt/MultiSelect.vue';
import Column from 'primevue/column';
import { ref } from 'vue';

const columns = ref([
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
]);
const selectedColumns = ref(columns.value);
const products = ref(null);
const onToggle = (val) => {
    selectedColumns.value = columns.value.filter((col) => val.includes(col));
};

const loadDemoData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="products" pt:table="min-w-200">
            <template #header>
                <div style="text-align: left">
                    <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle" display="chip" placeholder="Select Columns" />
                </div>
            </template>
            <Column field="code" header="Code" />
            <Column v-for="(col, index) of selectedColumns" :key="col.field + '_' + index" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/DataTable.vue';
import MultiSelect from '@/volt/MultiSelect.vue';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const columns = ref([
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
]);
const selectedColumns = ref(columns.value);
const products = ref(null);
const onToggle = (val) => {
    selectedColumns.value = columns.value.filter((col) => val.includes(col));
};

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data))
});
<\/script>
`);
</script>
